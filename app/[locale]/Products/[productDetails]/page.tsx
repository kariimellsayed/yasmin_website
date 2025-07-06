"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Details from "../../components/Details";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Reviews from "../../components/reviews";

type Props = {
  params: {
    productDetails: string;
  };
};

export default function ProductDetailsPage(props: Props) {
  const t = useTranslations("ProductPage");
  const tb = useTranslations("ContactPage.breadcrumb");

  return (
    <section className="py-16">
      <div className="custom__container space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[#393939] text-sm sm:text-base animate-fade-in">
          <Link
            href="/"
            className="text-[#868686] hover:text-[#FE93B9] transition duration-200"
          >
            {tb("home")}
          </Link>
          <Image
            src="/arrow-right.svg"
            alt="arrow"
            width={20}
            height={20}
            className="rtl:rotate-180"
          />
          <Link
            href="/Products"
            className="text-[#868686] hover:text-[#FE93B9] transition duration-200"
          >
            {tb("contact")}
          </Link>
          <Image
            src="/arrow-right.svg"
            alt="arrow"
            width={20}
            height={20}
            className="rtl:rotate-180"
          />
          <span className="font-semibold text-[#393939]">
            {t("productDetails")}
          </span>
        </nav>

        {/* Title */}
        <motion.h2
          className="text-[#393939] text-3xl font-bold tracking-tight text-center sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("productDetails")} - {props.params.productDetails}
        </motion.h2>

        {/* Product details section with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Details productId={props.params.productDetails} />
          <Reviews />
        </motion.div>
      </div>
    </section>
  );
}
