"use client";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, Package, Truck, CheckCircle2, Download, 
  MapPin, CreditCard, Clock, ChevronRight, AlertCircle, 
  CornerUpLeft, ShoppingBag, Zap, Star, ShieldCheck, Box
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OrderDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const order = {
    id: id || "EOO-98231",
    date: "May 07, 2026",
    status: "In Transit",
    total: 4198,
    paymentMethod: "Credit Card (ending in 4242)",
    shippingAddress: {
      name: "Waseque Arafat",
      address: "H-24, Road-07, Block-C, Banasree",
      city: "Dhaka",
      postalCode: "1219",
      country: "Bangladesh"
    },
    items: [
      { id: "p1", name: "boAt Nirvana Zenith Pro", price: 2999, quantity: 1, image: "/images/headphones.png", color: "Active Black" },
      { id: "p2", name: "boAt Wave Fury", price: 1199, quantity: 1, image: "/images/watch.png", color: "Deep Blue" }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-black selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-6 max-w-6xl"
        >
          
          {/* Hero Order Header */}
          <motion.div variants={itemVariants} className="relative mb-16 rounded-[3rem] overflow-hidden bg-neutral-900 shadow-2xl">
             {/* Gradient Overlays */}
             <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black pointer-events-none" />
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-20 -mt-20" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -ml-20 -mb-20" />
             
             <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="space-y-6 text-center md:text-left">
                   <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Estimated Delivery: May 12</span>
                   </div>
                   <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                      Your boAt is <br /> <span className="text-blue-400 italic">En Route.</span>
                   </h1>
                   <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
                      Order {order.id} • Confirmed on {order.date}
                   </p>
                </div>
                
                <div className="relative group">
                   <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                   <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 flex items-center justify-center p-8 rotate-3 hover:rotate-0 transition-transform duration-700">
                      <Image src={order.items[0].image} alt="Main Item" fill className="object-contain p-8 drop-shadow-2xl" />
                   </div>
                </div>
             </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
             
             {/* Left Column: Tracking & Items */}
             <div className="lg:col-span-8 space-y-8">
                
                {/* Advanced Tracking Flow */}
                <motion.div variants={itemVariants} className="bg-white rounded-[3rem] shadow-premium border border-neutral-100 p-12 overflow-hidden relative">
                   <h3 className="text-xl font-black mb-12 text-neutral-900 flex items-center gap-3">
                      <Box className="text-blue-500" />
                      Shipment Journey
                   </h3>
                   
                   <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {[
                        { label: "Placed", icon: <CheckCircle2 size={24} />, active: true, time: "May 07" },
                        { label: "Processing", icon: <Zap size={24} />, active: true, time: "May 08" },
                        { label: "In Transit", icon: <Truck size={24} />, active: true, time: "Now", pulse: true },
                        { label: "Delivered", icon: <Package size={24} />, active: false, time: "Estimate May 12" },
                      ].map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center space-y-4">
                           {i < 3 && (
                             <div className="hidden md:block absolute top-10 left-[60%] right-[-40%] h-0.5 bg-neutral-100">
                                {step.active && i < 2 && <div className="h-full bg-blue-500 w-full" />}
                                {step.active && i === 2 && <motion.div initial={{ width: 0 }} animate={{ width: "50%" }} className="h-full bg-blue-500" />}
                             </div>
                           )}
                           <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg transition-all duration-500 ${step.active ? 'bg-neutral-900 text-white rotate-6' : 'bg-neutral-50 text-neutral-300'}`}>
                              {step.icon}
                              {step.pulse && (
                                <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 animate-ping -z-10" />
                              )}
                           </div>
                           <div>
                              <p className={`text-[10px] font-black uppercase tracking-widest ${step.active ? 'text-neutral-900' : 'text-neutral-300'}`}>{step.label}</p>
                              <p className="text-[10px] font-bold text-neutral-400 mt-1">{step.time}</p>
                           </div>
                        </div>
                      ))}
                   </div>

                   <div className="mt-12 p-8 bg-neutral-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex items-center gap-6 text-center md:text-left">
                         <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                            <MapPin size={24} className="text-blue-400" />
                         </div>
                         <div>
                            <p className="text-xs font-black uppercase tracking-widest text-white/40">Current Location</p>
                            <h4 className="text-lg font-bold">Bangalore Hub, Karnataka</h4>
                         </div>
                      </div>
                      <Link href="/tracking" className="bg-white text-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center gap-2">
                         View Details <ChevronRight size={14} />
                      </Link>
                   </div>
                </motion.div>

                {/* Items Grid */}
                <motion.div variants={itemVariants} className="space-y-4">
                   <h3 className="text-xl font-black px-4 text-neutral-900">Your Selection</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {order.items.map((item, i) => (
                        <div key={i} className="bg-white rounded-[2.5rem] p-8 border border-neutral-100 shadow-premium flex items-center gap-6 group hover:border-blue-500 transition-colors">
                           <div className="relative w-24 h-24 bg-neutral-50 rounded-[1.5rem] overflow-hidden p-4 group-hover:scale-105 transition-transform duration-500">
                              <Image src={item.image} alt={item.name} fill className="object-contain" />
                           </div>
                           <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-neutral-900 text-lg truncate">{item.name}</h4>
                              <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-3">{item.color} • Qty {item.quantity}</p>
                              <p className="font-black text-neutral-900">₹{item.price}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </motion.div>
             </div>

             {/* Right Column: Address & Actions */}
             <div className="lg:col-span-4 space-y-8">
                
                {/* Information Card */}
                <motion.div variants={itemVariants} className="bg-white rounded-[3rem] shadow-premium border border-neutral-100 overflow-hidden">
                   <div className="p-8 space-y-8">
                      <div className="space-y-4">
                         <div className="flex items-center gap-3 text-neutral-400">
                            <MapPin size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Delivery Address</span>
                         </div>
                         <div className="bg-neutral-50 p-6 rounded-[2rem] border border-neutral-100">
                            <p className="font-bold text-neutral-900 mb-1">{order.shippingAddress.name}</p>
                            <p className="text-sm text-neutral-500 leading-relaxed italic">
                               {order.shippingAddress.address}, {order.shippingAddress.city} <br/>
                               {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                            </p>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <div className="flex items-center gap-3 text-neutral-400">
                            <CreditCard size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Payment Summary</span>
                         </div>
                         <div className="space-y-3 px-2">
                            <div className="flex justify-between text-xs font-bold text-neutral-500 uppercase tracking-widest">
                               <span>Subtotal</span>
                               <span className="text-neutral-900">₹{order.total}</span>
                            </div>
                            <div className="flex justify-between text-xs font-bold text-neutral-500 uppercase tracking-widest">
                               <span>Shipping</span>
                               <span className="text-green-500">Free</span>
                            </div>
                            <div className="pt-4 border-t border-neutral-100 flex justify-between items-center">
                               <span className="text-lg font-black uppercase tracking-tighter">Total Paid</span>
                               <span className="text-2xl font-black text-neutral-900">₹{order.total}</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </motion.div>

                {/* Actions Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                   <Link 
                     href={`/invoice/${order.id}`} 
                     target="_blank"
                     className="bg-white border-2 border-neutral-900 text-neutral-900 p-6 rounded-[2rem] flex flex-col items-center gap-3 hover:bg-neutral-50 transition-all active:scale-95 group text-center"
                   >
                      <Download size={24} className="group-hover:-translate-y-1 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Download Invoice</span>
                   </Link>
                   <button className="bg-neutral-900 text-white p-6 rounded-[2rem] flex flex-col items-center gap-3 hover:bg-neutral-800 transition-all active:scale-95 shadow-xl group">
                      <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Reorder</span>
                   </button>
                   <button className="col-span-2 bg-neutral-100 text-neutral-400 p-6 rounded-[2rem] flex items-center justify-center gap-3 hover:bg-neutral-200 hover:text-neutral-900 transition-all text-[10px] font-black uppercase tracking-widest">
                      <CornerUpLeft size={18} />
                      Manage Returns
                   </button>
                </motion.div>

                {/* Trust Section */}
                <motion.div variants={itemVariants} className="p-8 bg-blue-50 rounded-[3rem] border border-blue-100 flex items-center gap-6">
                   <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={28} />
                   </div>
                   <div>
                      <h4 className="font-bold text-blue-900">Purchase Protected</h4>
                      <p className="text-[10px] text-blue-700/70 font-black uppercase tracking-widest mt-1">24/7 Support Active</p>
                   </div>
                </motion.div>

             </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
