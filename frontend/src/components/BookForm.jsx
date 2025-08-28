import React from "react";
import { useState, useEffect } from "react";
import API from "../Api";

export default function BookForm({ fetchBooks, editingBook, setEditingBook }) {
  const [form, setForm] = useState({ title: "", author: "", publishedYear: "", status: "Available" });

  useEffect(() => {
    if (editingBook) setForm(editingBook);
  }, [editingBook]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.title || !form.author || !form.publishedYear) return alert("All fields required");

    if (editingBook) {
      await API.put(`/books/${editingBook._id}`, form);
      setEditingBook(null);
    } else {
      await API.post("/books", form);
    }
    setForm({ title: "", author: "", publishedYear: "", status: "Available" });
    fetchBooks();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 items-center justify-between">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="📖 Title"
        className="flex-1 p-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
      />
      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="✍️ Author"
        className="flex-1 p-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
      />
      <input
        type="number"
        name="publishedYear"
        value={form.publishedYear}
        onChange={handleChange}
        placeholder="📅 Year"
        className="w-32 p-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-32 p-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-400"
      >
        <option>Available</option>
        <option>Issued</option>
      </select>
      <button
        type="submit"
        className="px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        {editingBook ? "Update" : "➕ Add Book"}
      </button>
    </form>
  );
}
