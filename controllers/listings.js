const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken:mapToken});

module.exports.index =  async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });  
}

module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs");
  };

  module.exports.showListing = async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if (!listing) throw new ExpressError(404, "Listing Not Found");
    if(!listing){
      req.flash("error","Listing you requested for doesn't exist");
      res.direct("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
  };

  module.exports.createListing = async(req,res,next)=>{
      //let{title,description,image,price,country,location} = req.body;
      let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();

      let url = req.file.path;
      let filename = req.file.filename;
      const newListing = new Listing (req.body.listing);
      newListing.owner = req.user._id;
      newListing.image = {url,filename};

      newListing.geometry = response.body.features[0].geometry;

      let savedListing = await newListing.save();
      console.log(savedListing);
      req.flash("success","New Listing Created!");
      res.redirect("/listings");
    
  };

  module.exports.renderEditform = async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    //if (!listing) throw new ExpressError(404, "Listing Not Found");
    if(!listing){
      req.flash("error","Listing you requested for doesn't exist");
      return res.redirect("/listings");
    }
    let originalImageUrl = listing.image ? listing.image.url : "/images/default.jpg"; 
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_150,h_100,c_fill");


    res.render("listings/edit.ejs", { listing,originalImageUrl });
  };
   
  module.exports.updateListing = async (req, res, next) => {
    let { id } = req.params;
    
    // Fetch updated location from the form
    let updatedData = { ...req.body.listing };

    // If location is updated, fetch new geometry
    if (req.body.listing.location) {
        let response = await geocodingClient.forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
        }).send();

        updatedData.geometry = response.body.features[0].geometry;
    }

    // Update listing in the database
    let listing = await Listing.findByIdAndUpdate(id, updatedData, { new: true });

    // If a new image is uploaded, update the image field
    if (req.file) {
      let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};



  module.exports.destroyListing = async (req, res, next) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) throw new ExpressError(404, "Listing Not Found");
    req.flash("success","New listing Deleted!");
    res.redirect("/listings");
  };