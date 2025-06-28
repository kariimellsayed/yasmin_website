"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Categories from "../components/Categories";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const searchKeyword = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  return (
    <section className="py-16">
      <div className="custom__container">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 text-[#393939] lg:text-lg mr-auto md:pl-9 text-sm">
          <Link href={"/"} className="text-[#868686]">
            Home
          </Link>
          <Image
            src={"/arrow-right.svg"}
            alt="Arrow Right"
            width={24}
            height={24}
          />
          <div className="font-semibold">Categories</div>
        </div>

        {/* Categories + Filtered Products */}
        <Categories search={searchKeyword} category={category} />
      </div>
    </section>
  );
}
