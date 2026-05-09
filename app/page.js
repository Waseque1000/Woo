import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/seedData";
import { ArrowRight, Star, Shield, Truck, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SalesNotification from "@/components/SalesNotification";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const topRatedProducts = products.filter(p => p.rating >= 4.8).slice(0, 4);
  
  const categories = [
    { name: "Smart Watches", image: "/images/watch.png", count: "40+ Models", color: "bg-blue-50" },
    { name: "True Wireless", image: "/images/headphones.png", count: "120+ Models", color: "bg-red-50" },
    { name: "Wireless Speakers", image: "/images/bag.png", count: "30+ Models", color: "bg-yellow-50" },
    { name: "Headphones", image: "/images/headphones.png", count: "50+ Models", color: "bg-neutral-50" },
  ];

  return (
    <main className="min-h-screen bg-white">
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
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
              Elevate Your <br />
              <span className="text-muted-foreground">Digital Store.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
              Discover a curated collection of premium products designed for the modern lifestyle. Quality meets minimalist aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="bg-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-black/90 transition-all active:scale-95 group shadow-premium">
                Shop Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="bg-white text-black border border-border px-8 py-4 rounded-2xl font-semibold flex justify-center hover:bg-muted transition-all active:scale-95 shadow-premium">
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

      {/* Categories Explorer */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Discover More</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Shop by Categories</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((cat, i) => (
                <Link key={i} href={`/shop?category=${cat.name}`} className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-hover transition-all duration-500">
                   <div className={`absolute inset-0 ${cat.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                   <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                      <div className="relative w-40 h-40 mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700">
                         <Image src={cat.image} alt={cat.name} fill className="object-contain" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                      <p className="text-xs font-black uppercase tracking-widest text-neutral-400">{cat.count}</p>
                   </div>
                   <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                      <ArrowRight size={20} />
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="flex items-end justify-between mb-16">
              <div className="space-y-4">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Top Rated</p>
                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Voted Best by You</h2>
              </div>
              <Link href="/shop" className="hidden md:flex items-center gap-3 font-black text-[10px] uppercase tracking-widest hover:text-neutral-500 transition-colors">
                 View All <ArrowRight size={16} />
              </Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {topRatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
           </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
               <Image 
                 src="/images/headphones.png" 
                 alt="Philosophy" 
                 fill 
                 className="object-cover transition-transform duration-1000 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               <div className="absolute bottom-12 left-12">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-70">Legacy of Sound</p>
                  <h3 className="text-4xl font-bold leading-tight">Mastering the art <br /> of audio engineering.</h3>
               </div>
            </div>
            
            <div className="space-y-12">
               <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">Why Choose EOO?</h2>
                  <p className="text-xl text-neutral-400 leading-relaxed max-w-lg">
                    We don't just build electronics; we craft experiences. Every product is a testament to our commitment to quality, style, and innovation.
                  </p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "S1 Processor", desc: "Advanced chips for faster, stable connectivity." },
                    { title: "PureBass™", desc: "Deep, immersive bass optimized for your music." },
                    { title: "IPX7 Water", desc: "Built to survive your most intense adventures." },
                    { title: "ENx™ Tech", desc: "Crystal clear calling with AI noise cancellation." }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                       <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                       <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
               
               <Link href="/about" className="inline-flex bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all shadow-xl active:scale-95">
                  Our Mission
               </Link>
            </div>
         </div>
      </section>

      {/* Sales Pop Component */}
      <SalesNotification />

      <Footer />
    </main>
  );
}
