"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/utils/seedData";
import Image from "next/image";
import { ShoppingBag, X } from "lucide-react";

const NAMES = ["Rahul", "Priya", "Amit", "Sneha", "Vikram", "Ananya", "Rohan", "Ishita", "Arjun", "Kavya"];
const LOCATIONS = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"];

export default function SalesNotification() {
  const [currentSale, setCurrentSale] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomLocation = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      const timeAgo = Math.floor(Math.random() * 59) + 1;

      setCurrentSale({
        product: randomProduct,
        name: randomName,
        location: randomLocation,
        time: timeAgo
      });
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => setIsVisible(false), 5000);
    };

    // Initial delay
    const initialDelay = setTimeout(showNotification, 3000);

    // Show every 15-30 seconds
    const interval = setInterval(showNotification, 20000 + Math.random() * 10000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && currentSale && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="fixed bottom-6 left-6 z-[100] w-full max-w-[320px]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-4 flex items-center gap-4 relative overflow-hidden group">
            {/* Progress Bar */}
            <motion.div 
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-900 origin-left"
            />

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-neutral-300 hover:text-neutral-900 transition-colors"
            >
              <X size={14} />
            </button>

            <div className="relative w-16 h-16 bg-neutral-50 rounded-xl overflow-hidden shrink-0">
              <Image 
                src={currentSale.product.image || "/images/headphones.png"} 
                alt={currentSale.product.name}
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="flex-1 min-w-0">
               <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Verified Purchase</p>
               </div>
               <p className="text-xs text-neutral-600 leading-tight mb-1">
                 <span className="font-bold text-neutral-900">{currentSale.name}</span> from {currentSale.location}
               </p>
               <p className="text-xs font-medium text-neutral-900 line-clamp-1 mb-1">
                 Bought <span className="font-black">"{currentSale.product.name}"</span>
               </p>
               <p className="text-[10px] text-neutral-400 font-bold">{currentSale.time} mins ago</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
