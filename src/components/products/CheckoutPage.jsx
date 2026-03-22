import React, { useState } from "react";
import {
  ShoppingBag,
  ChevronRight,
  ArrowLeft,
  Truck,
  MapPin,
  User,
  Phone,
  Mail,
  Shield,
  Lock,
  CheckCircle,
  Edit2,
  Package,
  Clock,
  QrCode,
  X,
  Home,
  Printer,
  Download,
  Share2,
} from "lucide-react";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [saveInfo, setSaveInfo] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const [formData, setFormData] = useState({
    // Shipping Information
    shippingFirstName: "Sarah",
    shippingLastName: "Johnson",
    shippingEmail: "sarah.j@example.com",
    shippingPhone: "+855 12 345 678",
    shippingAddress: "123 Street",
    shippingApartment: "",
    shippingCity: "Phnom Penh",
    shippingState: "Phnom Penh",
    shippingZipCode: "12000",
    shippingCountry: "Cambodia",

    // Additional
    orderNotes: "",
  });

  const [errors, setErrors] = useState({});

  // Cart summary data (mock data)
  const cartItems = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      quantity: 2,
      size: "M",
      color: "White",
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 79.99,
      quantity: 1,
      size: "32",
      color: "Blue",
      image: "/api/placeholder/80/80",
    },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 100 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Generate random order number
  const generateOrderNumber = () => {
    return "ORD-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const steps = [
    { id: 1, name: "Shipping", icon: Truck },
    { id: 2, name: "Payment", icon: QrCode },
    { id: 3, name: "Review", icon: CheckCircle },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateShipping = () => {
    const newErrors = {};

    if (!formData.shippingFirstName)
      newErrors.shippingFirstName = "First name is required";
    if (!formData.shippingLastName)
      newErrors.shippingLastName = "Last name is required";
    if (!formData.shippingEmail) newErrors.shippingEmail = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.shippingEmail))
      newErrors.shippingEmail = "Email is invalid";
    if (!formData.shippingPhone)
      newErrors.shippingPhone = "Phone number is required";
    if (!formData.shippingAddress)
      newErrors.shippingAddress = "Address is required";
    if (!formData.shippingCity) newErrors.shippingCity = "City is required";

    return newErrors;
  };

  const handleContinue = () => {
    let stepErrors = {};

    if (currentStep === 1) {
      stepErrors = validateShipping();
    }

    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setErrors(stepErrors);
    }
  };

  const handlePlaceOrder = () => {
    const order = {
      orderNumber: generateOrderNumber(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      customer: {
        name: `${formData.shippingFirstName} ${formData.shippingLastName}`,
        email: formData.shippingEmail,
        phone: formData.shippingPhone,
        address: `${formData.shippingAddress} ${formData.shippingApartment}, ${formData.shippingCity}, ${formData.shippingState} ${formData.shippingZipCode}`,
      },
      items: cartItems,
      subtotal: subtotal,
      shipping: shipping,
      tax: tax,
      total: total,
      paymentMethod: "Bakong QR",
      estimatedDelivery: new Date(
        Date.now() + 5 * 24 * 60 * 60 * 1000,
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setOrderDetails(order);
    setShowSuccessModal(true);
    console.log("Order placed:", order);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Redirect to home or orders page
    // window.location.href = "/";
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleDownloadReceipt = () => {
    const receiptContent = `
      Order Receipt
      Order #: ${orderDetails?.orderNumber}
      Date: ${orderDetails?.date}
      
      Customer Information:
      ${orderDetails?.customer.name}
      ${orderDetails?.customer.email}
      ${orderDetails?.customer.phone}
      ${orderDetails?.customer.address}
      
      Order Summary:
      ${orderDetails?.items
        .map(
          (item) =>
            `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`,
        )
        .join("\n")}
      
      Subtotal: $${orderDetails?.subtotal.toFixed(2)}
      Shipping: $${orderDetails?.shipping.toFixed(2)}
      Tax: $${orderDetails?.tax.toFixed(2)}
      Total: $${orderDetails?.total.toFixed(2)}
      
      Payment Method: ${orderDetails?.paymentMethod}
      Estimated Delivery: ${orderDetails?.estimatedDelivery}
      
      Thank you for shopping with us!
    `;

    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt-${orderDetails?.orderNumber}.txt`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e2e2] to-[#ffe4e4]">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <ShoppingBag className="h-5 w-5" />
            <span className="font-medium">Secure Checkout</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-10">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.id}>
                  <div className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        currentStep >= step.id
                          ? "bg-[#FFB2B2] text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`ml-2 font-medium ${
                        currentStep >= step.id
                          ? "text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="h-5 w-5 text-gray-400 mx-4" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            {currentStep >= 1 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FFB2B2] text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Shipping Information
                    </h2>
                  </div>
                  {currentStep > 1 && (
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-[#FFB2B2] hover:text-[#ff9b9b] flex items-center gap-1"
                    >
                      <Edit2 className="h-4 w-4" />
                      Edit
                    </button>
                  )}
                </div>

                {currentStep === 1 ? (
                  <div className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            name="shippingFirstName"
                            value={formData.shippingFirstName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                              errors.shippingFirstName
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                        </div>
                        {errors.shippingFirstName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.shippingFirstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="shippingLastName"
                          value={formData.shippingLastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                            errors.shippingLastName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.shippingLastName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.shippingLastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="email"
                            name="shippingEmail"
                            value={formData.shippingEmail}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                              errors.shippingEmail
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                        </div>
                        {errors.shippingEmail && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.shippingEmail}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="tel"
                            name="shippingPhone"
                            value={formData.shippingPhone}
                            onChange={handleInputChange}
                            placeholder="+855 12 345 678"
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                              errors.shippingPhone
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                        </div>
                        {errors.shippingPhone && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.shippingPhone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          name="shippingAddress"
                          value={formData.shippingAddress}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                            errors.shippingAddress
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                      </div>
                      {errors.shippingAddress && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.shippingAddress}
                        </p>
                      )}
                    </div>

                    {/* Apartment */}
                    <div>
                      <input
                        type="text"
                        name="shippingApartment"
                        value={formData.shippingApartment}
                        onChange={handleInputChange}
                        placeholder="Apartment, suite, etc. (optional)"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                      />
                    </div>

                    {/* City, Province, ZIP */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="shippingCity"
                          value={formData.shippingCity}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                            errors.shippingCity
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.shippingCity && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.shippingCity}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Province <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="shippingState"
                          value={formData.shippingState}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                            errors.shippingState
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        >
                          <option value="Phnom Penh">Phnom Penh</option>
                          <option value="Siem Reap">Siem Reap</option>
                          <option value="Battambang">Battambang</option>
                          <option value="Sihanoukville">Sihanoukville</option>
                        </select>
                        {errors.shippingState && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.shippingState}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          name="shippingZipCode"
                          value={formData.shippingZipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                        />
                      </div>
                    </div>

                    {/* Save Info Checkbox */}
                    <div className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        id="saveInfo"
                        checked={saveInfo}
                        onChange={(e) => setSaveInfo(e.target.checked)}
                        className="h-4 w-4 text-[#FFB2B2] border-gray-300 rounded focus:ring-[#FFB2B2]"
                      />
                      <label
                        htmlFor="saveInfo"
                        className="ml-2 text-sm text-gray-600"
                      >
                        Save this information for next time
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-900">
                      {formData.shippingFirstName} {formData.shippingLastName}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {formData.shippingAddress}
                    </p>
                    {formData.shippingApartment && (
                      <p className="text-gray-600 text-sm">
                        {formData.shippingApartment}
                      </p>
                    )}
                    <p className="text-gray-600 text-sm">
                      {formData.shippingCity}, {formData.shippingState}{" "}
                      {formData.shippingZipCode}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      {formData.shippingEmail}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {formData.shippingPhone}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Payment Information - Simple QR Code Space */}
            {currentStep >= 2 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full ${
                        currentStep >= 2 ? "bg-[#FFB2B2]" : "bg-gray-300"
                      } text-white flex items-center justify-center font-bold`}
                    >
                      2
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Payment - Bakong QR
                    </h2>
                  </div>
                  {currentStep > 2 && (
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-[#FFB2B2] hover:text-[#ff9b9b] flex items-center gap-1"
                    >
                      <Edit2 className="h-4 w-4" />
                      Edit
                    </button>
                  )}
                </div>

                {currentStep === 2 ? (
                  <div className="space-y-6">
                    {/* Total Amount */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-[#FFB2B2]">
                      <div className="flex items-center gap-3 mb-4">
                        <QrCode className="h-6 w-6 text-[#FFB2B2]" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Scan with Bakong App
                        </h3>
                      </div>

                      {/* Total Amount to Pay */}
                      <div className="bg-white p-4 rounded-lg mb-4">
                        <p className="text-sm text-gray-500">
                          Total Amount to Pay:
                        </p>
                        <p className="text-3xl font-bold text-[#FFB2B2]">
                          ${total.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">USD</p>
                      </div>
                    </div>

                    {/* QR Code Space - You will insert your QR image here */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Scan QR Code to Pay
                      </label>
                      <p className="text-xs text-gray-500 mb-3">
                        Open Bakong app and scan the QR code below
                      </p>

                      {/* QR Code Container - Replace with your actual QR code image */}
                      <div className="border-2 border-dashed border-[#FFB2B2] rounded-xl p-8 text-center bg-gray-50">
                        <div className="flex flex-col items-center justify-center">
                          <QrCode className="h-24 w-24 text-[#FFB2B2] mb-3" />
                          <p className="text-sm font-medium text-gray-700">
                            Your Bakong QR Code
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            Insert your QR code image here
                          </p>
                          <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 w-full max-w-[200px]">
                            <p className="text-xs text-gray-400">
                              QR Code Placeholder
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Instructions */}
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">
                        📱 How to pay with Bakong:
                      </h4>
                      <ol className="text-sm text-yellow-700 list-decimal list-inside space-y-1">
                        <li>Open your Bakong app</li>
                        <li>Scan the QR code above</li>
                        <li>Enter the amount: ${total.toFixed(2)}</li>
                        <li>Complete the payment</li>
                        <li>
                          Your order will be processed after payment
                          confirmation
                        </li>
                      </ol>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-900 font-medium">
                      Payment Method: Bakong QR
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Amount to pay: ${total.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Review Order */}
            {currentStep >= 3 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#FFB2B2] text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Review Order
                  </h2>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 py-3 border-b border-gray-100 last:border-0"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Size: {item.size}, Color: {item.color}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Notes */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="Any special instructions for your order?"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Your Order
              </h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        Size: {item.size} | Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-bold text-gray-900 mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-500">Free</span>
                  ) : (
                    <span>${shipping.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-lg pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Continue/Place Order Button */}
              {currentStep < 3 ? (
                <button
                  onClick={handleContinue}
                  className="w-full bg-[#FFB2B2] text-white py-4 rounded-xl hover:bg-[#ff9b9b] transition-colors font-medium text-lg"
                >
                  Continue to {currentStep === 1 ? "Payment" : "Review"}
                </button>
              ) : (
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-green-500 text-white py-4 rounded-xl hover:bg-green-600 transition-colors font-medium text-lg flex items-center justify-center gap-2"
                >
                  <Lock className="h-5 w-5" />
                  Place Order
                </button>
              )}

              {/* Security Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Secure payment via Bakong</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Package className="h-4 w-4 text-blue-500" />
                  <span>Free returns within 30 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-purple-500" />
                  <span>Estimated delivery: 3-5 business days</span>
                </div>
              </div>

              {/* Bakong Logo */}
              <div className="mt-6 flex justify-center">
                <div className="bg-blue-100 px-4 py-2 rounded-lg">
                  <span className="font-bold text-blue-600">BAKONG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && orderDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-t-3xl relative">
              <button
                onClick={handleCloseModal}
                className="absolute right-4 top-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">Thank You!</h2>
                <p className="text-green-50">
                  Your order has been placed successfully
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Order Info */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Order Number</p>
                    <p className="text-lg font-bold text-gray-900">
                      {orderDetails.orderNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="text-lg font-bold text-gray-900">
                      {orderDetails.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="text-lg font-bold text-gray-900">
                      {orderDetails.paymentMethod}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Delivery</p>
                    <p className="text-lg font-bold text-gray-900">
                      {orderDetails.estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Shipping Information
                </h3>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-800 font-medium">
                    {orderDetails.customer.name}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    {orderDetails.customer.email}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {orderDetails.customer.phone}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {orderDetails.customer.address}
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Order Summary
                </h3>
                <div className="bg-gray-50 rounded-xl p-4">
                  {orderDetails.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Size: {item.size} | Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}

                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${orderDetails.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>${orderDetails.shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>${orderDetails.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-gray-900 text-lg">
                      <span>Total</span>
                      <span className="text-green-600">
                        ${orderDetails.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={handlePrintReceipt}
                  className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Printer className="h-5 w-5" />
                  Print Receipt
                </button>
                <button
                  onClick={handleDownloadReceipt}
                  className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  Download
                </button>
              </div>

              {/* Navigation Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => (window.location.href = "/")}
                  className="flex items-center justify-center gap-2 bg-[#FFB2B2] text-white py-3 rounded-xl hover:bg-[#ff9b9b] transition-colors"
                >
                  <Home className="h-5 w-5" />
                  Home
                </button>
                <button
                  onClick={() => (window.location.href = "/orders")}
                  className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <ShoppingBag className="h-5 w-5" />
                  My Orders
                </button>
              </div>

              {/* Share Button */}
              <button className="w-full mt-3 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                <Share2 className="h-5 w-5" />
                Share Order Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage;
