// FavoritesPage.jsx
import React, { useState } from "react";
import {
  Heart,
  ShoppingBag,
  Trash2,
  ArrowLeft,
  Star,
  Eye,
  ShoppingCart,
  AlertCircle,
} from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites, clearFavorites, loading } =
    useFavorites();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleSelectAll = () => {
    if (selectedItems.length === favorites.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(favorites.map((item) => item.id));
    }
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => removeFromFavorites(id));
    setSelectedItems([]);
  };

  const handleAddToCart = (product) => {
    // Implement add to cart functionality
    console.log("Adding to cart:", product);
    // You can dispatch to cart context here
  };

  const handleAddAllToCart = () => {
    const itemsToAdd =
      selectedItems.length > 0
        ? favorites.filter((item) => selectedItems.includes(item.id))
        : favorites;

    itemsToAdd.forEach((item) => handleAddToCart(item));
  };

  const colors = [
    { name: "Black", value: "black", class: "bg-black" },
    { name: "White", value: "white", class: "bg-white border border-gray-300" },
    { name: "Navy", value: "navy", class: "bg-blue-900" },
    { name: "Gray", value: "gray", class: "bg-gray-500" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
    { name: "Red", value: "red", class: "bg-red-500" },
    { name: "Pink", value: "pink", class: "bg-pink-400" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB2B2]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-bold">My Favorites</h1>
            <span className="text-gray-500 ml-2">
              ({favorites.length} items)
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {favorites.length === 0 ? (
          // Empty State
          <div className="bg-white rounded-lg shadow-sm p-16 text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-20 w-20 text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Your favorites list is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Save items you love by tapping the heart icon on any product
            </p>
            <button
              onClick={() => navigate("/clothing")}
              className="bg-[#FFB2B2] text-white px-8 py-3 rounded-lg hover:bg-[#ff9f9f] transition inline-flex items-center gap-2"
            >
              <ShoppingBag className="h-5 w-5" />
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Actions Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedItems.length === favorites.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-[#FFB2B2] focus:ring-[#FFB2B2]"
                    />
                    <span className="text-gray-700">Select All</span>
                  </label>

                  {selectedItems.length > 0 && (
                    <span className="text-sm text-gray-500">
                      {selectedItems.length} items selected
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {selectedItems.length > 0 && (
                    <>
                      <button
                        onClick={handleAddAllToCart}
                        className="flex items-center gap-2 px-4 py-2 bg-[#FFB2B2] text-white rounded-lg hover:bg-[#ff9f9f]"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add Selected to Cart
                      </button>
                      <button
                        onClick={handleRemoveSelected}
                        className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-500 rounded-lg hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove Selected
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => setShowClearConfirm(true)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear All
                  </button>
                </div>
              </div>
            </div>

            {/* Favorites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition group"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Selection Checkbox */}
                    <div className="absolute top-2 left-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(product.id)}
                        onChange={() => handleSelectItem(product.id)}
                        className="rounded border-gray-300 text-[#FFB2B2] focus:ring-[#FFB2B2]"
                      />
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromFavorites(product.id)}
                      className="absolute top-2 right-2 bg-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>

                    {/* Tags */}
                    <div className="absolute bottom-2 left-2 flex gap-2">
                      {product.isNew && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      {product.isSale && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                          Sale
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-500 uppercase">
                        {product.brand || "FashionHub"}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">
                        {product.gender}
                      </span>
                    </div>

                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
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
                      <span className="text-lg font-bold text-[#FFB2B2]">
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

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 bg-[#FFB2B2] text-white py-2 rounded-lg hover:bg-[#ff9f9f] transition flex items-center justify-center gap-2 text-sm"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Clear All Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <div className="flex items-center gap-3 text-yellow-600 mb-4">
              <AlertCircle className="h-6 w-6" />
              <h3 className="text-lg font-bold">Clear All Favorites?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove all items from your favorites
              list? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  clearFavorites();
                  setShowClearConfirm(false);
                }}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
