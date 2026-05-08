"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4"
            >
              <span>Get in Touch</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
            >
              We'd love to hear <br /> from you.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Whether you have a question about our products, shipping, or anything else, our team is ready to answer all your questions.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-premium border border-border"
            >
              <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider ml-1">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John" 
                      className="w-full bg-muted/30 border border-border px-5 py-4 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black/5 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider ml-1">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      className="w-full bg-muted/30 border border-border px-5 py-4 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black/5 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-muted/30 border border-border px-5 py-4 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black/5 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1">Subject</label>
                  <select className="w-full bg-muted/30 border border-border px-5 py-4 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black/5 transition-all outline-none">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Returns & Exchanges</option>
                    <option>Wholesale</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="How can we help you?" 
                    className="w-full bg-muted/30 border border-border px-5 py-4 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black/5 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/10">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Our friendly team is here to help.</p>
                  <a href="mailto:support@eoo.com" className="font-bold hover:underline">support@eoo.com</a>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Mon-Fri from 9am to 6pm.</p>
                  <a href="tel:+1234567890" className="font-bold hover:underline">+1 (234) 567-890</a>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Come say hello at our office.</p>
                  <p className="font-bold leading-tight">123 Design St, <br />Fashion District, NY 10001</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Available 24/7 for quick help.</p>
                  <button className="font-bold hover:underline">Start a conversation</button>
                </div>
              </motion.div>

              {/* FAQ Preview */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-black text-white p-10 rounded-3xl overflow-hidden relative"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Looking for quick answers?</h3>
                  <p className="text-white/60 mb-8 max-w-md">Check out our frequently asked questions for immediate assistance with orders and shipping.</p>
                  <button className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-colors">
                    View FAQ
                  </button>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <Clock size={200} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
