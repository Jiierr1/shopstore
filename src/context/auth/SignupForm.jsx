import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  Phone,
  Calendar,
  Globe,
  Flag,
  Users,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/login");
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    alternativePhone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Handle signup logic here
      console.log("Form submitted:", formData);
      alert("Signup successful! Check console for data.");
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#f8e2e2] to-[#ffe4e4] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-600 hover:text-gray-900 flex items-center gap-2 text-lg"
        >
          <ArrowLeft className="h-6 w-6" />
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Create Account
          </h1>
          <p className="text-gray-500 text-lg">
            Fill in your details to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Sarah Johnson"
                  className={`w-full pl-12 pr-4 py-3.5 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-[#FFB2B2] text-gray-900 placeholder-gray-400 ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3.5 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-[#FFB2B2] text-gray-900 appearance-none bg-white ${
                    errors.gender ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="prefer-not">Prefer not to say</option>
                </select>
              </div>
              {errors.gender && (
                <p className="mt-2 text-sm text-red-500">{errors.gender}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="sarah.j@example.com"
                  className={`w-full pl-12 pr-4 py-3.5 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-[#FFB2B2] text-gray-900 placeholder-gray-400 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3.5 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-[#FFB2B2] text-gray-900 ${
                    errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.dateOfBirth && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className={`w-full pl-12 pr-4 py-3.5 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-[#FFB2B2] text-gray-900 placeholder-gray-400 ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.phoneNumber && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Alternative Phone (Optional) */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Alternative Phone{" "}
                <span className="text-gray-400 text-sm">(Optional)</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="alternativePhone"
                  value={formData.alternativePhone}
                  onChange={handleChange}
                  placeholder="+1 (555) 987-6543"
                  className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-[#FFB2B2] text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className={`w-full pl-12 pr-12 py-3.5 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-[#FFB2B2] text-gray-900 placeholder-gray-400 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="********"
                  className={`w-full pl-12 pr-12 py-3.5 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-[#FFB2B2] text-gray-900 placeholder-gray-400 ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Terms and conditions */}
          <div className="flex items-start mt-6">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 text-[#FFB2B2] border-gray-300 rounded focus:ring-[#FFB2B2]"
            />
            <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
              I agree to the{" "}
              <a
                href="#"
                className="text-[#FFB2B2] hover:text-[#ff9b9b] font-medium"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#FFB2B2] hover:text-[#ff9b9b] font-medium"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleclick}
            type="submit"
            className="w-full bg-[#FFB2B2] text-white py-4 px-4 rounded-xl hover:bg-[#ff9b9b] focus:outline-none focus:ring-4 focus:ring-[#FFB2B2] focus:ring-opacity-50 transition-colors duration-200 font-medium text-lg mt-6"
          >
            Create Account
          </button>

          {/* Sign in link */}
          <p className="text-center text-gray-600 text-base">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#FFB2B2] hover:text-[#ff9b9b] font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
