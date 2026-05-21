import { useState } from 'react';
import { ChevronLeft, Calendar } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [instrument, setInstrument] = useState('');
  const [teacher, setTeacher] = useState('');
  const [plan, setPlan] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date(2026, 5, 1)); // start at June 2026

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay(); // 0-6 (Sun-Sat)
  const isWeekday = (date: Date) => date.getDay() !== 0 && date.getDay() !== 6;

  const nextMonth = () => {
    if (currentMonthDate.getMonth() < 7) { // Max August
      setCurrentMonthDate(new Date(2026, currentMonthDate.getMonth() + 1, 1));
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const prevMonth = () => {
    if (currentMonthDate.getMonth() > 5) { // Min June
      setCurrentMonthDate(new Date(2026, currentMonthDate.getMonth() - 1, 1));
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const isSlotBooked = (date: Date | null, time: string) => {
    if (!date) return false;
    const hour = parseInt(time.split(':')[0], 10);
    // Classes from 17 to 20hs are booked (slots 17:00, 18:00, 19:00)
    if (hour >= 17 && hour <= 19) return true;
    
    // random logic based on date to have some morning/afternoon slots booked
    const day = date.getDate();
    if (day % 3 === 0 && hour === 14) return true;
    if (day % 5 === 0 && hour === 12) return true;
    if (day % 7 === 0 && hour === 15) return true;

    return false;
  };

  return (
    <div className="flex-1 bg-canvas-white flex flex-col min-h-screen">
      {/* Minimal Header */}
      <header className="border-b border-ash-gray bg-white h-20 px-6 shrink-0">
        <div className="max-w-[1000px] mx-auto h-full flex items-center justify-between">
          <a href="#/" className="inline-flex items-center gap-2 text-graphite hover:text-composer-blue hover:-translate-x-1 transition-all font-medium">
            <ChevronLeft className="w-5 h-5" />
            Volver al inicio
          </a>
          <div className="font-display font-bold flex items-center gap-2">
            <div className="w-6 h-6 bg-sunset-orange rounded-small"></div>
            Reservas Tu Escuela
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1000px] w-full mx-auto py-12 px-6 flex flex-col items-center">
        
        {/* Progress UI */}
        <div className="w-full max-w-4xl mb-16 flex items-center justify-between relative">
          <div className="absolute top-1/2 left-5 right-5 h-[2px] bg-ash-gray -z-10 -translate-y-1/2"></div>
          <div className={`absolute top-1/2 left-5 h-[2px] bg-composer-blue -z-10 -translate-y-1/2 transition-all duration-500`} style={{ width: `calc(${((step - 1) / 4) * 100}% - 40px)` }}></div>
          
          {[
            { num: 1, label: 'Instrumento' },
            { num: 2, label: 'Profesor' },
            { num: 3, label: 'Plan' },
            { num: 4, label: 'Horario' },
            { num: 5, label: 'Pago' }
          ].map((s) => (
            <div key={s.num} className="flex flex-col items-center gap-2 bg-canvas-white px-2">
              <div className={`w-10 h-10 rounded-full flex flex-col items-center justify-center font-display font-bold border-2 transition-colors ${
                step > s.num ? 'bg-composer-blue border-composer-blue text-white' : 
                step === s.num ? 'bg-white border-composer-blue text-composer-blue ring-4 ring-composer-blue/20' : 
                'bg-white border-ash-gray text-steel-gray'
              }`}>
                {s.num}
              </div>
              <span className={`text-xs font-semibold uppercase tracking-wider ${step >= s.num ? 'text-midnight-ink' : 'text-steel-gray'}`}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Dynamic Step Content */}
        <div className="w-full max-w-4xl flex-1 flex flex-col">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto w-full">
              <h1 className="font-display font-bold text-heading mb-8 text-center">Elige tu instrumento</h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {['Piano', 'Guitarra', 'Canto', 'Batería'].map((inst) => (
                  <button 
                    key={inst}
                    onClick={() => { setInstrument(inst); setStep(2); }}
                    className={`aspect-square rounded-card border-2 border-midnight-ink flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 shadow-subtle hover:shadow-contained ${
                      instrument === inst ? 'bg-cadet-blue text-white ring-2 ring-midnight-ink ring-offset-2' : 'bg-white text-midnight-ink hover:bg-graphite hover:text-white'
                    }`}
                  >
                    <span className="text-4xl">{inst === 'Piano' ? '🎹' : inst === 'Guitarra' ? '🎸' : inst === 'Canto' ? '🎤' : '🥁'}</span>
                    <span className="font-display font-bold text-body">{inst}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto w-full">
              <h1 className="font-display font-bold text-heading mb-8 text-center">Selecciona un profesor</h1>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Cualquier disponible', inst: 'Primer espacio disponible', bg: 'bg-bubblegum-pink', emoji: '🕰️' },
                  { name: 'Elena Rostova', inst: 'Instructor Senior', bg: 'bg-white', emoji: '🎼' },
                  { name: 'Marcus Chen', inst: 'Guitarrista principal', bg: 'bg-white', emoji: '🎸' }
                ].map((t) => (
                  <button 
                     key={t.name}
                     onClick={() => { setTeacher(t.name); setStep(3); }}
                     className={`p-6 rounded-default border-2 border-midnight-ink text-left transition-all hover:-translate-x-1 shadow-subtle hover:shadow-contained flex items-start gap-4 ${
                       teacher === t.name ? 'bg-midnight-ink text-white' : t.bg
                     }`}
                  >
                    <div className="w-12 h-12 bg-graphite/10 rounded-full flex items-center justify-center text-2xl shrink-0">
                      {t.emoji}
                    </div>
                    <div>
                      <div className="font-display font-bold text-subheading">{t.name}</div>
                      <div className={`text-body-sm mt-1 ${teacher === t.name ? 'text-steel-gray' : 'text-graphite/70'}`}>{t.inst}</div>
                    </div>
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setStep(1)}
                className="mt-12 mx-auto flex items-center gap-2 text-steel-gray hover:text-midnight-ink font-medium transition-colors"
              >
                Volver
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto w-full">
              <h1 className="font-display font-bold text-heading mb-8 text-center">Selecciona un plan</h1>
              <div className="space-y-4">
                {[
                  { id: 'single', name: 'Clase suelta', price: '45€', desc: 'Pago por clase' },
                  { id: 'pack', name: 'Pack 15 días', price: '80€', desc: 'Incluye 2 clases' },
                  { id: 'monthly', name: 'Membresía mensual', price: '140€', desc: '4 clases / Mejor valor' }
                ].map((p) => (
                  <button 
                    key={p.id}
                    onClick={() => { setPlan(p.id); setStep(4); }}
                    className={`w-full p-6 rounded-default border-2 border-midnight-ink flex items-center justify-between transition-all shadow-subtle hover:shadow-contained ${
                      plan === p.id ? 'bg-emerald-green text-white' : 'bg-white hover:bg-graphite hover:text-white group'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-display font-bold text-subheading">{p.name}</div>
                      <div className={`text-sm mt-1 ${plan === p.id ? 'text-white/80' : 'text-graphite/60 group-hover:text-white/70'}`}>{p.desc}</div>
                    </div>
                    <div className="font-display font-bold text-2xl">{p.price}</div>
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setStep(2)}
                className="mt-12 mx-auto flex items-center gap-2 text-steel-gray hover:text-midnight-ink font-medium transition-colors"
              >
                Volver
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full flex-1 flex flex-col">
              <div className="text-center mb-8">
                <h1 className="font-display font-bold text-heading">Programa tu sesión</h1>
                <p className="text-graphite/80 mt-2">
                  {instrument} • {teacher} • {plan === 'single' ? 'Clase suelta' : plan === 'pack' ? 'Pack 15 días' : 'Mensual'}
                </p>
              </div>
              
              <div className="flex-1 w-full max-w-4xl mx-auto bg-white border-2 border-midnight-ink rounded-card shadow-[8px_8px_0_0_#000] p-6 md:p-10 flex flex-col md:flex-row gap-10">
                
                {/* Calendar Side */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <button 
                      onClick={prevMonth} 
                      disabled={currentMonthDate.getMonth() <= 5} 
                      className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-ash-gray disabled:opacity-30 disabled:cursor-not-allowed hover:border-midnight-ink hover:-translate-x-1 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h3 className="font-display font-bold text-subheading capitalize">{monthNames[currentMonthDate.getMonth()]} {currentMonthDate.getFullYear()}</h3>
                    <button 
                      onClick={nextMonth} 
                      disabled={currentMonthDate.getMonth() >= 7} 
                      className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-ash-gray disabled:opacity-30 disabled:cursor-not-allowed hover:border-midnight-ink hover:translate-x-1 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5 rotate-180" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 mb-4 text-center text-sm font-bold text-steel-gray uppercase tracking-wider">
                    {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map(d => <div key={d}>{d}</div>)}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-y-4 gap-x-2">
                    {Array.from({length: getFirstDayOfMonth(currentMonthDate)}).map((_, i) => <div key={`empty-${i}`} />)}
                    
                    {Array.from({length: getDaysInMonth(currentMonthDate)}).map((_, i) => {
                      const dayDate = new Date(2026, currentMonthDate.getMonth(), i + 1);
                      const isWk = isWeekday(dayDate);
                      const isSelected = selectedDate?.getDate() === dayDate.getDate() && selectedDate?.getMonth() === dayDate.getMonth();
                      
                      return (
                        <button 
                          key={i} 
                          disabled={!isWk}
                          onClick={() => {
                            setSelectedDate(dayDate);
                            setSelectedTime(null);
                          }}
                          className={`aspect-square rounded-full flex items-center justify-center font-display font-bold transition-all text-lg border-2 ${
                            !isWk 
                              ? 'border-transparent text-ash-gray cursor-not-allowed' 
                              : isSelected 
                                ? 'border-midnight-ink bg-composer-blue text-white shadow-[4px_4px_0_0_#000] scale-110' 
                                : 'border-transparent hover:border-ash-gray hover:bg-canvas-white text-midnight-ink'
                          }`}
                        >
                          {i + 1}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time Slots Side */}
                <div className="w-full md:w-72 border-t-2 md:border-t-0 md:border-l-2 border-ash-gray pt-8 md:pt-0 md:pl-10 flex flex-col">
                  <h3 className="font-display font-medium text-subheading mb-6 border-b border-ash-gray pb-4">
                    {selectedDate ? `${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]}` : 'Selecciona un día'}
                  </h3>
                  
                  <div className="flex-1 overflow-y-auto space-y-3 pr-2 h-64 md:h-auto">
                    {selectedDate ? ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'].map(t => {
                      const booked = isSlotBooked(selectedDate, t);
                      const isSelectedTime = selectedTime === t;
                      return (
                        <button 
                          key={t}
                          disabled={booked}
                          onClick={() => setSelectedTime(t)}
                          className={`w-full p-4 rounded-default border-2 text-sm font-bold transition-all flex justify-between items-center font-display tracking-wide ${
                            booked 
                              ? 'border-ash-gray text-steel-gray bg-canvas-white cursor-not-allowed' 
                              : isSelectedTime 
                                ? 'border-midnight-ink bg-composer-blue text-white shadow-[4px_4px_0_0_#000]' 
                                : 'border-midnight-ink text-midnight-ink hover:bg-canvas-white hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000]'
                          }`}
                        >
                          <span>{t}</span>
                          {booked ? <span className="text-xs uppercase tracking-wider font-bold opacity-60">Ocupado</span> : null}
                          {isSelectedTime ? <span className="text-xs uppercase tracking-wider font-bold">Sel.</span> : null}
                        </button>
                      );
                    }) : <div className="text-sm text-steel-gray text-center italic mt-10">Elige una fecha para ver horarios disponibles</div>}
                  </div>
                  
                  {selectedDate && selectedTime && (
                    <div className="mt-8">
                      <button onClick={() => setStep(5)} className="w-full bg-emerald-green text-white py-4 rounded-button font-display font-bold shadow-subtle hover:shadow-contained hover:-translate-y-1 border-2 border-midnight-ink transition-all">
                        Continuar
                      </button>
                    </div>
                  )}
                </div>

              </div>
              
              <button 
                onClick={() => setStep(3)}
                className="mt-8 mx-auto flex items-center gap-2 text-steel-gray hover:text-midnight-ink font-medium transition-colors"
              >
                Volver
              </button>
            </div>
          )}

          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full flex-1 flex flex-col items-center">
                <div className="text-center mb-8">
                  <h1 className="font-display font-bold text-heading">Resumen y Pago</h1>
                  <p className="text-graphite/80 mt-2 max-w-md mx-auto">
                    Estás a un paso de empezar tu viaje musical con Tu Escuela. Introduce tus datos de pago para confirmar la reserva.
                  </p>
                </div>

                <div className="w-full max-w-xl bg-white border-2 border-midnight-ink rounded-card shadow-[8px_8px_0_0_#000] p-8 space-y-8">
                  <div className="flex justify-between items-start border-b border-ash-gray pb-6">
                      <div>
                        <h3 className="font-display font-bold text-subheading">{plan === 'single' ? 'Clase suelta' : plan === 'pack' ? 'Pack 15 días' : 'Membresía mensual'}</h3>
                        <p className="text-graphite/70 mt-1">{instrument} con {teacher}</p>
                        <p className="text-midnight-ink font-medium text-sm mt-3 flex items-center gap-2 bg-canvas-white p-2 rounded-default border border-ash-gray w-fit">
                          <Calendar className="w-4 h-4 text-composer-blue" />
                          {selectedDate?.getDate()} de {selectedDate ? monthNames[selectedDate.getMonth()] : ''} a las {selectedTime}
                        </p>
                      </div>
                      <div className="text-right">
                          <div className="font-display font-bold text-3xl">{plan === 'single' ? '45€' : plan === 'pack' ? '80€' : '140€'}</div>
                      </div>
                  </div>

                  <div className="space-y-6 pt-2">
                      <h4 className="font-display font-bold text-sm uppercase tracking-wider text-steel-gray">Detalles de pago</h4>
                      
                      {/* Fake credit card form */}
                      <div className="space-y-4">
                          <input type="text" placeholder="Nombre en la tarjeta" className="w-full p-4 rounded-default border-2 border-ash-gray bg-canvas-white focus:border-composer-blue focus:ring-4 focus:ring-composer-blue/20 outline-none transition-all font-medium text-midnight-ink placeholder:text-steel-gray" />
                          <input type="text" placeholder="Número de tarjeta" className="w-full p-4 rounded-default border-2 border-ash-gray bg-canvas-white focus:border-composer-blue focus:ring-4 focus:ring-composer-blue/20 outline-none transition-all font-medium text-midnight-ink placeholder:text-steel-gray" />
                          <div className="flex gap-4">
                              <input type="text" placeholder="MM/AA" className="w-1/2 p-4 rounded-default border-2 border-ash-gray bg-canvas-white focus:border-composer-blue focus:ring-4 focus:ring-composer-blue/20 outline-none transition-all font-medium text-midnight-ink placeholder:text-steel-gray" />
                              <input type="text" placeholder="CVC" className="w-1/2 p-4 rounded-default border-2 border-ash-gray bg-canvas-white focus:border-composer-blue focus:ring-4 focus:ring-composer-blue/20 outline-none transition-all font-medium text-midnight-ink placeholder:text-steel-gray" />
                          </div>
                      </div>

                      <button className="w-full mt-4 bg-midnight-ink text-white py-4 rounded-button font-display font-bold hover:bg-composer-blue shadow-[4px_4px_0_0_#000] hover:translate-y-1 hover:shadow-none border-2 border-midnight-ink transition-all flex items-center justify-center gap-2 text-lg">
                          Pagar {plan === 'single' ? '45€' : plan === 'pack' ? '80€' : '140€'}
                      </button>
                      <p className="text-center text-xs text-steel-gray font-medium">Pagos seguros procesados por Stripe. No se realizarán cargos reales.</p>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(4)}
                  className="mt-8 mx-auto flex items-center gap-2 text-steel-gray hover:text-midnight-ink font-medium transition-colors"
                >
                  Volver
                </button>
            </div>
          )}
          
        </div>
      </main>
    </div>
  );
}
