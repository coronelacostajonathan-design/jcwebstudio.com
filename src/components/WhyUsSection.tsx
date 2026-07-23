import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Search, 
  Headphones, 
  Cpu, 
  CheckCircle2, 
  XCircle, 
  MinusCircle,
  Check
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/data';

export const WhyUsSection: React.FC = () => {
  const differentiators = [
    {
      title: "Diseño Moderno & Exclusivo",
      description: "Creamos interfaces únicas inspiradas en estándares globales (Apple, Stripe, Linear). Cero plantillas genéricas o sitios clonados.",
      icon: Sparkles
    },
    {
      title: "Carga Ultrarrápida (< 1.0s)",
      description: "Optimizado con React, Vite y CDN de alta velocidad para que tus clientes no abandonen la página esperando a que cargue.",
      icon: Zap
    },
    {
      title: "SEO On-Page Garantizado",
      description: "Estructura técnica optimizada con Schema.org e indexación inmediata en Google para que aparezcas cuando busquen tus servicios.",
      icon: Search
    },
    {
      title: "100% Adaptable a Celulares",
      description: "Pensado mobile-first. El 85% del tráfico en Paraguay proviene de smartphones, por lo que tu sitio se verá perfecto en cualquier pantalla.",
      icon: Smartphone
    },
    {
      title: "Tecnología de Vanguardia",
      description: "Utilizamos las mismas tecnologías que usan los gigantes tecnológicos (React, TypeScript, Tailwind CSS) en lugar de plataformas lentas.",
      icon: Cpu
    },
    {
      title: "Atención Directa & Garantía",
      description: "Soporte directo en Santa Rita por Jonathan Coronel. Comunicación fluida por WhatsApp y garantía total de funcionamiento.",
      icon: Headphones
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0F0F14]">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#00C8FF]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00C8FF]/30 text-xs font-semibold text-[#00C8FF] uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Diferenciación Garantizada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            ¿Por qué elegir <span className="text-gradient-cyan">JC Web Studio</span>?
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            No solo programamos código; diseñamos la fachada digital de tu empresa para proyectar la máxima autoridad ante tus futuros clientes.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 rounded-2xl glass-panel glass-panel-hover space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00C8FF]/10 border border-[#00C8FF]/20 flex items-center justify-center text-[#00C8FF]">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white">{diff.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{diff.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Comparison Table */}
        <div className="space-y-6 pt-10 border-t border-white/10">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">Tabla Comparativa de Calidad</h3>
            <p className="text-xs text-slate-400">Descubre por qué JC Web Studio ofrece la mejor relación calidad-precio.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#121218]">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-[#1A1A22] text-slate-200 uppercase font-bold border-b border-white/10">
                <tr>
                  <th className="p-4 sm:p-5">Características</th>
                  <th className="p-4 sm:p-5 text-[#00C8FF] bg-[#00C8FF]/10 font-extrabold text-center">JC Web Studio</th>
                  <th className="p-4 sm:p-5 text-slate-400 text-center">Plantillas Genéricas</th>
                  <th className="p-4 sm:p-5 text-slate-400 text-center">Agencias Tradicionales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-semibold text-white">{row.feature}</td>
                    
                    {/* JC Web Studio Column */}
                    <td className="p-4 sm:p-5 text-center bg-[#00C8FF]/5">
                      {row.jcStudio === true ? (
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Sí
                        </span>
                      ) : row.jcStudio}
                    </td>

                    {/* Templates Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-400">
                      {row.templates === false ? (
                        <span className="inline-flex items-center gap-1 text-red-400">
                          <XCircle className="w-5 h-5 text-red-400" /> No
                        </span>
                      ) : row.templates}
                    </td>

                    {/* Traditional Agency Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-400">
                      {row.traditionalAgency === false ? (
                        <span className="inline-flex items-center gap-1 text-red-400">
                          <XCircle className="w-5 h-5 text-red-400" /> No
                        </span>
                      ) : row.traditionalAgency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
