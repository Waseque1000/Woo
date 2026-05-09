"use client";
import { motion } from "framer-motion";
import { Gift, Zap, Clock } from "lucide-react";
import Link from "next/link";

export default function OfferBanner() {
  return (
    <div className="bg-neutral-900 text-white py-2.5 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-blue-600/20 opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center gap-3 md:gap-6">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full text-black shadow-lg"
        >
          <Zap size={14} fill="currentColor" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
           <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
             Exclusive Offer: <span className="text-yellow-400">Get 20% EXTRA OFF</span> on your next purchase!
           </p>
           <div className="flex items-center gap-2">
              <Clock size={12} className="text-neutral-400" />
              <p className="text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Ends in: <span className="text-white">3 Days 12:45:00</span></p>
           </div>
        </div>

        <Link 
          href="/shop" 
          className="hidden md:block bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-colors shadow-sm"
        >
          Claim Now
        </Link>
      </div>
    </div>
  );
}
