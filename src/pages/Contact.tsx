import { Mail, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const data = Object.fromEntries(formData.entries());
      console.log('Form Data:', data);

      setMessageSent(true);

      // Clear form fields
      form.current.reset();

      // Hide success message after 3 seconds
      setTimeout(() => setMessageSent(false), 3000);
    }
  };

  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span>garimajain120403@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Pune, India</span>
                </div>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6" data-aos="fade-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            {messageSent && (
              <div className="mt-4 text-center text-green-600 font-semibold">
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
