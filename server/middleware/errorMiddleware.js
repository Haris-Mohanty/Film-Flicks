//******* ERROR MIDDLEWARE || NEXT Function *********/
const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  const defaultErrors = {
    statusCode: 500,
    message: err,
  };

  //required field error
  if (err.name === "ValidationError") {
    defaultErrors.statusCode = 422;
    defaultErrors.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }
  //Dulicate error
  if(err.code && err.code===11000){
    defaultErrors.statusCode=400;

  }


  res.status(defaultErrors.statusCode).json({
    message: defaultErrors.message,
  });
};

export default errorMiddleware;
