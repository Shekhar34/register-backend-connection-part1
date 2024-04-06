const errorMiddleware= (err, req, res, next) =>{
    const status=err.status || 500
    const message =err.message || "backend error";
    const extradetails=err.extradetails || "error from backend";

    // if (res.headersSent) {
    //   return next(err)
    // }
    console.log(Error);
    res.status(status).json({message,extradetails});
    // res.render('error', { error: err })
  }

  module.exports=errorMiddleware