"use client";
import { useCart } from "@/lib/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} />
                <h2 className="text-xl font-bold">Your Cart</h2>
                <span className="bg-black text-white text-xs px-2 py-1 rounded-full">{cartCount}</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedVariant}`} className="flex gap-4 group">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-muted border border-border">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-sm leading-tight">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedVariant)}
                            className="text-muted-foreground hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        {item.selectedVariant && (
                          <p className="text-xs text-muted-foreground mt-1">Option: {item.selectedVariant}</p>
                        )}
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-3 bg-muted px-2 py-1 rounded-lg">
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedVariant)}
                             className="p-1 hover:bg-white rounded-md transition-all"
                           >
                             <Minus size={14} />
                           </button>
                           <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedVariant)}
                             className="p-1 hover:bg-white rounded-md transition-all"
                           >
                             <Plus size={14} />
                           </button>
                        </div>
                        <p className="font-bold">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="text-lg font-bold">Your cart is empty</h3>
                  <p className="text-sm text-muted-foreground">Looks like you haven't added anything yet.</p>
                  <Link href="/shop" onClick={onClose} className="bg-black text-white px-6 py-2 rounded-xl text-sm font-bold">
                    Start Shopping
                  </Link>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-border bg-[#fafafa] space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-bold">${cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-green-600 font-bold">Calculated at checkout</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg">${cartTotal}</span>
                </div>
                <Link 
                  href="/checkout" 
                  onClick={onClose}
                  className="w-full bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black/90 transition-all active:scale-[0.98] shadow-premium"
                >
                  Checkout
                  <ArrowRight size={20} />
                </Link>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                  Secure SSL Encrypted Checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
