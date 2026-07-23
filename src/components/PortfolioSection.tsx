import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Eye, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/data';
import { PortfolioItem } from '../types';

interface PortfolioSectionProps {
  onSelectPortfolioItem: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectPortfolioItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = ['todos', 'Gastronomía', 'E-Commerce', 'Catálogo Web', 'Sitio Web + Citas', 'Servicios Técnicos'];

  const filteredItems = activeCategory === 'todos' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.category === activeCategory || item.tags.includes(activeCategory));

  return (
    <section id="portafolio" className="py-24 relative overflow-hidden bg-[#0F0F14]">
      
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00C8FF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00C8FF]/30 text-xs font-semibold text-[#00C8FF] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Casos de Éxito y Prototipos en Vivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Portafolio de <span className="text-gradient-cyan">Demostraciones Interactivas</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Explora de primera mano la calidad visual, velocidad y funcionalidad de nuestros proyectos para los rubros más importantes de Santa Rita y Paraguay.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all capitalize ${
                activeCategory === cat
                  ? 'bg-[#00C8FF] text-black shadow-lg shadow-[#00C8FF]/25 scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl bg-[#14141C] border border-white/10 hover:border-[#00C8FF]/40 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#00C8FF]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Project Image Preview Container */}
                <div className="relative h-52 overflow-hidden bg-black/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141C] via-transparent to-black/30" />

                  {/* Industry tag */}
                  <span 
                    className="absolute top-3 left-3 px-3 py-1 rounded-lg text-[11px] font-bold text-white backdrop-blur-md border border-white/20 shadow"
                    style={{ backgroundColor: `${item.accentColor}cc` }}
                  >
                    {item.industry}
                  </span>

                  {/* Quick Action Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs">
                    <button
                      onClick={() => onSelectPortfolioItem(item)}
                      className="px-5 py-2.5 rounded-xl bg-[#00C8FF] text-black font-bold text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Abrir Demostración Interactiva</span>
                    </button>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00C8FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Metrics & Action */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                
                <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[10px] text-slate-500 block">{m.label}</span>
                      <span className="font-bold text-[#00C8FF]">{m.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectPortfolioItem(item)}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#00C8FF] text-slate-200 hover:text-black font-bold text-xs border border-white/10 hover:border-[#00C8FF] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Probar Demostración</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
