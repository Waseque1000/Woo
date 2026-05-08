"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Eye } from "lucide-react";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-hover transition-all duration-500 border border-border cursor-pointer"
      onClick={() => window.location.href = `/products/${product.id}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={product.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              New
            </span>
          )}
          {product.sale && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Sale
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <button 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all transform hover:scale-110 shadow-lg"
            onClick={(e) => { e.stopPropagation(); /* Wishlist placeholder */ }}
          >
            <Heart size={18} />
          </button>
          <button 
            onClick={handleAddToCart}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all transform hover:scale-110 shadow-lg"
          >
            <ShoppingCart size={18} />
          </button>
          <Link 
            href={`/products/${product.id}`} 
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all transform hover:scale-110 shadow-lg"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em] mb-2">
          {product.category || "General"}
        </p>
        <h3 className="font-bold text-lg mb-2 group-hover:text-black/60 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-black text-xl">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through decoration-black/20">${product.oldPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
