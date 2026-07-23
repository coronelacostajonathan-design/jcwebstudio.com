import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, QrCode, Smartphone, PhoneCall, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/data';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Generate WhatsApp QR SVG using quick API image preview
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent('https://wa.me/595986102279')}&color=00C8FF&bgcolor=0B0B0B`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-sm bg-[#14141C] border border-white/15 rounded-3xl p-6 shadow-2xl z-10 text-center space-y-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#00C8FF]/10 text-[#00C8FF] flex items-center justify-center mx-auto">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Escanea con tu Celular</h3>
            <p className="text-xs text-slate-400">Abre la cámara de tu teléfono para iniciar un chat directo en WhatsApp con Jonathan Coronel.</p>
          </div>

          {/* QR Container */}
          <div className="p-4 rounded-2xl bg-[#0B0B0E] border border-white/10 inline-block shadow-inner">
            <img
              src={qrImageUrl}
              alt="WhatsApp QR Code JC Web Studio"
              className="w-48 h-48 mx-auto rounded-lg"
            />
          </div>

          <div className="text-xs text-slate-300 font-semibold space-y-1">
            <div className="text-[#00C8FF] font-bold">{AGENCY_INFO.phoneFormatted}</div>
            <div className="text-slate-500 font-normal">Santa Rita, Alto Paraná, Paraguay</div>
          </div>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#00C8FF] text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-sky-300 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>O Abrir WhatsApp Directo</span>
          </a>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
