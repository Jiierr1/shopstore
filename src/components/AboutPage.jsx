import React, { useState } from "react";
import {
  ShoppingBag,
  Heart,
  Shield,
  Truck,
  Award,
  Users,
  Star,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronRight,
  ArrowLeft,
  Clock,
  Package,
  CreditCard,
  RefreshCw,
  Headphones,
  Leaf,
  ThumbsUp,
  Gem,
  Sparkles,
} from "lucide-react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    { id: 1, value: "10K+", label: "Happy Customers", icon: Users },
    { id: 2, value: "5K+", label: "Products Sold", icon: ShoppingBag },
    { id: 3, value: "50+", label: "Brand Partners", icon: Award },
    { id: 4, value: "3+", label: "Years Experience", icon: Clock },
  ];

  const values = [
    {
      id: 1,
      title: "Quality First",
      description:
        "We ensure every product meets our high quality standards before reaching your wardrobe.",
      icon: Shield,
    },
    {
      id: 2,
      title: "Sustainable Fashion",
      description:
        "Committed to eco-friendly practices and sustainable fashion choices.",
      icon: Leaf,
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      description:
        "Your happiness is our priority with easy returns and dedicated support.",
      icon: ThumbsUp,
    },
    {
      id: 4,
      title: "Authentic Products",
      description:
        "100% genuine products directly from trusted brands and manufacturers.",
      icon: Gem,
    },
  ];

  const team = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/200/200",
      bio: "Fashion enthusiast with 10+ years of industry experience.",
      social: { instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director",
      image: "/api/placeholder/200/200",
      bio: "Award-winning designer passionate about sustainable fashion.",
      social: { instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Customer Experience",
      image: "/api/placeholder/200/200",
      bio: "Dedicated to making every shopping experience memorable.",
      social: { instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "David Kim",
      role: "Operations Manager",
      image: "/api/placeholder/200/200",
      bio: "Ensuring your orders reach you quickly and safely.",
      social: { instagram: "#", twitter: "#", linkedin: "#" },
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sophia Lee",
      role: "Fashion Blogger",
      comment:
        "Best online shopping experience! The quality is amazing and delivery is always on time.",
      rating: 5,
      image: "/api/placeholder/60/60",
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Regular Customer",
      comment:
        "Love their collection! Great prices and excellent customer service.",
      rating: 5,
      image: "/api/placeholder/60/60",
    },
    {
      id: 3,
      name: "Maria Garcia",
      role: "Style Influencer",
      comment:
        "My go-to place for trendy fashion. Always something new and exciting!",
      rating: 5,
      image: "/api/placeholder/60/60",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description: "On orders over $100",
      icon: Truck,
    },
    {
      id: 2,
      title: "Easy Returns",
      description: "30-day return policy",
      icon: RefreshCw,
    },
    {
      id: 3,
      title: "Secure Payment",
      description: "100% secure transactions",
      icon: CreditCard,
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Dedicated customer service",
      icon: Headphones,
    },
  ];

  const milestones = [
    { year: "2020", event: "FashionHub was founded" },
    { year: "2021", event: "Reached 1,000 happy customers" },
    { year: "2022", event: "Expanded to international shipping" },
    { year: "2023", event: "Launched sustainable collection" },
    { year: "2024", event: "Partnered with 50+ global brands" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e2e2] to-[#ffe4e4]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#FFB2B2] to-[#ff9b9b] text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <button className="mb-8 text-white hover:text-gray-200 flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About FashionHub
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your premier destination for trendy, high-quality fashion that
              empowers you to express your unique style with confidence.
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

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-[#FFB2B2] bg-opacity-20 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#FFB2B2]" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-2 inline-flex flex-wrap">
          {[
            { id: "story", label: "Our Story" },
            { id: "values", label: "Values" },
            { id: "team", label: "Team" },
            { id: "milestones", label: "Milestones" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#FFB2B2] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Our Story Tab */}
        {activeTab === "story" && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">
                    FashionHub was born from a simple idea: fashion should be
                    accessible, sustainable, and empowering for everyone.
                    Founded in 2020, we started as a small boutique with a big
                    dream.
                  </p>
                  <p className="leading-relaxed">
                    What began as a passion project has grown into a trusted
                    destination for fashion lovers across Cambodia and beyond.
                    We carefully curate each collection to bring you the latest
                    trends while maintaining the highest quality standards.
                  </p>
                  <p className="leading-relaxed">
                    Today, we're proud to serve thousands of happy customers
                    with our diverse range of clothing, accessories, and
                    lifestyle products. But our mission remains the same: to
                    help you look and feel your best.
                  </p>
                </div>

                {/* Mission & Vision */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-pink-50 p-4 rounded-xl">
                    <h3 className="font-bold text-[#FFB2B2] mb-2">
                      Our Mission
                    </h3>
                    <p className="text-sm text-gray-600">
                      To provide trendy, quality fashion that inspires
                      confidence and self-expression.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <h3 className="font-bold text-purple-400 mb-2">
                      Our Vision
                    </h3>
                    <p className="text-sm text-gray-600">
                      To be Cambodia's most loved fashion destination, known for
                      style and sustainability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/api/placeholder/500/600"
                  alt="Our Story"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FFB2B2] rounded-full flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Since</p>
                      <p className="text-2xl font-bold text-gray-900">2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.id} className="text-center">
                    <div className="flex justify-center mb-2">
                      <Icon className="h-6 w-6 text-[#FFB2B2]" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Values Tab */}
        {activeTab === "values" && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              These principles guide everything we do, from selecting products
              to serving our customers.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.id}
                    className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-[#FFB2B2] rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Sustainability Commitment */}
            <div className="mt-12 bg-green-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Leaf className="h-8 w-8 text-green-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Sustainability Commitment
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                We're committed to reducing our environmental impact through
                sustainable practices:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl">
                  <p className="font-bold text-green-600">
                    Eco-friendly Packaging
                  </p>
                  <p className="text-sm text-gray-500">
                    100% recyclable materials
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="font-bold text-green-600">Ethical Sourcing</p>
                  <p className="text-sm text-gray-500">
                    Fair trade partnerships
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="font-bold text-green-600">Carbon Neutral</p>
                  <p className="text-sm text-gray-500">
                    Offsetting our footprint
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Passionate fashion lovers dedicated to bringing you the best
              shopping experience.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.id} className="text-center group">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-[#FFB2B2] group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black bg-opacity-50 rounded-full p-2 flex gap-2">
                        <a
                          href={member.social.instagram}
                          className="text-white hover:text-[#FFB2B2]"
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="text-white hover:text-[#FFB2B2]"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-[#FFB2B2] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Milestones Tab */}
        {activeTab === "milestones" && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Our Journey
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Key moments that shaped FashionHub into what it is today.
            </p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FFB2B2] bg-opacity-30 hidden md:block"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <span className="text-2xl font-bold text-[#FFB2B2]">
                          {milestone.year}
                        </span>
                        <p className="text-gray-700 mt-2">{milestone.event}</p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-[#FFB2B2] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Section - Always Visible */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-[#FFB2B2] to-[#ff9b9b] rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-white/90 mb-6">
                Have questions? We'd love to hear from you. Our team is always
                here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>123 Fashion Street, Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+855 12 345 678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>hello@fashionhub.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
              <p className="text-white/90 mb-4">
                Subscribe to get updates on new arrivals and exclusive offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-[#FFB2B2] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
