"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlog() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    excerpt: "",
    imageUrl: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📝 New Blog Added:", formData);
    alert("✅ Blog added successfully!");
    router.push("/admin/blog");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div
        className="w-full  bg-white rounded-xl shadow-lg overflow-hidden"
        style={{ margin: "50px" }}
      >
        {/* Header */}
        <div className="bg-green-700 text-white text-center py-4">
          <h3 className="text-2xl font-semibold">Add New Blog</h3>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block font-semibold text-gray-700 mb-1">
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Author */}
            <div>
              <label htmlFor="author" className="block font-semibold text-gray-700 mb-1">
                Author Name
              </label>
              <input
                type="text"
                id="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter author name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block font-semibold text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block font-semibold text-gray-700 mb-1">
                Excerpt (Short Description)
              </label>
              <textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows="3"
                placeholder="Write a short summary of your blog..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="imageUrl" className="block font-semibold text-gray-700 mb-1">
                Image URL (Paste Image Link)
              </label>
              <input
                type="url"
                id="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Paste image link here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* OR Image Upload */}
            <div>
              <p className="text-center my-2 text-gray-500">— or —</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-3 rounded-lg shadow-md w-full h-52 object-cover"
                />
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => router.push("/admin/blog")}
                className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              >
                Save Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
