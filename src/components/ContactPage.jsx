import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  User,
  Edit3,
  CheckCircle,
  AlertCircle,
  Globe,
  Headphones,
  MessageSquare,
  HelpCircle,
  ChevronRight,
  ShoppingBag,
  RefreshCw,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    orderNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("general");

  const departments = [
    { id: "general", name: "General Inquiries", icon: MessageCircle },
    { id: "orders", name: "Order Support", icon: ShoppingBag },
    { id: "returns", name: "Returns & Exchanges", icon: RefreshCw },
    { id: "technical", name: "Technical Support", icon: Headphones },
    { id: "feedback", name: "Feedback & Suggestions", icon: Edit3 },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fashion Street", "Phnom Penh", "Cambodia, 12000"],
      action: "Get Directions",
      link: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+855 12 345 678", "+855 98 765 432"],
      action: "Call Now",
      link: "tel:+85512345678",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@fashionhub.com", "support@fashionhub.com"],
      action: "Send Email",
      link: "mailto:hello@fashionhub.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9:00 AM - 8:00 PM",
        "Sat - Sun: 10:00 AM - 6:00 PM",
      ],
      action: "All Hours",
      link: "#",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How long does shipping take?",
      answer:
        "Domestic shipping typically takes 2-3 business days. International shipping can take 7-14 business days depending on the destination.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "We offer 30-day returns for all unused items in original packaging. Simply initiate a return through your account or contact our support team.",
    },
    {
      id: 3,
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, Mastercard, American Express, PayPal, and Bakong KHQR for customers in Cambodia.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Here you would send the form data to your backend
      console.log("Form submitted:", {
        ...formData,
        department: selectedDepartment,
      });
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          orderNumber: "",
        });
        setSelectedDepartment("general");
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#f8e2e2] to-[#ffe4e4]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#FFB2B2] to-[#ff9b9b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We'd love to hear from you! Whether you have a question about our
              products, need help with an order, or just want to say hello.
            </p>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f8e2e2"
            />
          </svg>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFB2B2] bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#FFB2B2]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {info.title}
                  </h3>
                </div>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={info.link}
                  className="text-[#FFB2B2] hover:text-[#ff9b9b] font-medium text-sm flex items-center gap-1 group"
                >
                  {info.action}
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 mb-8">
                We'll get back to you within 24 hours
              </p>

              {/* Department Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Department
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {departments.map((dept) => {
                    const Icon = dept.icon;
                    return (
                      <button
                        key={dept.id}
                        onClick={() => setSelectedDepartment(dept.id)}
                        className={`p-3 rounded-xl border-2 transition-all ${
                          selectedDepartment === dept.id
                            ? "border-[#FFB2B2] bg-pink-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 mx-auto mb-1 ${
                            selectedDepartment === dept.id
                              ? "text-[#FFB2B2]"
                              : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`text-xs font-medium ${
                            selectedDepartment === dept.id
                              ? "text-[#FFB2B2]"
                              : "text-gray-500"
                          }`}
                        >
                          {dept.name.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Order Number */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number{" "}
                        <span className="text-gray-400 text-xs">
                          (Optional)
                        </span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+855 12 345 678"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Order Number{" "}
                        <span className="text-gray-400 text-xs">
                          (Optional)
                        </span>
                      </label>
                      <div className="relative">
                        <ShoppingBag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="orderNumber"
                          value={formData.orderNumber}
                          onChange={handleChange}
                          placeholder="ORD-2024-001"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="How can we help you?"
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] resize-none ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      {formData.message.length}/500 characters minimum
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FFB2B2] to-[#ff9b9b] text-white py-4 rounded-xl font-medium text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Live Chat Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Live Chat</h3>
                  <p className="text-sm text-gray-500">Online 24/7</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Chat with our customer service team in real-time for instant
                answers.
              </p>
              <button className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-colors font-medium">
                Start Live Chat
              </button>
            </div>

            {/* FAQ Preview */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                Frequently Asked
              </h3>
              <div className="space-y-3">
                {faqs.slice(0, 3).map((faq) => (
                  <div key={faq.id}>
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex items-start gap-2 text-left w-full"
                    >
                      <HelpCircle className="h-5 w-5 text-[#FFB2B2] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 hover:text-[#FFB2B2] transition-colors">
                        {faq.question}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
              <a
                href="/faqs"
                className="text-[#FFB2B2] hover:text-[#ff9b9b] text-sm font-medium flex items-center gap-1 mt-4"
              >
                View All FAQs
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Facebook
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-pink-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Instagram
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <Twitter className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-gray-700">
                    Twitter
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
                >
                  <Youtube className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium text-gray-700">
                    YouTube
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        activeFaq === faq.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {activeFaq === faq.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-96 bg-gray-200 relative">
              {/* Placeholder for Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-[#FFB2B2] mx-auto mb-2" />
                  <p className="text-gray-600">
                    123 Fashion Street, Phnom Penh, Cambodia
                  </p>
                  <p className="text-sm text-gray-500">
                    Click to open in Google Maps
                  </p>
                </div>
              </div>
              {/* You can embed a real Google Map here */}
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.773015555279!2d104.880942!3d11.556376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x1c7ac34b8b7f8!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1634567890123!5m2!1sen!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
