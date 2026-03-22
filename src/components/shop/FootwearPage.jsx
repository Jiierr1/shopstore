import React, { useState, useEffect } from "react";
import { Heart, ShoppingBag, Filter, X, Star, Eye, Menu } from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const FootwearPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const { toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();

  // Mock footwear products data
  useEffect(() => {
    setTimeout(() => {
      const mockProducts = [
        // Sneakers
        {
          id: 101,
          name: "Classic Leather Sneakers",
          category: "sneakers",
          gender: "men",
          price: 89.99,
          originalPrice: 129.99,
          rating: 4.7,
          reviews: 342,
          image:
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["white", "black", "navy"],
          sizes: ["7", "8", "9", "10", "11", "12"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          material: "Leather",
        },
        {
          id: 102,
          name: "Men's Running Shoes",
          category: "sports",
          gender: "men",
          price: 119.99,
          originalPrice: 159.99,
          rating: 4.8,
          reviews: 567,
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "red", "black"],
          sizes: ["7", "8", "9", "10", "11", "12", "13"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          material: "Mesh",
        },
        {
          id: 103,
          name: "Men's Formal Oxford Shoes",
          category: "formal",
          gender: "men",
          price: 149.99,
          originalPrice: 199.99,
          rating: 4.6,
          reviews: 189,
          image:
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "brown"],
          sizes: ["7", "8", "9", "10", "11", "12"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
          material: "Leather",
        },
        {
          id: 104,
          name: "Men's Hiking Boots",
          category: "boots",
          gender: "men",
          price: 179.99,
          originalPrice: 229.99,
          rating: 4.7,
          reviews: 234,
          image:
            "https://images.unsplash.com/photo-1520216186966-2cfe9aab65d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["brown", "black"],
          sizes: ["8", "9", "10", "11", "12"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          material: "Leather",
        },
        {
          id: 105,
          name: "Men's Canvas Slip-ons",
          category: "casual",
          gender: "men",
          price: 49.99,
          originalPrice: 69.99,
          rating: 4.4,
          reviews: 156,
          image:
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["gray", "navy", "black"],
          sizes: ["7", "8", "9", "10", "11"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
          material: "Canvas",
        },

        // boot
        {
          id: 106,
          name: "Women's Fashion Sneakers",
          category: "sneakers",
          gender: "women",
          price: 79.99,
          originalPrice: 99.99,
          rating: 4.7,
          reviews: 423,
          image:
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["white", "pink", "gray"],
          sizes: ["5", "6", "7", "8", "9", "10"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          material: "Leather",
        },
        {
          id: 107,
          name: "Women's High Heels",
          category: "heels",
          gender: "women",
          price: 89.99,
          originalPrice: 129.99,
          rating: 4.5,
          reviews: 267,
          image:
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "red", "nude"],
          sizes: ["5", "6", "7", "8", "9"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          material: "Leather",
        },
        {
          id: 108,
          name: "Women's Ankle Boots",
          category: "boots",
          gender: "women",
          price: 129.99,
          originalPrice: 169.99,
          rating: 4.8,
          reviews: 345,
          image:
            "https://images.unsplash.com/photo-1608256246200-53e635b7089e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "brown", "gray"],
          sizes: ["5", "6", "7", "8", "9", "10"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          material: "Suede",
        },
        {
          id: 109,
          name: "Women's Running Shoes",
          category: "sports",
          gender: "women",
          price: 109.99,
          originalPrice: 139.99,
          rating: 4.7,
          reviews: 289,
          image:
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["pink", "purple", "blue"],
          sizes: ["5", "6", "7", "8", "9", "10"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
          material: "Mesh",
        },
        {
          id: 110,
          name: "Women's Sandals",
          category: "sandals",
          gender: "women",
          price: 49.99,
          originalPrice: 69.99,
          rating: 4.5,
          reviews: 178,
          image:
            "https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["brown", "black", "tan"],
          sizes: ["5", "6", "7", "8", "9"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          material: "Leather",
        },

        // Kids' Footwear
        {
          id: 111,
          name: "Kids' Light-up Sneakers",
          category: "sneakers",
          gender: "kids",
          price: 39.99,
          originalPrice: 49.99,
          rating: 4.8,
          reviews: 412,
          image:
            "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "red", "black"],
          sizes: ["10", "11", "12", "13", "1", "2", "3"],
          isNew: true,
          isSale: true,
          brand: "FashionHub",
          material: "Synthetic",
        },
        {
          id: 112,
          name: "Kids' School Shoes",
          category: "formal",
          gender: "kids",
          price: 44.99,
          originalPrice: 59.99,
          rating: 4.6,
          reviews: 234,
          image:
            "https://images.unsplash.com/photo-1512374558403-5d372d5c6a12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "brown"],
          sizes: ["10", "11", "12", "13", "1", "2"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
          material: "Leather",
        },
        {
          id: 113,
          name: "Kids' Rain Boots",
          category: "boots",
          gender: "kids",
          price: 29.99,
          originalPrice: 39.99,
          rating: 4.5,
          reviews: 167,
          image:
            "https://images.unsplash.com/photo-1587563871167-f9b2b8a7d3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["yellow", "blue", "pink"],
          sizes: ["8", "9", "10", "11", "12", "13"],
          isNew: true,
          isSale: false,
          brand: "FashionHub",
          material: "Rubber",
        },
        {
          id: 114,
          name: "Kids' Athletic Shoes",
          category: "sports",
          gender: "kids",
          price: 34.99,
          originalPrice: 44.99,
          rating: 4.7,
          reviews: 198,
          image:
            "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["blue", "red", "green"],
          sizes: ["10", "11", "12", "13", "1", "2", "3"],
          isNew: false,
          isSale: true,
          brand: "FashionHub",
          material: "Mesh",
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
    { id: "all", name: "All Footwear" },
    { id: "sneakers", name: "Sneakers" },
    { id: "boots", name: "Boots" },
    { id: "formal", name: "Formal Shoes" },
    { id: "sports", name: "Sports Shoes" },
    { id: "casual", name: "Casual Shoes" },
    { id: "sandals", name: "Sandals" },
    { id: "heels", name: "Heels" },
  ];

  const sizes = [
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "1",
    "2",
    "3",
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
    setPriceRange([0, 300]);
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
      <div className="bg-linear-to-r from-[#FFB2B2] to-[#ff9f9f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Footwear Collection</h1>
              <p className="text-lg opacity-90">
                Step into style with our latest footwear
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
          {/* Sidebar - Filters */}
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
                <h3 className="font-medium mb-3">Size (US)</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
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
                    max="300"
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

                      {/* Material */}
                      <div className="text-xs text-gray-500 mb-3">
                        Material: {product.material}
                      </div>

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
                  {sizes.map((size) => (
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
                  Footwear Categories
                </h3>
                <div className="space-y-2 pl-2">
                  <a
                    href="/footwear/men"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Sneaker
                  </a>
                  <a
                    href="/footwear/women"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    boot
                  </a>
                  <a
                    href="/footwear/kids"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Kids' Footwear
                  </a>
                  <a
                    href="/footwear/sneakers"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Sneakers
                  </a>
                  <a
                    href="/footwear/boots"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Boots
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

export default FootwearPage;
