import React, { useState } from "react";
import {
  ShoppingBag,
  Scissors,
  Ruler,
  RefreshCw,
  Truck,
  Clock,
  Heart,
  Star,
  Shield,
  Award,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  CheckCircle,
  Package,
  CreditCard,
  Headphones,
  Shirt,
  Calendar,
  Gift,
  Users,
  ThumbsUp,
  Wrench,
  Camera,
  Palette,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Globe,
} from "lucide-react";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const categories = [
    { id: "all", name: "All Services", icon: Sparkles },
    { id: "shopping", name: "Shopping", icon: ShoppingBag },
    { id: "alterations", name: "Alterations", icon: Scissors },
    { id: "styling", name: "Personal Styling", icon: Heart },
    { id: "delivery", name: "Delivery", icon: Truck },
    { id: "returns", name: "Returns", icon: RefreshCw },
  ];

  const services = [
    // Shopping Services
    {
      id: 1,
      name: "Personal Shopping Assistant",
      category: "shopping",
      description:
        "Get one-on-one assistance from our fashion experts to find the perfect outfits.",
      longDescription:
        "Our personal shopping assistants will guide you through our collection, help you find the perfect fit, and create outfits that match your style preferences. Perfect for special occasions or wardrobe updates.",
      icon: ShoppingBag,
      price: "Free",
      duration: "1 hour",
      features: [
        "One-on-one consultation",
        "Personalized outfit recommendations",
        "Style advice and tips",
        "Wardrobe planning",
        "Access to exclusive items",
      ],
      popular: true,
    },
    {
      id: 2,
      name: "Virtual Shopping Experience",
      category: "shopping",
      description:
        "Shop from the comfort of your home with our virtual shopping assistants.",
      longDescription:
        "Connect with our stylists via video call for a personalized shopping experience. We'll show you items, provide recommendations, and help you make the right choices remotely.",
      icon: Camera,
      price: "Free",
      duration: "30-60 min",
      features: [
        "Video consultation",
        "Live product展示",
        "Real-time recommendations",
        "Secure payment link",
        "Free delivery on first order",
      ],
      popular: false,
    },
    {
      id: 3,
      name: "Bulk Order Discount",
      category: "shopping",
      description: "Special pricing for bulk purchases and corporate orders.",
      longDescription:
        "Perfect for events, teams, or businesses looking for uniform or bulk fashion purchases. Enjoy exclusive discounts and dedicated support for large orders.",
      icon: Package,
      price: "Custom quote",
      duration: "Varies",
      features: [
        "Volume discounts",
        "Custom sizing options",
        "Dedicated account manager",
        "Flexible payment terms",
        "Bulk delivery options",
      ],
      popular: false,
    },

    // Alteration Services
    {
      id: 4,
      name: "Professional Alterations",
      category: "alterations",
      description:
        "Expert tailoring services to ensure perfect fit for all your garments.",
      longDescription:
        "Our skilled tailors provide professional alteration services for all types of garments. From hemming to taking in seams, we ensure your clothes fit perfectly.",
      icon: Scissors,
      price: "From $5",
      duration: "2-3 days",
      features: [
        "Hemming and shortening",
        "Taking in/letting out seams",
        "Sleeve adjustments",
        "Waist alterations",
        "Emergency rush service available",
      ],
      popular: true,
    },
    {
      id: 5,
      name: "Custom Made Clothing",
      category: "alterations",
      description:
        "Bespoke clothing tailored specifically to your measurements.",
      longDescription:
        "Get custom-made clothing designed and tailored specifically for you. Choose your fabric, style, and details for a truly unique piece.",
      icon: Ruler,
      price: "Starting $99",
      duration: "7-10 days",
      features: [
        "Professional measurements",
        "Fabric selection assistance",
        "Multiple fittings included",
        "Custom design options",
        "Perfect fit guarantee",
      ],
      popular: false,
    },
    {
      id: 6,
      name: "Wedding & Special Occasion",
      category: "alterations",
      description: "Specialized tailoring for weddings and formal events.",
      longDescription:
        "Premium alteration services for weddings, proms, and special occasions. We understand the importance of these events and give extra attention to every detail.",
      icon: Calendar,
      price: "From $50",
      duration: "5-7 days",
      features: [
        "Bridal gown alterations",
        "Groom's suit fitting",
        "Bridesmaid dress adjustments",
        "Rush service available",
        "Final fitting guarantee",
      ],
      popular: true,
    },

    // Personal Styling
    {
      id: 7,
      name: "Personal Stylist Session",
      category: "styling",
      description:
        "Professional styling advice to enhance your personal style.",
      longDescription:
        "Work with our professional stylists to discover your personal style, learn what works best for your body type, and build a wardrobe you'll love.",
      icon: Heart,
      price: "$49",
      duration: "2 hours",
      features: [
        "Style analysis",
        "Body type consultation",
        "Color palette recommendation",
        "Wardrobe audit",
        "Shopping list creation",
      ],
      popular: true,
    },
    {
      id: 8,
      name: "Wardrobe Consultation",
      category: "styling",
      description: "Comprehensive wardrobe analysis and organization.",
      longDescription:
        "Let us help you organize and optimize your wardrobe. We'll help you identify gaps, suggest versatile pieces, and create multiple outfits from existing items.",
      icon: Shirt,
      price: "$79",
      duration: "3 hours",
      features: [
        "Full wardrobe audit",
        "Closet organization tips",
        "Outfit combination guide",
        "Shopping recommendations",
        "Seasonal wardrobe planning",
      ],
      popular: false,
    },
    {
      id: 9,
      name: "Color Analysis",
      category: "styling",
      description:
        "Discover your perfect color palette for clothing and accessories.",
      longDescription:
        "Learn which colors complement your natural features best. Our color analysis service helps you make confident choices when shopping for clothes.",
      icon: Palette,
      price: "$39",
      duration: "1 hour",
      features: [
        "Seasonal color analysis",
        "Personal color swatch card",
        "Makeup recommendations",
        "Jewelry tone guidance",
        "Shopping color guide",
      ],
      popular: false,
    },

    // Delivery Services
    {
      id: 10,
      name: "Express Delivery",
      category: "delivery",
      description: "Same-day delivery for urgent orders within Phnom Penh.",
      longDescription:
        "Need it today? Our express delivery service ensures your order arrives within hours. Available for in-stock items in Phnom Penh area.",
      icon: Truck,
      price: "$5",
      duration: "2-4 hours",
      features: [
        "Same-day delivery",
        "Real-time tracking",
        "SMS notifications",
        "Contactless delivery",
        "Extended hours available",
      ],
      popular: true,
    },
    {
      id: 11,
      name: "Nationwide Shipping",
      category: "delivery",
      description: "Reliable delivery service to all provinces in Cambodia.",
      longDescription:
        "We deliver to every province in Cambodia. Our trusted courier partners ensure your orders arrive safely and on time.",
      icon: Package,
      price: "From $3",
      duration: "2-5 days",
      features: [
        "Door-to-door delivery",
        "Tracking number provided",
        "Insurance included",
        "Weekend delivery available",
        "Free over $100",
      ],
      popular: false,
    },
    {
      id: 12,
      name: "International Shipping",
      category: "delivery",
      description: "Ship your favorite fashion items anywhere in the world.",
      longDescription:
        "We now offer international shipping to selected countries. Shop Cambodian fashion from anywhere in the world.",
      icon: Globe,
      price: "From $20",
      duration: "7-14 days",
      features: [
        "Worldwide delivery",
        "Customs assistance",
        "Tracking included",
        "Insurance available",
        "DHL/FedEx partnership",
      ],
      popular: false,
    },

    // Returns & Exchanges
    {
      id: 13,
      name: "Easy Returns",
      category: "returns",
      description: "Hassle-free returns within 30 days of purchase.",
      longDescription:
        "Changed your mind? No problem. Our easy return policy lets you return items within 30 days for a full refund or exchange.",
      icon: RefreshCw,
      price: "Free",
      duration: "30 days",
      features: [
        "30-day return window",
        "Free return pickup",
        "Full refund or exchange",
        "Online return portal",
        "Instant refund processing",
      ],
      popular: true,
    },
    {
      id: 14,
      name: "Size Exchange",
      category: "returns",
      description: "Quick and easy size exchanges for online orders.",
      longDescription:
        "Ordered the wrong size? We'll help you exchange it for the perfect fit. Fast processing and free shipping on exchanges.",
      icon: Ruler,
      price: "Free",
      duration: "3-5 days",
      features: [
        "Free size exchange",
        "Priority processing",
        "Stock availability check",
        "Multiple size attempts",
        "Store credit option",
      ],
      popular: true,
    },
    {
      id: 15,
      name: "Quality Guarantee",
      category: "returns",
      description: "We stand behind the quality of all our products.",
      longDescription:
        "If you're not satisfied with the quality of any item, we'll make it right. Our quality guarantee ensures you always receive the best.",
      icon: Shield,
      price: "Free",
      duration: "Lifetime",
      features: [
        "Quality inspection",
        "Defect replacement",
        "Repair services",
        "Partial refund option",
        "Store credit available",
      ],
      popular: false,
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const popularServices = services.filter((service) => service.popular);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e2e2] to-[#ffe4e4]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#FFB2B2] to-[#ff9b9b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <button className="mb-8 text-white hover:text-gray-200 flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover the range of services we offer to make your shopping
              experience exceptional, from personal styling to professional
              alterations.
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

      {/* Popular Services Banner */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-[#FFB2B2]" />
            <h2 className="text-lg font-bold text-gray-900">
              Most Popular Services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {popularServices.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-left group"
                >
                  <div className="w-10 h-10 bg-[#FFB2B2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {service.name}
                    </p>
                    <p className="text-xs text-gray-500">{service.price}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#FFB2B2] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Service Header */}
                <div className="bg-gradient-to-r from-[#FFB2B2] to-[#ff9b9b] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#FFB2B2]" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{service.name}</h3>
                        <p className="text-white/80 text-sm">
                          {service.duration}
                        </p>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-[#FFB2B2]">
                        +{service.features.length - 3} more
                      </li>
                    )}
                  </ul>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {service.price}
                      </span>
                      {service.price !== "Free" &&
                        service.price !== "Custom quote" && (
                          <span className="text-sm text-gray-500 ml-1">
                            /service
                          </span>
                        )}
                    </div>
                    <button
                      onClick={() => handleServiceClick(service)}
                      className="bg-[#FFB2B2] text-white px-4 py-2 rounded-lg hover:bg-[#ff9b9b] transition-colors flex items-center gap-1"
                    >
                      Book Now
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              No Services Found
            </h3>
            <p className="text-gray-500">
              No services available in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Service Features Section */}
      <div className="bg-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Services
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFB2B2] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#FFB2B2]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-sm text-gray-500">
                Skilled professionals with years of experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFB2B2] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#FFB2B2]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-sm text-gray-500">
                Fast turnaround on all services
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFB2B2] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#FFB2B2]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-sm text-gray-500">
                100% satisfaction or money back
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFB2B2] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-[#FFB2B2]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Flexible Payment</h3>
              <p className="text-sm text-gray-500">
                Multiple payment options available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-2">
              How do I book a service?
            </h3>
            <p className="text-gray-500 text-sm">
              Simply click on the "Book Now" button for your desired service,
              fill in your details, and we'll contact you to confirm your
              appointment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-2">
              What is your cancellation policy?
            </h3>
            <p className="text-gray-500 text-sm">
              You can cancel or reschedule up to 24 hours before your
              appointment for a full refund.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-2">
              Do you offer emergency services?
            </h3>
            <p className="text-gray-500 text-sm">
              Yes, we offer rush services for alterations and styling.
              Additional charges may apply.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-2">
              Can I book multiple services?
            </h3>
            <p className="text-gray-500 text-sm">
              Absolutely! You can combine multiple services in one appointment.
              Contact us for package deals.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-[#FFB2B2] to-[#ff9b9b] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Choosing a Service?
            </h2>
            <p className="text-white/90 mb-8">
              Our team is here to help you find the perfect service for your
              needs. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#FFB2B2] px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Live Chat
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-[#FFB2B2] transition-colors flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#FFB2B2] to-[#ff9b9b] p-6 rounded-t-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <selectedService.icon className="h-6 w-6 text-[#FFB2B2]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">
                    {selectedService.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {selectedService.duration}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowBookingModal(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                {selectedService.longDescription}
              </p>

              <h4 className="font-bold text-gray-900 mb-3">
                Service Includes:
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedService.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 p-4 rounded-xl mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price:</span>
                  <span className="text-2xl font-bold text-[#FFB2B2]">
                    {selectedService.price}
                  </span>
                </div>
              </div>

              {/* Booking Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+855 12 345 678"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Any special requests or information..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFB2B2] text-white py-3 rounded-xl hover:bg-[#ff9b9b] transition-colors font-medium"
                >
                  Confirm Booking
                </button>

                <p className="text-xs text-center text-gray-500">
                  By booking, you agree to our terms and conditions
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
