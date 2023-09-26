export const newBookings = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Error in movie booking API!",
      err,
    });
  }
};
