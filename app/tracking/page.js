"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Package, Truck, CheckCircle2, MapPin, Clock, ChevronRight, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TrackingPage() {
  const [orderId, setOrderId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [trackResult, setTrackResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId) return;
    
    setIsSearching(true);
    // Mock search delay
    setTimeout(() => {
      setTrackResult({
        id: orderId,
        status: "shipped",
        date: "May 08, 2026",
        estimate: "May 12, 2026",
        items: [
          { name: "boAt Nirvana Zenith Pro", price: 2999, image: "/images/headphones.png" },
          { name: "boAt Wave Fury", price: 1199, image: "/images/watch.png" }
        ],
        history: [
          { status: "Delivered", date: "TBA", completed: false },
          { status: "Out for Delivery", date: "TBA", completed: false },
          { status: "In Transit", date: "May 09, 2026, 04:30 PM", completed: true, location: "Bangalore Distribution Center" },
          { status: "Shipped", date: "May 08, 2026, 11:00 AM", completed: true, location: "Mumbai Warehouse" },
          { status: "Order Placed", date: "May 07, 2026, 09:15 PM", completed: true, location: "Online" },
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
             <div className="inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                <Truck size={12} />
                Order Tracking
             </div>
             <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">Where is your boAt?</h1>
             <p className="text-neutral-500 max-w-lg mx-auto">Enter your order details below to get real-time updates on your delivery status.</p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-[2.5rem] shadow-premium border border-neutral-100 p-8 md:p-12 mb-12">
             <form onSubmit={handleTrack} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div className="md:col-span-1 space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Order ID</label>
                   <input 
                     type="text" 
                     placeholder="e.g. #BOAT-12345" 
                     className="w-full bg-neutral-50 border border-neutral-100 px-6 py-4 rounded-2xl focus:bg-white focus:ring-2 focus:ring-neutral-100 transition-all outline-none"
                     value={orderId}
                     onChange={(e) => setOrderId(e.target.value)}
                   />
                </div>
                <div className="md:col-span-1 space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Phone / Email</label>
                   <input 
                     type="text" 
                     placeholder="Registered contact" 
                     className="w-full bg-neutral-50 border border-neutral-100 px-6 py-4 rounded-2xl focus:bg-white focus:ring-2 focus:ring-neutral-100 transition-all outline-none" 
                   />
                </div>
                <button 
                  type="submit"
                  disabled={isSearching}
                  className="bg-neutral-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all active:scale-95 shadow-xl disabled:opacity-50"
                >
                   {isSearching ? "Searching..." : "Track My Order"}
                   {!isSearching && <ArrowRight size={16} />}
                </button>
             </form>
          </div>

          {/* Results Area */}
          <AnimatePresence mode="wait">
            {trackResult ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                 {/* Status Header */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-white rounded-[2.5rem] shadow-premium border border-neutral-100 p-10 flex flex-col md:flex-row items-center gap-10">
                       <div className="relative w-32 h-32 bg-green-50 rounded-full flex items-center justify-center">
                          <div className="absolute inset-0 border-4 border-green-500 border-t-transparent rounded-full animate-spin opacity-20" />
                          <Package size={48} className="text-green-600" />
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                             <CheckCircle2 size={24} className="text-green-500" />
                          </div>
                       </div>
                       <div className="text-center md:text-left space-y-2">
                          <p className="text-xs font-black uppercase tracking-widest text-green-600">On its way</p>
                          <h2 className="text-3xl font-black text-neutral-900">In Transit</h2>
                          <p className="text-sm text-neutral-500">Your order is being processed at the distribution center.</p>
                          <div className="pt-4 flex items-center justify-center md:justify-start gap-4">
                             <div className="flex items-center gap-2">
                                <Clock size={14} className="text-neutral-400" />
                                <span className="text-xs font-bold">Estimated: <span className="text-neutral-900">{trackResult.estimate}</span></span>
                             </div>
                             <div className="w-1 h-1 bg-neutral-200 rounded-full" />
                             <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-neutral-400" />
                                <span className="text-xs font-bold">Location: <span className="text-neutral-900">Bangalore, KA</span></span>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="bg-neutral-900 rounded-[2.5rem] shadow-premium p-10 text-white flex flex-col justify-center text-center space-y-4">
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Order Details</p>
                       <p className="text-2xl font-bold">{trackResult.id}</p>
                       <p className="text-xs text-white/60">Placed on {trackResult.date}</p>
                       <Link href="/help" className="text-xs font-black uppercase tracking-widest text-yellow-400 hover:text-yellow-300 transition-colors pt-4 block">
                          Need Assistance?
                       </Link>
                    </div>
                 </div>

                 {/* Timeline and Summary */}
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Timeline */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-premium border border-neutral-100 p-10">
                       <h3 className="text-xl font-black mb-10 text-neutral-900">Shipment History</h3>
                       <div className="space-y-12">
                          {trackResult.history.map((step, i) => (
                            <div key={i} className="relative flex gap-8 group">
                               {i !== trackResult.history.length - 1 && (
                                 <div className={`absolute left-[15px] top-[30px] bottom-[-48px] w-0.5 ${step.completed ? 'bg-green-500' : 'bg-neutral-100'}`} />
                               )}
                               <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-sm border-4 border-white ${step.completed ? 'bg-green-500 text-white' : 'bg-neutral-100 text-neutral-300'}`}>
                                  {step.completed ? <CheckCircle2 size={14} /> : <div className="w-2 h-2 bg-current rounded-full" />}
                               </div>
                               <div className="flex-1 space-y-1">
                                  <div className="flex items-center justify-between">
                                     <h4 className={`font-black text-sm uppercase tracking-widest ${step.completed ? 'text-neutral-900' : 'text-neutral-300'}`}>{step.status}</h4>
                                     <span className="text-[10px] font-bold text-neutral-400">{step.date}</span>
                                  </div>
                                  {step.location && (
                                    <p className="text-xs text-neutral-500 flex items-center gap-1">
                                       <MapPin size={10} />
                                       {step.location}
                                    </p>
                                  )}
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-white rounded-[2.5rem] shadow-premium border border-neutral-100 p-8 flex flex-col">
                       <h3 className="text-xl font-black mb-8 text-neutral-900">Items (2)</h3>
                       <div className="space-y-6 flex-1">
                          {trackResult.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                               <div className="relative w-16 h-16 bg-neutral-50 rounded-xl overflow-hidden shrink-0">
                                  <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                               </div>
                               <div>
                                  <p className="text-sm font-bold text-neutral-900 line-clamp-1">{item.name}</p>
                                  <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">₹{item.price}</p>
                               </div>
                            </div>
                          ))}
                       </div>
                       <div className="pt-8 border-t border-neutral-100 mt-8 space-y-4 text-sm">
                          <div className="flex justify-between font-bold text-neutral-400">
                             <span>Subtotal</span>
                             <span className="text-neutral-900">₹4198</span>
                          </div>
                          <div className="flex justify-between font-bold text-neutral-400">
                             <span>Shipping</span>
                             <span className="text-green-600 uppercase text-xs tracking-widest">Free</span>
                          </div>
                          <div className="flex justify-between text-lg font-black text-neutral-900 pt-2 border-t border-neutral-50">
                             <span>Total</span>
                             <span>₹4198</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </motion.div>
            ) : !isSearching && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-neutral-900 rounded-[3rem] p-16 text-center text-white space-y-8"
              >
                 <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                    <Search size={40} className="text-white/40" />
                 </div>
                 <div className="space-y-4">
                    <h2 className="text-3xl font-black">No Active Search</h2>
                    <p className="text-white/50 max-w-sm mx-auto">Search with your Order ID to see detailed shipping updates and delivery history.</p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
                    {[
                      { icon: <ShieldCheck size={24} />, title: "Secure Tracking", desc: "Encrypted data protection" },
                      { icon: <Package size={24} />, title: "Real-time Hubs", desc: "Live station updates" },
                      { icon: <AlertCircle size={24} />, title: "Support", desc: "24/7 delivery help" },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                         <div className="text-yellow-400 flex justify-center mb-4">{item.icon}</div>
                         <h4 className="font-bold text-sm uppercase tracking-widest">{item.title}</h4>
                         <p className="text-[10px] text-white/40 uppercase font-black">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      <Footer />
    </main>
  );
}
