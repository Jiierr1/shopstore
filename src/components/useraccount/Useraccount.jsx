// UserAccount.jsx
import React, { useState } from "react";
import {
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  MapPin,
  CreditCard,
  ShoppingBag,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Users,
  Globe,
  Edit2,
  Save,
  X,
  Eye,
  EyeOff,
} from "lucide-react";

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    personalInfo: {
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@example.com",
      phone: "+1 (555) 123-4567",
      alternativePhone: "+1 (555) 987-6543",
      gender: "female",
      dateOfBirth: "1990-05-15",
      avatar: "D:/pf.jpg",
      memberSince: "January 2024",
      lastLogin: "2024-03-15 10:30 AM",
    },
    address: {
      street: "123 Main Street",
      apartment: "Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      addressType: "Home",
      isDefault: true,
    },
    additionalAddresses: [
      {
        id: 1,
        type: "Work",
        street: "456 Business Avenue",
        apartment: "Suite 200",
        city: "New York",
        state: "NY",
        zipCode: "10002",
        country: "United States",
        isDefault: false,
      },
    ],
    preferences: {
      newsletter: true,
      smsNotifications: false,
      emailNotifications: true,
      marketingEmails: false,
    },
  });

  const [editForm, setEditForm] = useState(userData.personalInfo);

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "orders", label: "Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      date: "2024-03-15",
      items: 3,
      total: "$245.00",
      status: "Delivered",
    },
    {
      id: "#ORD-002",
      date: "2024-03-10",
      items: 2,
      total: "$129.99",
      status: "Shipped",
    },
    {
      id: "#ORD-003",
      date: "2024-03-05",
      items: 1,
      total: "$79.99",
      status: "Processing",
    },
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: "$29.99",
      image: "/api/placeholder/80/80",
      inStock: true,
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: "$89.99",
      image: "/api/placeholder/80/80",
      inStock: true,
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: "$199.99",
      image: "/api/placeholder/80/80",
      inStock: false,
    },
  ];

  const handleEditToggle = () => {
    if (isEditing) {
      setEditForm(userData.personalInfo);
    }
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    setUserData({
      ...userData,
      personalInfo: editForm,
    });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value,
    });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f8e2e2] to-[#ffe4e4] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Account</h1>
          <p className="text-gray-600 mt-2">
            Manage your profile, addresses and preferences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {/* User Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-[#FFB2B2] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {userData.personalInfo.firstName[0]}
                    {userData.personalInfo.lastName[0]}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-[#FFB2B2] text-white p-1 rounded-full hover:bg-[#ff9b9b] transition-colors">
                    <Edit2 className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">
                    {userData.personalInfo.firstName}{" "}
                    {userData.personalInfo.lastName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {userData.personalInfo.email}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Member since {userData.personalInfo.memberSince}
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-[#f8e2e2] rounded-lg">
                <div className="text-center">
                  <ShoppingBag className="w-4 h-4 mx-auto text-[#FFB2B2]" />
                  <p className="text-xs text-gray-500 mt-1">Orders</p>
                  <p className="font-semibold text-gray-800">12</p>
                </div>
                <div className="text-center">
                  <Heart className="w-4 h-4 mx-auto text-[#FFB2B2]" />
                  <p className="text-xs text-gray-500 mt-1">Wishlist</p>
                  <p className="font-semibold text-gray-800">8</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-4 h-4 mx-auto text-[#FFB2B2]" />
                  <p className="text-xs text-gray-500 mt-1">Addresses</p>
                  <p className="font-semibold text-gray-800">2</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-[#FFB2B2] text-white"
                          : "text-gray-700 hover:bg-[#f8e2e2]"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5" />
                        <span>{tab.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <button className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-3 border-2 border-[#FFB2B2] rounded-lg text-[#FFB2B2] hover:bg-[#FFB2B2] hover:text-white transition-colors">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Personal Information
                    </h2>
                    <button
                      onClick={handleEditToggle}
                      className="flex items-center space-x-2 px-4 py-2 text-sm border-2 border-[#FFB2B2] text-[#FFB2B2] rounded-lg hover:bg-[#FFB2B2] hover:text-white transition-colors"
                    >
                      {isEditing ? (
                        <>
                          <X className="w-4 h-4" />
                          <span>Cancel</span>
                        </>
                      ) : (
                        <>
                          <Edit2 className="w-4 h-4" />
                          <span>Edit Profile</span>
                        </>
                      )}
                    </button>
                  </div>

                  {isEditing ? (
                    // Edit Mode
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={editForm.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={editForm.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="email"
                              name="email"
                              value={editForm.email}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="tel"
                              name="phone"
                              value={editForm.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Alternative Phone
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="tel"
                              name="alternativePhone"
                              value={editForm.alternativePhone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date of Birth
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="date"
                              name="dateOfBirth"
                              value={editForm.dateOfBirth}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Gender
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <select
                              name="gender"
                              value={editForm.gender}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-transparent appearance-none"
                            >
                              <option value="female">Female</option>
                              <option value="male">Male</option>
                              <option value="other">Other</option>
                              <option value="prefer-not">
                                Prefer not to say
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4">
                        <button
                          onClick={handleSaveChanges}
                          className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#FFB2B2] text-white rounded-lg font-semibold hover:bg-[#ff9b9b] transition-colors"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Changes</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    // View Mode
                    <div className="space-y-6">
                      {/* Personal Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-3">
                            Full Name
                          </h3>
                          <p className="text-gray-800">
                            {userData.personalInfo.firstName}{" "}
                            {userData.personalInfo.lastName}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-3">
                            Gender
                          </h3>
                          <p className="text-gray-800 capitalize">
                            {userData.personalInfo.gender}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-3">
                            Email Address
                          </h3>
                          <p className="text-gray-800">
                            {userData.personalInfo.email}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-3">
                            Date of Birth
                          </h3>
                          <p className="text-gray-800">
                            {new Date(
                              userData.personalInfo.dateOfBirth,
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-3">
                            Phone Number
                          </h3>
                          <p className="text-gray-800">
                            {userData.personalInfo.phone}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-3">
                            Alternative Phone
                          </h3>
                          <p className="text-gray-800">
                            {userData.personalInfo.alternativePhone}
                          </p>
                        </div>
                      </div>

                      {/* Default Address */}
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          Default Address
                        </h3>
                        <div className="bg-[#f8e2e2] p-4 rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-gray-800">
                                {userData.address.addressType}
                              </p>
                              <p className="text-gray-600 mt-1">
                                {userData.address.street}{" "}
                                {userData.address.apartment}
                                <br />
                                {userData.address.city},{" "}
                                {userData.address.state}{" "}
                                {userData.address.zipCode}
                                <br />
                                {userData.address.country}
                              </p>
                            </div>
                            <span className="px-2 py-1 bg-[#FFB2B2] text-white text-xs rounded-full">
                              Default
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Account Info */}
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          Account Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Member Since
                            </h4>
                            <p className="text-gray-800">
                              {userData.personalInfo.memberSince}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Last Login
                            </h4>
                            <p className="text-gray-800">
                              {userData.personalInfo.lastLogin}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Recent Orders
                  </h2>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="font-semibold text-gray-800">
                              {order.id}
                            </span>
                            <p className="text-sm text-gray-500 mt-1">
                              {order.date}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">
                            {order.items} items
                          </span>
                          <span className="font-semibold text-gray-800">
                            {order.total}
                          </span>
                        </div>
                        <button className="mt-3 text-sm text-[#FFB2B2] hover:text-[#ff9b9b] hover:underline">
                          View Order Details
                        </button>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 text-[#FFB2B2] hover:text-[#ff9b9b] hover:underline flex items-center">
                    View All Orders
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === "wishlist" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    My Wishlist
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wishlistItems.map((item) => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg p-4 flex space-x-4"
                      >
                        <div className="w-20 h-20 bg-[#f8e2e2] rounded flex items-center justify-center">
                          <ShoppingBag className="w-8 h-8 text-[#FFB2B2]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-[#FFB2B2] font-semibold mt-1">
                            {item.price}
                          </p>
                          <p
                            className={`text-sm mt-1 ${item.inStock ? "text-green-600" : "text-red-600"}`}
                          >
                            {item.inStock ? "In Stock" : "Out of Stock"}
                          </p>
                          <button className="mt-2 text-sm text-[#FFB2B2] hover:text-[#ff9b9b] hover:underline">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === "addresses" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Saved Addresses
                    </h2>
                    <button className="px-4 py-2 bg-[#FFB2B2] text-white rounded-lg font-semibold hover:bg-[#ff9b9b] transition-colors text-sm">
                      Add New Address
                    </button>
                  </div>

                  {/* Default Address */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">
                      Default Address
                    </h3>
                    <div className="border border-gray-200 rounded-lg p-4 bg-[#f8e2e2]">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-medium text-gray-800">
                            {userData.address.addressType}
                          </span>
                          <span className="ml-2 text-xs bg-[#FFB2B2] text-white px-2 py-1 rounded">
                            Default
                          </span>
                        </div>
                        <button className="text-[#FFB2B2] hover:text-[#ff9b9b] text-sm">
                          Edit
                        </button>
                      </div>
                      <p className="text-gray-600 mt-2">
                        {userData.address.street} {userData.address.apartment}
                        <br />
                        {userData.address.city}, {userData.address.state}{" "}
                        {userData.address.zipCode}
                        <br />
                        {userData.address.country}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Phone: {userData.personalInfo.phone}
                      </p>
                    </div>
                  </div>

                  {/* Additional Addresses */}
                  {userData.additionalAddresses.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">
                        Additional Addresses
                      </h3>
                      <div className="space-y-4">
                        {userData.additionalAddresses.map((addr) => (
                          <div
                            key={addr.id}
                            className="border border-gray-200 rounded-lg p-4"
                          >
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-gray-800">
                                {addr.type}
                              </span>
                              <button className="text-[#FFB2B2] hover:text-[#ff9b9b] text-sm">
                                Edit
                              </button>
                            </div>
                            <p className="text-gray-600 mt-2">
                              {addr.street} {addr.apartment}
                              <br />
                              {addr.city}, {addr.state} {addr.zipCode}
                              <br />
                              {addr.country}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Payments Tab */}
              {activeTab === "payments" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Payment Methods
                    </h2>
                    <button className="px-4 py-2 bg-[#FFB2B2] text-white rounded-lg font-semibold hover:bg-[#ff9b9b] transition-colors text-sm">
                      Add Payment Method
                    </button>
                  </div>
                  <div className="border-2 border-dashed border-[#FFB2B2] rounded-lg p-8 text-center">
                    <CreditCard className="w-12 h-12 text-[#FFB2B2] mx-auto mb-3" />
                    <p className="text-gray-500">
                      No payment methods saved yet
                    </p>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Account Settings
                  </h2>

                  {/* Notification Preferences */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Notification Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Email Notifications
                          </h4>
                          <p className="text-sm text-gray-500">
                            Receive order updates and offers via email
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={userData.preferences.emailNotifications}
                            onChange={() => {}}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#FFB2B2] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFB2B2]"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            SMS Notifications
                          </h4>
                          <p className="text-sm text-gray-500">
                            Get text alerts for order updates
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={userData.preferences.smsNotifications}
                            onChange={() => {}}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#FFB2B2] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFB2B2]"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Newsletter
                          </h4>
                          <p className="text-sm text-gray-500">
                            Receive weekly newsletters and promotions
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={userData.preferences.newsletter}
                            onChange={() => {}}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#FFB2B2] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFB2B2]"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Marketing Emails
                          </h4>
                          <p className="text-sm text-gray-500">
                            Receive marketing and promotional emails
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={userData.preferences.marketingEmails}
                            onChange={() => {}}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#FFB2B2] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFB2B2]"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Privacy & Security */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Privacy & Security
                    </h3>
                    <div className="space-y-4">
                      <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-[#f8e2e2] transition-colors">
                        <span className="font-medium text-gray-800">
                          Change Password
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Update your password regularly to keep your account
                          secure
                        </p>
                      </button>
                      <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-[#f8e2e2] transition-colors">
                        <span className="font-medium text-gray-800">
                          Two-Factor Authentication
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Add an extra layer of security to your account
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Danger Zone */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-red-600 mb-4">
                      Danger Zone
                    </h3>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      Delete Account
                    </button>
                    <p className="text-xs text-gray-500 mt-2">
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
