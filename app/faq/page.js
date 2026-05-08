"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Minus, Search, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 day delivery within the continental US."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Return shipping is free for all domestic orders."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping times and costs vary depending on the destination."
    },
    {
      question: "Are your products sustainable?",
      answer: "Sustainability is at the core of EOO. We use recycled materials whenever possible and work exclusively with ethical manufacturers."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive an email with a tracking number and a link to our tracking page."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white border-b border-border text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
          >
            How can we help?
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full bg-muted/30 border border-border pl-16 pr-8 py-5 rounded-2xl focus:bg-white transition-all outline-none text-lg shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? 'bg-black text-white rotate-180' : 'bg-muted'}`}>
                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-black text-white rounded-[3rem] text-center relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
               <p className="text-white/60 mb-8 max-w-md mx-auto">Can't find the answer you're looking for? Please chat to our friendly team.</p>
               <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 mx-auto">
                 <MessageCircle size={20} />
                 Get in Touch
               </button>
             </div>
             <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
