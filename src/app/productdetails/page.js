"use client";

import { useState } from "react";
import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

export default function ProductDetails() {
  const images = [
    "/imgs/redshirt.png",
    "/imgs/blueshirt.png",
    "/imgs/redshirt.png",
  ];

  const colors = ["#fff", "#D90202", "#B8CCDA", "#E5E5E5"];

  const price = 300;
  const discontPrice = 360;

  const [activeImage, setActiveImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("Cotton");
  const [size, setSize] = useState("M");

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          
          {/* Main Image */}
          <div className="w-full h-[420px] bg-[#F7F7F7] rounded-xl flex items-center justify-center">
            <Image
              src={activeImage}
              alt="Product Image"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`w-[80px] h-[80px] rounded-lg border flex items-center justify-center
                ${activeImage === img ? "border-black" : "border-gray-200"}`}
              >
                <Image src={img} alt="thumb" width={70} height={70} />
              </button>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
               <span className="flex items-center justify-center text-[#BE968E] text-[14px] font-[500] border border-[#BE968E] w-fit px-6 py-2 rounded-[50px]">T-shirt</span>

                <div className="flex gap-3">
                    <button className="w-[48px] h-[48px]">
                        <img src="/imgs/shoppingadded.png" alt="Cart Icon" className="w-full" />
                    </button>
                    <button className="w-[48px] h-[48px] ">
                        <img src="/imgs/loveadded.png" alt="Cart Icon" className="w-full" />
                    </button>
                </div>  
            </div>
          {/* Name + Icons */}
            <h2 className="text-[22px] font-[600] text-[#020202]">
              J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
            </h2>

          {/* Short Description */}
          <p className="text-[#545454] text-[14px]">
            High quality hoodie made from soft premium cotton.
          </p>

          {/* Price */}
          <span className="text-[24px] font-[600] text-[#020202]">
            ${price} <span className="text-[16px] font-[400] line-through text-[#999]">${discontPrice}</span>
          </span>

          {/* Long Description */}
          <p className="text-[#545454] text-[14px] leading-6">
            Designed for comfort and durability. Perfect for daily wear,
            modern style, and all seasons.
          </p>

          {/* Dropdowns */}
          <div className="flex flex-col gap-4">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border rounded-lg px-4 py-2 w-[266px]"
            >
              <option>Cotton</option>
              <option>Polyester</option>
              <option>Wool</option>
            </select>

            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="border rounded-lg px-4 py-2 w-[266px]"
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

          </div>

          {/* Colors */}
          <div>
            <h4 className="font-[500] mb-2">Colors</h4>
            <div className="flex gap-3">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="w-7 h-7 rounded-full border cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            
            {/* Quantity */}
            <div className="flex flex-row gap-[20px] items-center">
            <div className="flex items-center border rounded-lg bg-[#F5F5F5]">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 font-[500] text-[24px] text-[#B0B0B0] bg-white"
              >
                -
              </button>
              <span className="px-4 font-[500] text-[24px] text-[#020202] ">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 font-[500] text-[24px] text-[#020202] bg-white"
              >
                +
              </button>
            </div>
            <span className="font-[500] text-[24px] text-[#020202]">${price * quantity}</span>
           </div>

            {/* Add to Cart */}
            <button className="w-[234px] h-[56px] bg-[#BE968E] text-white py-3 rounded-lg flex items-center justify-center gap-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
