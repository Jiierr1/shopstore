import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Lock,
  Eye,
  EyeOff,
  Shield,
} from "lucide-react";

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1); // 1: email, 2: verification, 3: new password
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  // Handle email submit
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate email
    if (!email) {
      setErrors({ email: "Email is required" });
      setIsLoading(false);
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Please enter a valid email" });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      startResendTimer();
    }, 1500);
  };

  // Start resend timer
  const startResendTimer = () => {
    setResendTimer(60);
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle verification code change
  const handleCodeChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle verification submit
  const handleVerifySubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if all fields are filled
    if (verificationCode.some((code) => code === "")) {
      setErrors({
        verification: "Please enter the complete verification code",
      });
      setIsLoading(false);
      return;
    }

    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
      setErrors({});
    }, 1500);
  };

  // Handle resend code
  const handleResendCode = () => {
    if (resendTimer > 0) return;

    setIsLoading(true);
    // Simulate resending code
    setTimeout(() => {
      setIsLoading(false);
      startResendTimer();
      alert("Verification code has been resent to your email");
    }, 1000);
  };

  // Validate password
  const validatePassword = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(formData.newPassword)) {
      newErrors.newPassword =
        "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(formData.newPassword)) {
      newErrors.newPassword = "Password must contain at least one number";
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  // Handle password reset submit
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const newErrors = validatePassword();

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);

      // Simulate password reset
      setTimeout(() => {
        setIsLoading(false);
        alert(
          "Password has been reset successfully! You can now login with your new password.",
        );
        // Redirect to login page
        window.location.href = "/login";
      }, 1500);
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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Password strength indicator
  const getPasswordStrength = () => {
    const password = formData.newPassword;
    if (!password) return null;

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    return strength;
  };

  const passwordStrength = getPasswordStrength();

  const strengthColors = {
    0: "bg-gray-200",
    1: "bg-red-500",
    2: "bg-orange-500",
    3: "bg-yellow-500",
    4: "bg-green-500",
  };

  const strengthText = {
    1: "Weak",
    2: "Fair",
    3: "Good",
    4: "Strong",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e2e2] to-[#ffe4e4] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        {/* Back Button */}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Login</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#FFB2B2] rounded-full flex items-center justify-center mx-auto mb-4">
            {step === 1 && <Lock className="h-10 w-10 text-white" />}
            {step === 2 && <Shield className="h-10 w-10 text-white" />}
            {step === 3 && <CheckCircle className="h-10 w-10 text-white" />}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {step === 1 && "Forgot Password?"}
            {step === 2 && "Verify Email"}
            {step === 3 && "Reset Password"}
          </h1>

          <p className="text-gray-500">
            {step === 1 &&
              "Enter your email address and we'll send you a verification code"}
            {step === 2 && `We've sent a 6-digit code to ${email}`}
            {step === 3 && "Create a new strong password for your account"}
          </p>
        </div>

        {/* Step 1: Email Form */}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({});
                  }}
                  placeholder="menchhorvy3@gmail.com"
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FFB2B2] text-white py-3 rounded-xl hover:bg-[#ff9b9b] transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Reset Code"}
            </button>
          </form>
        )}

        {/* Step 2: Verification Code Form */}
        {step === 2 && (
          <form onSubmit={handleVerifySubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                Enter the 6-digit code sent to your email
              </label>

              <div className="flex justify-center gap-2 mb-4">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2]"
                  />
                ))}
              </div>

              {errors.verification && (
                <p className="text-sm text-red-500 text-center flex items-center justify-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.verification}
                </p>
              )}

              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  Didn't receive the code?{" "}
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={resendTimer > 0 || isLoading}
                    className={`text-[#FFB2B2] hover:text-[#ff9b9b] font-medium ${
                      resendTimer > 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Resend {resendTimer > 0 && `(${resendTimer}s)`}
                  </button>
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FFB2B2] text-white py-3 rounded-xl hover:bg-[#ff9b9b] transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </button>
          </form>
        )}

        {/* Step 3: New Password Form */}
        {step === 3 && (
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className={`w-full pl-10 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                    errors.newPassword ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Password strength indicator */}
              {formData.newPassword && (
                <div className="mt-3">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          passwordStrength >= level
                            ? strengthColors[passwordStrength]
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    {passwordStrength > 0 && strengthText[passwordStrength]}
                  </p>
                </div>
              )}

              {errors.newPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.newPassword}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  className={`w-full pl-10 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

            {/* Password Requirements */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Password Requirements:
              </p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle
                    className={`h-3 w-3 ${formData.newPassword.length >= 8 ? "text-green-500" : "text-gray-300"}`}
                  />
                  At least 8 characters
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle
                    className={`h-3 w-3 ${/[A-Z]/.test(formData.newPassword) ? "text-green-500" : "text-gray-300"}`}
                  />
                  At least one uppercase letter
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle
                    className={`h-3 w-3 ${/[0-9]/.test(formData.newPassword) ? "text-green-500" : "text-gray-300"}`}
                  />
                  At least one number
                </li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FFB2B2] text-white py-3 rounded-xl hover:bg-[#ff9b9b] transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        {/* Help Text */}
        <p className="text-center text-xs text-gray-400 mt-6">
          For security reasons, this link will expire in 24 hours.
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
