"use client";
import { useParams } from "next/navigation";
import { products } from "@/utils/seedData";
import { Printer, Download, Mail, Phone, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function InvoicePage() {
  const { id } = useParams();

  // Mock data for the invoice
  const invoiceData = {
    id: id || "EOO-98231",
    date: "May 07, 2026",
    dueDate: "Paid",
    customer: {
      name: "Waseque Arafat",
      email: "waseque@example.com",
      phone: "+880 1700-000000",
      address: "H-24, Road-07, Block-C, Banasree",
      city: "Dhaka",
      postalCode: "1219",
      country: "Bangladesh"
    },
    items: [
      { name: "boAt Nirvana Zenith Pro", price: 2999, qty: 1, sku: "BT-NZP-BLK" },
      { name: "boAt Wave Fury", price: 1199, qty: 1, sku: "BT-WF-BLU" }
    ],
    subtotal: 4198,
    tax: 0,
    shipping: 0,
    total: 4198
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-neutral-100 py-12 px-6 print:bg-white print:p-0">
      {/* Action Bar (Hidden on Print) */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
         <h1 className="text-xl font-black text-neutral-900 uppercase tracking-widest">Invoice Preview</h1>
         <div className="flex gap-4">
            <button 
              onClick={handlePrint}
              className="bg-white text-black border border-neutral-200 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-50 transition-all shadow-sm"
            >
               <Printer size={14} />
               Print Invoice
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-lg">
               <Download size={14} />
               Download PDF
            </button>
         </div>
      </div>

      {/* The Invoice */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[3rem] overflow-hidden print:shadow-none print:rounded-none border border-neutral-100">
         
         {/* Top Header */}
         <div className="bg-neutral-900 p-12 md:p-16 text-white flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                     <span className="text-black font-black text-sm">EOO</span>
                  </div>
                  <div>
                     <h2 className="text-2xl font-black tracking-tighter">EOO LIFESTYLE</h2>
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Premium Audio & Wearables</p>
                  </div>
               </div>
               <div className="space-y-1 opacity-60 text-sm">
                  <p>123 Digital Plaza, Silicon Valley</p>
                  <p>California, CA 94043, USA</p>
                  <p>support@eoo.com</p>
               </div>
            </div>
            
            <div className="text-right space-y-2">
               <h3 className="text-5xl font-black tracking-tighter text-blue-400 uppercase">Invoice</h3>
               <p className="text-lg font-bold text-white/50">{invoiceData.id}</p>
               <div className="pt-4 flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-1 rounded-full border border-green-500/20 text-[10px] font-black uppercase tracking-widest">
                     Status: {invoiceData.dueDate}
                  </div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mt-2">Issued: {invoiceData.date}</p>
               </div>
            </div>
         </div>

         <div className="p-12 md:p-16 space-y-16">
            
            {/* Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Billed To</h4>
                  <div className="space-y-1">
                     <p className="text-xl font-black text-neutral-900">{invoiceData.customer.name}</p>
                     <p className="text-neutral-500">{invoiceData.customer.email}</p>
                     <p className="text-neutral-500">{invoiceData.customer.phone}</p>
                  </div>
               </div>
               <div className="space-y-4 text-left md:text-right">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Shipping Address</h4>
                  <div className="space-y-1 italic text-neutral-600">
                     <p>{invoiceData.customer.address}</p>
                     <p>{invoiceData.customer.city}, {invoiceData.customer.postalCode}</p>
                     <p>{invoiceData.customer.country}</p>
                  </div>
               </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b-2 border-neutral-900">
                        <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-neutral-400">Item Description</th>
                        <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-neutral-400 text-center">Qty</th>
                        <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-neutral-400 text-right">Price</th>
                        <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-neutral-400 text-right">Total</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                     {invoiceData.items.map((item, i) => (
                        <tr key={i} className="group">
                           <td className="py-8">
                              <p className="font-bold text-neutral-900">{item.name}</p>
                              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">SKU: {item.sku}</p>
                           </td>
                           <td className="py-8 text-center font-bold">{item.qty}</td>
                           <td className="py-8 text-right font-bold text-neutral-500">₹{item.price}</td>
                           <td className="py-8 text-right font-black text-neutral-900">₹{item.price * item.qty}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            {/* Summary */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 pt-8">
               <div className="max-w-xs space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                     <ShieldCheck className="text-neutral-900" size={20} />
                     <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">
                        This is a computer generated invoice and does not require a physical signature.
                     </p>
                  </div>
                  <div className="flex gap-4 px-2">
                     <Globe size={16} className="text-neutral-300" />
                     <Mail size={16} className="text-neutral-300" />
                     <Phone size={16} className="text-neutral-300" />
                  </div>
               </div>

               <div className="w-full md:w-80 space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold text-neutral-400 uppercase tracking-widest">
                     <span>Subtotal</span>
                     <span className="text-neutral-900">₹{invoiceData.subtotal}.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-neutral-400 uppercase tracking-widest">
                     <span>Shipping</span>
                     <span className="text-green-500">Free</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-neutral-400 uppercase tracking-widest pb-6">
                     <span>Sales Tax (0%)</span>
                     <span className="text-neutral-900">₹0.00</span>
                  </div>
                  <div className="pt-8 border-t-4 border-neutral-900 flex justify-between items-center">
                     <span className="text-2xl font-black uppercase tracking-tighter">Grand Total</span>
                     <span className="text-3xl font-black text-neutral-900">₹{invoiceData.total}.00</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Footer */}
         <div className="bg-neutral-50 p-12 text-center border-t border-neutral-100 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-neutral-900">Thank you for your business!</h4>
            <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
               If you have any questions about this invoice, please contact our support team at support@eoo.com or call +1 800-EOO-AUDIO.
            </p>
         </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center text-[10px] font-black uppercase tracking-[0.5em] text-neutral-300">
         EOO Lifestyle © 2026 • Secure Digital Document
      </div>
    </main>
  );
}
