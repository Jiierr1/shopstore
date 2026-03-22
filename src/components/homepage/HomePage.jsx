import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Heart,
  Star,
  Truck,
  Shield,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  Eye,
  ArrowRight,
  Sparkles,
  Clock,
  Tag,
  Instagram,
  Facebook,
} from "lucide-react";
// import Navbar from "../nav/Navbar";
// import Footer from "../Footer";
import H1 from "../../assets/H1.png";
import H2 from "../../assets/H2.png";
import H3 from "../../assets/H3.png";
import promotion1 from "../../assets/promotion1.png";
import mensfeshion from "../../assets/mensfeshion.png";
import kidcollection from "../../assets/kidcollection.png";
import accessories from "../../assets/accessories.png";
import footwear from "../../assets/footwear.png";
import sportwear from "../../assets/sportwear.png";
import T_Shirt from "../../assets/T_Shirt.png";
import Jeans from "../../assets/Jeans.png";
import summerdress from "../../assets/summerdress.png";
import Leather_Crossbody_Bag from "../../assets/Leather_Crossbody_Bag.png";
import Running_Shoes from "../../assets/Running_Shoes.png";
import Cashmere_Sweater from "../../assets/Cashmere_Sweater.png";
import knit from "../../assets/knit.png";
import new4 from "../../assets/new4.png";
import new5 from "../../assets/new5.png";
import zara from "../../assets/zara.png";
import nike from "../../assets/nike.png";
import handm from "../../assets/handm.png";
import adidas from "../../assets/adidas.png";
import puma from "../../assets/puma.png";
import levis from "../../assets/levis.png";
import j1 from "../../assets/j1.png";
import silkscaft from "../../assets/silkscaft.png";
import cargo3men from "../../assets/cargo3men.png";
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Slider Images
  const heroSlides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Discover the latest trends for the sunny season",
      buttonText: "Shop Now",
      bg: H1,
      color: "from-pink-500",
    },
    {
      id: 2,
      title: "50% Off on Essentials",
      subtitle: "Limited time offer on basic wardrobe staples",
      buttonText: "Grab the Deal",
      bg: H2,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      title: "New Arrivals",
      subtitle: "Be the first to wear the latest fashion",
      buttonText: "Explore Now",
      bg: H3,
      color: "from-pink-500 to-purple-500",
    },
  ];

  // Categories
  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      image: promotion1,
      count: "245 items",
      color: "bg-pink-100",
    },
    {
      id: 2,
      name: "Men's Fashion",
      image: mensfeshion,
      count: "189 items",
      color: "bg-blue-100",
    },
    {
      id: 3,
      name: "Kids Collection",
      image: kidcollection,
      count: "120 items",
      color: "bg-green-100",
    },
    {
      id: 4,
      name: "Accessories",
      image: accessories,
      count: "320 items",
      color: "bg-purple-100",
    },
    {
      id: 5,
      name: "Footwear",
      image: footwear,
      count: "156 items",
      color: "bg-yellow-100",
    },
    {
      id: 6,
      name: "Sportswear",
      image: sportwear,
      count: "98 items",
      color: "bg-red-100",
    },
  ];

  // Featured Products
  const featuredProducts = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 128,
      image: T_Shirt,
      category: "Women",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.8,
      reviews: 95,
      image: Jeans,
      category: "Men",
      isNew: false,
      isSale: true,
    },
    {
      id: 3,
      name: "Floral Summer Dress",
      price: 59.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 67,
      image: summerdress,
      category: "Women",
      isNew: true,
      isSale: false,
    },
    {
      id: 4,
      name: "Leather Crossbody Bag",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.7,
      reviews: 42,
      image: Leather_Crossbody_Bag,
      category: "Accessories",
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 156,
      image: Running_Shoes,
      category: "Footwear",
      isNew: true,
      isSale: true,
    },
    {
      id: 6,
      name: "Cashmere Sweater",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.8,
      reviews: 34,
      image: Cashmere_Sweater,
      category: "Women",
      isNew: false,
      isSale: true,
    },
  ];

  // New Arrivals
  const newArrivals = [
    {
      id: 7,
      name: "Oversized Blazer",
      price: 89.99,
      image: j1,
      category: "Women",
    },
    {
      id: 8,
      name: "Cargo Pants",
      price: 59.99,
      image: cargo3men,
      category: "Men",
    },
    {
      id: 9,
      name: "Silk Scarf",
      price: 24.99,
      image: silkscaft,
      category: "Accessories",
    },
    {
      id: 10,
      name: "Knit Beanie",
      price: 19.99,
      image: knit,
      category: "Accessories",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sophia Lee",
      comment:
        "Amazing quality and fast delivery! My new favorite place to shop.",
      rating: 5,
      image: new5,
      role: "Fashion Blogger",
    },
    {
      id: 2,
      name: "James Wilson",
      comment:
        "Great selection and excellent customer service. Highly recommended!",
      rating: 5,
      image: new4,
      role: "Regular Customer",
    },
    {
      id: 3,
      name: "Maria Garcia",
      comment: "Love their sustainable collection. Finally fashion that cares!",
      rating: 5,
      image: new5,
      role: "Eco Advocate",
    },
  ];

  // Brands
  const brands = [
    { id: 1, name: "Zara", image: zara },
    { id: 2, name: "H&M", image: handm },
    { id: 3, name: "Nike", image: nike },
    { id: 4, name: "Adidas", image: adidas },
    { id: 5, name: "Puma", image: puma },
    { id: 6, name: "Levi's", image: levis },
  ];

  // Benefits
  const benefits = [
    {
      id: 1,
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100",
    },
    {
      id: 2,
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      id: 3,
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure transactions",
    },
    {
      id: 4,
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated customer service",
    },
  ];

  // Auto slide for hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#f8e2e2] to-[#ffe4e4]">
      {/* <Navbar /> */}

      {/* Hero Slider */}
      <div className="relative overflow-hidden h-125 md:h-150">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000  ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* bg image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            ></div>

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-linear-to-r ${slide.color} opacity-50`}
            ></div>
            <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 text-white/90">{slide.subtitle}</p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 group">
                  {slide.buttonText}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Benefits Bar */}
      <div className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFB2B2] bg-opacity-20 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#FFB2B2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you're
              looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <a
                key={category.id}
                href="#"
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-30 transition-all"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-amber-900">
                  <h3 className="font-bold text-lg">{category.name}</h3>
                  <p className="text-sm text-blue-400">{category.count}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Featured Products
              </h2>
              <p className="text-gray-600">Hand-picked just for you</p>
            </div>
            <a
              href="/shop"
              className="text-[#FFB2B2] hover:text-[#ff9b9b] font-medium flex items-center gap-1"
            >
              View All
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        SALE
                      </span>
                    )}
                  </div>

                  {/* Quick View */}
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FFB2B2] hover:text-white">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-1">
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
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#FFB2B2]">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart */}
                <button className="absolute bottom-16 right-3 bg-[#FFB2B2] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#ff9b9b]">
                  <ShoppingBag className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16">
        <div className="max-w-full mx-auto px-9">
          <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-10 text-white">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium inline-block mb-3">
                  Limited Time Offer
                </span>

                <h2 className="text-4xl font-bold mb-3">Summer Sale</h2>
                <p className="text-xl font-bold mb-4">Up to 50% Off</p>

                <p className="text-white/90 mb-6">
                  On selected summer collections. Don't miss out on these
                  amazing deals!
                </p>

                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                  Shop the Sale
                </button>
              </div>

              <div className="relative h-100 md:h-150">
                <img
                  src={summerdress}
                  alt="Summer Sale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              New Arrivals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be the first to wear the latest trends
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
                  <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FFB2B2] hover:text-white">
                    <ShoppingBag className="h-5 w-5" />
                  </button>
                </div>
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="text-[#FFB2B2] font-bold">${product.price}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center opacity-50">
            {brands.map((brand) => (
              <img
                key={brand.id}
                src={brand.image}
                alt={brand.name}
                className="w-50 rounded-4xl h-50 grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Facebook className="h-8 w-8 text-[#FFB2B2]" />
              <h2 className="text-4xl font-bold text-gray-900">Follow Us</h2>
            </div>
            <p className="text-gray-600">
              @fashionhub for daily style inspiration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative group aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={`/api/placeholder/300/300`}
                  alt="Instagram"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                  <Facebook className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
