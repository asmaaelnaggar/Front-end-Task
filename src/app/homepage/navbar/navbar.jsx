"use client";

import { useState } from "react";
import ProductDetails from "./productdetails.jsx";

const navLinks = [
  { label: "Home", icon: "/icons/homeicon.png", href: "#" },
  { label: "Our Category", icon: "/icons/ourcategoryicon.png", href: "#" },
  { label: "About Us", icon: "/icons/aboutusicon.png", href: "#" },
  { label: "Contact Us", icon: "/icons/contactusicon.png", href: "#" },
  { label: "FAQs", icon: "/icons/faqicon.png", href: "#" },
];

const rightIcons = [
  { icon: "/icons/shoppingbagicon.png", alt: "Shopping bag" },
  { icon: "/icons/notificationicon.png", alt: "Notification" },
  { icon: "/icons/loveicon.png", alt: "Wishlist" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
        <div className="lg:px-[120px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <img
              src="/icons/logoicon.png"
              alt="Logo"
              className="h-[51px] w-[65.95px]"
            />

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-1 text-[14px] font-[400] text-[#8A8A8A] hover:text-black font-poppins"
                >
                  <img src={icon} alt={label} className="h-5 w-5" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-4">
              {rightIcons.map(({ icon, alt }, index) => (
                <a key={index} href="#">
                  <img src={icon} alt={alt} className="h-5 w-5" />
                </a>
              ))}

              {/* Language */}
              <div className="cursor-pointer">
                <span className="flex items-center gap-1 text-sm font-medium text-[#020202] font-poppins">
                  EN
                  <ArrowIcon />
                </span>
              </div>

              {/* User */}
              <a href="#" className="flex items-center gap-1">
                <img src="/icons/usericon.png" alt="User" className="h-5 w-5" />
                <ArrowIcon />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 text-[14px] text-[#8A8A8A] hover:text-black"
                >
                  <img src={icon} alt={label} className="h-5 w-5" />
                  {label}
                </a>
              ))}

              <div className="flex items-center gap-4 pt-3 border-t">
                {rightIcons.map(({ icon, alt }, index) => (
                  <img key={index} src={icon} alt={alt} className="h-5 w-5" />
                ))}

                <span className="flex items-center gap-1 text-sm font-medium">
                  EN <ArrowIcon />
                </span>

                <img src="/icons/usericon.png" alt="User" className="h-5 w-5" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-[80px]">
        <ProductDetails />
      </main>
    </div>
  );
}

/* Arrow Icon */
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
