"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/seedData";
import { Star, Heart, ShoppingBag, Truck, ShieldCheck, ArrowLeft, Plus, Minus, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 py-8 text-sm text-muted-foreground font-medium">
           <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
           <span>/</span>
           <Link href={`/shop?category=${product.category}`} className="hover:text-black transition-colors">{product.category}</Link>
           <span>/</span>
           <span className="text-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24">
          {/* Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[40px] overflow-hidden bg-muted shadow-premium border border-border"
            >
              <Image 
                src={selectedImage} 
                alt={product.name} 
                fill 
                className="object-cover"
              />
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                 <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-premium hover:scale-110 transition-all">
                    <Heart size={20} />
                 </button>
                 <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-premium hover:scale-110 transition-all">
                    <Share2 size={20} />
                 </button>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-5 gap-4">
              {[product.image, "/images/watch.png", "/images/bag.png", "/images/headphones.png", "/images/sneakers.png"].map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-black scale-95' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                   <Image src={img} alt="Thumb" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-black/5 px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-widest">{product.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                  <span className="text-black font-bold ml-2">{product.rating}</span>
                </div>
                <span className="text-muted-foreground text-sm font-medium">({product.reviews} reviews)</span>
                <span className={`text-sm font-bold ${product.stock > 10 ? 'text-green-600' : 'text-red-500'}`}>
                   {product.stock > 10 ? 'In Stock' : `Low Stock: ${product.stock} left`}
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold">${product.price}</span>
              {product.oldPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.oldPrice}</span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
              {product.description}
            </p>

            <div className="space-y-8">
               {/* Variants */}
               <div>
                  <h4 className="font-bold mb-4">Choose Color</h4>
                  <div className="flex gap-3">
                     {product.variants[0].options.map((opt) => (
                        <button 
                          key={opt}
                          onClick={() => setSelectedVariant(opt)}
                          className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${selectedVariant === opt ? 'border-black bg-black text-white shadow-premium' : 'border-border hover:border-black'}`}
                        >
                           {opt}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Quantity & Actions */}
               <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-4 bg-muted p-2 rounded-2xl border border-border">
                     <button 
                       onClick={() => setQuantity(Math.max(1, quantity - 1))}
                       className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all"
                     >
                        <Minus size={18} />
                     </button>
                     <span className="font-bold w-8 text-center">{quantity}</span>
                     <button 
                       onClick={() => setQuantity(quantity + 1)}
                       className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all"
                     >
                        <Plus size={18} />
                     </button>
                  </div>
                  
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 min-w-[200px] bg-white text-black border border-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-all active:scale-95 shadow-premium"
                  >
                     <ShoppingBag size={20} />
                     Add to Cart
                  </button>

                  <button 
                    onClick={handleBuyNow}
                    className="flex-1 min-w-[200px] bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black/90 transition-all active:scale-95 shadow-premium"
                  >
                     Buy Now
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-border">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                     <Truck size={24} />
                  </div>
                  <div>
                     <p className="font-bold text-sm">Free Express Shipping</p>
                     <p className="text-xs text-muted-foreground">Orders over $500 ship free</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                     <ShieldCheck size={24} /> 
                  </div>
                  <div>
                     <p className="font-bold text-sm">2 Year Warranty</p>
                     <p className="text-xs text-muted-foreground">Authentic products only</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-24 border-t border-border">
           <div className="flex items-end justify-between mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">You May Also Like</h2>
              <Link href="/shop" className="font-bold flex items-center gap-2 hover:opacity-60 transition-opacity">
                Explore More <ArrowLeft size={16} className="rotate-180" />
              </Link>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
