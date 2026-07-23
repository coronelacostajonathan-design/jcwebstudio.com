import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  ShoppingBag, 
  QrCode, 
  Calendar, 
  Dumbbell, 
  Wrench, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Send, 
  Search, 
  Filter, 
  MapPin, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { PortfolioItem } from '../types';
import { AGENCY_INFO } from '../data/data';

interface PortfolioDemoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const PortfolioDemoModal: React.FC<PortfolioDemoModalProps> = ({ item, onClose }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('mobile');
  
  // Restaurant Demo State
  const [activeMenuCategory, setActiveMenuCategory] = useState<'todos' | 'platos' | 'bebidas' | 'postres'>('todos');
  const [restaurantCart, setRestaurantCart] = useState<{ id: string; name: string; price: number; qty: number }[]>([]);

  // Electronics Demo State
  const [elecSearch, setElecSearch] = useState('');
  const [elecCartCount, setElecCartCount] = useState(0);

  // Hardware Demo State
  const [hwCodeSearch, setHwCodeSearch] = useState('');
  const [hwQuoteList, setHwQuoteList] = useState<string[]>([]);

  // Clinic Demo State
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Coronel (Odontología)');
  const [appointmentDate, setAppointmentDate] = useState('2026-07-25');
  const [bookedSuccess, setBookedSuccess] = useState(false);

  // Gym Demo State
  const [selectedGymPlan, setSelectedGymPlan] = useState('Mensual VIP (₲ 250.000/mes)');

  // Mechanic Demo State
  const [vehiclePlate, setVehiclePlate] = useState('ABC 123');
  const [serviceStatus, setServiceStatus] = useState<string | null>(null);

  if (!item) return null;

  // Restaurant Menu items
  const menuItems = [
    { id: 'm1', name: 'Bife de Chorizo Premium 400g', category: 'platos', price: 95000, desc: 'Corte magro a las brasas con papas rústicas y chimichurri especial.' },
    { id: 'm2', name: 'Parrillada Gourmet Completa (2 Personas)', category: 'platos', price: 160000, desc: 'Tapa de asado, vacío, chorizos artesanales y ensalada mixta.' },
    { id: 'm3', name: 'Caipirinha Tradicional de Limón', category: 'bebidas', price: 25000, desc: 'Cachaça brasileña premium, azúcar refinada y lima fresca.' },
    { id: 'm4', name: 'Jarra de Sangría de Frutos Rojos', category: 'bebidas', price: 45000, desc: 'Vino tinto, frutas de la estación y licor de naranja.' },
    { id: 'm5', name: 'Petit Gâteau con Helado de Crema', category: 'postres', price: 30000, desc: 'Bizcocho tibio de chocolate amargo con centro fundido.' },
  ];

  const filteredMenuItems = activeMenuCategory === 'todos' 
    ? menuItems 
    : menuItems.filter(m => m.category === activeMenuCategory);

  const addToRestaurantCart = (menuItem: typeof menuItems[0]) => {
    setRestaurantCart(prev => {
      const existing = prev.find(i => i.id === menuItem.id);
      if (existing) {
        return prev.map(i => i.id === menuItem.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: menuItem.id, name: menuItem.name, price: menuItem.price, qty: 1 }];
    });
  };

  const totalRestaurantPrice = restaurantCart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const formatPYG = (amount: number) => {
    return new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl my-auto bg-[#121218] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          
          {/* Top Bar Navigation */}
          <div className="px-5 py-4 bg-[#1A1A22] border-b border-white/10 flex items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: `${item.accentColor}25`, color: item.accentColor }}
              >
                <Sparkles className="w-5 h-5" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/10 text-slate-300">
                    {item.industry}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">Demostración Interactiva de JC Web Studio</div>
              </div>
            </div>

            {/* Device Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setDeviceView('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  deviceView === 'mobile' ? 'bg-[#00C8FF] text-black shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Móvil (375px)</span>
              </button>

              <button
                onClick={() => setDeviceView('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  deviceView === 'desktop' ? 'bg-[#00C8FF] text-black shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Escritorio</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Demo Body Frame */}
          <div className="p-4 sm:p-6 bg-[#0B0B0E] overflow-y-auto flex-1 flex justify-center items-start">
            
            <div 
              className={`transition-all duration-300 w-full rounded-2xl border border-white/15 bg-[#14141C] shadow-2xl overflow-hidden ${
                deviceView === 'mobile' ? 'max-w-md my-2 border-slate-700' : 'max-w-4xl'
              }`}
            >
              
              {/* Simulated Browser Address Bar */}
              <div className="px-4 py-2 bg-[#1A1A24] border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] text-slate-300">
                    https://demo.{item.demoType}.jcwebstudio.com
                  </span>
                </div>
                <span className="text-[10px] text-[#00C8FF] font-semibold bg-[#00C8FF]/10 px-2 py-0.5 rounded">
                  LIVE INTERACTIVE
                </span>
              </div>

              {/* DEMO CONTENT BY INDUSTRY TYPE */}
              <div className="p-4 sm:p-6 space-y-6">

                {/* 1. RESTAURANTE MENU QR DEMO */}
                {item.demoType === 'restaurant' && (
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-2 border-b border-white/10 pb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold">
                        <QrCode className="w-3.5 h-3.5" /> Menú Digital QR - Mesa #04
                      </div>
                      <h4 className="text-2xl font-black text-white">Bistro Gourmet Santa Rita</h4>
                      <p className="text-xs text-slate-400">Escanea, selecciona tus platillos y realiza tu pedido al instante.</p>
                    </div>

                    {/* Category tabs */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                      {(['todos', 'platos', 'bebidas', 'postres'] as const).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveMenuCategory(cat)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all shrink-0 ${
                            activeMenuCategory === cat 
                              ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                              : 'bg-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Menu Items List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {filteredMenuItems.map((menu) => (
                        <div key={menu.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 flex flex-col justify-between space-y-3">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h5 className="text-sm font-bold text-white">{menu.name}</h5>
                              <span className="text-xs font-black text-amber-400 shrink-0">
                                {formatPYG(menu.price)}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{menu.desc}</p>
                          </div>

                          <button
                            onClick={() => addToRestaurantCart(menu)}
                            className="w-full py-1.5 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" /> Agregar al Pedido
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Restaurant Order Cart Drawer */}
                    {restaurantCart.length > 0 && (
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                          <span>Tu Pedido Actual:</span>
                          <span>Total: {formatPYG(totalRestaurantPrice)}</span>
                        </div>

                        <div className="space-y-1.5 text-xs text-slate-300">
                          {restaurantCart.map((c) => (
                            <div key={c.id} className="flex justify-between items-center bg-black/40 p-2 rounded">
                              <span>{c.qty}x {c.name}</span>
                              <span className="font-bold">{formatPYG(c.price * c.qty)}</span>
                            </div>
                          ))}
                        </div>

                        <a
                          href={`https://wa.me/595986102279?text=${encodeURIComponent(`Hola! Quisiera realizar un pedido para la Mesa #04: ${restaurantCart.map(c => `${c.qty}x ${c.name}`).join(', ')} - Total: ${formatPYG(totalRestaurantPrice)}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                        >
                          <Send className="w-3.5 h-3.5" /> Enviar Pedido a Cocina / WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. ELECTRONICS STORE DEMO */}
                {item.demoType === 'electronics' && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">TecnoPlus - Gadgets & Tech</h4>
                        <p className="text-xs text-slate-400">Santa Rita, Paraguay - Envíos a todo el país</p>
                      </div>
                      <div className="relative">
                        <ShoppingBag className="w-6 h-6 text-[#00C8FF]" />
                        {elecCartCount > 0 && (
                          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#00C8FF] text-black text-[10px] font-black flex items-center justify-center">
                            {elecCartCount}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="Buscar producto, iPhone, laptop, audífonos..."
                          value={elecSearch}
                          onChange={(e) => setElecSearch(e.target.value)}
                          className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C8FF]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: 'iPhone 15 Pro Max 256GB Natural Titanium', price: 9200000, tag: 'Garantía Oficial' },
                        { title: 'MacBook Air M3 13.6" 8GB/256GB Midnight', price: 8500000, tag: 'Stock Inmediato' },
                        { title: 'AirPods Pro 2da Gen USB-C', price: 1650000, tag: 'Cancelación Ruido' },
                        { title: 'Smartwatch Samsung Galaxy Watch 6', price: 1450000, tag: 'Resistente Agua' },
                      ].map((p, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                          <div className="flex justify-between items-start">
                            <h5 className="text-xs font-bold text-white">{p.title}</h5>
                            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#00C8FF]/10 text-[#00C8FF]">{p.tag}</span>
                          </div>
                          <div className="text-sm font-black text-[#00C8FF]">{formatPYG(p.price)}</div>
                          <button
                            onClick={() => setElecCartCount(c => c + 1)}
                            className="w-full py-2 rounded-lg bg-[#00C8FF] text-black text-xs font-bold hover:bg-sky-300 transition-colors"
                          >
                            Añadir al Carrito
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. HARDWARE DEMO */}
                {item.demoType === 'hardware' && (
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-3">
                      <h4 className="text-lg font-bold text-white">Ferretería Industrial Santa Rita</h4>
                      <p className="text-xs text-slate-400">Catálogo B2B para Contratistas y Obras</p>
                    </div>

                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-center justify-between">
                      <span>Búsqueda por Código de Repuesto / Herramienta</span>
                      <Wrench className="w-4 h-4 text-red-400" />
                    </div>

                    <div className="space-y-2">
                      {[
                        { code: 'HERR-001', name: 'Amoladora Angular Bosch 700W 4 1/2"', stock: '15 unidades' },
                        { code: 'HERR-042', name: 'Taladro Percutor DeWalt 20V Max Brushless', stock: '8 unidades' },
                        { code: 'OBRA-109', name: 'Disco Diamantado Continuo 115mm', stock: '50 unidades' },
                      ].map((h, i) => (
                        <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                          <div>
                            <span className="font-mono text-red-400 font-bold mr-2">[{h.code}]</span>
                            <span className="text-white font-medium">{h.name}</span>
                          </div>
                          <button
                            onClick={() => setHwQuoteList(prev => [...prev, h.name])}
                            className="px-3 py-1 rounded bg-red-500 text-white font-bold text-[11px]"
                          >
                            Solicitar Cotización
                          </button>
                        </div>
                      ))}
                    </div>

                    {hwQuoteList.length > 0 && (
                      <div className="p-3 rounded-lg bg-white/5 text-xs text-slate-300">
                        Items seleccionados para presupuesto: {hwQuoteList.length}
                      </div>
                    )}
                  </div>
                )}

                {/* 4. SUPERMARKET DEMO */}
                {item.demoType === 'supermarket' && (
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-3 flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-bold text-white">Supermercado Express Santa Rita</h4>
                        <p className="text-xs text-slate-400">Ofertas del Día & Delivery Local</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                        Delivery &lt; 30 min
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'Pack Cerveza Heineken 6 x 330ml', price: 42000, off: '-20%' },
                        { name: 'Carne Picaña Vacuna Premium kg', price: 68000, off: 'Oferta' },
                        { name: 'Carbón Vegetal Vegetal 5kg', price: 20000, off: 'Top Venta' },
                        { name: 'Pack Gaseosa Coca Cola 2.5L x2', price: 28000, off: 'Combo' },
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">{item.off}</span>
                          <div className="text-xs font-bold text-white">{item.name}</div>
                          <div className="text-sm font-black text-emerald-400">{formatPYG(item.price)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. CLINIC DEMO */}
                {item.demoType === 'clinic' && (
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-3">
                      <h4 className="text-lg font-bold text-white">Centro Médico & Odontológico Santa Rita</h4>
                      <p className="text-xs text-slate-400">Reserva de Turnos Online las 24 Horas</p>
                    </div>

                    {bookedSuccess ? (
                      <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                        <h5 className="text-base font-bold text-white">¡Turno Agendado con Éxito!</h5>
                        <p className="text-xs text-slate-300">Te enviaremos la confirmación y recordatorio a tu WhatsApp.</p>
                      </div>
                    ) : (
                      <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 text-xs">
                        <div className="space-y-1">
                          <label className="text-slate-400 font-medium">Seleccionar Especialista:</label>
                          <select 
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            className="w-full p-2 rounded-lg bg-black/60 border border-white/10 text-white"
                          >
                            <option>Dr. Coronel (Odontología Estética)</option>
                            <option>Dra. Benítez (Pediatría)</option>
                            <option>Dr. Silva (Cardiología)</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-slate-400 font-medium">Fecha Preferida:</label>
                          <input 
                            type="date" 
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            className="w-full p-2 rounded-lg bg-black/60 border border-white/10 text-white"
                          />
                        </div>

                        <button
                          onClick={() => setBookedSuccess(true)}
                          className="w-full py-2.5 rounded-lg bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/20"
                        >
                          Confirmar Reserva de Cita
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* 6. GYM DEMO */}
                {item.demoType === 'gym' && (
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-3">
                      <h4 className="text-lg font-bold text-white">IronGym Fitness Center</h4>
                      <p className="text-xs text-slate-400">Calculadora de Membresía & Clase Gratis</p>
                    </div>

                    <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/30 space-y-3 text-xs">
                      <div className="font-bold text-pink-400">Elige tu Plan de Entrenamiento:</div>
                      <select 
                        value={selectedGymPlan}
                        onChange={(e) => setSelectedGymPlan(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-black/60 border border-white/10 text-white font-semibold"
                      >
                        <option>Pase Diario (₲ 30.000)</option>
                        <option>Mensual Estándar (₲ 180.000/mes)</option>
                        <option>Mensual VIP - Musculación + Funcional (₲ 250.000/mes)</option>
                        <option>Plan Trimestral Promocional (₲ 600.000)</option>
                      </select>

                      <div className="p-3 rounded bg-black/40 text-slate-300">
                        Acceso de Lunes a Sábados 05:00 a 22:00hs. Entrenador personal de salón incluido.
                      </div>

                      <a
                        href={`https://wa.me/595986102279?text=${encodeURIComponent(`Hola! Quisiera solicitar mi Pase de Prueba Gratis en IronGym para el plan: ${selectedGymPlan}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-lg bg-pink-500 text-white font-bold flex items-center justify-center gap-2"
                      >
                        <Dumbbell className="w-4 h-4" /> Solicitar Pase de Prueba Gratis
                      </a>
                    </div>
                  </div>
                )}

                {/* 7. MECHANIC DEMO */}
                {item.demoType === 'mechanic' && (
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-3">
                      <h4 className="text-lg font-bold text-white">Taller Mecánico & Servicentro Coronel</h4>
                      <p className="text-xs text-slate-400">Seguimiento de Reparación por Chapa de Vehículo</p>
                    </div>

                    <div className="flex gap-2">
                      <input 
                        type="text"
                        value={vehiclePlate}
                        onChange={(e) => setVehiclePlate(e.target.value.toUpperCase())}
                        placeholder="Ej: ABC 123"
                        className="flex-1 p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-mono uppercase"
                      />
                      <button
                        onClick={() => setServiceStatus(`Vehículo ${vehiclePlate}: Cambio de aceite & escaneo de motor finalizado. Listo para retirar.`)}
                        className="px-4 py-2.5 rounded-lg bg-purple-600 text-white font-bold text-xs"
                      >
                        Consultar
                      </button>
                    </div>

                    {serviceStatus && (
                      <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-200 space-y-2">
                        <div className="font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-400" />
                          <span>Estado del Servicio:</span>
                        </div>
                        <div>{serviceStatus}</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Call to action footer banner */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="text-slate-400 text-center sm:text-left">
                    ¿Quieres una solución idéntica o personalizada para tu empresa?
                  </div>

                  <a
                    href={`https://wa.me/595986102279?text=${encodeURIComponent(`Hola Jonathan! Me encantó el proyecto de demostración "${item.title}". Quisiera una propuesta para mi negocio.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#00C8FF] text-black font-bold text-xs flex items-center gap-2 hover:bg-sky-300 transition-colors shrink-0"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Quiero esta Web para mi Empresa</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
