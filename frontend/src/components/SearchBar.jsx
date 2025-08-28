import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search by title or author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mt-4 w-full p-3 rounded-xl bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
    />
  );
}

