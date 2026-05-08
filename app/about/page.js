"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, ShieldCheck, Globe, Users, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { label: "Founded", value: "2020" },
    { label: "Products", value: "300+" },
    { label: "Global Customers", value: "50k+" },
    { label: "Design Awards", value: "12" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We source only the finest materials for every product we create.",
      icon: <ShieldCheck size={24} className="text-black" />
    },
    {
      title: "Ethical Sourcing",
      description: "Transparency in our supply chain is at the core of our business.",
      icon: <Globe size={24} className="text-black" />
    },
    {
      title: "Innovation",
      description: "We constantly push the boundaries of design and functionality.",
      icon: <Zap size={24} className="text-black" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Elevating the <br /> everyday.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
                EOO was founded on a simple principle: high-quality design should be accessible, sustainable, and undeniably beautiful.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-[4rem] bg-muted/30 overflow-hidden group"
            >
              <Image 
                src="/images/watch.png" 
                alt="About Hero" 
                fill 
                className="object-contain p-20 transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Award size={48} className="mx-auto mb-10 text-white/40" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">Driven by design, <br /> obsessed with detail.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Community</h3>
                <p className="text-white/60 leading-relaxed">We build for a global community of designers, creators, and visionaries who appreciate the finer things.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Passion</h3>
                <p className="text-white/60 leading-relaxed">Every stitch, every circuit, and every scent is crafted with a level of passion that is felt in every touch.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Efficiency</h3>
                <p className="text-white/60 leading-relaxed">We optimize our processes to deliver premium quality without the premium markup. Minimalist luxury.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The pillars of our <br /> craftsmanship.</h2>
              <p className="text-muted-foreground text-lg">We don't just sell products; we deliver experiences that last a lifetime through our core values.</p>
            </div>
            <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3rem] border border-border hover:shadow-premium transition-all duration-500"
              >
                <div className="mb-8">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
            <div className="bg-muted/30 rounded-[2rem] relative overflow-hidden col-span-2 row-span-2">
               <Image src="/images/headphones.png" alt="Process" fill className="object-contain p-20" />
            </div>
            <div className="bg-muted/30 rounded-[2rem] relative overflow-hidden">
               <Image src="/images/bag.png" alt="Detail" fill className="object-contain p-10" />
            </div>
            <div className="bg-muted/30 rounded-[2rem] relative overflow-hidden">
               <Image src="/images/sneakers.png" alt="Craft" fill className="object-contain p-10" />
            </div>
            <div className="bg-muted/30 rounded-[2rem] relative overflow-hidden col-span-2">
               <Image src="/images/watch.png" alt="Final" fill className="object-contain p-10" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
