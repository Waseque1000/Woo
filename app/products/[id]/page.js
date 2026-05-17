"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/seedData";
import { Star, Heart, ShoppingBag, Truck, ShieldCheck, ArrowLeft, Plus, Minus, Share2, Zap, Headphones, Battery, Droplets, Bluetooth, CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id) || products[0];
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].options[0]);
  const [activeTab, setActiveTab] = useState("features");

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariant);
    router.push("/checkout");
  };

  const relatedProducts = useMemo(() => {
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-24 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Gallery */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 space-y-6 pb-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="relative aspect-[4/3] w-full mx-auto overflow-hidden bg-white group"
               >
                 <Image 
                   src={selectedImage} 
                   alt={product.name} 
                   fill 
                   className="object-contain transition-transform duration-700 group-hover:scale-105"
                 />
               </motion.div>
               
               <div className="flex gap-4">
                 {[product.image, "/images/watch.png", "/images/bag.png", "/images/headphones.png", "/images/sneakers.png"].map((img, i) => (
                   <button 
                     key={i}
                     onClick={() => setSelectedImage(img)}
                     className={`relative w-24 h-24 overflow-hidden border transition-all bg-white ${selectedImage === img ? 'border-neutral-900 border-2' : 'border-neutral-200 hover:border-neutral-400'}`}
                   >
                      <Image src={img} alt="Thumb" fill className="object-contain p-2" />
                   </button>
                 ))}
               </div>
          </div>

          {/* Right Column: Details */}
          <div className="w-full lg:w-1/2 space-y-8 lg:pt-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-neutral-600 font-medium">
                 <div className="w-6 h-6 rounded-full overflow-hidden relative bg-neutral-200">
                    <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marta" alt="Dr" fill />
                 </div>
                 <span>Recommended by <span className="font-bold text-neutral-900">Dr. Marta Riniker</span> | Verified Podiatrist</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">{product.name}</h1>
              
              <div className="flex items-center gap-2">
                 <div className="flex items-center gap-1 text-[#fbbf24]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                 </div>
                 <span className="text-sm font-medium text-neutral-600">({product.reviews} Reviews)</span>
              </div>

              <div className="space-y-3 py-2 text-neutral-700">
                 <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#4b5563]" />
                    <span>Relieves pressure on feet and joints</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#4b5563]" />
                    <span>Developed with orthopedists</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Truck size={18} className="text-[#4b5563]" />
                    <span>Free shipping</span>
                 </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                 <span className="text-2xl font-medium text-green-700">${product.price * quantity}</span>
                 {product.oldPrice && (
                    <span className="text-lg text-neutral-400 line-through">${product.oldPrice * quantity}</span>
                 )}
                 {discount > 0 && (
                    <span className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">You Save {discount}%</span>
                 )}
              </div>
              
              <div className="flex items-center gap-2">
                 <span className="w-3 h-3 bg-green-500 rounded-full border-2 border-white outline outline-1 outline-green-500 animate-pulse" />
                 <p className="text-sm text-neutral-800">Due to our <span className="font-bold">Summer Sale</span>, only a few are left in stock!</p>
              </div>
              
              <button className="text-xs text-neutral-500 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300">
                 Click for Size & Fit Chart ←
              </button>
            </div>

            <div className="space-y-6 pt-4 border-t border-neutral-100">
               {/* Variants - Dropdown Style */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <label className="text-sm font-medium text-neutral-600">Color</label>
                     <div className="relative">
                       <select 
                         value={selectedVariant}
                         onChange={(e) => setSelectedVariant(e.target.value)}
                         className="w-full appearance-none bg-neutral-100/80 border-none text-neutral-800 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                       >
                         {product.variants[0].options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                       </select>
                       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                         <ChevronRight size={16} className="rotate-90" />
                       </div>
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-medium text-neutral-600">Shoe size</label>
                     <div className="relative">
                       <select className="w-full appearance-none bg-neutral-100/80 border-none text-neutral-800 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                         <option>US Women 6 - US Men 4</option>
                         <option>US Women 7 - US Men 5</option>
                         <option>US Women 8 - US Men 6</option>
                       </select>
                       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                         <ChevronRight size={16} className="rotate-90" />
                       </div>
                     </div>
                  </div>
               </div>
               
               <p className="text-sm text-neutral-600 flex items-center justify-center gap-2">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 Only 4 pairs left in stock.
               </p>

               <div className="space-y-3 pb-8">
                 <button 
                   onClick={handleAddToCart}
                   className="w-full bg-[#5a67d8] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-[#4c51bf] transition-colors"
                 >
                    Acheter avec <span className="font-bold text-xl">shop</span><span className="bg-white text-[#5a67d8] text-xs font-bold px-1 py-0.5 rounded ml-0.5">Pay</span>
                 </button>
               </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 pt-10 border-t border-neutral-100">
               {[
                 { icon: <Truck size={18} />, text: "Free express delivery in 24 hours" },
                 { icon: <ShieldCheck size={18} />, text: "1 Year International Warranty" },
                 { icon: <CheckCircle2 size={18} />, text: "7 Days Easy Replacement" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-sm font-medium text-neutral-600">
                    <div className="text-neutral-900">{item.icon}</div>
                    <span>{item.text}</span>
                 </div>
               ))}
            </div>

            {/* Features/Specs Tab */}
            <div className="pt-10 border-t border-neutral-100">
               <div className="flex gap-8 border-b border-neutral-100 mb-8">
                  {["Features", "Specifications"].map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase())}
                      className={`pb-4 text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === tab.toLowerCase() ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}
                    >
                       {tab}
                       {activeTab === tab.toLowerCase() && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />}
                    </button>
                  ))}
               </div>
               
               <AnimatePresence mode="wait">
                  {activeTab === "features" ? (
                    <motion.div 
                      key="feat"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-4"
                    >
                       <p className="text-sm text-neutral-500 leading-relaxed">
                         • ENx™ Technology for noise cancellation<br/>
                         • IWP™ Technology for instant pairing<br/>
                         • IPX7 Sweat & Water Resistance<br/>
                         • Fast Charge: 5 mins = 60 mins playback
                       </p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="spec"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-3"
                    >
                       <div className="flex justify-between text-sm py-2 border-b border-neutral-50">
                          <span className="text-neutral-400 font-bold">Bluetooth Version</span>
                          <span className="text-neutral-900 font-black">v5.3</span>
                       </div>
                       <div className="flex justify-between text-sm py-2 border-b border-neutral-50">
                          <span className="text-neutral-400 font-bold">Driver Size</span>
                          <span className="text-neutral-900 font-black">10mm x 2</span>
                       </div>
                       <div className="flex justify-between text-sm py-2 border-b border-neutral-50">
                          <span className="text-neutral-400 font-bold">Charging Time</span>
                          <span className="text-neutral-900 font-black">1.5 Hours</span>
                       </div>
                    </motion.div>
                  )}
               </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-32 border-t border-neutral-100">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Complete the look</p>
                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight">You May Also Like</h2>
              </div>
              <Link href="/shop" className="font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:opacity-60 transition-opacity">
                Explore Collection <ArrowLeft size={16} className="rotate-180" />
              </Link>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
           </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
