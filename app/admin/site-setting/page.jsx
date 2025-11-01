"use client";
import { useState } from "react";
import Sidebar from "../../components/ui/sidebar";

export default function SiteSettingsPage() {
  const [formData, setFormData] = useState({
    siteName: "",
    tagline: "",
    footerText: "",
    bannerTitle: "",
    bannerSubtitle: "",
    bannerButtonText: "",
    bannerButtonLink: "",
    category1: "",
    category2: "",
    category3: "",
    location1: "",
    location2: "",
    location3: "",
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === "logo") setLogoPreview(reader.result);
        else setBannerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved settings:", formData);
    alert("✅ Settings updated successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-700">⚙️ Site Settings</h2>
          <p className="text-gray-600 mt-1">
            Manage branding, homepage, and featured sections
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 max-w-8xl mx-auto"
        >
          {/* Branding */}
          <div className="bg-white rounded-2xl shadow-md">
            <div className="bg-green-700 text-white px-6 py-3 rounded-t-2xl font-semibold">
              🏷️ Branding
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Site Name</label>
                <input
                  type="text"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleChange}
                  placeholder="Enter website name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleChange}
                  placeholder="Enter tagline"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Footer Text</label>
                <input
                  type="text"
                  name="footerText"
                  value={formData.footerText}
                  onChange={handleChange}
                  placeholder="Enter footer text"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Logo Upload</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "logo")}
                  className="w-full border rounded-lg px-3 py-2 file:mr-3 file:py-2 file:px-3 file:border-0 file:rounded-md file:bg-green-600 file:text-white hover:file:bg-green-700"
                />
                {logoPreview && (
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="mt-3 h-14 rounded-lg shadow-md object-contain"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Home Banner */}
          <div className="bg-white rounded-2xl shadow-md">
            <div className="bg-green-700 text-white px-6 py-3 rounded-t-2xl font-semibold">
              🏞️ Home Banner
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Banner Title</label>
                <input
                  type="text"
                  name="bannerTitle"
                  value={formData.bannerTitle}
                  onChange={handleChange}
                  placeholder="Enter banner title"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Banner Subtitle</label>
                <input
                  type="text"
                  name="bannerSubtitle"
                  value={formData.bannerSubtitle}
                  onChange={handleChange}
                  placeholder="Enter subtitle"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Button Text</label>
                <input
                  type="text"
                  name="bannerButtonText"
                  value={formData.bannerButtonText}
                  onChange={handleChange}
                  placeholder="e.g. Explore Now"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Button Link</label>
                <input
                  type="url"
                  name="bannerButtonLink"
                  value={formData.bannerButtonLink}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-gray-800">Banner Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "banner")}
                  className="w-full border rounded-lg px-3 py-2 file:mr-3 file:py-2 file:px-3 file:border-0 file:rounded-md file:bg-green-600 file:text-white hover:file:bg-green-700"
                />
                {bannerPreview && (
                  <img
                    src={bannerPreview}
                    alt="Banner Preview"
                    className="mt-3 rounded-lg shadow-md w-full h-48 object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-md">
            <div className="bg-green-700 text-white px-6 py-3 rounded-t-2xl font-semibold">
              🗂️ Categories
            </div>
            <div className="p-6 grid md:grid-cols-3 gap-6">
              {["category1", "category2", "category3"].map((cat, i) => (
                <div key={cat}>
                  <label className="block text-sm font-medium mb-2 text-gray-800">
                    Category {i + 1}
                  </label>
                  <input
                    type="text"
                    name={cat}
                    value={formData[cat]}
                    onChange={handleChange}
                    placeholder={`Enter category ${i + 1}`}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Featured Locations */}
          <div className="bg-white rounded-2xl shadow-md">
            <div className="bg-green-700 text-white px-6 py-3 rounded-t-2xl font-semibold">
              📍 Featured Locations
            </div>
            <div className="p-6 grid md:grid-cols-3 gap-6">
              {["location1", "location2", "location3"].map((loc, i) => (
                <div key={loc}>
                  <label className="block text-sm font-medium mb-2 text-gray-800">
                    Location {i + 1}
                  </label>
                  <input
                    type="text"
                    name={loc}
                    value={formData[loc]}
                    onChange={handleChange}
                    placeholder={`Enter location ${i + 1}`}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl shadow-md font-semibold transition-all"
            >
              💾 Save All Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
