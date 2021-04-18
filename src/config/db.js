const mongoose = require("mongoose");
const db =
  "mongodb+srv://joblisting:vV8spiEdMcZaYy0G@lvcluster.bdqqe.mongodb.net/JobsDB?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    console.log("Connecting to Database...");
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
