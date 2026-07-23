import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Menu, 
  X, 
  Calculator, 
  MapPin, 
  PhoneCall, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { AGENCY_INFO } from '../data/data';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenQr: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator, onOpenQr }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Calculadora', href: '#calculadora' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0B]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#00C8FF] to-blue-700 text-black font-black text-xl shadow-lg shadow-[#00C8FF]/20 group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-6 h-6 text-black stroke-[2.5]" />
              <div className="absolute -inset-0.5 rounded-xl bg-[#00C8FF] opacity-0 group-hover:opacity-40 blur transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                JC <span className="text-[#00C8FF]">WEB STUDIO</span>
              </span>
              <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-[#00C8FF]" /> Santa Rita, PY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-[#00C8FF] hover:bg-white/5 rounded-full transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-[#00C8FF]/40 transition-all duration-200"
            >
              <Calculator className="w-4 h-4 text-[#00C8FF]" />
              <span>Calculadora</span>
            </button>

            <a
              href={`https://wa.me/595986102279?text=${encodeURIComponent('Hola Jonathan! Quisiera consultar por un presupuesto para mi sitio web.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-black bg-[#00C8FF] rounded-xl hover:bg-sky-300 transition-all duration-200 shadow-md shadow-[#00C8FF]/20 hover:scale-[1.02] active:scale-95 gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Cotizar WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 text-slate-200 border border-white/10 hover:text-[#00C8FF] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F0F14]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 pb-2 border-b border-white/5">
                <Sparkles className="w-3.5 h-3.5 text-[#00C8FF]" />
                <span>JC Web Studio - Jonathan Coronel</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-[#00C8FF] hover:bg-white/5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCalculator();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-slate-200 font-semibold text-xs border border-white/10 hover:border-[#00C8FF]/50"
                >
                  <Calculator className="w-4 h-4 text-[#00C8FF]" />
                  <span>Calculadora de Presupuesto</span>
                </button>

                <a
                  href={`https://wa.me/595986102279?text=${encodeURIComponent('Hola Jonathan! Quisiera consultar por un presupuesto.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#00C8FF] text-black font-bold text-xs shadow-lg shadow-[#00C8FF]/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contactar por WhatsApp (+595 986 102 279)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
