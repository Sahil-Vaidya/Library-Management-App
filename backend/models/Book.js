import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  publishedYear: { type: Number, required: true },
  status: { type: String, enum: ["Available", "Issued"], default: "Available" }
}, { timestamps: true });

export default mongoose.model("Book", bookSchema);


///schema of managing books in library