const { default: mongoose } = require("mongoose");
const { MONGO_URI } = require("./config");


exports.connectToMongo = () => {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });
}