import React from "react";
import {
  ShoppingBag,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  CreditCard,
  Truck,
  Shield,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns Policy", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
  ];

  const categories = [
    { name: "Women's Fashion", href: "/shop/women" },
    { name: "Men's Fashion", href: "/shop/men" },
    { name: "Kids Collection", href: "/shop/kids" },
    { name: "Accessories", href: "/shop/accessories" },
    { name: "Footwear", href: "/shop/footwear" },
    { name: "Sportswear", href: "/shop/sportswear" },
  ];

  const services = [
    { name: "Personal Shopping", href: "/services/personal-shopping" },
    { name: "Alterations", href: "/services/alterations" },
    { name: "Styling Consultation", href: "/services/styling" },
    { name: "Gift Cards", href: "/gift-cards" },
    { name: "VIP Program", href: "/vip" },
    { name: "Corporate Orders", href: "/corporate" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
  ];

  const paymentMethods = [
    { name: "Visa", icon: CreditCard },
    { name: "Mastercard", icon: CreditCard },
    { name: "Bakong", icon: Shield },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FFB2B2] rounded-xl flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FashionHub</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your premier destination for trendy, high-quality fashion that
              empowers you to express your unique style with confidence.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FFB2B2] transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FFB2B2] mt-2"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFB2B2] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#FFB2B2] transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories & Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative">
              Categories
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FFB2B2] mt-2"></span>
            </h3>
            <ul className="space-y-3 mb-6">
              {categories.slice(0, 4).map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-[#FFB2B2] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#FFB2B2] transition-colors"></span>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-lg mb-6 mt-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FFB2B2] mt-2"></span>
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-[#FFB2B2] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#FFB2B2] transition-colors"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FFB2B2] mt-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-[#FFB2B2] shrink-0 mt-0.5" />
                <span>123 Fashion Street, Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-[#FFB2B2] flex-shrink-0" />
                <a
                  href="tel:+85512345678"
                  className="hover:text-[#FFB2B2] transition-colors"
                >
                  +855 12 345 678
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-[#FFB2B2] shrink-0" />
                <a
                  href="mailto:hello@fashionhub.com"
                  className="hover:text-[#FFB2B2] transition-colors"
                >
                  hello@fashionhub.com
                </a>
              </li>
            </ul>

            {/* Payment Methods */}
            <div className="mt-6">
              <h4 className="font-medium text-gray-300 mb-3">We Accept</h4>
              <div className="flex gap-2">
                {paymentMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      className="w-12 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                      title={method.name}
                    >
                      <Icon className="h-5 w-5 text-gray-400" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex gap-4">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#FFB2B2]" />
                <span className="text-xs text-gray-400">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-[#FFB2B2]" />
                <span className="text-xs text-gray-400">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400 text-sm">
                Get 10% off your first order
              </p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#FFB2B2]"
                required
              />
              <button
                type="submit"
                className="bg-[#FFB2B2] text-white px-6 py-2 rounded-r-lg hover:bg-[#ff9b9b] transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2024 FashionHub. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="hover:text-[#FFB2B2] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-[#FFB2B2] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="hover:text-[#FFB2B2] transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="/sitemap"
                className="hover:text-[#FFB2B2] transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
