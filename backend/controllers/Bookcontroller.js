import Book from "../models/Book.js";

// Create a new book
export const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, status } = req.body;
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const book = await Book.create({ title, author, publishedYear, status });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all books
export const getBooks = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query = {
        $or: [
          { title: new RegExp(search, "i") },
          { author: new RegExp(search, "i") }
        ]
      };
    }
    const books = await Book.find(query).sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update book
export const updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete book
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
