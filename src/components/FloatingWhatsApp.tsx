import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, CheckCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/data';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSend = () => {
    if (!userMsg.trim()) return;
    const url = `https://wa.me/595986102279?text=${encodeURIComponent(userMsg)}`;
    window.open(url, '_blank');
    setUserMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Floating Chat Box Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="mb-4 w-80 sm:w-88 rounded-2xl bg-[#14141C] border border-white/15 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-emerald-700 font-bold flex items-center justify-center text-sm shadow">
                  JC
                </div>
                <div>
                  <div className="text-xs font-bold">{AGENCY_INFO.founder}</div>
                  <div className="text-[10px] text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    En línea | JC Web Studio
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#0B0B0E] space-y-3 text-xs">
              <div className="p-3 rounded-2xl rounded-tl-xs bg-[#1A1A24] border border-white/5 text-slate-200 max-w-[85%] space-y-1">
                <p>¡Hola! 👋 Soy Jonathan Coronel. ¿En qué puedo ayudarte hoy con la página web de tu empresa?</p>
                <div className="text-[9px] text-slate-500 text-right flex items-center justify-end gap-1">
                  <span>Ahora</span>
                  <CheckCheck className="w-3 h-3 text-[#00C8FF]" />
                </div>
              </div>
            </div>

            {/* Footer Input */}
            <div className="p-3 bg-[#14141C] border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleSend}
                className="p-2 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-emerald-500 text-black font-bold shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-[#0B0B0B] animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-[#0B0B0B]" />
        
        {isOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <MessageSquare className="w-6 h-6 stroke-[2.5]" />}
      </button>

    </div>
  );
};
