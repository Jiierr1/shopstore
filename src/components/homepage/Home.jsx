import React from "react";
import "./Home.css";
import Card from "../common/card";
const collections = [
  {
    id: 1,
    image: "../src/assets/new1.png",
    category: "Summer Collection",
    title: "Summer Collection 2024",
    description: "Discover our latest styles",
    price: "20",
  },
  {
    id: 2,
    image: "../src/assets/new2.png",
    category: "Casual Wear",
    title: "Everyday Essentials",
    description: "Comfort meets style",
    price: "25",
  },
  {
    id: 3,
    image: "../src/assets/new3.png",
    category: "Evening Wear",
    title: "Elegant Collection",
    description: "For your special moments",
    price: "35",
  },
  {
    id: 4,
    image: "../src/assets/new4.png",
    category: "Accessories",
    title: "Complete Your Look",
    description: "Trendy accessories",
    price: "15",
  },
  {
    id: 5,
    image: "../src/assets/new5.png",
    category: "Accessories",
    title: "Complete Your Look",
    description: "Trendy accessories",
    price: "15",
  },
  {
    id: 6,
    image: "../src/assets/new1.png",
    category: "Summer Collection",
    title: "Summer Collection 2024",
    description: "Discover our latest styles",
    price: "20",
  },
  {
    id: 7,
    image: "../src/assets/new2.png",
    category: "Casual Wear",
    title: "Everyday Essentials",
    description: "Comfort meets style",
    price: "25",
  },
  {
    id: 8,
    image: "../src/assets/new3.png",
    category: "Evening Wear",
    title: "Elegant Collection",
    description: "For your special moments",
    price: "35",
  },
  {
    id: 9,
    image: "../src/assets/new4.png",
    category: "Accessories",
    title: "Complete Your Look",
    description: "Trendy accessories",
    price: "15",
  },
  {
    id: 10,
    image: "../src/assets/new5.png",
    category: "Accessories",
    title: "Complete Your Look",
    description: "Trendy accessories",
    price: "15",
  },
];

// Social media links data
const socialLinks = [
  { id: 1, icon: "fa-brands fa-facebook", url: "#", label: "Facebook" },
  { id: 2, icon: "fa-brands fa-telegram", url: "#", label: "Telegram" },
  { id: 3, icon: "fa-brands fa-instagram", url: "#", label: "Instagram" },
];

const Home = () => {
  const handleShopNow = () => {
    // Add your shop now logic here
    console.log("Shop now clicked");
    // You can add navigation or modal opening logic
  };

  const handleViewCollection = (title) => {
    alert(`Viewing ${title}`);
    // Add your view collection logic here
  };
  const promotionImages = [
    "../src/assets/promotion1.png",
    "../src/assets/promotion2.png",
    "../src/assets/promotion3.png",
    "../src/assets/promotion4.png",
    "../src/assets/promotion4.png",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section w-full h-screen bg-[#FFB2B2] flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 space-y-6 pl-30">
              <h1 className="text-4xl md:text-5xl font-bold text-[#d30606] leading-tight">
                Looking your <span className="font-bold">Style</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-lg">
                Your ultimate destination for trendy, affordable, and
                high-quality fashion. We bring you the latest styles in clothing
                for every season and occasion — from casual everyday wear to
                elegant outfits for special moments.
              </p>
              <button
                onClick={handleShopNow}
                className="bg-[#d30606] text-white px-8 py-3 rounded-md 
                         hover:bg-[#a00404] transition-all duration-300 
                         transform hover:scale-105 focus:outline-none 
                         focus:ring-2 focus:ring-[#d30606] focus:ring-offset-2"
                aria-label="Shop now"
              >
                Shop Now
              </button>
              {/* Social Links */}
              <ul className="flex gap-5 mt-8">
                {socialLinks.map(({ id, icon, url, label }) => (
                  <li key={id}>
                    <a
                      href={url}
                      className="text-2xl text-gray-700 hover:text-[#d30606] 
                               transition-colors duration-300"
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                className="max-w-full h-140 object-cover "
                src="../src/assets/hero.png"
                alt="Welcome to our store - Fashion Collection"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Collection Section */}
      <section className="new-collection w-full py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d30606] text-center mb-4">
            New Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {collections.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
                price={item.price}
                onView={() => handleViewCollection(item.title)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* promotion */}
      <section className="promotion-section  bg-[#d30606] w-full px-4 lg:px-8">
        <div className="promotion w-full h-160 py-5 pt-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold  text-center">
            Promotions 50% Off
          </h2>
          <div className=" w-full h-150 gap-2 p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {promotionImages.map((src, index) => (
              <img
                key={index}
                className=" h-full object-cover rounded-lg"
                src={src}
                alt={`Promotion Banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
