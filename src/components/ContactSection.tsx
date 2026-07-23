import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  QrCode, 
  Send, 
  CheckCircle2, 
  User, 
  Building, 
  MessageSquare,
  Sparkles,
  Clock,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_INFO } from '../data/data';

interface ContactSectionProps {
  onOpenQr: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQr }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Sitio Web Corporativo',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    setSubmitted(true);

    // Also offer direct WhatsApp trigger
    const waText = `Hola Jonathan (JC Web Studio)!
Mi nombre es ${formData.name} (${formData.company || 'Particular'}).

*Teléfono:* ${formData.phone}
*Email:* ${formData.email || 'No especificado'}
*Servicio de Interés:* ${formData.service}

*Mensaje:*
${formData.message || 'Quisiera solicitar información y presupuesto.'}`;

    setTimeout(() => {
      window.open(`https://wa.me/595986102279?text=${encodeURIComponent(waText)}`, '_blank');
    }, 1200);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-[#0F0F14]">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00C8FF]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00C8FF]/30 text-xs font-semibold text-[#00C8FF] uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hablemos de Tu Proyecto</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contáctanos Hoy Mismo.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Estamos en Santa Rita, Alto Paraná, Paraguay. Respondemos mensajes en menos de 15 minutos durante horario laboral.
          </p>
        </div>

        {/* Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Info Cards & Founder Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Founder Profile Card */}
            <div className="p-6 rounded-2xl bg-[#14141C] border border-white/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00C8FF] to-blue-600 p-0.5 shadow-xl shadow-[#00C8FF]/20">
                  <div className="w-full h-full rounded-2xl bg-[#14141C] flex items-center justify-center font-black text-2xl text-[#00C8FF]">
                    JC
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{AGENCY_INFO.founder}</h3>
                  <div className="text-xs text-[#00C8FF] font-medium">{AGENCY_INFO.role}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{AGENCY_INFO.name}</div>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                "Mi misión es ayudar a las empresas locales e internacionales a destacarse en Internet con tecnología de punta, velocidad extrema y diseño que convierta visitas en ventas."
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3">
              
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#14141C] hover:bg-white/5 border border-white/10 hover:border-[#00C8FF]/50 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp Directo</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#00C8FF] transition-colors">
                      {AGENCY_INFO.phoneFormatted}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="p-4 rounded-2xl bg-[#14141C] hover:bg-white/5 border border-white/10 hover:border-[#00C8FF]/50 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00C8FF]/10 text-[#00C8FF] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Correo Electrónico</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#00C8FF] transition-colors truncate max-w-[220px] sm:max-w-none">
                      {AGENCY_INFO.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="p-4 rounded-2xl bg-[#14141C] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Ubicación de la Agencia</div>
                    <div className="text-sm font-bold text-white">
                      Santa Rita, Alto Paraná, Paraguay 🇵🇾
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Action Box */}
              <div 
                onClick={onOpenQr}
                className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-[#00C8FF]/30 hover:border-[#00C8FF] cursor-pointer flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00C8FF] text-black flex items-center justify-center">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Escanear Código QR de WhatsApp</div>
                    <div className="text-[11px] text-[#00C8FF]">Abrir chat instantáneo en tu teléfono</div>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-[#00C8FF]/20 text-[#00C8FF] rounded-lg">Ver QR</span>
              </div>

            </div>

            {/* Interactive Location Map Preview */}
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#14141C]">
              <div className="p-3 bg-[#1A1A22] text-xs font-bold text-white flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00C8FF]" /> Mapa: Santa Rita, Alto Paraná
                </span>
                <a
                  href={AGENCY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#00C8FF] hover:underline"
                >
                  Abrir Google Maps
                </a>
              </div>
              <div className="h-44 bg-[#0B0B0E] relative flex items-center justify-center p-4">
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#00C8FF]/20 text-[#00C8FF] flex items-center justify-center mx-auto animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white">JC Web Studio - Coordenadas</div>
                  <div className="text-[11px] text-slate-400">Santa Rita, Depto. de Alto Paraná, Paraguay</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#14141C] border border-white/10 shadow-2xl space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Enviar Mensaje Directo</h3>
              <p className="text-xs text-slate-400">Completa tus datos y nos pondremos en contacto a la brevedad.</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Gracias por comunicarte con JC Web Studio. Se ha abierto la ventana de WhatsApp con tu consulta. Jonathan Coronel te atenderá inmediatamente.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/20"
                >
                  Enviar otra consulta
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Nombre Completo *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C8FF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Teléfono / WhatsApp *</label>
                    <div className="relative">
                      <PhoneCall className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="Ej. +595 981 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C8FF]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C8FF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Nombre de la Empresa</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        placeholder="Ej. Comercial Santa Rita"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C8FF]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Servicio de Interés</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00C8FF]"
                  >
                    <option>Landing Page de Alta Conversión</option>
                    <option>Sitio Web Corporativo</option>
                    <option>Tienda Online (E-Commerce)</option>
                    <option>Menú Digital QR Gastronómico</option>
                    <option>Sistema Web a Medida</option>
                    <option>SEO & Posicionamiento en Google</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Detalles de tu Consulta</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos brevemente sobre tu proyecto, objetivos o requerimientos especiales..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C8FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#00C8FF] hover:bg-sky-300 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#00C8FF]/20 hover:scale-[1.01] active:scale-98 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta e Iniciar Chat WhatsApp</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
