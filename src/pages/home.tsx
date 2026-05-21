import Navbar from '../components/navbar';
import Footer from '../components/footer';
import heroImage from '../assets/images/regenerated_image_1779364738039.jpg';
import aboutImage from '../assets/images/regenerated_image_1779364739115.jpg';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-canvas-white">
      {/* Decorative background blocks */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bubblegum-pink/20 blur-3xl -z-10 rounded-full mix-blend-multiply translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-vivid-green/10 blur-3xl -z-10 rounded-full mix-blend-multiply -translate-x-1/2"></div>

      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative px-6 py-24 md:py-32 lg:py-48 flex items-center overflow-hidden">
          {/* Geometrical Accent Blocks */}
          <div className="absolute top-1/4 right-[10%] w-32 h-32 bg-hot-pink -z-10 rotate-12 hidden lg:block"></div>
          <div className="absolute bottom-1/4 left-[15%] w-24 h-24 bg-sunny-yellow -z-10 -rotate-12 hidden lg:block"></div>

          <div className="max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 z-10">
              <h1 className="font-display font-bold text-heading-lg leading-tight tracking-tight text-midnight-ink">
                Domina el <br />
                <span className="relative">
                  Arte de la Música.
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-composer-blue/20 -z-10"></span>
                </span>
              </h1>
              <p className="text-body text-graphite/80 max-w-lg text-lg">
                Donde la base clásica se encuentra con la creatividad moderna. Únete a nuestra comunidad de músicos y comienza tu viaje hoy.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#/booking" className="inline-flex justify-center items-center bg-sunset-orange text-canvas-white px-8 py-4 rounded-button font-display font-medium transition-all shadow-subtle hover:shadow-contained border-2 border-midnight-ink hover:-translate-y-1">
                  Reserva tu primera clase
                </a>
                <a href="#programs" className="inline-flex justify-center items-center bg-canvas-white text-midnight-ink px-8 py-4 rounded-button font-display font-medium transition-all shadow-subtle border-2 border-ash-gray hover:border-midnight-ink hover:bg-graphite hover:text-white">
                  Explorar programas
                </a>
              </div>
            </div>
            
            <div className="relative w-full aspect-[4/3] lg:aspect-square z-10">
              <div className="absolute inset-0 bg-composer-blue translate-x-4 translate-y-4 rounded-card border-2 border-midnight-ink"></div>
              <img 
                src={heroImage} 
                alt="Piano being played" 
                className="absolute inset-0 w-full h-full object-cover rounded-card border-2 border-midnight-ink grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* 2. About the School */}
        <section id="about" className="py-24 px-6 bg-graphite text-canvas-white overflow-hidden relative">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src={aboutImage} alt="Students learning" className="w-full aspect-[4/5] object-cover rounded-card border-2 border-white/10" />
                <div className="bg-emerald-green p-6 rounded-card border-2 border-transparent">
                  <p className="font-display font-bold text-subheading">15+</p>
                  <p className="text-sm font-medium">Años de excelencia</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-bubblegum-pink text-midnight-ink p-6 rounded-card border-2 border-transparent shadow-[4px_4px_0_0_#000]">
                  <p className="font-display font-bold text-subheading">2,000+</p>
                  <p className="text-sm font-medium">Alumnos activos</p>
                </div>
                <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Live band performance" className="w-full aspect-square object-cover rounded-card border-2 border-white/10 grayscale" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-display font-bold text-heading">Cultivando la brillantez musical</h2>
              <p className="text-white/70 text-body leading-relaxed">
                En Tu Escuela, creemos que aprender música debe ser tan inspirador como escucharla. Nuestros espacios están diseñados para fomentar la creatividad, con salas de práctica y auditorios de última generación.
              </p>
              <p className="text-white/70 text-body leading-relaxed">
                Ya sea que estés tomando un instrumento por primera vez o preparándote para una audición en el conservatorio, nuestros profesores dedicados brindan la estructura y la libertad artística que necesitas para triunfar.
              </p>
              <div className="pt-4">
                <a href="#teachers" className="inline-flex justify-center items-center bg-white text-midnight-ink px-8 py-4 rounded-button font-display font-medium transition-all hover:bg-composer-blue hover:text-white border-2 border-transparent">
                  Conoce a nuestros profesores
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Programs Offered */}
        <section id="programs" className="py-24 px-6 bg-canvas-white relative">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-display font-bold text-heading text-midnight-ink">Disciplinas principales</h2>
              <p className="text-body text-graphite/70 max-w-2xl mx-auto">Domina los fundamentos en nuestros cuatro instrumentos principales. Cada programa se adapta a tu nivel y objetivos musicales.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Piano', emoji: '🎹', bg: 'bg-bubblegum-pink', desc: 'Técnicas de teclado desde música clásica hasta contemporánea.' },
                { name: 'Guitarra', emoji: '🎸', bg: 'bg-sunny-yellow', desc: 'Acústica y eléctrica, ritmo y solos.' },
                { name: 'Canto', emoji: '🎤', bg: 'bg-vivid-green', desc: 'Control vocal, respiración y actuación.' },
                { name: 'Batería', emoji: '🥁', bg: 'bg-cadet-blue', desc: 'Ritmo, coordinación y percusión.' }
              ].map((prog) => (
                <div key={prog.name} className="group cursor-pointer">
                  <div className={`aspect-square ${prog.bg} rounded-card border-2 border-midnight-ink p-8 flex flex-col justify-between transition-all group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]`}>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl border-2 border-midnight-ink">
                      {prog.emoji}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-subheading text-midnight-ink mb-2">{prog.name}</h3>
                      <p className="text-sm font-medium text-midnight-ink/80">{prog.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Meet the Teachers */}
        <section id="teachers" className="py-24 px-6 bg-ash-gray/30">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="space-y-4 max-w-xl">
                <h2 className="font-display font-bold text-heading text-midnight-ink">Profesores expertos</h2>
                <p className="text-body text-graphite/70">Aprende directamente de músicos activos y virtuosos.</p>
              </div>
              <a href="#/booking" className="shrink-0 text-composer-blue font-bold hover:underline">Ver todos &rarr;</a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Elena Rostova', inst: 'Piano / Teclados', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', bio: 'Ex solista del Conservatorio. Especialista en Chopin y composición moderna.' },
                { name: 'Marcus Chen', inst: 'Guitarras', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', bio: 'Guitarrista de sesión. Experto en armonía de jazz y teoría de improvisación.' },
                { name: 'Sarah Jenkins', inst: 'Técnica vocal', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', bio: 'Veterana de los escenarios. Se centra en una técnica vocal saludable y presencia escénica.' }
              ].map((teacher, i) => (
                <div key={teacher.name} className="bg-white rounded-card border-2 border-ash-gray overflow-hidden hover:border-midnight-ink transition-colors group">
                  <div className="aspect-[4/3] bg-graphite relative overflow-hidden">
                    <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute top-4 right-4 bg-white text-midnight-ink px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {teacher.inst}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-display font-bold text-subheading text-midnight-ink">{teacher.name}</h3>
                    <p className="text-graphite/70 text-sm leading-relaxed">{teacher.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Video & Testimonials */}
        <section className="py-24 px-6 bg-midnight-ink text-canvas-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
          
          <div className="max-w-[1000px] mx-auto relative z-10">
            {/* Video Placeholder */}
            <div className="aspect-video bg-graphite rounded-card border-2 border-white/20 mb-20 flex items-center justify-center relative group cursor-pointer overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-composer-blue/20 group-hover:bg-composer-blue/40 transition-colors"></div>
              <img src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Recital thumbnail" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-2 shadow-xl z-20 group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-midnight-ink border-b-[12px] border-b-transparent"></div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-heading mb-6">Experiencias de alumnos</h2>
                <div className="flex gap-2 mb-8">
                  {[1,2,3,4,5].map(i => <div key={i} className="text-sunny-yellow text-xl">★</div>)}
                </div>
                <blockquote className="text-xl md:text-2xl leading-relaxed text-white/90 font-medium mb-6">
                  "Tu Escuela cambió por completo cómo me acerco al piano. Los profesores no solo te muestran cómo tocar canciones; te enseñan a entender la música pura."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                  <div>
                    <div className="font-display font-bold">David L.</div>
                    <div className="text-sm text-white/50">Alumno adulto de piano</div>
                  </div>
                </div>
              </div>
              <div className="bg-graphite p-8 rounded-card border-2 border-white/10 hidden md:block transform rotate-2">
                <blockquote className="text-lg leading-relaxed text-white/80 mb-6">
                  "Mi hija ha crecido mucho en su confianza vocal. Los recitales están increíblemente producidos y dan a los estudiantes una experiencia real en el escenario."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-green rounded-full"></div>
                  <div>
                    <div className="font-display font-bold text-sm">Sarah M.</div>
                    <div className="text-xs text-white/50">Madre</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Pricing Tiers */}
        <section className="py-24 px-6 bg-canvas-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-display font-bold text-heading text-midnight-ink">Comienza tu viaje</h2>
              <p className="text-body text-graphite/70 max-w-2xl mx-auto">Opciones flexibles para cada nivel de compromiso.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Clase suelta', price: '45€', desc: 'Pago por clase', features: ['1 clase privada 45 min', 'Instrumento provisto', 'Acceso a sala práctica (1 día)'], bg: 'bg-white', text: 'text-midnight-ink' },
                { name: 'Membresía mensual', price: '140€', desc: 'Mejor valor para avanzar', features: ['4 clases privadas 45 min', 'Salas de práctica ilimitadas', 'Acceso a recital mensual', 'Biblioteca de partituras'], bg: 'bg-midnight-ink', text: 'text-white', popular: true },
                { name: 'Pack 15 días', price: '80€', desc: 'Compromiso de corto plazo', features: ['2 clases privadas 45 min', 'Horario flexible', 'Acceso sala práctica (15 d)'], bg: 'bg-white', text: 'text-midnight-ink' }
              ].map((tier) => (
                <div key={tier.name} className={`relative rounded-card border-2 border-midnight-ink p-8 flex flex-col transition-all hover:-translate-y-2 ${tier.bg} ${tier.text} ${tier.popular ? 'shadow-[8px_8px_0_0_#000]' : 'shadow-subtle hover:shadow-[8px_8px_0_0_#000]'}`}>
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-midnight-ink">
                      Más popular
                    </div>
                  )}
                  <h3 className="font-display font-bold text-subheading mb-2">{tier.name}</h3>
                  <div className="font-display font-bold text-heading-lg mb-2">{tier.price}</div>
                  <div className={`text-sm mb-8 ${tier.popular ? 'text-white/70' : 'text-graphite/70'}`}>{tier.desc}</div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="shrink-0 text-composer-blue mt-0.5">✓</span>
                        <span className="text-sm font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#/booking" className={`block w-full py-4 text-center rounded-button font-display font-bold transition-all border-2 border-transparent ${
                    tier.popular 
                      ? 'bg-sunset-orange text-white hover:bg-white hover:text-midnight-ink hover:border-midnight-ink' 
                      : 'bg-ash-gray text-midnight-ink hover:bg-midnight-ink hover:text-white'
                  }`}>
                    Elegir plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

