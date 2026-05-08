"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ChevronRight, CreditCard, Truck, MapPin, ShoppingBag, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const { cart, cartTotal, clearCart } = useCart();
  const steps = ["Shipping", "Payment", "Confirm"];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCompletePurchase = () => {
    setStep(3);
    clearCart();
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-10">
            {/* Steps Indicator */}
            <div className="flex items-center justify-between max-w-xl mx-auto mb-16">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step > i + 1 ? 'bg-black text-white' : step === i + 1 ? 'bg-black text-white scale-110 shadow-premium' : 'bg-muted text-muted-foreground'}`}>
                    {step > i + 1 ? <Check size={18} /> : i + 1}
                  </div>
                  <span className={`text-sm font-bold ${step === i + 1 ? 'text-black' : 'text-muted-foreground'}`}>{s}</span>
                  {i < steps.length - 1 && <div className="w-12 h-[2px] bg-muted hidden sm:block" />}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white p-8 md:p-12 rounded-[40px] shadow-premium border border-border space-y-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center"><MapPin size={20} /></div>
                    <h2 className="text-2xl font-bold">Shipping Details</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-bold">First Name</label>
                        <input type="text" placeholder="John" className="w-full bg-muted/50 border border-border px-4 py-3 rounded-xl focus:bg-white transition-all" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold">Last Name</label>
                        <input type="text" placeholder="Doe" className="w-full bg-muted/50 border border-border px-4 py-3 rounded-xl focus:bg-white transition-all" />
                     </div>
                     <div className="md:col-span-2 space-y-2">
                        <label className="text-sm font-bold">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full bg-muted/50 border border-border px-4 py-3 rounded-xl focus:bg-white transition-all" />
                     </div>
                     <div className="md:col-span-2 space-y-2">
                        <label className="text-sm font-bold">Shipping Address</label>
                        <input type="text" placeholder="123 Street, City, Country" className="w-full bg-muted/50 border border-border px-4 py-3 rounded-xl focus:bg-white transition-all" />
                     </div>
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="w-full bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black/90 transition-all active:scale-[0.98] shadow-premium"
                  >
                    Continue to Payment
                    <ChevronRight size={20} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white p-8 md:p-12 rounded-[40px] shadow-premium border border-border space-y-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center"><CreditCard size={20} /></div>
                    <h2 className="text-2xl font-bold">Payment Method</h2>
                  </div>

                  <div className="space-y-4">
                     {["Credit Card", "PayPal", "Stripe", "SSLCommerz"].map((method) => (
                       <label key={method} className="flex items-center justify-between p-4 rounded-2xl border-2 border-border cursor-pointer hover:border-black transition-all has-[:checked]:border-black has-[:checked]:bg-black/5">
                          <div className="flex items-center gap-4 font-bold">
                             <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center relative">
                                <input type="radio" name="payment" className="peer absolute opacity-0 cursor-pointer w-full h-full" defaultChecked={method === "Credit Card"} />
                                <div className="w-2 h-2 bg-black rounded-full scale-0 transition-transform peer-checked:scale-100" />
                             </div>
                             {method}
                          </div>
                          <CreditCard size={20} className="text-muted-foreground" />
                       </label>
                     ))}
                  </div>

                  <div className="pt-8 flex gap-4">
                     <button onClick={() => setStep(1)} className="flex-1 bg-muted py-4 rounded-2xl font-bold">Back</button>
                     <button onClick={handleCompletePurchase} className="flex-[2] bg-black text-white py-4 rounded-2xl font-bold shadow-premium">Complete Purchase</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-12 rounded-[40px] shadow-premium border border-border text-center space-y-8"
                >
                  <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-200">
                    <Check size={48} />
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight">Order Confirmed!</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Your order #EOO-{Math.floor(Math.random() * 90000) + 10000} has been placed successfully. We'll send you a confirmation email shortly.
                  </p>
                  <div className="pt-8">
                     <Link href="/" className="bg-black text-white px-12 py-4 rounded-2xl font-bold shadow-premium inline-block">Back to Shopping</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          <aside className="w-full lg:w-[400px] space-y-8">
             <div className="bg-white p-8 rounded-[40px] shadow-premium border border-border space-y-6 sticky top-32">
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
                   {!isClient ? (
                     <div className="animate-pulse space-y-4">
                        <div className="h-16 bg-muted rounded-xl w-full" />
                        <div className="h-16 bg-muted rounded-xl w-full" />
                     </div>
                   ) : cart.length > 0 ? (
                     cart.map((item, i) => (
                       <div key={`${item.id}-${item.selectedVariant}`} className="flex gap-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted border border-border relative shrink-0">
                             <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center min-w-0">
                             <h4 className="font-bold text-sm truncate">{item.name}</h4>
                             <p className="text-xs text-muted-foreground">Qty: {item.quantity} {item.selectedVariant && `• ${item.selectedVariant}`}</p>
                          </div>
                          <p className="font-bold self-center shrink-0">${item.price * item.quantity}</p>
                       </div>
                     ))
                   ) : (
                     <p className="text-center text-muted-foreground py-10">Your cart is empty</p>
                   )}
                </div>
                
                <div className="pt-6 border-t border-border space-y-3">
                   <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-bold">${isClient ? cartTotal : "0.00"}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-green-600 font-bold">FREE</span>
                   </div>
                   <div className="flex justify-between text-lg pt-2">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-2xl">${isClient ? cartTotal : "0.00"}</span>
                   </div>
                </div>

                <div className="pt-4">
                   <div className="bg-muted/50 p-4 rounded-2xl border border-border space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                         <ShieldCheck size={14} className="text-black" />
                         Premium Protection
                      </div>
                      <p className="text-xs text-muted-foreground">2-year extended warranty included with this purchase.</p>
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
