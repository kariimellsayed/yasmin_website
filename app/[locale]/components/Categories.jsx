"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import Link from "next/link";

export default function Categories() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const [selected, setSelected] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = [
    { id: 0, title: "All products" },
    { id: 1, title: "Lips", image: "/lips.svg" },
    { id: 2, title: "Eye", image: "/eyeC.svg" },
    { id: 3, title: "Face", image: "/face.svg" },
    { id: 4, title: "Body", image: "/body.svg" },
    { id: 5, title: "Perfume", image: "/perfume.svg" },
  ];

  const allProducts = [
    { id: 1, name: "Lip Gloss – Dusty Pink", image: "/images/test.png", price: 350, originalPrice: 450, rating: 4.5, reviewCount: 121, colors: ["#8B4B6B"], isOnSale: true, category: 1 },
    { id: 2, name: "Mascara – Black", image: "/images/test.png", price: 220, rating: 4.2, reviewCount: 80, colors: ["#000"], category: 2 },
    { id: 3, name: "Foundation – Light", image: "/images/test.png", price: 400, rating: 4.7, reviewCount: 60, colors: ["#F5E1DA"], category: 3 },
    { id: 4, name: "Body Lotion", image: "/images/test.png", price: 180, rating: 4.1, reviewCount: 40, colors: ["#FFF0F5"], category: 4 },
    { id: 5, name: "Perfume X", image: "/images/test.png", price: 600, rating: 4.8, reviewCount: 150, colors: ["#E8B4B8"], category: 5 },
    { id: 6, name: "Lip Gloss – Coral", image: "/images/test.png", price: 355, rating: 4.3, reviewCount: 90, colors: ["#F88379"], category: 1 },
  ];

  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const matchSearch = search.trim() === "" || product.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selected === 0 || product.category === selected;
      return matchSearch && matchCategory;
    });
    setFilteredProducts(filtered);
  }, [search, selected]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalf) stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} className="w-4 h-4 text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="w-full">
      {/* Filter Bar */}
      <div className="overflow-x-auto scrollbar-hide">
        <ul className="flex gap-5 py-6 mb-8 w-max whitespace-nowrap">
          {categories.map((cat) => (
            <li
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              className={`cursor-pointer transition flex items-center gap-2 px-6 py-3 rounded-xl ${
                selected === cat.id
                  ? "bg-[#FE93B9] text-[#393939] font-semibold shadow"
                  : "border border-[#FE93B9] hover:bg-[#FE93B9] hover:shadow text-[#393939] bg-transparent"
              }`}
            >
              <span>{cat.title}</span>
              {cat.image && <Image src={cat.image} alt={cat.title} width={22} height={22} />}
            </li>
          ))}
        </ul>
      </div>

      {/* Products Grid */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="overflow-hidden relative">
            {product.isOnSale && (
              <span className="absolute top-0 left-0 z-40 bg-[#FE93B9] text-white font-medium px-3 py-1 rounded-l-[12px] rounded-br-[10px]">
                Sale
              </span>
            )}
            <Link href={`/products/${product.id}`} className="bg-white block rounded-[12px] p-6 h-80 mb-2.5">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
            </Link>
            <div>
              <button className="flex items-center gap-2 text-pink-400 text-sm mb-3 hover:text-pink-500">
                <Heart className="w-4 h-4" /> Add to Wishlist
              </button>
              <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-sm text-gray-500">({product.reviewCount})</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice},00 EGP</span>
                )}
                <span className="text-lg font-semibold text-gray-900">{product.price},00 EGP</span>
              </div>
              <div className="flex gap-2 mb-6">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <button className="w-full bg-[#FE93B9] text-[#393939] font-medium py-3 rounded-full">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
