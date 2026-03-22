import React, { useState } from "react";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ChevronRight,
  Heart,
  Tag,
  Truck,
  Shield,
  ArrowLeft,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic White T-Shirt",
      brand: "FashionHub Basics",
      price: 29.99,
      originalPrice: 39.99,
      quantity: 2,
      size: "M",
      color: "White",
      image: "/api/placeholder/100/100",
      inStock: true,
      maxQuantity: 5,
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      brand: "Denim Co.",
      price: 79.99,
      originalPrice: null,
      quantity: 1,
      size: "32",
      color: "Blue",
      image: "/api/placeholder/100/100",
      inStock: true,
      maxQuantity: 3,
    },
    {
      id: 3,
      name: "Leather Jacket",
      brand: "Urban Style",
      price: 199.99,
      originalPrice: 249.99,
      quantity: 1,
      size: "L",
      color: "Black",
      image: "/api/placeholder/100/100",
      inStock: true,
      maxQuantity: 2,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [savedForLater, setSavedForLater] = useState([]);
  const [selectedItems, setSelectedItems] = useState([1, 2, 3]); // All selected by default
  const [isSummaryVisible, setIsSummaryVisible] = useState(false); // For mobile

  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 100 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount if promo applied
  const total = subtotal + shipping + tax - discount;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity) }
          : item,
      ),
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleMoveToWishlist = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setSavedForLater([...savedForLater, item]);
    handleRemoveItem(id);
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code");
    }
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    console.log(
      "Proceeding to checkout with items:",
      cartItems.filter((item) => selectedItems.includes(item.id)),
    );
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e2e2] to-[#ffe4e4]">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-900 p-1"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Shopping Cart
            </h1>
          </div>
          <div className="flex items-center gap-2 text-gray-600 ml-8 sm:ml-0">
            <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-medium text-sm sm:text-base">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            {/* Select All Bar */}
            <div className="bg-white rounded-t-xl sm:rounded-t-2xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200">
              <div className="flex items-center gap-3 sm:gap-4">
                <input
                  type="checkbox"
                  checked={
                    selectedItems.length === cartItems.length &&
                    cartItems.length > 0
                  }
                  onChange={handleSelectAll}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFB2B2] border-gray-300 rounded focus:ring-[#FFB2B2]"
                />
                <span className="font-medium text-gray-700 text-sm sm:text-base">
                  Select All ({cartItems.length}{" "}
                  {cartItems.length === 1 ? "item" : "items"})
                </span>
              </div>
              {selectedItems.length > 0 && (
                <button className="text-red-500 hover:text-red-700 text-sm font-medium sm:font-normal">
                  Delete Selected ({selectedItems.length})
                </button>
              )}
            </div>

            {/* Cart Items */}
            <div className="bg-white rounded-b-xl sm:rounded-b-2xl shadow-lg mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-6 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Checkbox and Image Row for Mobile */}
                    <div className="flex items-start gap-3 sm:block">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFB2B2] border-gray-300 rounded focus:ring-[#FFB2B2] sm:mt-4"
                      />

                      {/* Product Image */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 ml-2 sm:ml-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                            {item.brand}
                          </p>
                          <div className="flex flex-wrap gap-2 sm:gap-4 mt-1 sm:mt-2 text-xs sm:text-sm">
                            <span className="text-gray-600 bg-gray-50 px-2 py-1 rounded">
                              Size: {item.size}
                            </span>
                            <span className="text-gray-600 bg-gray-50 px-2 py-1 rounded">
                              Color: {item.color}
                            </span>
                          </div>
                        </div>
                        <div className="text-left sm:text-right mt-2 sm:mt-0">
                          <div className="text-lg sm:text-xl font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          {item.originalPrice && (
                            <div className="text-xs sm:text-sm text-gray-400 line-through">
                              ${item.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4">
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="p-1.5 sm:p-2 hover:bg-gray-50 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                            </button>
                            <span className="w-8 sm:w-12 text-center font-medium text-sm sm:text-base">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="p-1.5 sm:p-2 hover:bg-gray-50 transition-colors"
                              disabled={item.quantity >= item.maxQuantity}
                            >
                              <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                            </button>
                          </div>

                          {/* Action Buttons */}
                          <button
                            onClick={() => handleMoveToWishlist(item.id)}
                            className="flex items-center gap-1 text-gray-500 hover:text-[#FFB2B2] transition-colors"
                          >
                            <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="text-xs sm:text-sm">Save</span>
                          </button>

                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors sm:hidden"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="hidden sm:block text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Stock Status */}
                      {item.quantity >= item.maxQuantity && (
                        <p className="text-xs text-orange-500 mt-2">
                          Max quantity reached ({item.maxQuantity} items)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {cartItems.length === 0 && (
                <div className="p-8 sm:p-12 text-center">
                  <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 mb-6">
                    Looks like you haven't added anything to your cart yet
                  </p>
                  <button
                    onClick={() => navigate("/")}
                    className="bg-[#FFB2B2] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:bg-[#ff9b9b] transition-colors text-sm sm:text-base"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Saved for Later */}
            {savedForLater.length > 0 && (
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-4">
                  Saved for Later ({savedForLater.length})
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {savedForLater.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 sm:gap-4"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          ${item.price}
                        </p>
                      </div>
                      <button className="text-[#FFB2B2] hover:text-[#ff9b9b] text-xs sm:text-sm font-medium whitespace-nowrap">
                        Move to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Summary - Mobile Toggle */}
          <div className="lg:col-span-1">
            {/* Mobile Summary Toggle */}
            <button
              onClick={() => setIsSummaryVisible(!isSummaryVisible)}
              className="lg:hidden w-full bg-white rounded-xl shadow-lg p-4 mb-4 flex items-center justify-between"
            >
              <span className="font-semibold text-gray-900">Order Summary</span>
              <div className="flex items-center gap-2">
                <span className="text-[#FFB2B2] font-bold">
                  ${total.toFixed(2)}
                </span>
                <ChevronRight
                  className={`h-5 w-5 text-gray-400 transition-transform ${isSummaryVisible ? "rotate-90" : ""}`}
                />
              </div>
            </button>

            {/* Order Summary Content */}
            <div
              className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 ${isSummaryVisible ? "block" : "hidden lg:block"}`}
            >
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 hidden lg:block">
                Order Summary
              </h2>

              {/* Promo Code */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Promo Code
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-[#FFB2B2]"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
                  >
                    Apply
                  </button>
                </div>
                {promoError && (
                  <p className="text-xs sm:text-sm text-red-500 mt-1 sm:mt-2">
                    {promoError}
                  </p>
                )}
                {promoApplied && (
                  <p className="text-xs sm:text-sm text-green-500 mt-1 sm:mt-2">
                    Promo code applied! 10% discount
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-500">Free</span>
                  ) : (
                    <span>${shipping.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-500 text-sm sm:text-base">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 sm:pt-3 mt-2 sm:mt-3">
                  <div className="flex justify-between font-bold text-gray-900 text-base sm:text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={cartItems.length === 0 || selectedItems.length === 0}
                className={`w-full py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg mb-3 sm:mb-4 transition-colors ${
                  cartItems.length > 0 && selectedItems.length > 0
                    ? "bg-[#FFB2B2] text-white hover:bg-[#ff9b9b]"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                Checkout ({selectedItems.length}{" "}
                {selectedItems.length === 1 ? "item" : "items"})
              </button>

              {/* Delivery Info */}
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFB2B2] shrink-0" />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFB2B2] shrink-0" />
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Tag className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFB2B2] shrink-0" />
                  <span>Secure checkout</span>
                </div>
              </div>

              {/* Continue Shopping Link */}
              <div className="mt-4 sm:mt-6 text-center">
                <button
                  onClick={() => navigate("/")}
                  className="text-[#FFB2B2] hover:text-[#ff9b9b] text-xs sm:text-sm font-medium inline-flex items-center gap-1"
                >
                  Continue Shopping
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
