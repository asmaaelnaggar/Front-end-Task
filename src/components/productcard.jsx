import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

export default function ProductCard({ product }) {
  return (
  <div className="card-product items-end relative bg-white rounded-xl  border  border-[rgba(0,0,0,0.05)] p-4 shadow-sm hover:shadow-md transition  flex-shrink-0">
      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="img-card-btn">
          <img src="/imgs/shoppingadded.png" alt="Shopping Bag" className="w-[36px] h-[36px]"/>
        </button>

        <button className="img-card-btn">
          <img src="/imgs/loveadded.png" alt="Love Add" className="w-[36px] h-[36px]"/>
        </button>
      </div>

      {/* Product Image */}
      <div className="w-full h-[180px] flex items-center justify-center ">
        <Image
          src={product.image}
          alt={product.name}
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2 flex flex-col product-info">
        {/* Name & Rating */}
        <div className="flex items-center justify-between">
          <h3 className="font-[500] text-[12px] text-[#545454]">{product.name}</h3>
          {product.rating && (
            <div className="flex items-center gap-1 text-[#BE968E] text-sm">
              <AiFillStar />
              <span className="text-[#020202] text-[12px] font-[500]">{product.rating} <span className="text-[#545454] text-[10px] font-[400]" >({product.reviewCount || 0})</span></span>
            </div>
          )}
        </div>

        {/* Description */}
        {product.description && (
          <p className="text-[14px] text-[#020202] font-[500] break-words line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price & Colors */}
        <div className="flex items-center justify-between mt-2">
          <span className=" text-[#020202] font-[500] text-[16px]">{product.price}</span>
          <div className="flex gap-1">
            {product.colors?.map((color, index) => (
              <span
                key={index}
                className="w-5 h-5 rounded-full border shrink-0"
                style={{ backgroundColor: color }}
              />
            ))}+2
          </div>
        </div>
      </div>
    </div>
  );
}
