// AccessoriesPage.jsx
import React, { useState, useEffect } from "react";
import {
  Heart,
  ShoppingBag,
  Filter,
  X,
  Star,
  Eye,
  Menu,
  Watch,
  Gem,
  Briefcase, // Changed from Bag to Briefcase
  Glasses,
} from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const AccessoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const { toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();

  // Mock accessories products data
  useEffect(() => {
    setTimeout(() => {
      const mockProducts = [
        // Watches
        {
          id: 201,
          name: "Classic Leather Watch",
          category: "watches",
          gender: "men",
          price: 149.99,
          originalPrice: 199.99,
          rating: 4.7,
          reviews: 234,
          image:
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["brown", "black"],
          material: "Leather",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: ["Water Resistant", "Chronograph", "Date Display"],
        },
        {
          id: 202,
          name: "Stainless Steel Chronograph",
          category: "watches",
          gender: "men",
          price: 249.99,
          originalPrice: 329.99,
          rating: 4.8,
          reviews: 156,
          image:
            "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["silver", "gold"],
          material: "Stainless Steel",
          brand: "FashionHub",
          isNew: false,
          isSale: true,
          features: [
            "Sapphire Crystal",
            "100m Water Resistant",
            "Swiss Movement",
          ],
        },
        {
          id: 203,
          name: "Women's Rose Gold Watch",
          category: "watches",
          gender: "women",
          price: 179.99,
          originalPrice: 229.99,
          rating: 4.9,
          reviews: 312,
          image:
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["rose gold", "silver"],
          material: "Stainless Steel",
          brand: "FashionHub",
          isNew: true,
          isSale: false,
          features: [
            "Mother of Pearl Dial",
            "Crystal Accents",
            "Quartz Movement",
          ],
        },
        {
          id: 204,
          name: "Minimalist Leather Strap Watch",
          category: "watches",
          gender: "women",
          price: 99.99,
          originalPrice: 129.99,
          rating: 4.6,
          reviews: 187,
          image:
            "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["tan", "black", "navy"],
          material: "Leather",
          brand: "FashionHub",
          isNew: false,
          isSale: true,
          features: ["Japanese Movement", "Thin Profile", "Easy Read"],
        },

        // Bags
        {
          id: 205,
          name: "Men's Leather Backpack",
          category: "bags",
          gender: "men",
          price: 89.99,
          originalPrice: 129.99,
          rating: 4.7,
          reviews: 245,
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["brown", "black"],
          material: "Leather",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: ["Laptop Compartment", "Water Resistant", "Padded Straps"],
        },
        {
          id: 206,
          name: "Women's Tote Bag",
          category: "bags",
          gender: "women",
          price: 79.99,
          originalPrice: 99.99,
          rating: 4.8,
          reviews: 423,
          image:
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["beige", "black", "navy"],
          material: "Canvas",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: ["Spacious Interior", "Magnetic Closure", "Inner Pockets"],
        },
        {
          id: 207,
          name: "Crossbody Bag",
          category: "bags",
          gender: "women",
          price: 49.99,
          originalPrice: 69.99,
          rating: 4.6,
          reviews: 178,
          image:
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["brown", "black", "red"],
          material: "Leather",
          brand: "FashionHub",
          isNew: false,
          isSale: true,
          features: [
            "Adjustable Strap",
            "Multiple Compartments",
            "Lightweight",
          ],
        },
        {
          id: 208,
          name: "Travel Duffel Bag",
          category: "bags",
          gender: "unisex",
          price: 69.99,
          originalPrice: 89.99,
          rating: 4.5,
          reviews: 134,
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "gray", "navy"],
          material: "Nylon",
          brand: "FashionHub",
          isNew: false,
          isSale: false,
          features: ["Water Resistant", "Shoe Compartment", "Shoulder Strap"],
        },

        // Jewelry
        {
          id: 209,
          name: "Gold Chain Necklace",
          category: "jewelry",
          gender: "men",
          price: 89.99,
          originalPrice: 129.99,
          rating: 4.7,
          reviews: 89,
          image:
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["gold"],
          material: "Stainless Steel",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: [
            "Hypoallergenic",
            "Tarnish Resistant",
            "Adjustable Length",
          ],
        },
        {
          id: 210,
          name: "Pearl Earrings",
          category: "jewelry",
          gender: "women",
          price: 39.99,
          originalPrice: 59.99,
          rating: 4.9,
          reviews: 267,
          image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["white", "cream"],
          material: "Freshwater Pearl",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: [
            "Sterling Silver Backs",
            "Gift Box Included",
            "Classic Design",
          ],
        },
        {
          id: 211,
          name: "Silver Bracelet",
          category: "jewelry",
          gender: "women",
          price: 29.99,
          originalPrice: 44.99,
          rating: 4.6,
          reviews: 145,
          image:
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["silver"],
          material: "Sterling Silver",
          brand: "FashionHub",
          isNew: false,
          isSale: true,
          features: ["Adjustable", "Engravable", "Matching Rings Available"],
        },
        {
          id: 212,
          name: "Men's Ring Set",
          category: "jewelry",
          gender: "men",
          price: 49.99,
          originalPrice: 69.99,
          rating: 4.5,
          reviews: 67,
          image:
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["silver", "black"],
          material: "Stainless Steel",
          brand: "FashionHub",
          isNew: true,
          isSale: false,
          features: ["Set of 3", "Comfort Fit", "Modern Design"],
        },

        // Sunglasses
        {
          id: 213,
          name: "Aviator Sunglasses",
          category: "sunglasses",
          gender: "unisex",
          price: 59.99,
          originalPrice: 89.99,
          rating: 4.7,
          reviews: 312,
          image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["gold", "silver"],
          material: "Metal",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: ["UV400 Protection", "Polarized", "Includes Case"],
        },
        {
          id: 214,
          name: "Cat Eye Sunglasses",
          category: "sunglasses",
          gender: "women",
          price: 49.99,
          originalPrice: 69.99,
          rating: 4.8,
          reviews: 198,
          image:
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "tortoise"],
          material: "Acetate",
          brand: "FashionHub",
          isNew: true,
          isSale: false,
          features: [
            "100% UV Protection",
            "Scratch Resistant",
            "Fashion Forward",
          ],
        },
        {
          id: 215,
          name: "Sport Sunglasses",
          category: "sunglasses",
          gender: "men",
          price: 79.99,
          originalPrice: 99.99,
          rating: 4.6,
          reviews: 145,
          image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "blue"],
          material: "Polycarbonate",
          brand: "FashionHub",
          isNew: false,
          isSale: true,
          features: ["Impact Resistant", "Polarized", "Non-Slip Grip"],
        },

        // Hats
        {
          id: 216,
          name: "Baseball Cap",
          category: "hats",
          gender: "unisex",
          price: 24.99,
          originalPrice: 34.99,
          rating: 4.6,
          reviews: 234,
          image:
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "navy", "gray", "red"],
          material: "Cotton",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: ["Adjustable Strap", "Breathable", "Curved Brim"],
        },
        {
          id: 217,
          name: "Wide Brim Sun Hat",
          category: "hats",
          gender: "women",
          price: 34.99,
          originalPrice: 44.99,
          rating: 4.7,
          reviews: 156,
          image:
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["beige", "black", "straw"],
          material: "Straw",
          brand: "FashionHub",
          isNew: false,
          isSale: true,
          features: ["UPF 50+", "Packable", "Chin Strap"],
        },
        {
          id: 218,
          name: "Winter Beanie",
          category: "hats",
          gender: "unisex",
          price: 19.99,
          originalPrice: 29.99,
          rating: 4.8,
          reviews: 312,
          image:
            "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["black", "gray", "navy", "burgundy"],
          material: "Acrylic",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: ["Fleece Lined", "One Size", "Foldable Cuff"],
        },

        // Scarves
        {
          id: 219,
          name: "Cashmere Blend Scarf",
          category: "scarves",
          gender: "women",
          price: 39.99,
          originalPrice: 59.99,
          rating: 4.8,
          reviews: 187,
          image:
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["burgundy", "navy", "gray", "cream"],
          material: "Cashmere Blend",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: ["Extra Soft", "Fringed Ends", "Generous Size"],
        },
        {
          id: 220,
          name: "Silk Square Scarf",
          category: "scarves",
          gender: "women",
          price: 29.99,
          originalPrice: 44.99,
          rating: 4.7,
          reviews: 98,
          image:
            "https://images.unsplash.com/photo-1584037173087-283765a5d1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["multi"],
          material: "Silk",
          brand: "FashionHub",
          isNew: false,
          isSale: true,
          features: ["Hand Rolled Edges", "Versatile Styling", "Artisan Print"],
        },
        {
          id: 221,
          name: "Men's Wool Scarf",
          category: "scarves",
          gender: "men",
          price: 34.99,
          originalPrice: 49.99,
          rating: 4.6,
          reviews: 134,
          image:
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["charcoal", "navy", "burgundy"],
          material: "Wool",
          brand: "FashionHub",
          isNew: true,
          isSale: false,
          features: ["Classic Rib Knit", "Extra Length", "Made in Italy"],
        },

        // Belts
        {
          id: 222,
          name: "Leather Belt",
          category: "belts",
          gender: "men",
          price: 29.99,
          originalPrice: 44.99,
          rating: 4.6,
          reviews: 245,
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["brown", "black"],
          material: "Leather",
          brand: "FashionHub",
          isNew: true,
          isSale: true,
          features: ["Reversible", "Classic Buckle", "Adjustable"],
        },
        {
          id: 223,
          name: "Women's Fashion Belt",
          category: "belts",
          gender: "women",
          price: 24.99,
          originalPrice: 34.99,
          rating: 4.5,
          reviews: 167,
          image:
            "https://images.unsplash.com/photo-1624376833005-93cdf9c4b9e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          colors: ["brown", "black", "tan"],
          material: "Leather",
          brand: "FashionHub",
          isNew: false,
          isSale: true,
          features: ["Gold Buckle", "Skinny Style", "Perforated Design"],
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
      filtered = filtered.filter(
        (p) => p.gender === selectedGender || p.gender === "unisex",
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedMaterial.length > 0) {
      filtered = filtered.filter((p) =>
        selectedMaterial.includes(p.material.toLowerCase()),
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
    selectedMaterial,
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
    { id: "all", name: "All Accessories", icon: null },
    { id: "watches", name: "Watches", icon: "watch" },
    { id: "bags", name: "Bags", icon: "briefcase" }, // Changed from bag to briefcase
    { id: "jewelry", name: "Jewelry", icon: "gem" },
    { id: "sunglasses", name: "Sunglasses", icon: "glasses" },
    { id: "hats", name: "Hats", icon: null },
    { id: "scarves", name: "Scarves", icon: null },
    { id: "belts", name: "Belts", icon: null },
  ];

  const materials = [
    "leather",
    "stainless steel",
    "silver",
    "gold",
    "canvas",
    "cotton",
    "wool",
    "silk",
    "acetate",
    "nylon",
  ];

  const colors = [
    { name: "Black", value: "black", class: "bg-black" },
    { name: "White", value: "white", class: "bg-white border border-gray-300" },
    { name: "Navy", value: "navy", class: "bg-blue-900" },
    { name: "Gray", value: "gray", class: "bg-gray-500" },
    { name: "Brown", value: "brown", class: "bg-amber-800" },
    { name: "Tan", value: "tan", class: "bg-yellow-600" },
    { name: "Beige", value: "beige", class: "bg-yellow-100" },
    { name: "Burgundy", value: "burgundy", class: "bg-red-800" },
    { name: "Gold", value: "gold", class: "bg-yellow-500" },
    { name: "Silver", value: "silver", class: "bg-gray-300" },
    { name: "Rose Gold", value: "rose gold", class: "bg-pink-400" },
    { name: "Red", value: "red", class: "bg-red-500" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
    { name: "Green", value: "green", class: "bg-green-500" },
  ];

  const handleMaterialToggle = (material) => {
    setSelectedMaterial((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material],
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
    setSelectedMaterial([]);
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
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Accessories Collection
              </h1>
              <p className="text-lg opacity-90">
                Complete your look with our premium accessories
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

      {/* Category Icons - Quick Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.slice(1).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex flex-col items-center p-3 rounded-lg transition ${
                selectedCategory === cat.id
                  ? "bg-[#FFB2B2] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat.icon === "watch" && <Watch className="h-6 w-6 mb-1" />}
              {cat.icon === "briefcase" && (
                <Briefcase className="h-6 w-6 mb-1" />
              )}
              {cat.icon === "gem" && <Gem className="h-6 w-6 mb-1" />}
              {cat.icon === "glasses" && <Glasses className="h-6 w-6 mb-1" />}
              <span className="text-xs">{cat.name}</span>
            </button>
          ))}
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
                  {["all", "men", "women", "unisex"].map((gender) => (
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

              {/* Material Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Material</h3>
                <div className="flex flex-wrap gap-2">
                  {materials.slice(0, 8).map((material) => (
                    <button
                      key={material}
                      onClick={() => handleMaterialToggle(material)}
                      className={`px-3 py-1.5 text-sm border rounded-md transition ${
                        selectedMaterial.includes(material)
                          ? "bg-[#FFB2B2] text-white border-[#FFB2B2]"
                          : "border-gray-300 hover:border-[#FFB2B2] hover:text-[#FFB2B2]"
                      }`}
                    >
                      {material}
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
                          {product.category}
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

                      {/* Material */}
                      <div className="text-xs text-gray-500 mb-3">
                        <span className="font-medium">Material:</span>{" "}
                        {product.material}
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
                  {["all", "men", "women", "unisex"].map((gender) => (
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
                <h3 className="font-medium mb-3">Material</h3>
                <div className="flex flex-wrap gap-2">
                  {materials.slice(0, 8).map((material) => (
                    <button
                      key={material}
                      onClick={() => handleMaterialToggle(material)}
                      className={`px-3 py-1.5 text-sm border rounded-md ${
                        selectedMaterial.includes(material)
                          ? "bg-[#FFB2B2] text-white border-[#FFB2B2]"
                          : "border-gray-300"
                      }`}
                    >
                      {material}
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
                  Accessories Categories
                </h3>
                <div className="space-y-2 pl-2">
                  <a
                    href="/accessories/watches"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Watches
                  </a>
                  <a
                    href="/accessories/bags"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Bags
                  </a>
                  <a
                    href="/accessories/jewelry"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Jewelry
                  </a>
                  <a
                    href="/accessories/sunglasses"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Sunglasses
                  </a>
                  <a
                    href="/accessories/hats"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Hats
                  </a>
                  <a
                    href="/accessories/scarves"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Scarves
                  </a>
                  <a
                    href="/accessories/belts"
                    className="block py-1 text-gray-600 hover:text-[#FFB2B2]"
                  >
                    Belts
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

export default AccessoriesPage;
