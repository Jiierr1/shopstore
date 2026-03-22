import React, { useState } from "react";
import {
  ShoppingBag,
  Heart,
  Star,
  Clock,
  Tag,
  Eye,
  Filter,
  ChevronDown,
  ChevronRight,
  Percent,
  Gift,
  Sparkles,
  Zap,
  Award,
  Gem,
  X,
} from "lucide-react";
import t_shirt from "../assets/shop/t_shirt.png";
const SalePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { id: "all", name: "All Sale", count: 156 },
    { id: "women", name: "Women's Fashion", count: 67 },
    { id: "men", name: "Men's Fashion", count: 45 },
    { id: "kids", name: "Kids Collection", count: 23 },
    { id: "accessories", name: "Accessories", count: 21 },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "White", class: "bg-white border border-gray-300" },
    { name: "Red", class: "bg-red-500" },
    { name: "Blue", class: "bg-blue-500" },
    { name: "Green", class: "bg-green-500" },
    { name: "Yellow", class: "bg-yellow-500" },
    { name: "Purple", class: "bg-purple-500" },
    { name: "Pink", class: "bg-pink-500" },
  ];

  const discountRanges = [
    { id: "all", label: "All Discounts" },
    { id: "10-20", label: "10% - 20% Off" },
    { id: "20-30", label: "20% - 30% Off" },
    { id: "30-40", label: "30% - 40% Off" },
    { id: "40-50", label: "40% - 50% Off" },
    { id: "50+", label: "50% Off or More" },
  ];

  const saleProducts = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      originalPrice: 49.99,
      discount: 40,
      rating: 4.5,
      reviews: 128,
      image: t_shirt,
      category: "women",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black"],
      isNew: false,
      isFeatured: true,
      stock: 15,
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      price: 59.99,
      originalPrice: 99.99,
      discount: 40,
      rating: 4.8,
      reviews: 95,
      image: "/api/placeholder/300/400",
      category: "men",
      sizes: ["30", "32", "34", "36"],
      colors: ["Blue", "Black"],
      isNew: false,
      isFeatured: true,
      stock: 8,
    },
    {
      id: 3,
      name: "Floral Summer Dress",
      price: 39.99,
      originalPrice: 79.99,
      discount: 50,
      rating: 4.6,
      reviews: 67,
      image: "/api/placeholder/300/400",
      category: "women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Pink", "Blue"],
      isNew: true,
      isFeatured: true,
      stock: 12,
    },
    {
      id: 4,
      name: "Leather Crossbody Bag",
      price: 34.99,
      originalPrice: 69.99,
      discount: 50,
      rating: 4.7,
      reviews: 42,
      image: "/api/placeholder/300/400",
      category: "accessories",
      sizes: ["One Size"],
      colors: ["Black", "Brown"],
      isNew: false,
      isFeatured: false,
      stock: 5,
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 59.99,
      originalPrice: 119.99,
      discount: 50,
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/300/400",
      category: "men",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["Black", "White", "Blue"],
      isNew: true,
      isFeatured: true,
      stock: 10,
    },
    {
      id: 6,
      name: "Cashmere Sweater",
      price: 89.99,
      originalPrice: 179.99,
      discount: 50,
      rating: 4.8,
      reviews: 34,
      image: "/api/placeholder/300/400",
      category: "women",
      sizes: ["S", "M", "L"],
      colors: ["Gray", "Navy", "Burgundy"],
      isNew: false,
      isFeatured: true,
      stock: 3,
    },
    {
      id: 7,
      name: "Kids Hoodie Set",
      price: 24.99,
      originalPrice: 49.99,
      discount: 50,
      rating: 4.5,
      reviews: 28,
      image: "/api/placeholder/300/400",
      category: "kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Red", "Blue", "Green"],
      isNew: true,
      isFeatured: false,
      stock: 20,
    },
    {
      id: 8,
      name: "Sports Bra & Leggings Set",
      price: 34.99,
      originalPrice: 59.99,
      discount: 42,
      rating: 4.7,
      reviews: 89,
      image: "/api/placeholder/300/400",
      category: "women",
      sizes: ["S", "M", "L"],
      colors: ["Black", "Purple", "Teal"],
      isNew: false,
      isFeatured: true,
      stock: 7,
    },
    {
      id: 9,
      name: "Wool Blend Coat",
      price: 129.99,
      originalPrice: 259.99,
      discount: 50,
      rating: 4.9,
      reviews: 23,
      image: "/api/placeholder/300/400",
      category: "women",
      sizes: ["S", "M", "L"],
      colors: ["Camel", "Black", "Gray"],
      isNew: true,
      isFeatured: true,
      stock: 4,
    },
    {
      id: 10,
      name: "Leather Belt",
      price: 14.99,
      originalPrice: 29.99,
      discount: 50,
      rating: 4.4,
      reviews: 67,
      image: "/api/placeholder/300/400",
      category: "accessories",
      sizes: ["S", "M", "L"],
      colors: ["Black", "Brown"],
      isNew: false,
      isFeatured: false,
      stock: 25,
    },
    {
      id: 11,
      name: "Graphic T-Shirt",
      price: 15.99,
      originalPrice: 29.99,
      discount: 47,
      rating: 4.5,
      reviews: 112,
      image: "/api/placeholder/300/400",
      category: "men",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Navy"],
      isNew: false,
      isFeatured: false,
      stock: 30,
    },
    {
      id: 12,
      name: "Kids Denim Jacket",
      price: 29.99,
      originalPrice: 59.99,
      discount: 50,
      rating: 4.6,
      reviews: 18,
      image: "/api/placeholder/300/400",
      category: "kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y"],
      colors: ["Blue", "Black"],
      isNew: true,
      isFeatured: true,
      stock: 6,
    },
  ];

  const bannerOffers = [
    {
      id: 1,
      title: "Flash Sale",
      discount: "50% OFF",
      description: "On selected items",
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      expires: "2h 15m",
    },
    {
      id: 2,
      title: "Clearance",
      discount: "Up to 70% OFF",
      description: "Last chance items",
      icon: Tag,
      color: "from-purple-400 to-pink-500",
      expires: "3 days",
    },
    {
      id: 3,
      title: "Buy 1 Get 1",
      discount: "BOGO Free",
      description: "On select styles",
      icon: Gift,
      color: "from-green-400 to-teal-500",
      expires: "Limited",
    },
  ];

  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const handleColorToggle = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedDiscount("all");
    setPriceRange({ min: 0, max: 500 });
  };

  const filteredProducts = saleProducts.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory)
      return false;
    if (
      selectedSizes.length > 0 &&
      !product.sizes.some((s) => selectedSizes.includes(s))
    )
      return false;
    if (
      selectedColors.length > 0 &&
      !product.colors.some((c) => selectedColors.includes(c))
    )
      return false;
    if (product.price < priceRange.min || product.price > priceRange.max)
      return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.reviews - a.reviews;
      case "discount":
        return b.discount - a.discount;
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-linear-to-b from-[#f8e2e2] to-[#ffe4e4]">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-red-500 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Percent className="h-8 w-8" />
              <h1 className="text-5xl md:text-6xl font-bold">Sale</h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Incredible deals on your favorite fashion items. Limited time
              offers!
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-3">
                <span className="text-2xl font-bold">Up to</span>
              </div>
              <div className="bg-white text-red-500 rounded-xl px-8 py-3">
                <span className="text-3xl font-bold">70% OFF</span>
              </div>
            </div>
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

      {/* Offer Banners */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bannerOffers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className={`bg-linear-to-r ${offer.color} rounded-2xl shadow-xl p-6 text-white transform hover:-translate-y-1 transition-all cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">{offer.title}</p>
                    <h3 className="text-2xl font-bold mt-1">
                      {offer.discount}
                    </h3>
                    <p className="text-sm opacity-80 mt-1">
                      {offer.description}
                    </p>
                    <div className="flex items-center gap-1 mt-3">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{offer.expires}</span>
                    </div>
                  </div>
                  <Icon className="h-16 w-16 opacity-30" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header with Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Sale Items
            </h2>
            <p className="text-gray-500">
              {filteredProducts.length} products on sale
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
            >
              <option value="popular">Most Popular</option>
              <option value="discount">Biggest Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>

            {/* View Mode Toggle */}
            <div className="hidden md:flex bg-white border border-gray-300 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#FFB2B2] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-2 h-2 bg-current rounded"></div>
                  <div className="w-2 h-2 bg-current rounded"></div>
                  <div className="w-2 h-2 bg-current rounded"></div>
                  <div className="w-2 h-2 bg-current rounded"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-[#FFB2B2] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex flex-col gap-0.5">
                  <div className="w-4 h-0.5 bg-current rounded"></div>
                  <div className="w-4 h-0.5 bg-current rounded"></div>
                  <div className="w-4 h-0.5 bg-current rounded"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:w-64 shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#FFB2B2] hover:text-[#ff9b9b]"
                >
                  Clear All
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat.id}
                          onChange={() => setSelectedCategory(cat.id)}
                          className="text-[#FFB2B2] focus:ring-[#FFB2B2]"
                        />
                        <span className="text-sm text-gray-600">
                          {cat.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        ({cat.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        max: parseInt(e.target.value),
                      })
                    }
                    className="w-full accent-[#FFB2B2]"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>${priceRange.min}</span>
                    <span>${priceRange.max}</span>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeToggle(size)}
                      className={`w-10 h-10 rounded-lg border-2 transition-all ${
                        selectedSizes.includes(size)
                          ? "border-[#FFB2B2] bg-[#FFB2B2] text-white"
                          : "border-gray-200 hover:border-gray-300 text-gray-600"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Colors</h4>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => handleColorToggle(color.name)}
                      className={`relative w-8 h-8 rounded-full transition-transform ${
                        selectedColors.includes(color.name)
                          ? "scale-110 ring-2 ring-[#FFB2B2] ring-offset-2"
                          : ""
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded-full ${color.class}`}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Discount Range */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Discount</h4>
                <select
                  value={selectedDiscount}
                  onChange={(e) => setSelectedDiscount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                >
                  {discountRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <Tag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-[#FFB2B2] text-white px-6 py-3 rounded-xl hover:bg-[#ff9b9b] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    : "space-y-4"
                }
              >
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all ${
                      viewMode === "list" ? "flex gap-4 p-4" : ""
                    }`}
                  >
                    {/* Product Image */}
                    <div
                      className={`relative ${viewMode === "list" ? "w-48 shrink-0" : "aspect-square"}`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Discount Badge */}
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        -{product.discount}%
                      </div>

                      {/* Quick View */}
                      <button className="absolute top-2 right-2 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FFB2B2] hover:text-white">
                        <Eye className="h-4 w-4" />
                      </button>

                      {/* Stock Status */}
                      {product.stock < 5 && (
                        <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                          Only {product.stock} left
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div
                      className={`p-3 flex-1 ${viewMode === "list" ? "flex flex-col justify-between" : ""}`}
                    >
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm mb-1">
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            ({product.reviews})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-[#FFB2B2] text-lg">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        </div>

                        {/* Sizes - List view only */}
                        {viewMode === "list" && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {product.sizes.map((size) => (
                              <span
                                key={size}
                                className="text-xs px-2 py-1 bg-gray-100 rounded"
                              >
                                {size}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Add to Cart */}
                      <button
                        className={`w-full bg-[#FFB2B2] text-white py-2 rounded-lg hover:bg-[#ff9b9b] transition-colors flex items-center justify-center gap-2 text-sm ${
                          viewMode === "list" ? "mt-4" : "mt-2"
                        }`}
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

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl border border-gray-300 hover:bg-[#FFB2B2] hover:text-white transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-xl border border-gray-300 hover:bg-[#FFB2B2] hover:text-white transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-xl border border-gray-300 hover:bg-[#FFB2B2] hover:text-white transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-xl border border-gray-300 hover:bg-[#FFB2B2] hover:text-white transition-colors">
              4
            </button>
            <button className="w-10 h-10 rounded-xl border border-gray-300 hover:bg-[#FFB2B2] hover:text-white transition-colors">
              5
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-linear-to-r from-[#FFB2B2] to-[#ff9b9b] py-16 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Out on Future Sales!
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new deals
            and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalePage;
