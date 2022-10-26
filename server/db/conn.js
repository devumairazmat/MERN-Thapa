// Mongoose
const mongoose = require("mongoose");

// Connect To mongo Db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connecting to DB & App listening on port", process.env.PORT);
  })
  .catch((error) => {
    console.log(error);
  });
