"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PromoTicker() {
  return (
    <div className="bg-neutral-100 py-2 border-b border-neutral-200">
      <div className="container mx-auto px-6 overflow-hidden">
        <motion.div 
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600">
            Get Extra 5% Off On Prepaid Orders | Code: <span className="text-black">BOATHEAD</span> | <Link href="/shop" className="underline underline-offset-4 hover:text-black transition-colors">Shop Now</Link>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600">
            Free Shipping on All Orders Above ₹499 | Limited Time Offer
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600">
            Join the boAt Crew for Exclusive Rewards | <Link href="/register" className="underline underline-offset-4 hover:text-black transition-colors">Sign Up</Link>
          </span>
          {/* Duplicate for seamless loop */}
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600">
            Get Extra 5% Off On Prepaid Orders | Code: <span className="text-black">BOATHEAD</span> | <Link href="/shop" className="underline underline-offset-4 hover:text-black transition-colors">Shop Now</Link>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
