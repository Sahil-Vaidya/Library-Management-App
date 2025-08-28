import React, { useState, useEffect } from "react";
import API from "./Api";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";  

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [editingBook, setEditingBook] = useState(null);
  const [user, setUser] = useState(null);

  const fetchBooks = async () => {
    const { data } = await API.get(`/books?search=${search}`);
    setBooks(data);
  };

  useEffect(() => { fetchBooks(); }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 flex flex-col items-center">
      <div className="max-w-5xl w-full p-6">
        
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            Library Manager Assignment
          </h1>
          <Login setUser={setUser} /> 
        </div>

        
        <div className="backdrop-blur-lg bg-gray-800/60 border border-gray-700 rounded-2xl shadow-xl p-6 mb-6">
          <BookForm fetchBooks={fetchBooks} editingBook={editingBook} setEditingBook={setEditingBook} />
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        
        
        <BookList books={books} fetchBooks={fetchBooks} setEditingBook={setEditingBook} />
      </div>
    </div>
  );
}

export default App;
