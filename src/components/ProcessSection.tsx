import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Palette, 
  Code, 
  CheckCircle2, 
  Rocket, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/data';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#00C8FF]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#00C8FF]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#00C8FF]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#00C8FF]" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-[#00C8FF]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#00C8FF]" />;
      default: return <Sparkles className="w-5 h-5 text-[#00C8FF]" />;
    }
  };

  return (
    <section id="proceso" className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00C8FF]/30 text-xs font-semibold text-[#00C8FF] uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Metodología Ágil y Estructurada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Nuestro <span className="text-gradient-cyan">Proceso de Trabajo</span> en 6 Pasos.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Garantizamos entregas puntuales y transparentes sin sorpresas de última hora. Sabrás exactamente en qué etapa se encuentra tu proyecto.
          </p>
        </div>

        {/* Process Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-panel glass-panel-hover relative flex flex-col justify-between space-y-6"
            >
              <div>
                
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-slate-800 group-hover:text-[#00C8FF]/30 transition-colors">
                    {step.number}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-[#00C8FF]/10 border border-[#00C8FF]/20 flex items-center justify-center">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                {/* Titles */}
                <div className="space-y-1 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C8FF]">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Entregables de la Etapa:
                  </span>
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8FF]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Duration Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Tiempo Estimado:</span>
                <span className="font-bold text-white bg-white/5 px-2.5 py-1 rounded-md">
                  {step.duration}
                </span>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
