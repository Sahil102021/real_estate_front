"use client"; // Ensures this file is treated as a client component

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

const HeaderPage = () => {
  const [list, setList] = useState([]);
  const [token, setToken] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile sidebar

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const listFetch = async () => {
      if (!token) return;
      try {
        const response = await axios.get(
          "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setList(response.data || []);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      listFetch();
    }
  }, [token]);

  const menu = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/" },
    { name: "Product", link: "/products" },
  ];

  return (
    <header className="w-full bg-slate-600 md:bg-transparent">
      <div className="container mx-auto px-3">
        <div className="w-full max-w-[calc(100%-24px)] h-16 md:bg-gray-900 rounded-b-lg flex justify-between items-center md:px-3 relative">
          {/* Logo */}
          <div className="w-12">
            <img
              src="https://res.cloudinary.com/dttftmu4m/image/upload/v1739595228/Screenshot_2025-02-15_101510-removebg-preview_1_rjp6vm.png"
              alt="Logo"
              width="100%"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-6 text-slate-300 text-sm font-medium">
            {menu.map((el, i) => (
              <Link
                key={i}
                href={el.link || "#"}
                className="relative group transition duration-300 hover:text-white"
              >
                {el.name}
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-gradient-to-r from-lime-400 to-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className=" sm:hidden p-2 block "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>

          {/* Auth Buttons */}
          <div className="hidden sm:flex gap-3 ">
            <button className="bg-slate-300 text-slate-600 px-4 py-2 rounded hover:bg-lime-950 hover:text-white">
              Login
            </button>
            <button className="bg-slate-300 text-slate-600 px-4 py-2 rounded hover:bg-lime-950 hover:text-white">
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="  fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-64 bg-slate-700 h-full p-5 flex flex-col">
            <button
              className="self-end mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <nav className="flex flex-col space-y-4">
              {menu.map((el, i) => (
                <Link
                  key={i}
                  href={el.link || "#"}
                  className="text-white text-lg hover:text-gray-300 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {el.name}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <button className="bg-slate-300 text-slate-600 px-4 py-2 rounded hover:bg-lime-950 hover:text-white">
                Login
              </button>
              <button className="bg-slate-300 text-slate-600 px-4 py-2 rounded hover:bg-lime-950 hover:text-white">
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderPage;
