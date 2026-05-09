"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Scale, Zap, AlertCircle, CheckCircle2 } from "lucide-react";

export default function TermsOfServicePage() {
  const lastUpdated = "May 09, 2026";

  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using the EOO Lifestyle website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the services."
    },
    {
      title: "2. Purchase & Payment",
      content: "All orders are subject to acceptance and availability. Prices for our products are subject to change without notice. We reserve the right to refuse service to anyone for any reason at any time."
    },
    {
      title: "3. Shipping & Delivery",
      content: "Shipping times are estimates and not guaranteed. EOO is not responsible for delays caused by the courier or customs clearance processes in international shipments."
    },
    {
      title: "4. User Conduct",
      content: "You agree not to use our services for any illegal or unauthorized purpose. You must not transmit any worms, viruses, or any code of a destructive nature."
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
                <Scale size={12} />
                Legal Framework
             </div>
             <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-neutral-900">Terms of Service</h1>
             <p className="text-neutral-400 font-bold text-xs uppercase tracking-widest">Effective Date: {lastUpdated}</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-[3rem] shadow-premium border border-neutral-100 p-10 md:p-16 space-y-12">
             
             <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-600 leading-relaxed font-medium mb-12">
                   Welcome to EOO Lifestyle. These terms govern your use of our website and services. Please read them carefully before making a purchase.
                </p>

                <div className="space-y-12">
                   {terms.map((term, i) => (
                     <div key={i} className="space-y-4">
                        <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tight flex items-center gap-4">
                           <span className="w-8 h-8 bg-neutral-900 text-white rounded-lg flex items-center justify-center text-xs">{i + 1}</span>
                           {term.title.split('. ')[1]}
                        </h2>
                        <p className="text-neutral-500 leading-relaxed pl-12">
                           {term.content}
                        </p>
                     </div>
                   ))}
                </div>

                <div className="mt-16 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                   <div className="flex items-start gap-4">
                      <AlertCircle className="text-blue-600 mt-1 shrink-0" size={24} />
                      <div className="space-y-2">
                         <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest">Important Notice</h4>
                         <p className="text-sm text-blue-800/70 leading-relaxed">
                            EOO Lifestyle reserves the right to update or change these terms at any time. Continued use of the site constitutes acceptance of the new terms.
                         </p>
                      </div>
                   </div>
                </div>

                <div className="mt-16 pt-12 border-t border-neutral-100 text-center">
                   <p className="text-xs text-neutral-400 font-bold uppercase tracking-[0.3em]">Thank you for choosing EOO</p>
                </div>
             </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
