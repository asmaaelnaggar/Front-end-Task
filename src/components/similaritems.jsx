"use client";

import { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "./productcard";

const CARD_WIDTH = 288;
const GAP = 16;
const SCROLL_AMOUNT = CARD_WIDTH + GAP;

const products = [
  {
    id: 1,
    name: "Dresses",
    price: "AED 120",
    image: "/imgs/productimg.png",
    rating: 4.5,
    description: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    colors: ["#333333", "#BE968E", "#E8E8E8"],
  },
  {
    id: 2,
    name: "Dresses",
    price: "AED 85",
    image: "/imgs/producttwoimg.png",
    rating: 4.0,
    description: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    colors: ["#333333", "#BE968E", "#E8E8E8"],
  },
  {
    id: 3,
    name: "Dresses",
    price: "AED 150",
    image: "/imgs/productthreeimg.png",
    rating: 4.8,
    description: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    colors: ["#333333", "#BE968E", "#E8E8E8"],
    reviewCount: 120,
  },
  {
    id: 4,
    name: "Dresses",
    price: "AED 99",
    image: "/imgs/productfour.png",
    rating: 4.3,
    description: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free ",
    colors: ["#333333", "#BE968E", "#E8E8E8"],
  },
  {
    id: 5,
    name: "Dresses",
    price: "AED 59",
    image: "/imgs/productthreeimg.png",
    rating: 4.2,
    description: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    colors: ["#333333", "#BE968E", "#E8E8E8"],
  },
  {
    id: 6,
    name: "Dresses",
    price: "AED 59",
    image: "/imgs/productimg.png",
    rating: 4.1,
    description: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    colors: ["#333333", "#BE968E", "#E8E8E8"],
  },
  {
    id: 7,
    name: "Dresses",
    price: "AED 59",
    image: "/imgs/productimg.png",
    rating: 4.6,
    description: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    colors: ["#333333", "#BE968E", "#E8E8E8"],
  },
];

export default function SimilarItems() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll states
  const updateScroll = () => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    setCanScrollLeft(scrollEl.scrollLeft > 0);
    setCanScrollRight(scrollEl.scrollLeft + scrollEl.clientWidth < scrollEl.scrollWidth);
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    scrollEl.addEventListener("scroll", updateScroll);
    updateScroll(); // initial check

    return () => scrollEl.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section className="mb-10 flex flex-col gap-6 scroll-section ">
      {/* Header */}
      <div className="flex flex-col justify-start items-start">
        <h2 className="text-[24px] font-[600]">Similar Items</h2>
        <span className="header-span block w-10 bg-[#BE968E] rounded-full text-[#BE968E]">.</span>
      </div>

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="scroll-area flex gap-4 overflow-x-auto scroll-smooth"
      >
        {products.map((product) => (
          <div key={product.id} className="card-product min-w-[288px] flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex gap-2 items-center justify-center">
        <button
          onClick={scrollLeft}
          className={`w-10 h-10 border rounded-full flex items-center justify-center ${
            canScrollLeft ? "bg-[#BE968E] text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className={`w-10 h-10 border rounded-full flex items-center justify-center ${
            canScrollRight ? "bg-[#BE968E] text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
