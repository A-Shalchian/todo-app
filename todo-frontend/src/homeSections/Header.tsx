"use client";
import { useState } from "react";
import ArrowRight from "@/assets/icons/ArrowRight.svg";
import Logo from "@/assets/images/logo-fitsho.png";
import Image from "next/image";
import MenuIconDark from "@/assets/icons/MenuIconDark.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center bg-black text-sm text-white py-3 gap-5">
        <p className="text-neutral-100 hidden md:block ">
          Elevate your routine and maximize your performance
        </p>
        <div className="inline-flex gap-1 items-center mt-[2px]">
          <a href="/login" className="hover:text-white/60 underline group">
            Get Started For Free
            <ArrowRight className="h-5 w-5 inline-flex justify-center items-center ml-0.5 fill-current group-hover:text-white/60" />
          </a>
        </div>
      </div>
      <div className="py-5">
        <div className="mx-10">
          <div className="flex items-center justify-between w-full">
            <a href="#" className="hover:scale-125 shrink-0">
              <Image src={Logo} alt="Fitsho Logo" height={40} width={40} />
            </a>

            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-4 text-black/60 items-center">
                <a href="#" className="hover-nav">
                  Features
                </a>
                <a href="#" className="hover-nav">
                  Updates
                </a>

                <a href="#" className="hover-nav">
                  Sign In
                </a>
              </nav>

              <div
                className="hidden md:inline-flex bg-indigo-500 text-white px-10 py-3 
                rounded-lg font-bold items-center justify-center tracking-tight btn-hover group"
              >
                <a href="/login" className="">
                  Get Started
                  <ArrowRight className="h-7 w-6 inline-flex justify-center items-center ml-2 fill-current group-hover:text-white/60" />
                </a>
              </div>

              <MenuIconDark
                className="h-5 w-5 md:hidden cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-3 flex flex-col gap-4 text-black font-semibold items-center">
              <a href="/about" className="hover-nav">
                About
              </a>
              <a href="#" className="hover-nav">
                Features
              </a>
              <a href="#" className="hover-nav">
                Updates
              </a>
              <a href="#" className="hover-nav">
                Plans
              </a>
              <a href="#" className="hover-nav">
                Help
              </a>
              <button
                className="bg-indigo-500 text-white px-4 py-2 
                rounded-lg font-medium inline-flex items-center justify-center tracking-tight btn-hover"
              >
                Get Started
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
