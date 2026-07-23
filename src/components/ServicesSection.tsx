import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Globe, 
  ShoppingBag, 
  QrCode, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles,
  Calculator
} from 'lucide-react';
import { SERVICES_DATA, AGENCY_INFO } from '../data/data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenCalculator: () => void;
  onSelectServiceForCalc: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenCalculator, onSelectServiceForCalc }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-6 h-6 text-[#00C8FF]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#00C8FF]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-[#00C8FF]" />;
      case 'QrCode': return <QrCode className="w-6 h-6 text-[#00C8FF]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#00C8FF]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#00C8FF]" />;
      default: return <Sparkles className="w-6 h-6 text-[#00C8FF]" />;
    }
  };

  const formatPYG = (amount: number) => {
    return new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-line-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00C8FF]/30 text-xs font-semibold text-[#00C8FF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestros Servicios Premium</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Soluciones digitales diseñadas para <span className="text-gradient-cyan">vender más</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            No vendemos simples plantillas. Desarrollamos herramientas digitales optimizadas en velocidad, diseño UX/UI y conversión de clientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl p-8 glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                
                {/* Badge & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00C8FF]/10 border border-[#00C8FF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.iconName)}
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/5 border border-white/10 text-[#00C8FF]">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#00C8FF] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer Info */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-[#00C8FF]" />
                    <span>{service.estimatedDays}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Desde</span>
                    <span className="text-sm font-bold text-white">
                      USD ${service.startingPriceUSD} <span className="text-slate-400 text-xs">({formatPYG(service.startingPricePYG)})</span>
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onSelectServiceForCalc(service.id);
                      onOpenCalculator();
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-colors"
                  >
                    <Calculator className="w-3.5 h-3.5 text-[#00C8FF]" />
                    <span>Calcular</span>
                  </button>

                  <a
                    href={`https://wa.me/${AGENCY_INFO.phone}?text=${encodeURIComponent(`Hola Jonathan! Quisiera consultar sobre el servicio: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00C8FF] text-black text-xs font-bold hover:bg-sky-300 transition-all shadow-md shadow-[#00C8FF]/20"
                  >
                    <span>Cotizar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
