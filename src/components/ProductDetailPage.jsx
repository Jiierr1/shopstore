// ProductDetailPage.jsx
import React, { useState, useEffect } from "react";
import {
  Heart,
  ShoppingBag,
  Star,
  Truck,
  RotateCcw,
  Shield,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Facebook,
  Twitter,
  Instagram,
  Share2,
} from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { toggleFavorite, isFavorite } = useFavorites();

  // Mock product data - In real app, fetch based on id
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockProduct = {
        id: parseInt(id) || 1,
        name: "Classic Cotton T-Shirt",
        brand: "FashionHub",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.5,
        reviews: 128,
        description:
          "Experience ultimate comfort with our Classic Cotton T-Shirt. Made from 100% premium cotton, this t-shirt is perfect for everyday wear. The breathable fabric keeps you cool while the classic fit ensures you look great all day long.",
        features: [
          "100% Premium Cotton",
          "Breathable fabric",
          "Classic fit",
          "Machine washable",
          "Pre-shrunk",
          "Reinforced stitching",
        ],
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
        colors: [
          { name: "Black", value: "black", class: "bg-black", inStock: true },
          {
            name: "White",
            value: "white",
            class: "bg-white border border-gray-300",
            inStock: true,
          },
          { name: "Navy", value: "navy", class: "bg-blue-900", inStock: true },
          { name: "Gray", value: "gray", class: "bg-gray-500", inStock: true },
          { name: "Red", value: "red", class: "bg-red-500", inStock: false },
        ],
        sizes: [
          { name: "XS", inStock: true },
          { name: "S", inStock: true },
          { name: "M", inStock: true },
          { name: "L", inStock: true },
          { name: "XL", inStock: false },
          { name: "XXL", inStock: false },
        ],
        category: "tshirts",
        gender: "men",
        isNew: true,
        isSale: true,
        sku: "FHT-12345",
        inStock: true,
        deliveryInfo: {
          freeShipping: true,
          estimatedDays: "3-5 business days",
          returnDays: 30,
        },
      };

      setProduct(mockProduct);

      // Mock related products
      setRelatedProducts([
        {
          id: 2,
          name: "Slim Fit Denim Jeans",
          price: 79.99,
          image:
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          rating: 4.3,
        },
        {
          id: 3,
          name: "Casual Hoodie",
          price: 49.99,
          image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          rating: 4.7,
        },
        {
          id: 4,
          name: "Formal Blazer",
          price: 149.99,
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          rating: 4.6,
        },
        {
          id: 5,
          name: "Floral Summer Dress",
          price: 59.99,
          image:
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          rating: 4.8,
        },
      ]);

      setLoading(false);
    }, 1000);
  }, [id]);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    if (product) {
      toggleFavorite(product);
      const isFav = isFavorite(product.id);
      setNotificationMessage(
        isFav
          ? `${product.name} removed from favorites`
          : `${product.name} added to favorites`,
      );
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setNotificationMessage("Please select a size");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }
    if (!selectedColor) {
      setNotificationMessage("Please select a color");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }

    // Add to cart logic here
    setNotificationMessage(`${quantity} × ${product.name} added to cart!`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB2B2]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate("/shop")}
            className="bg-[#FFB2B2] text-white px-6 py-3 rounded-lg hover:bg-[#ff9f9f] transition"
          >
            Continue Shopping
          </button>
        </div>
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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 hover:text-[#FFB2B2]"
            >
              Home
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => navigate("/shop")}
              className="text-gray-500 hover:text-[#FFB2B2]"
            >
              Shop
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => navigate(`/shop/${product.gender}`)}
              className="text-gray-500 hover:text-[#FFB2B2] capitalize"
            >
              {product.gender}'s {product.category}
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Images */}
            <div className="lg:w-1/2">
              {/* Main Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Image Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition shadow-md"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition shadow-md"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                      New Arrival
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                      Sale
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={handleToggleFavorite}
                  className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition transform hover:scale-110"
                >
                  <Heart
                    className={`h-6 w-6 ${
                      isFavorite(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === index
                        ? "border-[#FFB2B2]"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="lg:w-1/2">
              {/* Brand and Title */}
              <div className="mb-6">
                <span className="text-sm text-[#FFB2B2] font-semibold uppercase tracking-wider">
                  {product.brand}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                  <span className="text-sm text-gray-400">|</span>
                  <span className="text-sm text-gray-500">
                    SKU: {product.sku}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-[#FFB2B2]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                        Save $
                        {(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Inclusive of all taxes
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Key Features
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-[#FFB2B2] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Color</h3>
                  <span className="text-sm text-gray-500">
                    {selectedColor
                      ? `Selected: ${selectedColor}`
                      : "Select a color"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() =>
                        color.inStock && setSelectedColor(color.value)
                      }
                      disabled={!color.inStock}
                      className={`relative group ${!color.inStock && "opacity-50 cursor-not-allowed"}`}
                      title={
                        color.inStock
                          ? color.name
                          : `${color.name} (Out of Stock)`
                      }
                    >
                      <div
                        className={`w-12 h-12 rounded-full ${color.class} border-2 transition-all ${
                          selectedColor === color.value
                            ? "border-[#FFB2B2] scale-110 ring-2 ring-[#FFB2B2] ring-offset-2"
                            : "border-transparent hover:scale-105"
                        }`}
                      />
                      {!color.inStock && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-0.5 h-8 bg-red-500 rotate-45"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Size</h3>
                  <button className="text-sm text-[#FFB2B2] hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => size.inStock && setSelectedSize(size.name)}
                      disabled={!size.inStock}
                      className={`min-w-[3.5rem] py-2 px-4 border rounded-lg transition ${
                        selectedSize === size.name
                          ? "bg-[#FFB2B2] text-white border-[#FFB2B2]"
                          : size.inStock
                            ? "border-gray-300 hover:border-[#FFB2B2] hover:text-[#FFB2B2]"
                            : "border-gray-200 text-gray-300 cursor-not-allowed"
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="p-3 hover:bg-gray-100 transition"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="w-16 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="p-3 hover:bg-gray-100 transition"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#FFB2B2] text-white py-3 px-6 rounded-lg hover:bg-[#ff9f9f] transition flex items-center justify-center gap-3 text-lg font-medium"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>

              {/* Delivery Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <Truck className="h-5 w-5 text-[#FFB2B2]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Free Shipping</p>
                    <p className="text-xs text-gray-500">
                      {product.deliveryInfo.estimatedDays}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <RotateCcw className="h-5 w-5 text-[#FFB2B2]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Easy Returns</p>
                    <p className="text-xs text-gray-500">
                      {product.deliveryInfo.returnDays} days return
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <Shield className="h-5 w-5 text-[#FFB2B2]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Secure Payment</p>
                    <p className="text-xs text-gray-500">100% secure</p>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t">
                <span className="text-gray-600">Share:</span>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Twitter className="h-5 w-5 text-sky-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Instagram className="h-5 w-5 text-pink-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-[#FFB2B2]">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">
                        {relatedProduct.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-[#FFB2B2]">
                      ${relatedProduct.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
