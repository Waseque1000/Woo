"use client";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/seedData";
import { SlidersHorizontal, ChevronDown, Grid, List, Search, X, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

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

  const SidebarContent = () => (
    <div className="space-y-12">
      <div>
        <div className="flex items-center gap-2 mb-8">
           <Filter size={18} className="text-neutral-900" />
           <h3 className="font-black text-xs uppercase tracking-[0.2em] text-neutral-900">Categories</h3>
        </div>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setShowMobileFilters(false);
              }}
              className={`group flex items-center justify-between w-full text-left px-4 py-3 rounded-2xl transition-all ${category === cat ? 'bg-neutral-900 text-white shadow-lg' : 'text-neutral-500 hover:bg-neutral-100'}`}
            >
              <span className="text-sm font-bold">{cat}</span>
              {category === cat && <motion.div layoutId="activeCat" className="w-1.5 h-1.5 bg-white rounded-full" />}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-black text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-6">Price Range</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase text-neutral-400 ml-1">Min</label>
               <input type="text" placeholder="₹0" className="w-full bg-neutral-50 border border-neutral-100 px-4 py-3 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-neutral-200 outline-none transition-all" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase text-neutral-400 ml-1">Max</label>
               <input type="text" placeholder="₹99,999" className="w-full bg-neutral-50 border border-neutral-100 px-4 py-3 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-neutral-200 outline-none transition-all" />
            </div>
          </div>
          <button className="w-full bg-neutral-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-md active:scale-95">
            Apply Filters
          </button>
        </div>
      </div>
      
      <div className="pt-8 border-t border-neutral-100">
         <h3 className="font-black text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-4">Availability</h3>
         <div className="space-y-3">
            {["In Stock", "On Sale", "New Arrivals"].map(label => (
              <label key={label} className="flex items-center gap-3 cursor-pointer group">
                 <div className="w-5 h-5 rounded-md border-2 border-neutral-200 group-hover:border-neutral-900 transition-colors" />
                 <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900">{label}</span>
              </label>
            ))}
         </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Search Header */}
      <section className="pt-32 pb-8 border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
             <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
                   <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
                   <span>/</span>
                   <span className="text-neutral-900">Explore All</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Collection</h1>
             </div>
             
             <div className="relative w-full md:w-96">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search boAt products..." 
                  className="w-full bg-neutral-50 border border-neutral-100 pl-14 pr-6 py-4 rounded-2xl focus:bg-white focus:ring-2 focus:ring-neutral-100 transition-all outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Desktop Sidebar - Truly Fixed */}
          <aside className="hidden lg:block w-72 shrink-0 border-r border-neutral-100 pr-8 fixed top-32 bottom-0 overflow-y-auto no-scrollbar pt-4 pb-20">
             <SidebarContent />
          </aside>
          
          {/* Spacer for Fixed Sidebar */}
          <div className="hidden lg:block w-72 shrink-0" />

          {/* Product Section */}
          <div className="flex-1 lg:pl-12">
            {/* Results Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-50">
               <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setShowMobileFilters(true)}
                    className="lg:hidden flex items-center gap-2 bg-neutral-900 text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg"
                  >
                     <SlidersHorizontal size={14} />
                     Filters
                  </button>
                  <p className="text-sm font-medium text-neutral-500">
                    Showing <span className="text-neutral-900 font-black">{filteredProducts.length}</span> results
                  </p>
               </div>

               <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-1 bg-neutral-50 p-1 rounded-xl">
                     <button className="p-2 bg-white rounded-lg shadow-sm text-neutral-900"><Grid size={16} /></button>
                     <button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors"><List size={16} /></button>
                  </div>
                  <div className="relative group">
                     <select 
                       className="appearance-none bg-neutral-50 border border-neutral-100 pl-5 pr-10 py-3 rounded-xl text-xs font-bold outline-none cursor-pointer focus:bg-white transition-all shadow-sm"
                       value={sortBy}
                       onChange={(e) => setSortBy(e.target.value)}
                     >
                        <option value="featured">Sort: Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                     </select>
                     <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" />
                  </div>
               </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-24 text-center">
                <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Search size={32} className="text-neutral-300" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No results found</h3>
                <p className="text-neutral-500 mb-8 max-w-xs mx-auto">We couldn't find any products matching your current filters.</p>
                <button 
                  onClick={() => {setCategory("All"); setSearchQuery("");}}
                  className="bg-neutral-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] lg:hidden p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                 <h2 className="text-2xl font-bold tracking-tight">Filters</h2>
                 <button onClick={() => setShowMobileFilters(false)} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                    <X size={24} />
                 </button>
              </div>
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
