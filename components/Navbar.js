"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  ShoppingBag, User, Search, Menu, X, Heart, Shield, 
  ChevronDown, Headphones, Watch, Speaker, Smartphone, 
  Tv, Gamepad, Battery, Camera, Usb, Star, Music, Mic
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/lib/CartContext";
import Image from "next/image";

const categoryList = [
  { name: "True Wireless Earbuds", icon: <Headphones size={24} />, href: "/shop?category=Electronics" },
  { name: "Neckbands", icon: <Headphones size={24} className="rotate-90" />, href: "/shop?category=Electronics" },
  { name: "Smart Watches", icon: <Watch size={24} />, href: "/shop?category=Accessories" },
  { name: "Headphones", icon: <Headphones size={24} />, href: "/shop?category=Electronics" },
  { name: "Wireless Speakers", icon: <Speaker size={24} />, href: "/shop?category=Electronics" },
  { name: "Soundbars", icon: <Music size={24} />, href: "/shop?category=Electronics" },
  { name: "Party Speakers", icon: <Mic size={24} />, href: "/shop?category=Electronics" },
  { name: "Power Banks", icon: <Battery size={24} />, href: "/shop?category=Accessories" },
  { name: "Dashcams", icon: <Camera size={24} />, href: "/shop?category=Electronics" },
  { name: "Projectors", icon: <Tv size={24} />, href: "/shop?category=Electronics" },
  { name: "Gaming Series", icon: <Gamepad size={24} />, href: "/shop?category=Electronics" },
  { name: "Chargers & Cables", icon: <Usb size={24} />, href: "/shop?category=Accessories" },
  { name: "Wired Earphones", icon: <Headphones size={24} />, href: "/shop?category=Electronics" },
  { name: "Limited Edition", icon: <Star size={24} />, href: "/shop?category=All" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isCategoriesOpen ? "bg-white shadow-premium py-3" : "bg-transparent py-5"
      }`}
      onMouseLeave={() => setIsCategoriesOpen(false)}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-black">EOO</span>
            </div>
            <span className="hidden sm:inline">EOO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsCategoriesOpen(true)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors ${isCategoriesOpen ? 'text-black' : 'text-black/60 hover:text-black'}`}
              >
                Categories
                <motion.div
                  animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={14} />
                </motion.div>
              </button>
            </div>
            
            {["Shop", "Collections", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden lg:flex relative group">
             <input 
              type="text" 
              placeholder="Search..." 
              className="bg-neutral-100 rounded-full px-5 py-2 text-xs w-48 focus:w-64 transition-all outline-none border border-transparent focus:border-neutral-200"
             />
             <Search size={14} className="absolute right-4 top-2.5 text-neutral-400" />
          </div>

          <Link href="/admin" className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-black/5 hover:bg-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
            <Shield size={12} />
            Admin
          </Link>

          <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
            <Heart size={20} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">
              0
            </span>
          </button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors relative"
          >
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          </button>

          <Link href="/dashboard" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <User size={20} />
          </Link>

          <button 
            className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isCategoriesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-2xl overflow-hidden pointer-events-auto"
            onMouseEnter={() => setIsCategoriesOpen(true)}
          >
            <div className="container mx-auto px-6 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-8">
                {categoryList.map((cat, idx) => (
                  <Link 
                    key={idx}
                    href={cat.href}
                    className="group flex items-center gap-4 hover:translate-x-1 transition-transform"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:-rotate-6">
                      {cat.icon}
                    </div>
                    <div className="flex flex-col">
                       <span className="text-sm font-bold text-neutral-800 group-hover:text-black">{cat.name}</span>
                       <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Explore</span>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-neutral-50 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Featured Collections:</span>
                    <div className="flex gap-2">
                       {["New Drops", "Best Sellers", "Sale"].map(tag => (
                         <button key={tag} className="px-4 py-1.5 rounded-full border border-neutral-200 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                           {tag}
                         </button>
                       ))}
                    </div>
                 </div>
                 <Link href="/collections" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                    View All Collections
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                       <ChevronDown size={12} className="-rotate-90" />
                    </div>
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <div className="font-black text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">Navigation</div>
              {["Shop", "Collections", "About", "Contact", "Tracking"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-lg font-bold uppercase tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item === "Tracking" ? "Track Order" : item}
                </Link>
              ))}
              <div className="h-px bg-neutral-100 my-4" />
              <div className="font-black text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">Admin & Settings</div>
              <Link
                href="/admin"
                className="text-lg font-bold flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shield size={20} />
                Admin Panel
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}
