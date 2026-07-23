import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  CheckCircle2, 
  Send, 
  DollarSign, 
  Sparkles, 
  Layers, 
  Building2, 
  Laptop, 
  ShieldCheck, 
  Copy, 
  Check, 
  HelpCircle,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_INFO } from '../data/data';
import { CalculatorState } from '../types';

interface CalculatorSectionProps {
  initialServiceId?: string;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ initialServiceId }) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    businessType: 'Comercio / Tienda',
    projectType: initialServiceId || 'sitio-web',
    domainHosting: true,
    advancedSEO: false,
    monthlyMaintenance: false,
    adminPanel: true,
    multiLanguage: false,
    whatsappBot: false,
    deliverySpeed: 'normal'
  });

  const [copiedQuote, setCopiedQuote] = useState(false);

  const businessOptions = [
    'Restaurante / Bar',
    'Comercio / Tienda',
    'Ferretería / Materiales',
    'Minimercado / Super',
    'Clínica / Salud',
    'Gimnasio / Fitness',
    'Taller / Servicentro',
    'Servicios / Consultora',
    'Otro Rubro'
  ];

  const projectTypes = [
    { id: 'landing-page', title: 'Landing Page', baseUSD: 50, desc: 'Ideal para promociones o lanzamientos rápidos' },
    { id: 'sitio-web', title: 'Sitio Web Corporativo', baseUSD: 180, desc: 'Para empresas con múltiples secciones' },
    { id: 'tienda-online', title: 'Tienda Online E-commerce', baseUSD: 300, desc: 'Catálogo con carrito y pedidos WhatsApp' },
    { id: 'menu-qr', title: 'Menú Digital QR', baseUSD: 75, desc: 'Para restaurantes, bares y cafeterías' },
    { id: 'sistema-web', title: 'Sistema Web a Medida', baseUSD: 650, desc: 'Gestión interna, citas o reservas' },
  ];

  const addOns = [
    {
      id: 'domainHosting',
      title: 'Dominio + Hosting Cloud Ultra Rápido',
      priceUSD: 50,
      desc: 'Certificado SSL HTTPS + Servidor Dedicado 1er año',
    },
    {
      id: 'advancedSEO',
      title: 'SEO Avanzado & Google My Business',
      priceUSD: 80,
      desc: 'Aparece en las primeras búsquedas de Google',
    },
    {
      id: 'adminPanel',
      title: 'Panel de Control Administrable',
      priceUSD: 60,
      desc: 'Edita precios, productos y textos tú mismo',
    },
    {
      id: 'multiLanguage',
      title: 'Soporte Multi-idioma (ES / PT / EN)',
      priceUSD: 70,
      desc: 'Público trilingüe para Alto Paraná y fronteras',
    },
    {
      id: 'whatsappBot',
      title: 'Integración Bot de WhatsApp Instantáneo',
      priceUSD: 90,
      desc: 'Respuestas automáticas de cotización a clientes',
    },
    {
      id: 'monthlyMaintenance',
      title: 'Mantenimiento Mensual & Copias de Seguridad',
      priceUSD: 40,
      desc: 'Actualizaciones continuas y soporte 24/7',
    },
  ];

  // Calculate Base Price
  const selectedProj = projectTypes.find(p => p.id === calcState.projectType) || projectTypes[1];
  let totalUSD = selectedProj.baseUSD;

  if (calcState.domainHosting) totalUSD += 50;
  if (calcState.advancedSEO) totalUSD += 80;
  if (calcState.adminPanel) totalUSD += 60;
  if (calcState.multiLanguage) totalUSD += 70;
  if (calcState.whatsappBot) totalUSD += 90;
  if (calcState.monthlyMaintenance) totalUSD += 40;
  if (calcState.deliverySpeed === 'express') totalUSD += 90;

  const totalPYG = totalUSD * AGENCY_INFO.currencyUSDToPYG;

  const formatPYG = (amount: number) => {
    return new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG', maximumFractionDigits: 0 }).format(amount);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hola Jonathan (JC Web Studio)!
Me gustaría solicitar un presupuesto con la siguiente configuración:

*Rubro de Negocio:* ${calcState.businessType}
*Tipo de Proyecto:* ${selectedProj.title}
*Modalidad Entrega:* ${calcState.deliverySpeed === 'express' ? 'Express (Urgente 3-5 días)' : 'Estándar'}

*Adicionales Incluidos:*
${calcState.domainHosting ? '• Dominio + Hosting Cloud' : ''}
${calcState.advancedSEO ? '• SEO Avanzado Google' : ''}
${calcState.adminPanel ? '• Panel de Control Administrable' : ''}
${calcState.multiLanguage ? '• Multi-idioma (ES/PT/EN)' : ''}
${calcState.whatsappBot ? '• Bot de WhatsApp' : ''}
${calcState.monthlyMaintenance ? '• Mantenimiento Mensual' : ''}

*Presupuesto Estimado:*
USD $${totalUSD} (${formatPYG(totalPYG)})

Quedo atento a tu respuesta para coordinar detalles. ¡Muchas gracias!`;

    return text;
  };

  const handleSendWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const msg = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/595986102279?text=${msg}`, '_blank');
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00C8FF]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00C8FF]/30 text-xs font-semibold text-[#00C8FF] uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparencia Total</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Calculadora de <span className="text-gradient-cyan">Presupuesto Online</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Personaliza las opciones de tu proyecto y obtén una estimación transparente en tiempo real tanto en Guaraníes (₲) como en Dólares ($).
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Selectors (8 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Business Type */}
            <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00C8FF]/10 text-[#00C8FF] font-black text-sm flex items-center justify-center">
                  1
                </div>
                <h3 className="text-base font-bold text-white">¿Cuál es el Rubro de tu Negocio?</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {businessOptions.map((b) => (
                  <button
                    key={b}
                    onClick={() => setCalcState(s => ({ ...s, businessType: b }))}
                    className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                      calcState.businessType === b
                        ? 'bg-[#00C8FF]/15 border-[#00C8FF] text-[#00C8FF] shadow-md shadow-[#00C8FF]/10'
                        : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Project Type */}
            <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00C8FF]/10 text-[#00C8FF] font-black text-sm flex items-center justify-center">
                  2
                </div>
                <h3 className="text-base font-bold text-white">¿Qué Tipo de Sitio Web Necesitas?</h3>
              </div>

              <div className="space-y-2.5">
                {projectTypes.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setCalcState(s => ({ ...s, projectType: p.id }))}
                    className={`p-4 rounded-xl cursor-pointer border transition-all flex items-center justify-between ${
                      calcState.projectType === p.id
                        ? 'bg-[#00C8FF]/15 border-[#00C8FF] shadow-lg shadow-[#00C8FF]/10'
                        : 'bg-white/[0.03] border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{p.title}</span>
                        {calcState.projectType === p.id && (
                          <CheckCircle2 className="w-4 h-4 text-[#00C8FF]" />
                        )}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{p.desc}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-black text-[#00C8FF]">USD ${p.baseUSD}</div>
                      <div className="text-[10px] text-slate-500">{formatPYG(p.baseUSD * AGENCY_INFO.currencyUSDToPYG)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Add-ons & Extras */}
            <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00C8FF]/10 text-[#00C8FF] font-black text-sm flex items-center justify-center">
                  3
                </div>
                <h3 className="text-base font-bold text-white">Complementos y Módulos Adicionales</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addOns.map((addon) => {
                  const isChecked = Boolean(calcState[addon.id as keyof CalculatorState]);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => setCalcState(s => ({ ...s, [addon.id]: !isChecked }))}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-[#00C8FF]/10 border-[#00C8FF]/80 text-white'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:bg-white/5'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{addon.title}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 leading-snug">{addon.desc}</div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-[#00C8FF] block">+${addon.priceUSD}</span>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="accent-[#00C8FF] w-4 h-4 mt-1 pointer-events-none"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Price Summary Sticky Panel (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#14141C] border border-[#00C8FF]/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#00C8FF]" />
                  <h3 className="text-base font-bold text-white">Resumen de Presupuesto</h3>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Estimación Transparente
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Rubro:</span>
                  <span className="font-bold text-white">{calcState.businessType}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Base Proyecto ({selectedProj.title}):</span>
                  <span className="font-bold text-white">${selectedProj.baseUSD} USD</span>
                </div>

                {calcState.domainHosting && (
                  <div className="flex justify-between text-slate-400">
                    <span>• Dominio + Hosting Cloud</span>
                    <span className="text-[#00C8FF]">+$50 USD</span>
                  </div>
                )}
                {calcState.advancedSEO && (
                  <div className="flex justify-between text-slate-400">
                    <span>• SEO Avanzado Google</span>
                    <span className="text-[#00C8FF]">+$80 USD</span>
                  </div>
                )}
                {calcState.adminPanel && (
                  <div className="flex justify-between text-slate-400">
                    <span>• Panel Administrable</span>
                    <span className="text-[#00C8FF]">+$60 USD</span>
                  </div>
                )}
                {calcState.multiLanguage && (
                  <div className="flex justify-between text-slate-400">
                    <span>• Multi-idioma (ES/PT/EN)</span>
                    <span className="text-[#00C8FF]">+$70 USD</span>
                  </div>
                )}
                {calcState.whatsappBot && (
                  <div className="flex justify-between text-slate-400">
                    <span>• Bot de WhatsApp</span>
                    <span className="text-[#00C8FF]">+$90 USD</span>
                  </div>
                )}
                {calcState.monthlyMaintenance && (
                  <div className="flex justify-between text-slate-400">
                    <span>• Mantenimiento Mensual</span>
                    <span className="text-[#00C8FF]">+$40 USD</span>
                  </div>
                )}
              </div>

              {/* Price Display */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#121217] to-black border border-white/10 text-center space-y-1">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest block">Inversión Total Estimada</span>
                <div className="text-3xl sm:text-4xl font-black text-[#00C8FF]">
                  USD ${totalUSD}
                </div>
                <div className="text-sm font-bold text-slate-200">
                  {formatPYG(totalPYG)}
                </div>
                <span className="text-[10px] text-slate-500 block pt-1">
                  * 50% de seña para iniciar y 50% al finalizar contra entrega probada.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 px-6 rounded-xl bg-[#00C8FF] hover:bg-sky-300 text-black font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-[#00C8FF]/25 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Presupuesto por WhatsApp</span>
                </button>

                <button
                  onClick={handleCopyQuote}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10 flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedQuote ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedQuote ? '¡Copiado al Portapapeles!' : 'Copiar Desglose en Texto'}</span>
                </button>
              </div>

              {/* Security info */}
              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atención personalizada por Jonathan Coronel en Santa Rita, PY.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
