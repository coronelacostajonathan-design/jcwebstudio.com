import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Globe, 
  MapPin, 
  Star,
  QrCode,
  ShoppingBag,
  Monitor
} from 'lucide-react';
import { AGENCY_INFO } from '../data/data';

interface HeroProps {
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  const serviceBadges = [
    { name: 'Landing Pages', icon: Zap },
    { name: 'Sitios Web', icon: Globe },
    { name: 'Tiendas Online', icon: ShoppingBag },
    { name: 'Menús Digitales QR', icon: QrCode },
    { name: 'Sistemas Web', icon: Monitor },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Radial Glow Gradient Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-[#00C8FF]/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Hero Copy */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-[#00C8FF]/30 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#00C8FF] animate-ping" />
              <span className="text-xs font-semibold tracking-wide text-slate-200">
                Agencia Digital en <span className="text-[#00C8FF]">Santa Rita, Paraguay</span>
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 5.0 Reseñas
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Creamos páginas web que <span className="text-gradient-cyan">hacen crecer</span> tu negocio.
            </motion.h1>

            {/* Subtitle / Services badges */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Diseño web de nivel internacional, tiendas online, menús digitales con código QR y sistemas web a medida optimizados para convertir visitantes en clientes.
              </p>

              {/* Badges bar */}
              <div className="flex flex-wrap gap-2 pt-2">
                {serviceBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 hover:border-[#00C8FF]/40 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#00C8FF]" />
                      <span>{badge.name}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenCalculator}
                className="group relative inline-flex items-center justify-center px-7 py-4 text-sm font-bold text-black bg-[#00C8FF] rounded-xl overflow-hidden shadow-xl shadow-[#00C8FF]/25 hover:bg-sky-300 hover:shadow-[#00C8FF]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 gap-2.5"
              >
                <Calculator className="w-4 h-4 text-black" />
                <span>Solicitar Presupuesto Online</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portafolio"
                className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-slate-500 transition-all duration-200 gap-2"
              >
                <span>Ver Portafolio</span>
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-sm font-bold text-white">
                  <Zap className="w-4 h-4 text-[#00C8FF]" /> &lt; 1 Seg
                </div>
                <div className="text-xs text-slate-400">Tiempo de carga</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-sm font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#00C8FF]" /> 100%
                </div>
                <div className="text-xs text-slate-400">Garantía de calidad</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-sm font-bold text-white">
                  <MapPin className="w-4 h-4 text-[#00C8FF]" /> Santa Rita
                </div>
                <div className="text-xs text-slate-400">Alto Paraná, PY</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Frame & Floating Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00C8FF]/40 to-blue-600/30 blur-xl opacity-70 animate-pulse-glow" />

              {/* Browser Window Mockup */}
              <div className="relative rounded-2xl bg-[#121217] border border-white/15 overflow-hidden shadow-2xl">
                
                {/* Browser Header Bar */}
                <div className="px-4 py-3 bg-[#1A1A22] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    https://jcwebstudio.com
                  </div>
                  <Sparkles className="w-4 h-4 text-[#00C8FF]" />
                </div>

                {/* Simulated Web Preview Content */}
                <div className="p-6 space-y-5 bg-gradient-to-b from-[#121217] to-[#0B0B0B]">
                  
                  {/* Performance Score pill */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500 text-black font-black flex items-center justify-center text-xs">
                        100
                      </div>
                      <div>
                        <div className="font-bold text-white">Google Lighthouse Score</div>
                        <div className="text-[10px] text-emerald-400/80">Rendimiento, SEO & Accesibilidad</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>

                  {/* Interactive Mini Service Selector Card */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Proyectos Listos para Tu Negocio:
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#00C8FF]/50 flex items-center justify-between group transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#00C8FF]/10 text-[#00C8FF] flex items-center justify-center font-bold">
                            <QrCode className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-[#00C8FF]">Menú QR Gastronómico</div>
                            <div className="text-[11px] text-slate-400">Para Restaurantes & Bares</div>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                          Ver Demo
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#00C8FF]/50 flex items-center justify-between group transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                            <ShoppingBag className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-[#00C8FF]">Tienda Online / Catálogo</div>
                            <div className="text-[11px] text-slate-400">Con Pedidos a WhatsApp</div>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-[#00C8FF] bg-[#00C8FF]/10 px-2.5 py-1 rounded-md">
                          Popular
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Card */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-black font-bold text-xs flex items-center justify-center">
                        JC
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{AGENCY_INFO.founder}</div>
                        <div className="text-[10px] text-slate-400">{AGENCY_INFO.name} - Director</div>
                      </div>
                    </div>

                    <a
                      href={AGENCY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#00C8FF] hover:underline flex items-center gap-1"
                    >
                      <span>Hablar Ahora</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                </div>

              </div>

              {/* Floating Badge overlay */}
              <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-[#16161E]/90 border border-white/15 backdrop-blur-xl shadow-2xl hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Soporte Local Garantizado</div>
                  <div className="text-[11px] text-slate-400">Atención directa en Santa Rita</div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
