import React from 'react';
import { 
  Code2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  ArrowUp, 
  Instagram, 
  Github, 
  Heart,
  Sparkles
} from 'lucide-react';
import { AGENCY_INFO } from '../data/data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080A] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C8FF] to-blue-700 text-black font-black text-xl flex items-center justify-center shadow-lg shadow-[#00C8FF]/20">
                <Code2 className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <span className="text-xl font-black text-white">
                JC <span className="text-[#00C8FF]">WEB STUDIO</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Agencia de desarrollo web y estrategias digitales en Santa Rita, Alto Paraná, Paraguay. Especialistas en sitios web corporativos, e-commerce, menús QR y sistemas a medida.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#00C8FF] text-slate-300 hover:text-black border border-white/10 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              <a
                href={AGENCY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pink-500 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={AGENCY_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-slate-200 text-slate-300 hover:text-black border border-white/10 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Navegación</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#servicios" className="hover:text-[#00C8FF] transition-colors">Servicios Web</a></li>
              <li><a href="#portafolio" className="hover:text-[#00C8FF] transition-colors">Portafolio Interactivo</a></li>
              <li><a href="#calculadora" className="hover:text-[#00C8FF] transition-colors">Calculadora de Presupuesto</a></li>
              <li><a href="#proceso" className="hover:text-[#00C8FF] transition-colors">Proceso de Trabajo</a></li>
              <li><a href="#faq" className="hover:text-[#00C8FF] transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Soluciones</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Landing Pages de Conversión</li>
              <li>Páginas Web Corporativas</li>
              <li>Tiendas Online / E-Commerce</li>
              <li>Menús Digitales QR</li>
              <li>Sistemas Web a Medida</li>
              <li>SEO & Posicionamiento Google</li>
            </ul>
          </div>

          {/* Location & Direct Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Ubicación & Contacto</div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                <span>Santa Rita, Alto Paraná, Paraguay</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#00C8FF] shrink-0" />
                <span>{AGENCY_INFO.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00C8FF] shrink-0" />
                <span className="truncate">{AGENCY_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-bold">JC Web Studio</span>. Propiedad de <span className="text-slate-300">{AGENCY_INFO.founder}</span>. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Desarrollado con <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> en Paraguay
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-[#00C8FF] text-slate-400 hover:text-black border border-white/10 transition-colors flex items-center gap-1 text-[11px] font-bold"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Arriba</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
