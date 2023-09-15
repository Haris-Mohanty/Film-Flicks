//******* ERROR MIDDLEWARE || NEXT Function *********/
const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  const defaultErrors = {
    statusCode: 500,
    message: "Something went wrong!",
  };
  res.status(500).send({
    message: "Something went wrong!",
    err,
  });
  //required field error
  if (err.name === "ValidationError") {
  }
};

export default errorMiddleware;
