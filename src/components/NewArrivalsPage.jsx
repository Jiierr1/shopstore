// NewArrivalsPage.jsx
import React, { useState, useEffect } from "react";
import {
  Heart,
  ShoppingBag,
  Filter,
  X,
  Star,
  Eye,
  Menu,
  Sparkles,
  Clock,
  TrendingUp,
} from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const NewArrivalsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedColor, setSelectedColor] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const { toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();

  // Mock new arrivals data
  useEffect(() => {
    setTimeout(() => {
      const mockProducts = [
        // Clothing New Arrivals
        {
          id: 301,
          name: "Summer Linen Shirt",
          category: "clothing",
          department: "men",
          subcategory: "shirts",
          price: 49.99,
          originalPrice: 69.99,
          rating: 4.8,
          reviews: 45,
          image:
            "https://images.unsplash.com/photo-1598033129075-9cf5cbaa8b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["white", "blue", "beige"],
          sizes: ["S", "M", "L", "XL"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          arrivalDate: "2024-03-15",
          description: "Breathable linen shirt perfect for summer",
        },
        {
          id: 302,
          name: "Floral Maxi Dress",
          category: "clothing",
          department: "women",
          subcategory: "dresses",
          price: 89.99,
          originalPrice: 129.99,
          rating: 4.9,
          reviews: 78,
          image:
            "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["pink", "purple", "blue"],
          sizes: ["XS", "S", "M", "L"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-03-14",
          description: "Elegant floral print maxi dress",
        },
        {
          id: 303,
          name: "Kids Animal Hoodie",
          category: "clothing",
          department: "kids",
          subcategory: "hoodies",
          price: 34.99,
          originalPrice: 44.99,
          rating: 4.7,
          reviews: 23,
          image:
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "pink", "yellow"],
          sizes: ["2T", "3T", "4T", "5T"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          arrivalDate: "2024-03-13",
          description: "Cute animal-themed hoodie for kids",
        },
        {
          id: 304,
          name: "Denim Jacket",
          category: "clothing",
          department: "women",
          subcategory: "jackets",
          price: 79.99,
          originalPrice: 99.99,
          rating: 4.8,
          reviews: 56,
          image:
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "black"],
          sizes: ["S", "M", "L", "XL"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-03-12",
          description: "Classic denim jacket with modern fit",
        },
        {
          id: 305,
          name: "Men's Knit Sweater",
          category: "clothing",
          department: "men",
          subcategory: "sweaters",
          price: 59.99,
          originalPrice: 79.99,
          rating: 4.7,
          reviews: 34,
          image:
            "https://images.unsplash.com/photo-1624378431926-3c82c5a3c2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["gray", "navy", "burgundy"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          arrivalDate: "2024-03-11",
          description: "Soft knit sweater for casual comfort",
        },

        // Footwear New Arrivals
        {
          id: 306,
          name: "Men's Running Shoes",
          category: "footwear",
          department: "men",
          subcategory: "sports",
          price: 129.99,
          originalPrice: 169.99,
          rating: 4.9,
          reviews: 67,
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "red", "black"],
          sizes: ["7", "8", "9", "10", "11", "12"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-03-10",
          description: "Advanced running shoes with cushioning technology",
        },
        {
          id: 307,
          name: "Women's Ankle Boots",
          category: "footwear",
          department: "women",
          subcategory: "boots",
          price: 99.99,
          originalPrice: 139.99,
          rating: 4.8,
          reviews: 42,
          image:
            "https://images.unsplash.com/photo-1608256246200-53e635b7089e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "brown", "tan"],
          sizes: ["5", "6", "7", "8", "9", "10"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          arrivalDate: "2024-03-09",
          description: "Chic ankle boots for everyday style",
        },
        {
          id: 308,
          name: "Kids Light-up Sneakers",
          category: "footwear",
          department: "kids",
          subcategory: "sneakers",
          price: 44.99,
          originalPrice: 54.99,
          rating: 4.9,
          reviews: 89,
          image:
            "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "red", "green"],
          sizes: ["10", "11", "12", "13", "1", "2"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-03-08",
          description: "Fun light-up sneakers kids will love",
        },

        // Accessories New Arrivals
        {
          id: 309,
          name: "Smart Watch Series 5",
          category: "accessories",
          department: "electronics",
          subcategory: "watches",
          price: 249.99,
          originalPrice: 299.99,
          rating: 4.9,
          reviews: 112,
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "silver", "gold"],
          material: "Aluminum",
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-03-07",
          description: "Latest smartwatch with health tracking",
        },
        {
          id: 310,
          name: "Leather Crossbody Bag",
          category: "accessories",
          department: "women",
          subcategory: "bags",
          price: 79.99,
          originalPrice: 109.99,
          rating: 4.8,
          reviews: 56,
          image:
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["brown", "black", "tan"],
          material: "Leather",
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          arrivalDate: "2024-03-06",
          description: "Stylish leather crossbody bag",
        },
        {
          id: 311,
          name: "Aviator Sunglasses",
          category: "accessories",
          department: "unisex",
          subcategory: "sunglasses",
          price: 89.99,
          originalPrice: 129.99,
          rating: 4.7,
          reviews: 34,
          image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["gold", "silver", "black"],
          material: "Metal",
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-03-05",
          description: "Classic aviator sunglasses with UV protection",
        },
        {
          id: 312,
          name: "Pearl Earrings Set",
          category: "accessories",
          department: "women",
          subcategory: "jewelry",
          price: 39.99,
          originalPrice: 59.99,
          rating: 4.9,
          reviews: 67,
          image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["white"],
          material: "Freshwater Pearl",
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-03-04",
          description: "Elegant pearl earrings for any occasion",
        },
        {
          id: 313,
          name: "Wool Blend Beanie",
          category: "accessories",
          department: "unisex",
          subcategory: "hats",
          price: 24.99,
          originalPrice: 34.99,
          rating: 4.6,
          reviews: 28,
          image:
            "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "gray", "navy", "burgundy"],
          material: "Wool",
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          arrivalDate: "2024-03-03",
          description: "Warm and stylish winter beanie",
        },
        {
          id: 314,
          name: "Men's Leather Belt",
          category: "accessories",
          department: "men",
          subcategory: "belts",
          price: 34.99,
          originalPrice: 49.99,
          rating: 4.7,
          reviews: 45,
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["brown", "black"],
          material: "Leather",
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-03-02",
          description: "Classic leather belt with metal buckle",
        },

        // More New Arrivals
        {
          id: 315,
          name: "Women's Yoga Pants",
          category: "clothing",
          department: "women",
          subcategory: "activewear",
          price: 44.99,
          originalPrice: 59.99,
          rating: 4.8,
          reviews: 92,
          image:
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "navy", "purple"],
          sizes: ["XS", "S", "M", "L", "XL"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-03-01",
          description: "Comfortable high-waist yoga pants",
        },
        {
          id: 316,
          name: "Men's Casual Sneakers",
          category: "footwear",
          department: "men",
          subcategory: "sneakers",
          price: 89.99,
          originalPrice: 119.99,
          rating: 4.7,
          reviews: 56,
          image:
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["white", "black", "gray"],
          sizes: ["7", "8", "9", "10", "11", "12"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          arrivalDate: "2024-02-28",
          description: "Stylish casual sneakers for everyday wear",
        },
        {
          id: 317,
          name: "Silk Scarf",
          category: "accessories",
          department: "women",
          subcategory: "scarves",
          price: 29.99,
          originalPrice: 44.99,
          rating: 4.8,
          reviews: 34,
          image:
            "https://images.unsplash.com/photo-1584037173087-283765a5d1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["multi"],
          material: "Silk",
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          arrivalDate: "2024-02-27",
          description: "Luxurious silk scarf with beautiful print",
        },
        {
          id: 318,
          name: "Kids Denim Jacket",
          category: "clothing",
          department: "kids",
          subcategory: "jackets",
          price: 39.99,
          originalPrice: 49.99,
          rating: 4.8,
          reviews: 27,
          image:
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue"],
          sizes: ["2T", "3T", "4T", "5T", "6"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          arrivalDate: "2024-02-26",
          description: "Cool denim jacket for kids",
        },
      ];

      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = [...products];

    if (selectedDepartment !== "all") {
      filtered = filtered.filter((p) => p.department === selectedDepartment);
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedColor.length > 0) {
      filtered = filtered.filter((p) =>
        p.colors.some((color) => selectedColor.includes(color)),
      );
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort(
          (a, b) => new Date(b.arrivalDate) - new Date(a.arrivalDate),
        );
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [
    products,
    selectedDepartment,
    selectedCategory,
    selectedColor,
    priceRange,
    sortBy,
  ]);

  const handleToggleFavorite = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
    const isFav = isFavorite(product.id);
    setNotificationMessage(
      isFav
        ? `${product.name} removed from favorites`
        : `${product.name} added to favorites`,
    );
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const categories = [
    { id: "all", name: "All Items" },
    { id: "clothing", name: "Clothing" },
    { id: "footwear", name: "Footwear" },
    { id: "accessories", name: "Accessories" },
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "men", name: "Men" },
    { id: "women", name: "Women" },
    { id: "kids", name: "Kids" },
    { id: "unisex", name: "Unisex" },
    { id: "electronics", name: "Electronics" },
  ];

  const colors = [
    { name: "Black", value: "black", class: "bg-black" },
    { name: "White", value: "white", class: "bg-white border border-gray-300" },
    { name: "Navy", value: "navy", class: "bg-blue-900" },
    { name: "Gray", value: "gray", class: "bg-gray-500" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
    { name: "Red", value: "red", class: "bg-red-500" },
    { name: "Pink", value: "pink", class: "bg-pink-400" },
    { name: "Brown", value: "brown", class: "bg-amber-800" },
    { name: "Tan", value: "tan", class: "bg-yellow-600" },
    { name: "Purple", value: "purple", class: "bg-purple-600" },
    { name: "Green", value: "green", class: "bg-green-500" },
    { name: "Yellow", value: "yellow", class: "bg-yellow-400" },
  ];

  const handleColorToggle = (color) => {
    setSelectedColor((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const clearFilters = () => {
    setSelectedDepartment("all");
    setSelectedCategory("all");
    setSelectedColor([]);
    setPriceRange([0, 500]);
    setSortBy("newest");
  };

  // Format date to relative time (e.g., "2 days ago")
  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB2B2]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-24 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slideIn">
          {notificationMessage}
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-8 w-8" />
                <h1 className="text-5xl font-bold">New Arrivals</h1>
              </div>
              <p className="text-xl opacity-90 mb-6">
                Discover the latest trends fresh off the runway
              </p>

              {/* Stats */}
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Updated Weekly</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>{products.length} New Items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Banner */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-pink-100 p-3 rounded-full">
              <Sparkles className="h-6 w-6 text-[#FFB2B2]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Just Dropped</h3>
              <p className="text-sm text-gray-500">
                Be the first to shop our newest styles
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
              {
                products.filter(
                  (p) =>
                    new Date(p.arrivalDate) >
                    new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
                ).length
              }{" "}
              New this week
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-3"
          >
            <Filter className="h-5 w-5" />
            Filter & Sort
          </button>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#FFB2B2] hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* Department Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Department</h3>
                <div className="space-y-2">
                  {departments.map((dept) => (
                    <label
                      key={dept.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="department"
                        value={dept.id}
                        checked={selectedDepartment === dept.id}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="w-4 h-4 text-[#FFB2B2] focus:ring-[#FFB2B2]"
                      />
                      <span className="text-gray-700">{dept.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-[#FFB2B2] focus:ring-[#FFB2B2]"
                      />
                      <span className="text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => handleColorToggle(color.value)}
                      className={`w-8 h-8 rounded-full ${color.class} border-2 transition-all ${
                        selectedColor.includes(color.value)
                          ? "border-[#FFB2B2] scale-110 ring-2 ring-[#FFB2B2] ring-offset-2"
                          : "border-transparent hover:scale-105"
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full accent-[#FFB2B2]"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Products */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-gray-600">
                  {filteredProducts.length} new products
                </span>

                <div className="flex items-center gap-2">
                  <label className="text-gray-600 text-sm">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <p className="text-gray-500 text-lg">
                  No new products found matching your criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-[#FFB2B2] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer relative"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {/* New Badge */}
                    <div className="absolute top-3 left-3 z-10 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      New Arrival
                    </div>

                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      {product.isSale && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          Sale
                        </span>
                      )}

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => handleToggleFavorite(product, e)}
                        className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition transform hover:scale-110"
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            isFavorite(product.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          {product.brand}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500 capitalize">
                          {product.department}
                        </span>
                      </div>

                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[#FFB2B2]">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">
                            {product.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl font-bold text-[#FFB2B2]">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Arrival Date */}
                      <div className="text-xs text-gray-400 mb-3">
                        Added {getRelativeTime(product.arrivalDate)}
                      </div>

                      {/* Available Colors */}
                      {product.colors && (
                        <div className="flex items-center gap-1 mb-3">
                          {product.colors.slice(0, 4).map((color, index) => {
                            const colorObj = colors.find(
                              (c) => c.value === color,
                            );
                            return (
                              <div
                                key={index}
                                className={`w-5 h-5 rounded-full ${colorObj?.class} border border-gray-300`}
                                title={color}
                              />
                            );
                          })}
                        </div>
                      )}

                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          alert(`${product.name} added to cart!`);
                        }}
                        className="w-full bg-[#FFB2B2] text-white py-2.5 rounded-lg hover:bg-[#ff9f9f] transition flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg">Filters</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X />
              </button>
            </div>

            {/* Mobile Filter Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Department</h3>
                <div className="space-y-2">
                  {departments.map((dept) => (
                    <label key={dept.id} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="mobileDepartment"
                        value={dept.id}
                        checked={selectedDepartment === dept.id}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="text-[#FFB2B2]"
                      />
                      <span className="text-gray-700">{dept.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="radio"
                        name="mobileCategory"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-[#FFB2B2]"
                      />
                      <span className="text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => handleColorToggle(color.value)}
                      className={`w-8 h-8 rounded-full ${color.class} border-2 ${
                        selectedColor.includes(color.value)
                          ? "border-[#FFB2B2]"
                          : "border-transparent"
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <button
                  onClick={clearFilters}
                  className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 bg-[#FFB2B2] text-white py-2 rounded-lg hover:bg-[#ff9f9f]"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewArrivalsPage;
