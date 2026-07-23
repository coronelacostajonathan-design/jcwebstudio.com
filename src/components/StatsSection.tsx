import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Star, Zap, Headphones, ShieldCheck } from 'lucide-react';
import { STATS_DATA } from '../data/data';

export const StatsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle': return <CheckCircle className="w-6 h-6 text-[#00C8FF]" />;
      case 'Star': return <Star className="w-6 h-6 text-amber-400 fill-amber-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#00C8FF]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#00C8FF]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#00C8FF]" />;
    }
  };

  return (
    <section className="py-20 relative bg-[#0F0F14] border-y border-white/10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00C8FF]/30 transition-all text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00C8FF]/10 flex items-center justify-center mx-auto">
                {getIcon(stat.icon)}
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {stat.value}{stat.suffix}
              </div>

              <div className="space-y-1">
                <div className="text-sm font-bold text-slate-200">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
