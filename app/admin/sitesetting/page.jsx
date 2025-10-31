"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">⚙️ Site Settings</h2>
        <p className="text-muted">Manage branding, homepage, and featured sections</p>
      </div>

      <form onSubmit={handleSubmit} className="settings-form">
        {/* Branding */}
        <div className="card shadow-sm mb-4 border-0">
          <div className="card-header bg-success text-white fw-semibold">
            🏷️ Branding
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Site Name</label>
                <input
                  type="text"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter website name"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter tagline"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Footer Text</label>
                <input
                  type="text"
                  name="footerText"
                  value={formData.footerText}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter footer text"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Logo Upload</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={(e) => handleFileChange(e, "logo")}
                />
                {logoPreview && (
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="mt-3 rounded shadow-sm"
                    style={{ height: "60px" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Home Banner */}
        <div className="card shadow-sm mb-4 border-0">
          <div className="card-header bg-success text-white fw-semibold">
            🏞️ Home Banner
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Banner Title</label>
                <input
                  type="text"
                  name="bannerTitle"
                  value={formData.bannerTitle}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter banner title"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Banner Subtitle</label>
                <input
                  type="text"
                  name="bannerSubtitle"
                  value={formData.bannerSubtitle}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter subtitle"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Button Text</label>
                <input
                  type="text"
                  name="bannerButtonText"
                  value={formData.bannerButtonText}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. Explore Now"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Button Link</label>
                <input
                  type="url"
                  name="bannerButtonLink"
                  value={formData.bannerButtonLink}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="https://example.com"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Banner Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={(e) => handleFileChange(e, "banner")}
                />
                {bannerPreview && (
                  <img
                    src={bannerPreview}
                    alt="Banner Preview"
                    className="mt-3 rounded shadow-sm w-100"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="card shadow-sm mb-4 border-0">
          <div className="card-header bg-success text-white fw-semibold">
            🗂️ Categories
          </div>
          <div className="card-body">
            <div className="row g-3">
              {["category1", "category2", "category3"].map((cat, i) => (
                <div className="col-md-4" key={cat}>
                  <label className="form-label">Category {i + 1}</label>
                  <input
                    type="text"
                    name={cat}
                    value={formData[cat]}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={`Enter category ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Locations */}
        <div className="card shadow-sm mb-4 border-0">
          <div className="card-header bg-success text-white fw-semibold">
            📍 Featured Locations
          </div>
          <div className="card-body">
            <div className="row g-3">
              {["location1", "location2", "location3"].map((loc, i) => (
                <div className="col-md-4" key={loc}>
                  <label className="form-label">Location {i + 1}</label>
                  <input
                    type="text"
                    name={loc}
                    value={formData[loc]}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={`Enter location ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success px-5 py-2 shadow">
            💾 Save All Settings
          </button>
        </div>
      </form>
    </div>
  );
}
