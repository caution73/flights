const { Schema, model } = require("mongoose");

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
      default: "AUS"
    },
    arrival: { type: Date, default: Date.now()}
  },
  { timestamps: true }
);

const Destination = model("Destination", destinationSchema);

//make this exportable to be accessed in `app.js`
module.exports = Destination;
