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
import { useFavorites } from "../../context/FavoritesContext";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // For shop dropdown
  const { favoritesCount } = useFavorites();
  // Login state with profile pic
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shop dropdown categories
  const shopCategories = [
    {
      title: "Clothing",
      items: [
        { name: "Men's Wear", href: "/shop/men" },
        { name: "Women's Wear", href: "/shop/women" },
        { name: "Kids' Collection", href: "/shop/kids" },
        { name: "Activewear", href: "/shop/activewear" },
      ],
    },
    {
      title: "Footwear",
      items: [
        { name: "Sneakers", href: "/shop/sneakers" },
        { name: "Boots", href: "/shop/boots" },
        { name: "Sandals", href: "/shop/sandals" },
        { name: "Formal Shoes", href: "/shop/formal" },
      ],
    },
    {
      title: "Accessories",
      items: [
        { name: "Bags", href: "/shop/bags" },
        { name: "Jewelry", href: "/shop/jewelry" },
        { name: "Watches", href: "/shop/watches" },
        { name: "Hats & Scarves", href: "/shop/hats" },
      ],
    },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Shop",
      href: "/shop",
      hasDropdown: true,
    },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Services", href: "/services" },
    { name: "Sale", href: "/sale" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Helper function to get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`bg-white sticky top-0 z-50 transition-all ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFB2B2] rounded-xl flex items-center justify-center">
                <ShoppingBag className="text-white" />
              </div>
              <span className="text-2xl font-bold">FashionHub</span>
            </a>

            {/* NAV LINKS WITH DROPDOWN */}
            <nav className="hidden lg:flex items-center gap-4">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center gap-1 text-gray-700 hover:text-[#FFB2B2] font-medium py-2"
                        onMouseEnter={() => setOpenDropdown(index)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mega Dropdown Menu */}
                      {openDropdown === index && (
                        <div
                          className="absolute left-0 mt-2 w-[600px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-3 gap-6 z-50"
                          onMouseEnter={() => setOpenDropdown(index)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {shopCategories.map((category, catIndex) => (
                            <div key={catIndex}>
                              <h3 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                                {category.title}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <a
                                      href={subItem.href}
                                      className="text-gray-600 hover:text-[#FFB2B2] text-sm block py-1"
                                    >
                                      {subItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {/* Featured/Sale Section */}
                          <div className="col-span-3 mt-4 pt-4 border-t border-gray-200">
                            <div className="grid grid-cols-2 gap-4">
                              <a
                                href="/shop/sale"
                                className="bg-pink-50 p-3 rounded-lg text-center hover:bg-pink-100 transition"
                              >
                                <span className="text-sm font-medium text-[#FFB2B2]">
                                  Summer Sale
                                </span>
                                <p className="text-xs text-gray-600">
                                  Up to 50% off
                                </p>
                              </a>
                              <a
                                href="/shop/new"
                                className="bg-blue-50 p-3 rounded-lg text-center hover:bg-blue-100 transition"
                              >
                                <span className="text-sm font-medium text-blue-500">
                                  New Arrivals
                                </span>
                                <p className="text-xs text-gray-600">
                                  Shop latest trends
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-[#FFB2B2] font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-2">
              {/* SEARCH */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* WISHLIST */}
              <a
                href="/favorites"
                className="p-2 hover:bg-gray-100 rounded-full relative"
              >
                <Heart className="h-5 w-5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </a>

              {/* CART */}
              <a
                href="/cart"
                className="p-2 hover:bg-gray-100 rounded-full relative"
              >
                <ShoppingBag className="h-5 w-5" />
              </a>

              {/* ACCOUNT AREA WITH PROFILE PIC */}
              <div className="hidden lg:flex items-center gap-2 ml-2">
                {user ? (
                  <div className="relative group">
                    <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-[#FFB2B2]">
                      {/* Profile Picture */}
                      {user.profilePic ? (
                        <img
                          src={user.profilePic}
                          alt={user.name}
                          className="w-8 h-8 rounded-full object-cover border-2 border-[#FFB2B2]"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#FFB2B2] flex items-center justify-center text-white font-semibold text-sm">
                          {getInitials(user.name)}
                        </div>
                      )}
                      <span className="max-w-[100px] truncate">
                        {user.name}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="px-4 py-3 border-b">
                        <p className="text-sm font-medium text-gray-900">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </a>
                      <a
                        href="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Orders
                      </a>
                      <a
                        href="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </a>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <a
                      href="/login"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#FFB2B2]"
                    >
                      <LogIn className="h-4 w-4" />
                      Login
                    </a>

                    <a
                      href="/signup"
                      className="flex items-center gap-2 px-4 py-2 bg-[#FFB2B2] text-white rounded-lg"
                    >
                      <UserPlus className="h-4 w-4" />
                      Sign Up
                    </a>
                  </>
                )}
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setShowMobileMenu(true)}
                className="lg:hidden p-2"
              >
                <Menu />
              </button>
            </div>
          </div>

          {/* SEARCH BAR */}
          {showSearch && (
            <div className="py-4 border-t">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border px-4 py-2 rounded-lg"
              />
            </div>
          )}
        </div>
      </header>

      {/* MOBILE MENU - SIDEBAR ON THE RIGHT */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          {/* Click backdrop to close */}
          <div
            className="absolute inset-0"
            onClick={() => setShowMobileMenu(false)}
          />

          {/* Sidebar - positioned on the right */}
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={() => setShowMobileMenu(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X />
              </button>
            </div>

            {/* Mobile User Info */}
            {user ? (
              <div className="mb-6 pb-4 border-b">
                <div className="flex items-center gap-3 mb-3">
                  {user.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#FFB2B2]"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#FFB2B2] flex items-center justify-center text-white font-semibold text-lg">
                      {getInitials(user.name)}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="/profile"
                    className="text-center py-2 text-sm border rounded-lg hover:bg-gray-50"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Profile
                  </a>
                  <a
                    href="/orders"
                    className="text-center py-2 text-sm border rounded-lg hover:bg-gray-50"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Orders
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href="/login"
                  className="border border-[#FFB2B2] text-[#FFB2B2] text-center py-2 rounded-lg"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="bg-[#FFB2B2] text-white text-center py-2 rounded-lg"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Sign Up
                </a>
              </div>
            )}

            {/* Mobile Nav with Shop Categories */}
            <nav className="flex flex-col gap-3">
              <a
                href="/"
                className="text-gray-700 py-2 hover:text-[#FFB2B2]"
                onClick={() => setShowMobileMenu(false)}
              >
                Home
              </a>

              {/* Shop with mobile dropdown */}
              <div className="border-b border-gray-200 pb-2">
                <div className="flex items-center justify-between">
                  <a
                    href="/shop"
                    className="text-gray-700 py-2 hover:text-[#FFB2B2]"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Shop
                  </a>
                </div>

                {/* Mobile Shop Categories */}
                <div className="ml-4 mt-2 space-y-3">
                  {shopCategories.map((category, catIndex) => (
                    <div key={catIndex}>
                      <h4 className="font-medium text-gray-900 text-sm">
                        {category.title}
                      </h4>
                      <div className="ml-2 mt-1 space-y-1">
                        {category.items.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.href}
                            className="block text-sm text-gray-600 hover:text-[#FFB2B2] py-1"
                            onClick={() => setShowMobileMenu(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Mobile Featured */}
                  <div className="pt-2">
                    <a
                      href="/shop/sale"
                      className="block text-sm text-[#FFB2B2] font-medium py-1"
                    >
                      🔥 Summer Sale
                    </a>
                    <a
                      href="/shop/new"
                      className="block text-sm text-blue-500 font-medium py-1"
                    >
                      ✨ New Arrivals
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="/new-arrivals"
                className="text-gray-700 py-2 hover:text-[#FFB2B2]"
                onClick={() => setShowMobileMenu(false)}
              >
                New Arrivals
              </a>
              <a
                href="/services"
                className="text-gray-700 py-2 hover:text-[#FFB2B2]"
                onClick={() => setShowMobileMenu(false)}
              >
                Services
              </a>
              <a
                href="/sale"
                className="text-gray-700 py-2 hover:text-[#FFB2B2]"
                onClick={() => setShowMobileMenu(false)}
              >
                Sale
              </a>
              <a
                href="/about"
                className="text-gray-700 py-2 hover:text-[#FFB2B2]"
                onClick={() => setShowMobileMenu(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 py-2 hover:text-[#FFB2B2]"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact
              </a>
            </nav>

            {/* Mobile Settings & Logout */}
            {user && (
              <div className="mt-6 pt-4 border-t">
                <a
                  href="/settings"
                  className="block py-2 text-gray-700 hover:text-[#FFB2B2]"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Settings
                </a>
                <button
                  onClick={() => {
                    handleLogout();
                    setShowMobileMenu(false);
                  }}
                  className="w-full text-left py-2 text-red-500 hover:text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
