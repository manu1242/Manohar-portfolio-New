import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatusMessage({ type: "error", text: "Invalid email format." });
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setStatusMessage({
        type: "error",
        text: "Phone number must be 10 digits.",
      });
      setIsSubmitting(false);
      return;
    }

    const SERVICE_ID = "service_5kh4s9h";
    const TEMPLATE_ID = "template_kclp4g4";
    const PUBLIC_KEY = "E-eZxBmVLMFLjwdvA";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatusMessage({
          type: "success",
          text: "Message sent successfully!",
        });
        setFormData({
          email: "",
          name: "",
          phone: "",
          address: "",
          message: "",
        });
      })
      .catch(() => {
        setStatusMessage({
          type: "error",
          text: "Failed to send message. Try again.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's collaborate and bring your
            ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-lg border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                      <Mail className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">
                        YallaManohar74@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                      <Phone className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">+91 9052003723</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                      <MapPin className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">India, Hyderabad</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-red-500/30">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/manu1242"
                      target="_blank"
                      className="group p-3 bg-red-500/20 rounded-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github className="w-5 h-5 text-red-400 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/manohar-yalla/"
                      target="_blank"
                      className="group p-3 bg-red-500/20 rounded-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5 text-red-400 group-hover:text-white" />
                    </a>
                    <a
                      href="mailto:yallamanohar74@gmail.com"
                      target="_blank"
                      className="group p-3 bg-red-500/20 rounded-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                    >
                      <Mail className="w-5 h-5 text-red-400 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative overflow-hidden" id="contact">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-lg border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                    placeholder="1234567890"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                    placeholder="Your address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
