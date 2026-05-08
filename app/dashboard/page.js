"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Package, Heart, MapPin, Settings, LogOut, ChevronRight, Clock, CheckCircle, Truck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("orders");

  const tabs = [
    { id: "orders", label: "Orders", icon: <Package size={18} /> },
    { id: "wishlist", label: "Wishlist", icon: <Heart size={18} /> },
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  const orders = [
    { id: "EOO-98231", date: "May 08, 2026", total: 498, status: "Processing", items: 2, image: "/images/watch.png" },
    { id: "EOO-98230", date: "May 05, 2026", total: 299, status: "Shipped", items: 1, image: "/images/headphones.png" },
    { id: "EOO-98229", date: "Apr 28, 2026", total: 1200, status: "Delivered", items: 3, image: "/images/bag.png" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-premium border border-border text-center">
               <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-6 relative border-4 border-white shadow-premium overflow-hidden">
                  <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" fill />
               </div>
               <h2 className="text-xl font-bold">John Doe</h2>
               <p className="text-sm text-muted-foreground mb-6">Premium Member</p>
               <button className="w-full flex items-center justify-center gap-2 text-red-500 font-bold py-3 hover:bg-red-50 rounded-2xl transition-all">
                  <LogOut size={18} />
                  Log Out
               </button>
            </div>

            <div className="bg-white p-4 rounded-[32px] shadow-premium border border-border space-y-2">
               {tabs.map((tab) => (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`w-full flex items-center justify-between p-4 rounded-2xl font-bold transition-all ${activeTab === tab.id ? 'bg-black text-white shadow-lg' : 'hover:bg-muted'}`}
                 >
                    <div className="flex items-center gap-3">
                       {tab.icon}
                       {tab.label}
                    </div>
                    <ChevronRight size={16} />
                 </button>
               ))}
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-8">
            {activeTab === "orders" && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                 <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Order History</h2>
                    <p className="text-sm text-muted-foreground">Showing last {orders.length} orders</p>
                 </div>

                 <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="bg-white p-6 rounded-[32px] shadow-premium border border-border hover:shadow-hover transition-all group">
                         <div className="flex flex-wrap items-center gap-6">
                            <div className="w-20 h-20 rounded-2xl bg-muted overflow-hidden relative border border-border">
                               <Image src={order.image} alt="Order" fill className="object-cover" />
                            </div>
                            <div className="flex-1 min-w-[200px]">
                               <div className="flex items-center gap-3 mb-1">
                                  <h3 className="font-bold">Order {order.id}</h3>
                                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${order.status === 'Processing' ? 'bg-blue-100 text-blue-600' : order.status === 'Shipped' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                                     {order.status}
                                  </span>
                               </div>
                               <p className="text-xs text-muted-foreground">{order.date} • {order.items} Items</p>
                            </div>
                            <div className="text-right">
                               <p className="text-xl font-bold">${order.total}</p>
                               <Link href={`/dashboard/order/${order.id}`} className="text-xs font-bold border-b border-black pb-0.5 hover:opacity-60 transition-opacity">Track Order</Link>
                            </div>
                         </div>
                         
                         {/* Status UI */}
                         <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4">
                            <div className="flex flex-col items-center gap-2 text-green-600">
                               <CheckCircle size={20} />
                               <span className="text-[10px] font-bold uppercase tracking-wider">Confirmed</span>
                            </div>
                            <div className={`flex flex-col items-center gap-2 ${order.status !== 'Processing' ? 'text-green-600' : 'text-muted-foreground opacity-30'}`}>
                               <Truck size={20} />
                               <span className="text-[10px] font-bold uppercase tracking-wider">Shipped</span>
                            </div>
                            <div className={`flex flex-col items-center gap-2 ${order.status === 'Delivered' ? 'text-green-600' : 'text-muted-foreground opacity-30'}`}>
                               <CheckCircle size={20} />
                               <span className="text-[10px] font-bold uppercase tracking-wider">Delivered</span>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </motion.div>
            )}

            {activeTab === "wishlist" && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-center py-20 bg-white rounded-[40px] shadow-premium border border-border space-y-4">
                 <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                    <Heart size={32} />
                 </div>
                 <h3 className="text-2xl font-bold">Your Wishlist is Empty</h3>
                 <p className="text-muted-foreground">Keep track of products you love.</p>
                 <Link href="/shop" className="bg-black text-white px-8 py-3 rounded-2xl font-bold inline-block">Explore Products</Link>
              </motion.div>
            )}

            {activeTab === "profile" && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-10 rounded-[40px] shadow-premium border border-border space-y-8">
                 <h2 className="text-3xl font-bold">Account Details</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                       <p className="font-bold text-lg">John Doe</p>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                       <p className="font-bold text-lg">john@example.com</p>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</label>
                       <p className="font-bold text-lg">+1 234 567 890</p>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Address</label>
                       <p className="font-bold text-lg">San Francisco, CA</p>
                    </div>
                 </div>
                 <button className="bg-muted px-8 py-3 rounded-2xl font-bold hover:bg-black hover:text-white transition-all">Edit Profile</button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
