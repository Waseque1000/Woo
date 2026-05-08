"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, RotateCcw, ShieldCheck, Globe, Clock, Package } from "lucide-react";
import { motion } from "framer-motion";

export default function ShippingPage() {
  const steps = [
    {
      icon: <Package size={32} />,
      title: "Order Processing",
      desc: "All orders are processed within 24 hours of being placed."
    },
    {
      icon: <Truck size={32} />,
      title: "Fast Shipping",
      desc: "We offer standard (3-5 days) and express (1-2 days) shipping."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      desc: "We ship to over 50 countries worldwide with real-time tracking."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4"
          >
            <span>Policy & Information</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
          >
            Shipping & <br /> Returns.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Everything you need to know about how we deliver our products to your doorstep and our hassle-free return process.
          </motion.p>
        </div>
      </section>

      {/* Shipping Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3rem] border border-border shadow-sm hover:shadow-premium transition-all duration-500"
              >
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[3rem] border border-border shadow-sm"
             >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                      <Clock size={24} />
                   </div>
                   <h2 className="text-3xl font-bold">Shipping Times</h2>
                </div>
                <ul className="space-y-6">
                   <li className="flex justify-between items-center border-b border-border pb-4">
                      <span className="font-medium text-lg">Standard US Shipping</span>
                      <span className="text-muted-foreground">3-5 Business Days</span>
                   </li>
                   <li className="flex justify-between items-center border-b border-border pb-4">
                      <span className="font-medium text-lg">Express US Shipping</span>
                      <span className="text-muted-foreground">1-2 Business Days</span>
                   </li>
                   <li className="flex justify-between items-center border-b border-border pb-4">
                      <span className="font-medium text-lg">International Shipping</span>
                      <span className="text-muted-foreground">7-14 Business Days</span>
                   </li>
                </ul>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-black text-white p-12 rounded-[3rem] shadow-xl relative overflow-hidden"
             >
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center">
                         <RotateCcw size={24} />
                      </div>
                      <h2 className="text-3xl font-bold">Easy Returns</h2>
                   </div>
                   <p className="text-white/60 mb-8 leading-relaxed text-lg">
                      Not happy with your purchase? No problem. We offer a 30-day return policy for all unused items. We'll even cover the return shipping costs for domestic orders.
                   </p>
                   <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all">
                      Start a Return
                   </button>
                </div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
             </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
