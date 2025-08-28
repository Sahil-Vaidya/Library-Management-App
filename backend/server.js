import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import Book from "./models/Book.js"; 
import { faker } from "@faker-js/faker";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5000;


const populateBooks = async () => {
  try {
    
    // await Book.deleteMany({});
    // console.log("🗑️ Existing books deleted.");

    
    const books = [];
    for (let i = 0; i < 1000; i++) {
      books.push({
        title: faker.lorem.words(3),
        author: faker.person.fullName(),
        publishedYear: faker.number.int({ min: 1950, max: 2025 }), 
        status: faker.helpers.arrayElement(["Available", "Issued"]), 
      });
    }

    await Book.insertMany(books);
    console.log("✅ 1000 books added to the database!");
  } catch (error) {
    console.error("❌ Error populating books:", error);
  }
};


populateBooks();

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));











//without population code

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import bookRoutes from "./routes/bookRoutes.js";


// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());


// app.use("/api/books", bookRoutes);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));