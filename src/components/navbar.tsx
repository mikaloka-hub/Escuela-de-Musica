import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-canvas-white/80 backdrop-blur-md border-b border-ash-gray">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#/" className="font-display font-bold text-subheading tracking-subheading flex items-center gap-2">
          <div className="w-8 h-8 bg-composer-blue rounded-small"></div>
          Tu Escuela<span className="text-composer-blue">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-body font-medium hover:text-composer-blue transition-colors">Nosotros</a>
          <a href="#programs" className="text-body font-medium hover:text-composer-blue transition-colors">Programas</a>
          <a href="#teachers" className="text-body font-medium hover:text-composer-blue transition-colors">Profesores</a>
          <a href="#/booking" className="bg-composer-blue text-canvas-white hover:bg-cadet-blue px-8 py-4 rounded-button font-display font-medium transition-all shadow-subtle hover:shadow-contained border-2 border-transparent">
            Reserva tu primera clase
          </a>
        </nav>

        <button className="md:hidden p-2 text-midnight-ink hover:text-composer-blue transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
