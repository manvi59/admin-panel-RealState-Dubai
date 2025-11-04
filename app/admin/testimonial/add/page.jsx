"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTestimonial() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
    rating: "",
    imageUrl: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  // Handle text change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("⭐ New Testimonial Added:", formData);
    alert("✅ Testimonial added successfully!");
    router.push("/admin/testimonial");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div
        className="w-full  bg-white rounded-xl shadow-lg overflow-hidden"
        style={{ margin: "50px" }}
      >
        {/* Header */}
        <div className="bg-green-700 text-white text-center py-4">
          <h3 className="text-2xl font-semibold">Add New Testimonial</h3>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-gray-800 mb-1"
              >
                User Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter user name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block font-semibold text-gray-800 mb-1"
              >
                User Role (e.g., Buyer, Investor)
              </label>
              <input
                type="text"
                id="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Enter user role"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Testimonial Text */}
            <div>
              <label
                htmlFor="text"
                className="block font-semibold text-gray-800 mb-1"
              >
                Testimonial Text
              </label>
              <textarea
                id="text"
                value={formData.text}
                onChange={handleChange}
                rows="4"
                placeholder="Write user feedback..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            {/* Rating */}
            <div>
              <label
                htmlFor="rating"
                className="block font-semibold text-gray-800 mb-1"
              >
                Rating (1 to 5)
              </label>
              <select
                id="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select rating</option>
                {[1, 2, 3, 4, 5].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="imageUrl"
                className="block font-semibold text-gray-800 mb-1"
              >
                Image URL (Paste Link)
              </label>
              <input
                type="url"
                id="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Paste user image link"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* OR Upload Image */}
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
                onClick={() => router.push("/admin/testimonial")}
                className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              >
                Save Testimonial
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
