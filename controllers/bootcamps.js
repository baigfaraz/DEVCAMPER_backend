// @desc      Get all Bootcamps
// @routes    Get/api/v1/bootcamps
// @access    public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ succes: true, msg: 'Show all bootcams' });
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
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: 'craete new bootcam' });
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
