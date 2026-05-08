"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Star, Zap, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CollectionsPage() {
  const collections = [
    {
      id: "electronics",
      name: "Tech Mastery",
      tag: "Limited Drop",
      description: "Cutting-edge technology meets seamless design. Elevate your daily workflow with our precision-engineered electronics.",
      image: "/images/headphones.png",
      count: "12 Items",
      accent: "from-blue-500/20 to-purple-500/20",
      textColor: "text-blue-600"
    },
    {
      id: "fashion",
      name: "Urban Minimalist",
      tag: "Seasonal",
      description: "Clean lines, premium fabrics, and a timeless silhouette. Discover the essence of modern wardrobe essentials.",
      image: "/images/bag.png",
      count: "24 Items",
      accent: "from-orange-500/20 to-red-500/20",
      textColor: "text-orange-600"
    },
    {
      id: "accessories",
      name: "Detail Oriented",
      tag: "Handcrafted",
      description: "The small things that make a big difference. Explore our collection of hand-picked accessories designed to complement any look.",
      image: "/images/watch.png",
      count: "18 Items",
      accent: "from-emerald-500/20 to-teal-500/20",
      textColor: "text-emerald-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-1px bg-black" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Exclusive Curation</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] mb-12"
            >
              CULT <br />
              <span className="text-black/10 outline-text">CLASSICS</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 space-y-32">
          {collections.map((col, i) => (
            <motion.div 
              key={col.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}
            >
              <div className="flex-1 relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${col.accent} rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-muted border border-border shadow-2xl">
                  <Image 
                    src={col.image} 
                    alt={col.name} 
                    fill 
                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                     <span className="bg-white/90 backdrop-blur shadow-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                       {col.tag}
                     </span>
                  </div>
                  <div className="absolute bottom-10 right-10">
                     <Link 
                       href={`/shop?category=${col.id}`}
                       className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group-hover:rotate-45"
                     >
                       <ArrowRight size={24} />
                     </Link>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className={`text-xs font-black uppercase tracking-[0.4em] ${col.textColor}`}>{col.count}</span>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">{col.name}</h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  {col.description}
                </p>
                <div className="pt-4 flex items-center gap-8">
                   <Link 
                     href={`/shop?category=${col.id}`}
                     className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest border-b-2 border-black pb-2 hover:gap-6 transition-all"
                   >
                     Explore Collection
                     <ArrowRight size={18} />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Drop */}
      <section className="py-32 bg-black text-white rounded-[5rem] mx-6 mb-32 overflow-hidden relative">
         <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12">
            <Sparkles size={400} />
         </div>
         <div className="container mx-auto px-12 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
               <div className="inline-flex items-center gap-4 px-6 py-2 border border-white/20 rounded-full">
                  <Zap size={16} className="text-yellow-400" />
                  <span className="text-xs font-bold uppercase tracking-widest">Flash Release</span>
               </div>
               <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Limited Series <br /> <span className="text-white/30 italic">2024</span></h2>
               <p className="text-white/60 text-xl max-w-2xl mx-auto">Our most ambitious project yet. Only 100 units available worldwide. Register for early access.</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <button className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-xl">
                     Get Early Access
                  </button>
                  <button className="bg-white/10 border border-white/20 backdrop-blur px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                     View Teaser
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
