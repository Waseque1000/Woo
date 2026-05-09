"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Sparkles, Star, Zap, ShoppingBag, Layers, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CollectionsPage() {
  const collections = [
    {
      id: "Electronics",
      name: "Precision Tech",
      subtitle: "Future Forward",
      tag: "Top Rated",
      description: "Experience the pinnacle of engineering with our curated selection of high-performance electronics.",
      image: "/images/headphones.png",
      count: "42 items",
      color: "bg-blue-50/50",
      accent: "text-blue-600",
      size: "large"
    },
    {
      id: "Fashion",
      name: "Essential Wear",
      subtitle: "Daily Uniform",
      tag: "Trending",
      description: "Timeless silhouettes crafted from premium materials.",
      image: "/images/bag.png",
      count: "128 items",
      color: "bg-orange-50/50",
      accent: "text-orange-600",
      size: "medium"
    },
    {
      id: "Accessories",
      name: "Detail Study",
      subtitle: "Final Touches",
      tag: "Handcrafted",
      description: "Small pieces, significant impact.",
      image: "/images/watch.png",
      count: "86 items",
      color: "bg-emerald-50/50",
      accent: "text-emerald-600",
      size: "medium"
    },
    {
      id: "Beauty",
      name: "Pure Ritual",
      subtitle: "Self Care",
      tag: "Organic",
      description: "Transform your daily routine into a ceremony.",
      image: "/images/perfume.png",
      count: "34 items",
      color: "bg-rose-50/50",
      accent: "text-rose-600",
      size: "small"
    },
    {
      id: "Home & Living",
      name: "Modern Space",
      subtitle: "Elevated Living",
      tag: "New Arrival",
      description: "Curated objects for the contemporary home.",
      image: "/images/sneakers.png", // Reusing image for now as it's what we have
      count: "56 items",
      color: "bg-purple-50/50",
      accent: "text-purple-600",
      size: "small"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Hero Section - Refined Minimalism */}
      <section className="pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400"
              >
                <Layers size={12} />
                <span>The 2024 Anthology</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.9] text-neutral-900"
              >
                Curated <br />
                <span className="italic font-light text-neutral-400 font-serif">Excellence.</span>
              </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-neutral-500 max-w-xs text-sm leading-relaxed mb-4"
            >
              Explore our meticulously selected collections, where each piece tells a story of craftsmanship and intentional design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[1000px]"
          >
            {/* Featured Collection - Large Bento Item */}
            <motion.div 
              variants={item}
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white border border-neutral-100 shadow-premium hover:shadow-hover transition-all duration-700"
            >
              <Link href={`/shop?category=${collections[0].id}`} className="block h-full">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={collections[0].image} 
                    alt={collections[0].name} 
                    fill 
                    className="object-contain p-12 transform group-hover:scale-105 transition-transform duration-1000 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                      {collections[0].tag}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">{collections[0].name}</h3>
                    <p className="text-neutral-500 max-w-sm text-lg leading-relaxed">{collections[0].description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Inventory</span>
                      <span className="text-lg font-medium">{collections[0].count}</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Medium Item 1 */}
            <motion.div 
              variants={item}
              className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white border border-neutral-100 shadow-premium hover:shadow-hover transition-all duration-700"
            >
              <Link href={`/shop?category=${collections[1].id}`} className="block h-full">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 p-8 z-0">
                  <Image 
                    src={collections[1].image} 
                    alt={collections[1].name} 
                    fill 
                    className="object-contain transform group-hover:rotate-12 transition-transform duration-700 opacity-60"
                  />
                </div>
                <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                  <div className="max-w-[50%]">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${collections[1].accent} mb-4 block`}>
                      {collections[1].subtitle}
                    </span>
                    <h3 className="text-4xl font-medium tracking-tight mb-2">{collections[1].name}</h3>
                    <p className="text-neutral-500 text-sm">{collections[1].count}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Small Item 1 */}
            <motion.div 
              variants={item}
              className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white border border-neutral-100 shadow-premium hover:shadow-hover transition-all duration-700"
            >
               <Link href={`/shop?category=${collections[3].id}`} className="block h-full">
                  <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                     <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mb-6">
                        <Sparkles size={24} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-medium tracking-tight">{collections[3].name}</h3>
                        <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest mt-2">{collections[3].count}</p>
                     </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 transform group-hover:scale-125 transition-transform duration-700">
                     <Image src={collections[3].image} alt="" fill className="object-contain" />
                  </div>
               </Link>
            </motion.div>

            {/* Small Item 2 */}
            <motion.div 
              variants={item}
              className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white shadow-premium hover:shadow-hover transition-all duration-700"
            >
               <Link href={`/shop?category=${collections[4].id}`} className="block h-full">
                  <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                     <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                        <Zap size={24} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-medium tracking-tight text-white">{collections[4].name}</h3>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-2">{collections[4].count}</p>
                     </div>
                     <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Explore</span>
                        <ChevronRight size={12} />
                     </div>
                  </div>
               </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Quote / Secondary Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden"
            >
              <Image 
                src="/images/watch.png" 
                alt="Editorial" 
                fill 
                className="object-contain p-20 bg-neutral-50"
              />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl">
                <p className="text-sm font-medium italic text-neutral-800">"True luxury is found in the restraint of the design and the quality of the materials."</p>
                <div className="mt-4 flex items-center gap-2">
                   <div className="w-4 h-px bg-neutral-300" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Creative Director</span>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-12">
               <div className="space-y-6">
                  <h2 className="text-5xl font-medium tracking-tight leading-tight">Beyond Trends. <br /> Built for Longevity.</h2>
                  <p className="text-neutral-500 text-lg leading-relaxed">
                    We don't follow seasons; we follow substance. Our collections are built on the foundation of enduring quality and functional beauty, ensuring that every piece remains relevant for years to come.
                  </p>
               </div>
               
               <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
                  <div>
                     <span className="text-3xl font-medium">98%</span>
                     <p className="text-neutral-400 text-xs font-black uppercase tracking-widest mt-2">Sustainable Materials</p>
                  </div>
                  <div>
                     <span className="text-3xl font-medium">100+</span>
                     <p className="text-neutral-400 text-xs font-black uppercase tracking-widest mt-2">Global Artisans</p>
                  </div>
               </div>
               
               <Link 
                href="/about"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-neutral-900 text-white font-black uppercase tracking-widest text-xs hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200"
               >
                 Our Philosophy
                 <ArrowUpRight size={16} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-6">
         <div className="container mx-auto">
            <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
               </div>
               
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="relative z-10 space-y-8"
               >
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Exclusive Access</span>
                  <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white">Join the Circle.</h2>
                  <p className="text-white/50 max-w-lg mx-auto text-lg">Be the first to know about limited drops, seasonal collections, and private events.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                     <input 
                        type="email" 
                        placeholder="Email address" 
                        className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 outline-none transition-all"
                     />
                     <button className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
                        Subscribe
                     </button>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
