"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, FileText, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 09, 2026";

  const sections = [
    {
      title: "Data We Collect",
      icon: <Eye size={20} className="text-blue-500" />,
      content: "We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This includes your name, email address, shipping address, and payment information."
    },
    {
      title: "How We Use Your Info",
      icon: <FileText size={20} className="text-blue-500" />,
      content: "Your data allows us to process transactions, provide customer support, and send you personalized updates about your orders and exclusive EOO offers. We never sell your personal data to third parties."
    },
    {
      title: "Data Security",
      icon: <Lock size={20} className="text-blue-500" />,
      content: "We implement enterprise-grade security measures to protect your personal information. Our systems use SSL encryption and follow industry best practices to ensure your data remains confidential and secure."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
             <div className="inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                <Shield size={12} />
                Trust & Transparency
             </div>
             <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-neutral-900">Privacy Policy</h1>
             <p className="text-neutral-400 font-bold text-xs uppercase tracking-widest">Last Updated: {lastUpdated}</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-[3rem] shadow-premium border border-neutral-100 p-10 md:p-16 space-y-16">
             
             <div className="space-y-6">
                <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                  At EOO Lifestyle, your privacy is our priority. We are committed to protecting the personal information you share with us and being transparent about how we collect and use it.
                </p>
             </div>

             <div className="grid grid-cols-1 gap-12">
                {sections.map((section, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-8 items-start">
                     <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                        {section.icon}
                     </div>
                     <div className="space-y-4">
                        <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tight">{section.title}</h2>
                        <p className="text-neutral-500 leading-relaxed">
                           {section.content}
                        </p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="pt-12 border-t border-neutral-100">
                <h3 className="text-xl font-black text-neutral-900 mb-6">Your Rights</h3>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact our privacy team at privacy@eoo.com.
                </p>
                <div className="bg-neutral-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                   <div>
                      <p className="font-bold text-lg">Questions about your data?</p>
                      <p className="text-white/40 text-sm">Our dedicated privacy officer is here to help.</p>
                   </div>
                   <button className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-neutral-200 transition-all">
                      Contact Privacy Team
                   </button>
                </div>
             </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
