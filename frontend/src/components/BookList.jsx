import React from "react";
import API from "../Api";

export default function BookList({ books, fetchBooks, setEditingBook }) {
  const handleDelete = async id => {
    if (window.confirm("Delete this book?")) {
      await API.delete(`/books/${id}`);
      fetchBooks();
    }
  };

  return (
    <div className="backdrop-blur-lg bg-gray-800/60 border border-gray-700 rounded-2xl shadow-xl p-6 mt-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-700">
            <th className="p-3">Title</th>
            <th className="p-3">Author</th>
            <th className="p-3">Year</th>
            <th className="p-3">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b._id} className="hover:bg-gray-700/50 transition">
              <td className="p-3 font-medium">{b.title}</td>
              <td className="p-3">{b.author}</td>
              <td className="p-3">{b.publishedYear}</td>
              <td className={`p-3 font-semibold ${b.status === "Available" ? "text-green-400" : "text-red-400"}`}>
                {b.status}
              </td>
              <td className="p-3 text-center space-x-2">
                <button
                  onClick={() => setEditingBook(b)}
                  className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-md transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(b._id)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition"
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
          {books.length === 0 && (
            <tr>
              <td colSpan="5" className="p-5 text-center text-gray-500 italic">
                No books found 📭
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
