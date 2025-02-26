import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageSent(true);

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <span>garimajain120403@gmail.com</span>
              </div>

              <div className="flex items-center text-gray-600">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <span>Pune, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            {/* Success Message */}
            {messageSent && (
              <div className="text-center text-green-600 font-semibold">
                Your message has been sent successfully!
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
