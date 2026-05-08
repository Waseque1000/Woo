import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/seedData";
import { ArrowRight, Star, Shield, Truck, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#f9f9f9]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[120%] bg-white rounded-full blur-[100px] opacity-50" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-black/5 rounded-full blur-[100px] opacity-30" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-premium border border-border">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">New Season Arrival</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
              Elevate Your <br />
              <span className="text-muted-foreground">Digital Store.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              Discover a curated collection of premium products designed for the modern lifestyle. Quality meets minimalist aesthetic.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="bg-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-black/90 transition-all active:scale-95 group shadow-premium">
                Shop Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="bg-white text-black border border-border px-8 py-4 rounded-2xl font-semibold hover:bg-muted transition-all active:scale-95 shadow-premium">
                Our Story
              </Link>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square glass rounded-[40px] shadow-hover p-4 rotate-3 animate-float">
               <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                  <Image 
                    src="/images/watch.png" 
                    alt="Hero Product" 
                    fill 
                    className="object-cover"
                  />
               </div>
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-hover flex items-center gap-4 -rotate-3">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white">
                <Star fill="currentColor" size={20} />
              </div>
              <div>
                <p className="font-bold">4.9/5 Rating</p>
                <p className="text-xs text-muted-foreground">From 2k+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Truck size={24} />, title: "Free Shipping", desc: "On orders over $200" },
            { icon: <Shield size={24} />, title: "Secure Payment", desc: "100% secure checkout" },
            { icon: <Zap size={24} />, title: "Fast Delivery", desc: "Ships in 24 hours" },
            { icon: <Star size={24} />, title: "Premium Quality", desc: "Handpicked selection" },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:row items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Our Recommendations</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Products</h2>
            </div>
            <Link href="/shop" className="text-sm font-bold flex items-center gap-2 hover:opacity-60 transition-opacity border-b border-black pb-1">
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative h-[500px] rounded-[40px] overflow-hidden bg-black text-white flex items-center">
          <div className="absolute inset-0 opacity-40">
            <Image 
              src="/images/headphones.png" 
              alt="Banner" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative z-10 px-12 md:px-24 space-y-8 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Sound Like <br /> Never Before.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Experience the pure essence of sound with our new Noise-Canceling collection. Designed for comfort, built for quality.
            </p>
            <Link href="/shop" className="inline-flex bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all active:scale-95 shadow-premium">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
