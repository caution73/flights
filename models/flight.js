const { Schema, model } = require("mongoose");

const date = new Date

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
    },
    flightNo: {
      type: Number,
      required: true,
      unique: true,
      min: 10,
      max: 9999,
    },
    departs: { type: Date, default: date },
    airport: { type: String, default: "SAN" },
    destination: [
      {
        type: Schema.Types.ObjectId,
        ref: "Destination", // This should be equal to the model's name.
      },
    ],
  },
  { timestamps: true }
);

const Flight = model("Flight", flightSchema);

//make this exportable to be accessed in `app.js`
module.exports = Flight;
