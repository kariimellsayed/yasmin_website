import React from 'react';
import { Heart, Star } from 'lucide-react';

const ProductCard = ({
  id,
  name,
  image,
  price,
  originalPrice,
  rating,
  reviewCount,
  colors,
  isOnSale,
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="overflow-hidden relative">
      {/* Sale Badge */}
      {isOnSale && (
          <span className="absolute top-0 left-0 z-40 bg-[#FE93B9] text-white font-medium px-3 py-1 rounded-l-[12px] rounded-bl-[0] rounded-tr-[0] rounded-br-[10px]">
            sale
          </span>
      )}

      {/* Product Image */}
      <div className="relative">
        {/* <span>{isOnSale ? "Sale" : ""}</span> */}
        <div className='bg-white rounded-[12px] p-6 h-80 mb-2.5'>
          <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
        />
        </div>
      </div>

      {/* Product Info */}
      <div className="">
        {/* Wishlist Text */}
        <button
          className="flex items-center gap-2 text-pink-400 text-sm mb-3 hover:text-pink-500 transition-colors"
        >
          <Heart className="w-4 h-4" />
          Add to Wishlist
        </button>

        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-2">{name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">{renderStars()}</div>
          <span className="text-sm text-gray-500">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {originalPrice},00 EGP
            </span>
          )}
          <span className="text-lg font-semibold text-gray-900">
            {price},00 EGP
          </span>
        </div>

        {/* Color Options */}
        <div className="flex gap-2 mb-6">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Add to Cart Button */}
        <button
          className="w-full bg-[#FE93B9] text-[#393939] font-medium py-3 rounded-full cursor-pointer">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;