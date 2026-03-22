import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Heart,
  Search,
  User,
  Menu,
  X,
  ChevronDown,
  LogIn,
  UserPlus,
} from "lucide-react";

const Navuseracc = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileMenu]);

  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    {
      name: "Shop",
      href: "/shop",
      hasDropdown: true,
      dropdownItems: [
        { name: "Women's Fashion", href: "/shop/women" },
        { name: "Men's Fashion", href: "/shop/men" },
        { name: "Kids Collection", href: "/shop/kids" },
        { name: "Accessories", href: "/shop/accessories" },
        { name: "Footwear", href: "/shop/footwear" },
        { name: "Sportswear", href: "/shop/sportswear" },
      ],
    },
    { name: "New Arrivals", href: "/new-arrivals", hasDropdown: false },
    { name: "Services", href: "/services", hasDropdown: false },
    { name: "Sale", href: "/sale", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShoppingBag className="h-4 w-4" />
              Free shipping on orders $100+
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Heart className="h-4 w-4" />
              30-day returns
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/help" className="hover:text-[#FFB2B2] transition-colors">
              Help
            </a>
            <a
              href="/track-order"
              className="hover:text-[#FFB2B2] transition-colors"
            >
              Track Order
            </a>
            <a href="#" className="hover:text-[#FFB2B2] transition-colors">
              USD $
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button - Left side */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setShowMobileMenu(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo - Center on mobile, left on desktop */}
            <a
              href="/"
              className="flex items-center gap-2 lg:ml-0 absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FFB2B2] rounded-lg md:rounded-xl flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                FashionHub
              </span>
            </a>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className="flex items-center gap-1 px-3 xl:px-4 py-2 text-gray-700 hover:text-[#FFB2B2] transition-colors font-medium rounded-lg hover:bg-gray-50 text-sm xl:text-base"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${openDropdown === index ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-2xl py-2 transition-all duration-300 ${
                          openDropdown === index
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                        }`}
                      >
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <a
                            key={idx}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-[#FFB2B2] transition-colors"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="px-3 xl:px-4 py-2 text-gray-700 hover:text-[#FFB2B2] transition-colors font-medium rounded-lg hover:bg-gray-50 text-sm xl:text-base"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Header Icons - Right side (Not Logged In) */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full transition-colors relative group"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                  Search
                </span>
              </button>

              {/* Wishlist - Always visible */}
              <a
                href="/wishlist"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-[#FFB2B2] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
                  Wishlist
                </span>
              </a>

              {/* Cart */}
              <a
                href="/cart"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group"
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-[#FFB2B2] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
                  Cart
                </span>
              </a>

              {/* Login/Signup Buttons - Desktop */}
              <div className="hidden lg:flex items-center gap-2 ml-2">
                <a
                  href="/login"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#FFB2B2] transition-colors font-medium rounded-lg hover:bg-gray-50"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </a>
                <a
                  href="/signup"
                  className="flex items-center gap-2 px-4 py-2 bg-[#FFB2B2] text-white rounded-lg hover:bg-[#ff9b9b] transition-colors font-medium"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </a>
              </div>

              {/* Mobile Account Icon - Shows on tablet/mobile */}
              <a
                href="/login"
                className="sm:flex lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors relative group"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                  Account
                </span>
              </a>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="py-3 sm:py-4 border-t border-gray-200 transition-all duration-300">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands, categories..."
                  className="w-full px-4 py-2.5 sm:py-3 pl-10 sm:pl-12 pr-20 sm:pr-24 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] text-sm sm:text-base"
                  autoFocus
                />
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <button className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-[#FFB2B2] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg hover:bg-[#ff9b9b] transition-colors text-sm sm:text-base whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu - Not Logged In Version */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300">
          <div className="fixed left-0 top-0 bottom-0 w-72 sm:w-80 bg-white shadow-2xl overflow-y-auto transition-transform duration-300 translate-x-0">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FFB2B2] rounded-lg flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg">FashionHub</span>
              </div>
              <button
                onClick={() => setShowMobileMenu(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] text-sm"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Login/Signup Buttons - Mobile */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href="/login"
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#FFB2B2] text-[#FFB2B2] rounded-xl hover:bg-pink-50 transition-colors font-medium"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </a>
                <a
                  href="/signup"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#FFB2B2] text-white rounded-xl hover:bg-[#ff9b9b] transition-colors font-medium"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <UserPlus className="h-5 w-5" />
                  <span>Sign Up</span>
                </a>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-[#FFB2B2] rounded-lg transition-colors"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${openDropdown === index ? "rotate-180" : ""}`}
                          />
                        </button>

                        {openDropdown === index && (
                          <div className="ml-4 mt-1 mb-2 border-l-2 border-pink-200 pl-4 transition-all duration-300">
                            {item.dropdownItems.map((dropdownItem, idx) => (
                              <a
                                key={idx}
                                href={dropdownItem.href}
                                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#FFB2B2] hover:bg-pink-50 rounded-lg transition-colors"
                                onClick={() => setShowMobileMenu(false)}
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-[#FFB2B2] rounded-lg transition-colors font-medium"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                {/* Wishlist & Cart for Mobile */}
                <div className="flex items-center justify-around mb-6">
                  <a
                    href="/wishlist"
                    className="flex flex-col items-center gap-1 text-gray-600"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <div className="relative">
                      <Heart className="h-6 w-6" />
                      <span className="absolute -top-1 -right-1 bg-[#FFB2B2] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        0
                      </span>
                    </div>
                    <span className="text-xs">Wishlist</span>
                  </a>
                  <a
                    href="/cart"
                    className="flex flex-col items-center gap-1 text-gray-600"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <div className="relative">
                      <ShoppingBag className="h-6 w-6" />
                      <span className="absolute -top-1 -right-1 bg-[#FFB2B2] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        0
                      </span>
                    </div>
                    <span className="text-xs">Cart</span>
                  </a>
                </div>

                {/* Top Bar Info for Mobile */}
                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Free shipping on orders $100+</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Heart className="h-4 w-4" />
                    <span>30-day returns</span>
                  </div>
                </div>

                {/* Help Links */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href="/help"
                    className="text-center text-sm text-gray-600 hover:text-[#FFB2B2] py-2"
                  >
                    Help
                  </a>
                  <a
                    href="/track-order"
                    className="text-center text-sm text-gray-600 hover:text-[#FFB2B2] py-2"
                  >
                    Track Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navuseracc;
