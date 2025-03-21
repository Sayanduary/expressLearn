import mongoose from "mongoose";

// Define a schema for a "movies" collection
const MoviesSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Types.Decimal128,
    required: true,
    validate: v => parseFloat(v.toString()) >= 10,  // Ensure it's a valid number
  },
  genre: { type: [String] },  // Array of Strings
  isActive: { type: Boolean, default: true },
  comments: [
    {
      value: { type: String, required: true },
      published: { type: Date, default: Date.now },
    },
  ],
});

// Create a model for the "movies" collection using the schema
const MovieModels = mongoose.model("Movie", MoviesSchema);

const insertManyDoc = async () => {
  try {
    // Creating multiple documents
    const movies = [
      {
        name: "Extraction",
        ratings: 4,
        money: mongoose.Types.Decimal128.fromString("60000"),
        genre: ["Action"],
        isActive: true,
        comments: [{ value: "That was an amazing movie" }],
      },
      {
        name: "John Wick",
        ratings: 5,
        money: mongoose.Types.Decimal128.fromString("60000"),
        genre: ["Action"],
        isActive: true,
        comments: [{ value: "That was an amazing movie" }],
      },
      {
        name: "The Conjuring",
        ratings: 4,
        money: mongoose.Types.Decimal128.fromString("60000"),
        genre: ["Horror"],
        isActive: true,
        comments: [{ value: "That was an amazing movie" }],
      },
      {
        name: "Migration",
        ratings: 4,
        money: mongoose.Types.Decimal128.fromString("60000"),
        genre: ["Animation"],  // Corrected typo "Annimation"
        isActive: true,
        comments: [{ value: "That was an amazing movie" }],
      },
      {
        name: "Avengers",
        ratings: 4,
        money: mongoose.Types.Decimal128.fromString("60000"),
        genre: ["Action", "Adventure"],  // Proper array format
        isActive: true,
        comments: [{ value: "That was an amazing movie" }],
      },
    ];

    const result = await MovieModel.insertMany(movies);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};







export { MovieModels, insertManyDoc };
