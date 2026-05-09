"use client";
import { useState } from "react";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! I'm your EOO AI assistant. How can I help you find the perfect product today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    
    // Simple mock AI response
    setTimeout(() => {
      setMessages([...newMessages, { role: "bot", content: "That's a great question! Based on our premium collection, I'd recommend checking out our Electronics section for the latest gadgets." }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] bg-white rounded-[32px] shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-black p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">EOO Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Always Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 h-[400px] overflow-y-auto p-6 space-y-4 bg-[#f9f9f9]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white text-black border border-border rounded-tl-none shadow-sm'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-border flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything..." 
                className="flex-1 bg-muted px-4 py-3 rounded-2xl text-sm outline-none focus:bg-white border border-transparent focus:border-black transition-all"
              />
              <button 
                onClick={handleSend}
                className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center hover:bg-black/90 transition-all active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-[24px] flex items-center justify-center shadow-2xl overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-700 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              className="relative z-10 text-white"
            >
              <X size={28} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              className="relative z-10 text-white flex flex-col items-center gap-0.5"
            >
              <Bot size={28} strokeWidth={2.5} />
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,1)]" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </motion.button>
    </div>
  );
}
