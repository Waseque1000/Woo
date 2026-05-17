"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Eye, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { toast } from "sonner";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-hover transition-all duration-500 border border-neutral-100 cursor-pointer flex flex-col h-full"
      onClick={() => window.location.href = `/products/${product.id}`}
    >
      <div className="relative aspect-square overflow-hidden bg-neutral-50 p-6 rounded-[2rem] m-3">
        <Image
          src={product.image || "/images/headphones.png"}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
          {discount > 0 && (
            <span className="bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-sm">
              <Zap size={10} fill="black" />
              {discount}% OFF
            </span>
          )}
          {product.rating > 4.5 && (
            <span className="bg-neutral-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button 
          className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-300 hover:text-red-500 transition-colors shadow-sm z-10"
          onClick={(e) => { e.stopPropagation(); /* Wishlist placeholder */ }}
        >
          <Heart size={18} />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <Eye size={20} className="text-neutral-800" />
           </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
           <div className="flex items-center gap-1 text-yellow-500">
              <Star size={12} fill="currentColor" />
              <span className="text-xs font-black text-black">{product.rating || "4.5"}</span>
           </div>
           <div className="w-1 h-1 bg-neutral-200 rounded-full" />
           <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">{product.reviews || "120"} Reviews</span>
        </div>

        <h3 className="font-bold text-lg mb-2 text-neutral-900 line-clamp-1 group-hover:text-neutral-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-xs text-neutral-400 mb-6 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4">
           <div className="flex flex-col">
              {product.oldPrice && (
                <span className="text-xs text-neutral-400 line-through decoration-neutral-300">₹{product.oldPrice}</span>
              )}
              <span className="text-2xl font-black text-neutral-900 tracking-tight">₹{product.price}</span>
           </div>
           
           <button 
             onClick={handleAddToCart}
             className="px-6 py-3 bg-neutral-900 text-white rounded-2xl flex items-center gap-3 hover:bg-neutral-800 transition-all shadow-lg active:scale-95"
           >
             <span className="text-[10px] font-black uppercase tracking-widest">Add</span>
             <ShoppingCart size={16} />
           </button>
        </div>
      </div>
    </motion.div>
  );
}
