import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageSquare, 
  PhoneCall, 
  Sparkles 
} from 'lucide-react';
import { FAQS_DATA, AGENCY_INFO } from '../data/data';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'todos' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-24 relative bg-[#0B0B0B] overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00C8FF]/30 text-xs font-semibold text-[#00C8FF] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resuelve tus Dudas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Preguntas <span className="text-gradient-cyan">Frecuentes</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Todo lo que necesitas saber sobre nuestros servicios de desarrollo web, tiempos de entrega y métodos de trabajo.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="space-y-4">
          
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Buscar pregunta (ej. precios, dominio, tiempos, menú QR)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#121218] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00C8FF] transition-colors"
            />
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {['todos', 'general', 'servicios', 'pagos'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-[#00C8FF] text-black shadow'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              No encontramos preguntas que coincidan con tu búsqueda. ¡Puedes consultarnos directamente por WhatsApp!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-white/10 bg-[#121218] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-[#00C8FF] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00C8FF] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* WhatsApp Direct Prompt */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#121218] to-black border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">¿Tienes alguna otra consulta específica?</h4>
            <p className="text-xs text-slate-400">Jonathan Coronel responderá todas tus preguntas sin compromiso.</p>
          </div>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#00C8FF] text-black font-bold text-xs flex items-center gap-2 hover:bg-sky-300 transition-colors shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
