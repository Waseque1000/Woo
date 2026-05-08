"use client";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/seedData";
import { SlidersHorizontal, ChevronDown, Grid, List, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [category, searchQuery, sortBy]);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-white border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <Link href="/">Home</Link>
                <span>/</span>
                <span className="text-black">Shop</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Collection</h1>
             <p className="text-muted-foreground max-w-2xl">
               Explore our vast catalog of {products.length} premium products. Use the filters to find exactly what you're looking for.
             </p>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-[300px]">
             <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full bg-muted/50 border border-border pl-12 pr-4 py-2.5 rounded-xl focus:bg-white transition-all shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
             <button 
               onClick={() => setShowFilters(!showFilters)}
               className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all font-medium ${showFilters ? 'bg-black text-white border-black' : 'bg-white border-border hover:bg-muted'}`}
             >
                <SlidersHorizontal size={18} />
                Filters
             </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-muted p-1 rounded-xl border border-border">
               <button className="p-1.5 bg-white rounded-lg shadow-sm"><Grid size={18} /></button>
               <button className="p-1.5 hover:bg-white/50 rounded-lg transition-colors"><List size={18} /></button>
            </div>
            <select 
              className="bg-white border border-border px-4 py-2.5 rounded-xl font-medium outline-none shadow-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <AnimatePresence>
          {showFilters && (
            <motion.aside 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full md:w-64 space-y-10"
            >
              <div>
                <h3 className="font-bold text-lg mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all ${category === cat ? 'bg-black text-white' : 'hover:bg-muted'}`}
                    >
                      <span className="text-sm font-medium">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-6">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <input type="text" placeholder="Min" className="w-full bg-white border border-border px-3 py-2 rounded-lg text-sm" />
                    <input type="text" placeholder="Max" className="w-full bg-white border border-border px-3 py-2 rounded-lg text-sm" />
                  </div>
                  <button className="w-full bg-muted py-2 rounded-lg text-sm font-bold hover:bg-black hover:text-white transition-all">Apply</button>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
             <p className="text-sm text-muted-foreground font-medium">
               Showing <span className="text-black font-bold">{filteredProducts.length}</span> results
             </p>
             {category !== "All" && (
               <button 
                 onClick={() => setCategory("All")}
                 className="text-xs bg-black/5 px-3 py-1.5 rounded-full flex items-center gap-2 hover:bg-black/10"
               >
                 {category} <X size={12} />
               </button>
             )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                 <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => {setCategory("All"); setSearchQuery("");}}
                className="bg-black text-white px-8 py-3 rounded-2xl font-bold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
