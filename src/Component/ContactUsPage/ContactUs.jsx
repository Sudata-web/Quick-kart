import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: connect to backend or email service
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Get in <span className="text-orange-600">Touch</span>
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to say hello — we’re always here to help.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Send us a Message
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows="4"
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-md transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Map */}
          <div className="flex flex-col justify-between">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="flex items-center gap-3">
                  <FiPhone className="text-orange-600 text-lg" />
                  +1 234 567 890
                </p>
                <p className="flex items-center gap-3">
                  <FiMail className="text-orange-600 text-lg" />
                  contact@quickcart.in
                </p>
                <p className="flex items-start gap-3">
                  <FiMapPin className="text-orange-600 text-lg mt-1" />
                  123 QuickCart Street, Bhubaneswar, Odisha, India
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64">
              <iframe
                title="QuickCart Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.045937421321!2d-122.40136312409158!3d37.792507971982304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df5f0c0f%3A0x9ff115dbb9c8b1!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1700000000000"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
