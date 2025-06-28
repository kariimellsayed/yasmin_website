"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { useLocale, useTranslations } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import SwitchButtonLang from "./SwitchButtonLang";
import {
  FiHome, FiBox, FiMail, FiActivity, FiShield, FiHelpCircle,
  FiUser, FiMenu, FiX, FiSearch, FiShoppingCart, FiInstagram,
  FiGift, FiChevronDown
} from "react-icons/fi";

export default function Navbar() {
  const pathName = usePathname();
  const locale = useLocale();
  const t = useTranslations('Navbar');
  const router = useRouter();

  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setToggle(false);
  }, [pathName]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const query = searchTerm.trim();
      const basePath = `/${locale}/Products`;
      const finalURL = query ? `${basePath}?search=${encodeURIComponent(query)}` : basePath;
      router.push(finalURL);
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const navSections = [
    {
      title: "general",
      items: [
        { key: "home", path: "/", icon: <FiHome size={20} />, activeIcon: <FiHome size={20} className="text-white" /> },
        { key: "products", path: "/Products", icon: <FiBox size={20} />, activeIcon: <FiBox size={20} className="text-white" /> },
        { key: "contact", path: "/Contact", icon: <FiMail size={20} />, activeIcon: <FiMail size={20} className="text-white" /> }
      ]
    },
    {
      title: "mySpace",
      items: [
        { key: "activity", path: "/activity", icon: <FiActivity size={20} />, activeIcon: <FiActivity size={20} className="text-white" /> },
        { key: "privacy", path: "/privacy", icon: <FiShield size={20} />, activeIcon: <FiShield size={20} className="text-white" /> }
      ]
    },
    {
      title: "support",
      items: [
        { key: "help", path: "/help", icon: <FiHelpCircle size={20} />, activeIcon: <FiHelpCircle size={20} className="text-white" /> }
      ]
    },
    {
      items: [
        { key: "account", path: ["/auth/login", "/auth/signup"], icon: <FiUser size={20} />, activeIcon: <FiUser size={20} className="text-white" /> }
      ]
    }
  ];

  const isActive = (path: string | string[]) => {
    const cleanedPath = pathName.toLowerCase().replace(/^\/(en|ar)/, '');
    if (Array.isArray(path)) {
      return path.some(p => cleanedPath === p.toLowerCase());
    }
    const isHome = cleanedPath === '' || cleanedPath === '/';
    return isHome ? path === '/' : cleanedPath === path.toLowerCase() || cleanedPath.startsWith(path.toLowerCase() + '/');
  };

  const renderNavLinks = (section: any) => (
    <div className="px-9 py-4 border-b border-[#9A3E631A] last:border-b-0">
      {section.title && <h4 className="text-[14px] text-[#9A3E63] mb-2">{t(section.title)}</h4>}
      <ul>
        {section.items.map((item: any, index: number) => {
          const active = isActive(item.path);
          const fullPath = `/${locale}${Array.isArray(item.path) ? item.path[0] : item.path}`;
          return (
            <li key={index} className="mb-1">
              <Link
                href={fullPath}
                className={`${
                  active
                    ? "text-white bg-gradient-to-r from-[#FE93B9] to-[#9A3E63] border-[1px] border-transparent border-l-[#9A3E63]"
                    : "text-[#000000CC]"
                } flex items-center gap-2 text-[13px] rounded-[10px] py-1.5 px-2.5 w-full`}
              >
                {active ? item.activeIcon : item.icon}
                {t(item.key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <header>
      <p className="flex justify-center items-center gap-2.5 p-2.5 bg-[#FE93B9] text-[#393939] text-[15px] max-[767px]:text-[13px]">
        <FiGift size={20} />
        Only this month 20% discount on all services
        <FiGift size={20} />
      </p>

      <nav className="w-full h-15">
        <div className="bg-[#f5f5f5]">
          <div className="custom__container">
            <ul className="flex items-center justify-between gap-4 w-full px-4 py-2 relative">

              {/* Menu toggle button */}
              <li className="relative z-50">
                {toggle && (
                  <span className="absolute -bottom-[35px] left-1/2 w-10 -translate-x-1/2">
                    <FiChevronDown size={40} className="text-[#FE93B9]" />
                  </span>
                )}
                <button onClick={() => setToggle(!toggle)} className="cursor-pointer">
                  {toggle ? <FiX size={30} className="text-[#393939]" /> : <FiMenu size={30} className="text-[#393939]" />}
                </button>

                {toggle && (
                  <div className="absolute py-4 bg-[#fe93b9] top-[60px] -left-6 rounded-r-[8px] rounded-b-[8px] z-50 w-[270px]">
                    <div className="px-9">
                      <Image src="/logo.svg" width={75} height={75} loading="lazy" alt="logo" className="mb-3" />
                    </div>

                    <div className="pt-4 pb-4  mb-4 flex flex-col justify-start items-start gap-2">
                      {navSections.map((section, index) => (
                        <div key={index} className="w-[90%]">{renderNavLinks(section)}</div>
                      ))}

                      {/* Switch Language styled like nav items */}
                      <div className="mt-4 px-4">
                        <SwitchButtonLang currentLocale={locale} />
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Logo centered */}
              <li className="absolute left-1/2 -translate-x-1/2 z-0">
                <Link href="/">
                  <Image src="/logo.svg" width={90} height={90} loading="lazy" alt="logo" />
                </Link>
              </li>

              {/* Right side controls */}
              <li className="flex items-center gap-2 z-10">
                <div className="hidden lg:block relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-1 text-sm rounded-md bg-[#f3f3f3] outline-none text-black"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
                    <FiSearch size={20} />
                  </button>
                </div>
                <Link href="/cart" className="lg:bg-[#FE93B9] bg-transparent rounded-full w-[35px] h-[35px] flex justify-center items-center">
                  <FiShoppingCart size={20} className="text-[#393939] lg:text-white" />
                </Link>
                <Link href="/" className="bg-[#FE93B9] hidden rounded-full w-[35px] h-[35px] lg:flex justify-center items-center">
                  <FaFacebookF size={20} className="text-[#393939]" />
                </Link>
                <Link href="/" className="bg-[#FE93B9] hidden rounded-full w-[35px] h-[35px] lg:flex justify-center items-center">
                  <FiInstagram size={20} className="text-[#393939]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
