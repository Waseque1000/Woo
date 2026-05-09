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
        <div className="flex flex-col lg:flex-row gap-16 pb-24">
          
          {/* Left Column: Gallery */}
          <div className="flex-1 space-y-8">
            <div className="sticky top-32 space-y-8">
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-8">
                  <Link href="/shop" className="hover:text-neutral-900 transition-colors">Shop</Link>
                  <ChevronRight size={10} />
                  <Link href={`/shop?category=${product.category}`} className="hover:text-neutral-900 transition-colors">{product.category}</Link>
                  <ChevronRight size={10} />
                  <span className="text-neutral-900">{product.name}</span>
               </div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="relative aspect-square rounded-[3rem] overflow-hidden bg-neutral-50 border border-neutral-100 group shadow-premium"
               >
                 <Image 
                   src={selectedImage} 
                   alt={product.name} 
                   fill 
                   className="object-contain p-12 transition-transform duration-1000 group-hover:scale-110"
                 />
                 
                 <div className="absolute top-8 right-8 flex flex-col gap-3 z-10">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:text-red-500 transition-all active:scale-90">
                       <Heart size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:text-blue-500 transition-all active:scale-90">
                       <Share2 size={20} />
                    </button>
                 </div>

                 {discount > 0 && (
                   <div className="absolute top-8 left-8">
                      <span className="bg-yellow-400 text-black text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
                         <Zap size={12} fill="black" />
                         {discount}% Extra Savings
                      </span>
                   </div>
                 )}
               </motion.div>
               
               <div className="grid grid-cols-5 gap-4">
                 {[product.image, "/images/watch.png", "/images/bag.png", "/images/headphones.png", "/images/sneakers.png"].map((img, i) => (
                   <button 
                     key={i}
                     onClick={() => setSelectedImage(img)}
                     className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all p-2 bg-neutral-50 ${selectedImage === img ? 'border-neutral-900 scale-95 shadow-lg bg-white' : 'border-transparent opacity-60 hover:opacity-100'}`}
                   >
                      <Image src={img} alt="Thumb" fill className="object-contain p-2" />
                   </button>
                 ))}
               </div>

               {/* Key Specs Row */}
               <div className="grid grid-cols-3 gap-6 pt-10">
                  <div className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col items-center text-center gap-3">
                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-neutral-900">
                        <Battery size={20} />
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Battery</p>
                     <p className="font-bold">40 Hours</p>
                  </div>
                  <div className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col items-center text-center gap-3">
                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-neutral-900">
                        <Bluetooth size={20} />
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Connectivity</p>
                     <p className="font-bold">v5.3</p>
                  </div>
                  <div className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col items-center text-center gap-3">
                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-neutral-900">
                        <Droplets size={20} />
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Rating</p>
                     <p className="font-bold">IPX7</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:w-[450px] space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                 <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                 </div>
                 <span className="text-xs font-black text-neutral-900">{product.rating}</span>
                 <div className="w-1 h-1 bg-neutral-200 rounded-full" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{product.reviews} Reviews</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 leading-tight">{product.name}</h1>
              
              <div className="flex flex-col gap-1">
                 <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-black text-neutral-900">₹{product.price * quantity}</span>
                    {product.oldPrice && (
                       <span className="text-lg text-neutral-300 line-through decoration-neutral-200">₹{product.oldPrice * quantity}</span>
                    )}
                 </div>
                 {quantity > 1 && (
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Unit Price: ₹{product.price}</p>
                 )}
              </div>

              <p className="text-neutral-500 leading-relaxed text-lg">
                Experience the next level of audio engineering. The {product.name} features our proprietary PureBass™ technology and ENx™ noise cancellation.
              </p>
            </div>

            <div className="space-y-10">
               {/* Variants */}
               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                     <h4 className="font-black text-xs uppercase tracking-[0.2em] text-neutral-900">Select Color</h4>
                     <span className="text-xs font-bold text-neutral-400">{selectedVariant}</span>
                  </div>
                  <div className="flex gap-4">
                     {product.variants[0].options.map((opt) => (
                        <button 
                          key={opt}
                          onClick={() => setSelectedVariant(opt)}
                          className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${selectedVariant === opt ? 'border-neutral-900 scale-110 shadow-lg' : 'border-neutral-100 hover:border-neutral-400'}`}
                        >
                           <div className={`w-8 h-8 rounded-full ${opt.includes('Black') ? 'bg-black' : opt.includes('Blue') ? 'bg-blue-600' : 'bg-neutral-300'} shadow-inner`} />
                        </button>
                     ))}
                  </div>
               </div>

               {/* Quantity & Actions */}
               <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-3xl border border-neutral-100">
                     <span className="text-xs font-black uppercase tracking-widest text-neutral-900 ml-2">Quantity</span>
                     <div className="flex items-center gap-6">
                        <button 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 flex items-center justify-center bg-white rounded-2xl shadow-sm hover:bg-neutral-900 hover:text-white transition-all"
                        >
                           <Minus size={18} />
                        </button>
                        <span className="font-black text-lg w-4 text-center">{quantity}</span>
                        <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center bg-white rounded-2xl shadow-sm hover:bg-neutral-900 hover:text-white transition-all"
                        >
                           <Plus size={18} />
                        </button>
                     </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                     <button 
                       onClick={handleAddToCart}
                       className="w-full bg-neutral-900 text-white px-8 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-neutral-800 transition-all active:scale-95 shadow-xl"
                     >
                        <ShoppingBag size={20} />
                        Add to Cart
                     </button>
                     <button 
                       onClick={handleBuyNow}
                       className="w-full bg-white text-black border-2 border-neutral-900 px-8 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-neutral-50 transition-all active:scale-95"
                     >
                        Buy Now
                     </button>
                  </div>
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
