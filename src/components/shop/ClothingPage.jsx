// ClothingPage.jsx
import React, { useState, useEffect } from "react";
import { Heart, ShoppingBag, Filter, X, Star, Eye, Menu } from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const ClothingPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const { toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();

  // Mock products data
  useEffect(() => {
    setTimeout(() => {
      const mockProducts = [
        {
          id: 1,
          name: "Classic Cotton T-Shirt",
          category: "tshirts",
          gender: "men",
          price: 29.99,
          originalPrice: 39.99,
          rating: 4.5,
          reviews: 128,
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "white", "navy", "gray"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
        },
        {
          id: 2,
          name: "Slim Fit Denim Jeans",
          category: "jeans",
          gender: "men",
          price: 79.99,
          originalPrice: 99.99,
          rating: 4.3,
          reviews: 89,
          image:
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "black", "gray"],
          sizes: ["30", "32", "34", "36", "38"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
        },
        {
          id: 3,
          name: "Casual Hoodie",
          category: "hoodies",
          gender: "men",
          price: 49.99,
          originalPrice: 59.99,
          rating: 4.7,
          reviews: 56,
          image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["gray", "black", "navy"],
          sizes: ["S", "M", "L", "XL"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
        },
        {
          id: 4,
          name: "Formal Blazer",
          category: "formal",
          gender: "men",
          price: 149.99,
          originalPrice: 199.99,
          rating: 4.6,
          reviews: 34,
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["navy", "black", "gray"],
          sizes: ["38", "40", "42", "44", "46"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
        },
        {
          id: 5,
          name: "Floral Summer Dress",
          category: "dresses",
          gender: "women",
          price: 59.99,
          originalPrice: 79.99,
          rating: 4.8,
          reviews: 215,
          image:
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["pink", "blue", "yellow"],
          sizes: ["XS", "S", "M", "L", "XL"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
        },
        {
          id: 6,
          name: "High-Waist Jeans",
          category: "jeans",
          gender: "women",
          price: 69.99,
          originalPrice: 89.99,
          rating: 4.4,
          reviews: 167,
          image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "black", "white"],
          sizes: ["24", "26", "28", "30", "32"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
        },
        {
          id: 7,
          name: "Cozy Sweater",
          category: "sweaters",
          gender: "women",
          price: 45.99,
          originalPrice: 55.99,
          rating: 4.5,
          reviews: 92,
          image:
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["cream", "gray", "pink"],
          sizes: ["S", "M", "L", "XL"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
        },
        {
          id: 8,
          name: "Leather Jacket",
          category: "jackets",
          gender: "women",
          price: 129.99,
          originalPrice: 179.99,
          rating: 4.7,
          reviews: 78,
          image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "brown"],
          sizes: ["S", "M", "L", "XL"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
        },
        {
          id: 9,
          name: "Cartoon T-Shirt",
          category: "tshirts",
          gender: "kids",
          price: 19.99,
          originalPrice: 24.99,
          rating: 4.6,
          reviews: 45,
          image:
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "red", "yellow"],
          sizes: ["2T", "3T", "4T", "5T", "6"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
        },
        {
          id: 10,
          name: "Kids Denim Overall",
          category: "jeans",
          gender: "kids",
          price: 34.99,
          originalPrice: 44.99,
          rating: 4.4,
          reviews: 23,
          image:
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue"],
          sizes: ["2T", "3T", "4T", "5T"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
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

    if (selectedGender !== "all") {
      filtered = filtered.filter((p) => p.gender === selectedGender);
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedSize.length > 0) {
      filtered = filtered.filter((p) =>
        p.sizes.some((size) => selectedSize.includes(size)),
      );
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
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [
    products,
    selectedGender,
    selectedCategory,
    selectedSize,
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
    { id: "all", name: "All Categories" },
    { id: "tshirts", name: "T-Shirts" },
    { id: "jeans", name: "Jeans" },
    { id: "hoodies", name: "Hoodies" },
    { id: "formal", name: "Formal Wear" },
    { id: "dresses", name: "Dresses" },
    { id: "sweaters", name: "Sweaters" },
    { id: "jackets", name: "Jackets" },
  ];

  const sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "2T",
    "3T",
    "4T",
    "5T",
    "6",
    "24",
    "26",
    "28",
    "30",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
  ];

  const colors = [
    { name: "Black", value: "black", class: "bg-black" },
    { name: "White", value: "white", class: "bg-white border border-gray-300" },
    { name: "Navy", value: "navy", class: "bg-blue-900" },
    { name: "Gray", value: "gray", class: "bg-gray-500" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
    { name: "Red", value: "red", class: "bg-red-500" },
    { name: "Pink", value: "pink", class: "bg-pink-400" },
    { name: "Yellow", value: "yellow", class: "bg-yellow-400" },
    { name: "Cream", value: "cream", class: "bg-yellow-100" },
    { name: "Brown", value: "brown", class: "bg-amber-800" },
  ];

  const handleSizeToggle = (size) => {
    setSelectedSize((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const handleColorToggle = (color) => {
    setSelectedColor((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const clearFilters = () => {
    setSelectedGender("all");
    setSelectedCategory("all");
    setSelectedSize([]);
    setSelectedColor([]);
    setPriceRange([0, 500]);
    setSortBy("featured");
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
      <div className="bg-[#FFB2B2] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Clothing Collection</h1>
              <p className="text-lg opacity-90">
                Discover the latest trends in fashion
              </p>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(true)}
              className="lg:hidden bg-white/20 p-3 rounded-lg hover:bg-white/30 transition"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
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
          {/* Sidebar - Always Visible */}
          <div className="w-full lg:w-64 flex-shrink-0">
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

              {/* Gender Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Gender</h3>
                <div className="space-y-2">
                  {["all", "men", "women", "kids"].map((gender) => (
                    <label
                      key={gender}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={selectedGender === gender}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="w-4 h-4 text-[#FFB2B2] focus:ring-[#FFB2B2]"
                      />
                      <span className="text-gray-700 capitalize">{gender}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
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

              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.slice(0, 12).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeToggle(size)}
                      className={`px-3 py-1.5 text-sm border rounded-md transition ${
                        selectedSize.includes(size)
                          ? "bg-[#FFB2B2] text-white border-[#FFB2B2]"
                          : "border-gray-300 hover:border-[#FFB2B2] hover:text-[#FFB2B2]"
                      }`}
                    >
                      {size}
                    </button>
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
                  {filteredProducts.length} products found
                </span>

                <div className="flex items-center gap-2">
                  <label className="text-gray-600 text-sm">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria.
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
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      {product.isSale && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          Sale
                        </span>
                      )}

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => handleToggleFavorite(product, e)}
                        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition transform hover:scale-110"
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
                          {product.gender}
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
                <h3 className="font-medium mb-3">Gender</h3>
                <div className="space-y-2">
                  {["all", "men", "women", "kids"].map((gender) => (
                    <label key={gender} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="mobileGender"
                        value={gender}
                        checked={selectedGender === gender}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="text-[#FFB2B2]"
                      />
                      <span className="text-gray-700 capitalize">{gender}</span>
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
                <h3 className="font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.slice(0, 12).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeToggle(size)}
                      className={`px-3 py-1.5 text-sm border rounded-md ${
                        selectedSize.includes(size)
                          ? "bg-[#FFB2B2] text-white border-[#FFB2B2]"
                          : "border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
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
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
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

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute left-0 top-0 h-full w-80 bg-white p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg">Menu</h2>
              <button
                onClick={() => setShowMobileMenu(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X />
              </button>
            </div>

            <nav className="space-y-4">
              <a
                href="/"
                className="block py-2 text-gray-700 hover:text-[#FFB2B2] font-medium"
              >
                Home
              </a>
              <div className="border-t pt-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Shop by Category
                </h3>
                <div className="space-y-2 pl-2">
                  <a
                    href="/shop/men"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Men's Clothing
                  </a>
                  <a
                    href="/shop/women"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Women's Clothing
                  </a>
                  <a
                    href="/shop/kids"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Kids' Clothing
                  </a>
                </div>
              </div>
              <div className="border-t pt-4">
                <a
                  href="/favorites"
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-[#FFB2B2]"
                >
                  <Heart className="h-5 w-5" />
                  <span>Favorites</span>
                </a>
                <a
                  href="/cart"
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-[#FFB2B2]"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Cart</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClothingPage;
