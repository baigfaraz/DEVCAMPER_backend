const Bootcamp = require('../models/Bootcamp');

// @desc      Get all Bootcamps
// @routes    Get/api/v1/bootcamps
// @access    public
exports.getBootcamps = async(req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
  
    res.status(200).json({
      succes: true,
      data: bootcamps
    });
  } catch (error) {
   res.status(400).json({ succes: false });
  }
};

// @desc      Get single Bootcamps
// @routes    Get/api/v1/bootcamps/:id
// @access    public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: `Get bootcams ${req.params.id}` });
};

// @desc      Create new Bootcamps
// @routes    POST/api/v1/bootcamps
// @access    private
exports.createBootcamp = async (req, res, next) => {
 try {
   const bootcamp = await Bootcamp.create(req.body);
 
   res.status(201).json({
     succes: true,
     data: bootcamp
   });
 } catch (error) {
  res.status(400).json({ succes: false });
 }
};

// @desc      Update all Bootcamps
// @routes    PUT/api/v1/bootcamps/:id
// @access    private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: `Update bootcam ${req.params.id}` });
};

// @desc      Delete all Bootcamps
// @routes    Delete/api/v1/bootcamps/:id
// @access    private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: `Delete bootcam ${req.params.id}` });
};
