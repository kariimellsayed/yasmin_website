"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function BestSeller() {
  const t = useTranslations("Landing"); // تأكد أن الترجمة موجودة في ملف Landing
  const [wishlistedItems, setWishlistedItems] = useState(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const products = [
    {
      id: "1",
      name: "Lip Gloss - Dusty Pink",
      image: "/images/test.png",
      price: 350,
      originalPrice: 450,
      rating: 4.5,
      reviewCount: 121,
      colors: ["#8B4B6B", "#D2847A", "#E8B4B8"],
      isOnSale: true,
    },
    {
      id: "2",
      name: "Lip Gloss - Dusty Pink",
      image: "/images/test.png",
      price: 350,
      rating: 4.0,
      reviewCount: 121,
      colors: ["#8B4B6B", "#D2847A", "#E8B4B8"],
    },
    {
      id: "3",
      name: "Lip Gloss - Dusty Pink",
      image: "/images/test.png",
      price: 350,
      rating: 4.2,
      reviewCount: 121,
      colors: ["#8B4B6B", "#D2847A", "#E8B4B8"],
    },
    {
      id: "4",
      name: "Lip Gloss - Dusty Pink",
      image: "/images/test.png",
      price: 350,
      originalPrice: 450,
      rating: 4.8,
      reviewCount: 121,
      colors: ["#8B4B6B", "#D2847A", "#E8B4B8"],
      isOnSale: true,
    },
    {
      id: "5",
      name: "Lip Gloss - Coral",
      image: "/images/test.png",
      price: 360,
      rating: 4.1,
      reviewCount: 80,
      colors: ["#F88379", "#FFD6D6", "#E8B4B8"],
    },
    {
      id: "6",
      name: "Lip Gloss - Nude",
      image: "/images/test.png",
      price: 340,
      rating: 4.3,
      reviewCount: 95,
      colors: ["#C2B280", "#E8B4B8", "#D2847A"],
    },
    {
      id: "7",
      name: "Lip Gloss - Red",
      image: "/images/test.png",
      price: 370,
      rating: 4.7,
      reviewCount: 110,
      colors: ["#D7263D", "#8B4B6B", "#FFD6D6"],
    },
    {
      id: "8",
      name: "Lip Gloss - Peach",
      image: "/images/test.png",
      price: 355,
      rating: 4.4,
      reviewCount: 100,
      colors: ["#FFDAB9", "#E8B4B8", "#F88379"],
    },
  ];

  const visibleCount = 4;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      Math.min(prev + 1, products.length - visibleCount)
    );
  };

  return (
    <section className="py-20 px-4 pt-14">
      <div className="custom__container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t("bestSeller") || "Best Seller"}
            </h2>
          </div>

          {/* Products Grid (Responsive) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 relative min-h-[400px]">
            <AnimatePresence initial={false} mode="wait">
              {products
                .slice(currentIndex, currentIndex + visibleCount)
                .map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                    transition={{ duration: 0.35 }}
                  >
                    <ProductCard {...product} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {products.length > visibleCount && (
            <div className="flex gap-4 justify-center items-center mt-10">
              <button
                className="cursor-pointer disabled:opacity-30"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <Image src="/prev.svg" alt="Previous" width={35} height={35} />
              </button>
              <button
                className="cursor-pointer disabled:opacity-30"
                onClick={handleNext}
                disabled={currentIndex >= products.length - visibleCount}
              >
                <Image src="/next.svg" alt="Next" width={35} height={35} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
