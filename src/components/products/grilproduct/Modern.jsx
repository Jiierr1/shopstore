import React from "react";
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
const Modern = () => {
  return (
    <div className="w-full h-screen p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#d30606] text-center mb-4">
        Modern Girls Collection
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
          />
        ))}
      </div>
    </div>
  );
};

export default Modern;
