"use client";
import { useState } from "react";
import { 
  LayoutDashboard, Package, ShoppingCart, Users, Settings, 
  BarChart3, Plus, Search, Filter, MoreHorizontal, 
  TrendingUp, ArrowUpRight, DollarSign, ShoppingBag, Bell,
  MessageCircle, Send, ArrowLeft
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { products as initialProducts } from "@/utils/seedData";
import { toast } from "sonner";
import { X, Edit2, Trash, Save } from "lucide-react";

const data = [
  { name: 'Mon', sales: 4000, revenue: 2400 },
  { name: 'Tue', sales: 3000, revenue: 1398 },
  { name: 'Wed', sales: 2000, revenue: 9800 },
  { name: 'Thu', sales: 2780, revenue: 3908 },
  { name: 'Fri', sales: 1890, revenue: 4800 },
  { name: 'Sat', sales: 2390, revenue: 3800 },
  { name: 'Sun', sales: 3490, revenue: 4300 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isClient, setIsClient] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [messages, setMessages] = useState([
    { id: 1, user: "John Doe", email: "john@example.com", lastMessage: "Hey, when will my watch be shipped?", time: "2m ago", status: "unread", chat: [
      { role: "user", content: "Hey, when will my watch be shipped?", time: "10:30 AM" }
    ]},
    { id: 2, user: "Sarah Smith", email: "sarah@gmail.com", lastMessage: "I love the quality of the leather bag!", time: "1h ago", status: "read", chat: [
      { role: "user", content: "I love the quality of the leather bag!", time: "9:15 AM" },
      { role: "bot", content: "Thank you Sarah! We're glad you liked it.", time: "9:20 AM" }
    ]},
    { id: 3, user: "Mike Johnson", email: "mike@yahoo.com", lastMessage: "Is there a discount for bulk orders?", time: "3h ago", status: "unread", chat: [
      { role: "user", content: "Is there a discount for bulk orders?", time: "7:45 AM" }
    ]},
  ]);
  const [activeChat, setActiveChat] = useState(null);
  const [replyInput, setReplyInput] = useState("");

  const handleSendReply = () => {
    if (!replyInput.trim()) return;
    const newReply = { role: "bot", content: replyInput, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    
    setMessages(prev => prev.map(m => {
      if (m.id === activeChat.id) {
        return {
          ...m,
          status: "read",
          lastMessage: replyInput,
          chat: [...m.chat, newReply]
        };
      }
      return m;
    }));
    
    setActiveChat(prev => ({
      ...prev,
      chat: [...prev.chat, newReply]
    }));
    setReplyInput("");
    toast.success("Reply sent to customer!");
  };

  const menuItems = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { id: "products", label: "Products", icon: <Package size={20} /> },
    { id: "orders", label: "Orders", icon: <ShoppingCart size={20} /> },
    { id: "messages", label: "Messages", icon: <MessageCircle size={20} /> },
    { id: "customers", label: "Customers", icon: <Users size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  const SidebarContent = () => (
    <>
      <div className="flex items-center gap-3 mb-12 px-2">
         <Link href="/" className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xs">EOO</span>
         </Link>
         <span className="text-xl font-bold tracking-tighter">Admin Panel</span>
      </div>

      <nav className="flex-1 space-y-2">
         {menuItems.map((item) => (
           <button
             key={item.id}
             onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }}
             className={`w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-all ${activeTab === item.id ? 'bg-black text-white shadow-lg shadow-black/10' : 'text-muted-foreground hover:bg-muted hover:text-black'}`}
           >
              {item.icon}
              {item.label}
           </button>
         ))}
      </nav>

      <div className="pt-6 border-t border-border">
         <div className="flex items-center gap-4 p-2">
            <div className="w-10 h-10 rounded-full bg-muted overflow-hidden relative">
                <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" fill sizes="40px" />
            </div>
            <div className="flex-1 overflow-hidden">
               <p className="text-sm font-bold truncate">Admin User</p>
               <p className="text-xs text-muted-foreground truncate">admin@eoo.com</p>
            </div>
         </div>
      </div>
    </>
  );

  return (
    <main className="min-h-screen bg-[#fcfcfc] flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-border p-4 flex items-center justify-between sticky top-0 z-50">
         <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-[10px] font-bold">EOO</div>
            <span className="font-bold tracking-tighter">Admin</span>
         </Link>
         <button 
           onClick={() => setIsSidebarOpen(true)}
           className="p-2 hover:bg-muted rounded-xl transition-all"
         >
            <Menu size={24} />
         </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-border sticky top-0 h-screen flex-col p-6">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-[280px] bg-white z-[70] p-6 flex flex-col lg:hidden"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <section className="flex-1 p-4 md:p-10 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 gap-6">
           <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                 {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">Manage your store and track performance.</p>
           </div>
           <div className="flex items-center gap-3">
              <button className="flex-1 md:flex-none p-3 bg-white border border-border rounded-2xl hover:bg-muted transition-all relative flex justify-center">
                 <Bell size={20} />
                 <span className="absolute top-3 md:top-3 right-1/2 translate-x-4 md:right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <button className="flex-[3] md:flex-none bg-black text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black/90 transition-all shadow-premium">
                 <Plus size={20} />
                 Create New
              </button>
           </div>
        </header>

        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
             {/* Stats Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Total Revenue", value: "$128,430", change: "+12.5%", icon: <DollarSign size={24} />, color: "bg-green-500" },
                  { label: "Total Orders", value: "1,240", change: "+8.2%", icon: <ShoppingBag size={24} />, color: "bg-blue-500" },
                  { label: "Active Customers", value: "8,321", change: "+14.3%", icon: <Users size={24} />, color: "bg-purple-500" },
                  { label: "Avg. Session", value: "4m 32s", change: "-2.1%", icon: <TrendingUp size={24} />, color: "bg-orange-500" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-[32px] shadow-premium border border-border space-y-4">
                     <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center`}>
                           {stat.icon}
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                           {stat.change}
                        </span>
                     </div>
                     <div>
                        <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                     </div>
                  </div>
                ))}
             </div>

             {/* Charts */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[40px] shadow-premium border border-border relative">
                   <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold">Revenue Analytics</h3>
                      <select className="bg-muted border-none px-3 py-1.5 rounded-lg text-xs font-bold outline-none">
                         <option>Last 7 Days</option>
                         <option>Last 30 Days</option>
                      </select>
                   </div>
                   <div className="h-[300px] w-full relative">
                      {isClient && (
                        <ResponsiveContainer width="100%" height="100%">
                           <AreaChart data={data}>
                              <defs>
                                 <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#000" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                                 </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                              <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                              <Area type="monotone" dataKey="revenue" stroke="#000" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                           </AreaChart>
                        </ResponsiveContainer>
                      )}
                   </div>
                </div>

                <div className="bg-white p-8 rounded-[40px] shadow-premium border border-border relative">
                   <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold">Sales Overview</h3>
                      <BarChart3 size={20} className="text-muted-foreground" />
                   </div>
                   <div className="h-[300px] w-full relative">
                      {isClient && (
                        <ResponsiveContainer width="100%" height="100%">
                           <BarChart data={data}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                              <Tooltip cursor={{fill: '#f7f7f7'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                              <Bar dataKey="sales" fill="#000" radius={[6, 6, 0, 0]} />
                           </BarChart>
                        </ResponsiveContainer>
                      )}
                   </div>
                </div>
             </div>
          </motion.div>
        )}

        {activeTab === "messages" && (
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-[calc(100vh-250px)] lg:h-[calc(100vh-200px)] flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Message List */}
              <div className={`w-full lg:w-96 bg-white rounded-[2.5rem] border border-border overflow-hidden flex flex-col shadow-premium ${activeChat ? 'hidden lg:flex' : 'flex'}`}>
                 <div className="p-6 border-b border-border bg-[#fafafa] flex justify-between items-center">
                    <h3 className="font-bold text-lg">Inquiries</h3>
                    <div className="bg-black text-white text-[10px] px-2 py-1 rounded-full">{messages.filter(m => m.status === 'unread').length} New</div>
                 </div>
                 <div className="flex-1 overflow-y-auto">
                    {messages.map((m) => (
                      <button 
                        key={m.id}
                        onClick={() => setActiveChat(m)}
                        className={`w-full p-6 text-left border-b border-border transition-all hover:bg-muted/50 ${activeChat?.id === m.id ? 'bg-black/5' : ''}`}
                      >
                         <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-sm">{m.user}</span>
                            <span className="text-[10px] text-muted-foreground font-medium">{m.time}</span>
                         </div>
                         <p className="text-xs text-muted-foreground line-clamp-1 mb-2">{m.lastMessage}</p>
                         {m.status === "unread" && (
                           <span className="w-2 h-2 bg-blue-500 rounded-full block" />
                         )}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Active Chat */}
              <div className={`flex-1 bg-white rounded-[2.5rem] border border-border overflow-hidden flex flex-col shadow-premium relative ${activeChat ? 'flex' : 'hidden lg:flex'}`}>
                 {activeChat ? (
                   <>
                      <div className="p-6 border-b border-border bg-[#fafafa] flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <button 
                              onClick={() => setActiveChat(null)}
                              className="lg:hidden p-2 hover:bg-muted rounded-xl transition-all"
                            >
                               <ArrowLeft size={18} />
                            </button>
                            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                               {activeChat.user.charAt(0)}
                            </div>
                            <div className="min-w-0">
                               <h3 className="font-bold text-sm truncate">{activeChat.user}</h3>
                               <p className="text-[10px] text-muted-foreground truncate">{activeChat.email}</p>
                            </div>
                         </div>
                         <div className="flex gap-2">
                            <button className="hidden sm:block p-2 hover:bg-muted rounded-xl transition-all"><Search size={18} /></button>
                            <button className="p-2 hover:bg-muted rounded-xl transition-all"><MoreHorizontal size={18} /></button>
                         </div>
                      </div>

                      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 bg-[#fcfcfc]">
                         {activeChat.chat.map((msg, i) => (
                           <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[85%] md:max-w-[70%] p-4 rounded-3xl text-sm ${msg.role === 'bot' ? 'bg-black text-white rounded-tr-none shadow-lg' : 'bg-white text-black border border-border rounded-tl-none shadow-sm'}`}>
                                 <p className="leading-relaxed">{msg.content}</p>
                                 <p className={`text-[10px] mt-2 font-medium ${msg.role === 'bot' ? 'text-white/50' : 'text-muted-foreground'}`}>{msg.time}</p>
                              </div>
                           </div>
                         ))}
                      </div>

                      <div className="p-4 md:p-6 border-t border-border bg-white flex gap-3">
                         <input 
                           type="text" 
                           placeholder="Type your reply..." 
                           className="flex-1 bg-muted px-4 md:px-6 py-4 rounded-2xl text-sm outline-none focus:bg-white border border-transparent focus:border-black transition-all font-medium"
                           value={replyInput}
                           onChange={(e) => setReplyInput(e.target.value)}
                           onKeyPress={(e) => e.key === 'Enter' && handleSendReply()}
                         />
                         <button 
                           onClick={handleSendReply}
                           className="w-12 h-12 md:w-14 md:h-14 bg-black text-white rounded-2xl flex items-center justify-center hover:bg-black/90 transition-all active:scale-95 shadow-premium shrink-0"
                         >
                            <Send size={20} />
                         </button>
                      </div>
                   </>
                 ) : (
                   <div className="flex-1 flex flex-col items-center justify-center text-center p-12 space-y-4">
                      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                         <MessageCircle size={32} />
                      </div>
                      <h3 className="text-xl font-bold">Select a conversation</h3>
                      <p className="text-sm text-muted-foreground max-w-xs">Choose an inquiry from the list to view the full chat and reply to the customer.</p>
                   </div>
                 )}
              </div>
           </motion.div>
        )}

        {activeTab === "products" && (
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="flex items-center justify-between">
                 <div className="relative w-full max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search products..." 
                      className="w-full bg-white border border-border pl-12 pr-4 py-3 rounded-2xl focus:shadow-premium transition-all"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                 </div>
                 <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-border font-bold text-sm">
                       <Filter size={18} />
                       Filters
                    </button>
                    <p className="text-sm font-bold text-muted-foreground">{filteredProducts.length} Products Total</p>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {!isClient ? (
                   [...Array(6)].map((_, i) => (
                     <div key={i} className="h-32 bg-muted animate-pulse rounded-[2.5rem]" />
                   ))
                 ) : (
                   filteredProducts.map((p) => (
                     <div key={p.id} className="bg-white p-5 rounded-[2.5rem] border border-border hover:shadow-premium transition-all group flex gap-5 items-center">
                        <div className="w-28 h-28 rounded-3xl bg-muted relative overflow-hidden shrink-0 border border-border shadow-sm">
                           <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 overflow-hidden flex flex-col justify-between h-28">
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{p.category}</p>
                              <h4 className="font-bold text-base truncate">{p.name}</h4>
                           </div>
                           <div className="flex justify-between items-end">
                              <div>
                                 <p className="font-black text-xl">${p.price}</p>
                                 <p className="text-[10px] font-bold text-muted-foreground">Stock: {p.stock}</p>
                              </div>
                              <div className="flex gap-2">
                                 <button 
                                   onClick={() => setEditingProduct(p)}
                                   className="p-2.5 bg-muted rounded-xl hover:bg-black hover:text-white transition-all shadow-sm"
                                 >
                                   <Edit2 size={16} />
                                 </button>
                                 <button 
                                   onClick={() => handleDeleteProduct(p.id)}
                                   className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                 >
                                   <Trash size={16} />
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                   ))
                 )}
              </div>
           </motion.div>
        )}
      </section>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingProduct && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setEditingProduct(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 m-auto w-full max-w-xl h-fit bg-white rounded-[3rem] shadow-2xl z-[101] overflow-hidden"
            >
              <div className="p-8 border-b border-border flex items-center justify-between bg-[#fafafa]">
                 <h2 className="text-2xl font-bold tracking-tight">Edit Product</h2>
                 <button onClick={() => setEditingProduct(null)} className="p-2 hover:bg-muted rounded-full transition-all">
                    <X size={20} />
                 </button>
              </div>
              <form onSubmit={handleSaveProduct} className="p-10 space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 col-span-2">
                       <label className="text-xs font-bold uppercase tracking-widest ml-1 text-muted-foreground">Product Name</label>
                       <input name="name" defaultValue={editingProduct.name} className="w-full bg-muted/50 border border-border px-5 py-3 rounded-2xl focus:bg-white outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest ml-1 text-muted-foreground">Price ($)</label>
                       <input name="price" type="number" step="0.01" defaultValue={editingProduct.price} className="w-full bg-muted/50 border border-border px-5 py-3 rounded-2xl focus:bg-white outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest ml-1 text-muted-foreground">Category</label>
                       <input name="category" defaultValue={editingProduct.category} className="w-full bg-muted/50 border border-border px-5 py-3 rounded-2xl focus:bg-white outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest ml-1 text-muted-foreground">Stock Level</label>
                       <input name="stock" type="number" defaultValue={editingProduct.stock} className="w-full bg-muted/50 border border-border px-5 py-3 rounded-2xl focus:bg-white outline-none transition-all font-medium" />
                    </div>
                 </div>
                 <div className="pt-6 flex gap-4">
                    <button type="button" onClick={() => setEditingProduct(null)} className="flex-1 px-8 py-4 rounded-2xl border border-border font-bold hover:bg-muted transition-all">Cancel</button>
                    <button type="submit" className="flex-1 px-8 py-4 rounded-2xl bg-black text-white font-bold flex items-center justify-center gap-2 hover:bg-black/90 shadow-premium transition-all">
                       <Save size={18} />
                       Save Changes
                    </button>
                 </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
