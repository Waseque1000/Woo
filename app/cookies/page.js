"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie, Info, Settings, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CookiePolicyPage() {
  const lastUpdated = "May 09, 2026";

  const cookieTypes = [
    {
      type: "Essential Cookies",
      desc: "These are necessary for the website to function correctly, such as maintaining your cart and security sessions.",
      status: "Always Active"
    },
    {
      type: "Analytics Cookies",
      desc: "Help us understand how visitors interact with our site, allowing us to improve user experience and site performance.",
      status: "Optional"
    },
    {
      type: "Marketing Cookies",
      desc: "Used to deliver personalized advertisements and track the efficiency of our marketing campaigns.",
      status: "Optional"
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
                <Cookie size={12} />
                Transparency Report
             </div>
             <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-neutral-900">Cookie Policy</h1>
             <p className="text-neutral-400 font-bold text-xs uppercase tracking-widest">Version 1.2 • Updated {lastUpdated}</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-[3rem] shadow-premium border border-neutral-100 p-10 md:p-16 space-y-16">
             
             <div className="space-y-6">
                <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tight">How we use Cookies</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                   EOO Lifestyle uses cookies to enhance your shopping experience, remember your preferences, and ensure our website runs smoothly and securely.
                </p>
             </div>

             <div className="grid grid-cols-1 gap-6">
                {cookieTypes.map((cookie, i) => (
                  <div key={i} className="p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8 group hover:bg-neutral-900 transition-all duration-500">
                     <div className="space-y-2">
                        <h4 className="text-xl font-black text-neutral-900 group-hover:text-white transition-colors">{cookie.type}</h4>
                        <p className="text-sm text-neutral-500 group-hover:text-white/50 transition-colors max-w-md">
                           {cookie.desc}
                        </p>
                     </div>
                     <div className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${cookie.status === 'Always Active' ? 'bg-green-100 text-green-700' : 'bg-neutral-200 text-neutral-600 group-hover:bg-white/10 group-hover:text-white/70'}`}>
                        {cookie.status}
                     </div>
                  </div>
                ))}
             </div>

             <div className="pt-12 border-t border-neutral-100 space-y-8">
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-neutral-900 text-white rounded-2xl flex items-center justify-center shrink-0">
                      <Settings size={24} />
                   </div>
                   <div className="space-y-2">
                      <h3 className="text-xl font-black text-neutral-900">Managing Your Preferences</h3>
                      <p className="text-neutral-500 leading-relaxed">
                         Most web browsers allow you to control cookies through their settings. However, disabling essential cookies may impact the functionality of our website.
                      </p>
                   </div>
                </div>
                
                <div className="bg-neutral-900 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center gap-10">
                   <div className="relative w-24 h-24 shrink-0">
                      <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20" />
                      <div className="relative w-full h-full bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                         <ShieldCheck size={40} className="text-blue-400" />
                      </div>
                   </div>
                   <div className="space-y-2 text-center md:text-left flex-1">
                      <h4 className="text-xl font-bold">Your Privacy, Your Choice</h4>
                      <p className="text-white/50 text-sm">We respect your data rights and comply with all international privacy standards (GDPR, CCPA).</p>
                   </div>
                   <button className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] whitespace-nowrap hover:bg-neutral-200 transition-all">
                      Save Preferences
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
