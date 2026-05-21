import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-graphite text-canvas-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="font-display font-bold text-subheading tracking-subheading flex items-center gap-2">
            <div className="w-8 h-8 bg-bubblegum-pink rounded-small"></div>
            Tu Escuela<span className="text-bubblegum-pink">.</span>
          </div>
          <p className="text-steel-gray text-body-sm max-w-sm">
            Empoderando a la próxima generación de músicos y minimalistas clásicos.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-composer-blue transition-colors text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-composer-blue transition-colors text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-composer-blue transition-colors text-white">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-medium text-body tracking-body relative inline-block">
            Ubicación
            <span className="absolute -bottom-2 -left-2 w-full h-2 bg-emerald-green -z-10 opacity-80"></span>
          </h4>
          <div className="flex items-start gap-3 text-steel-gray text-body-sm">
            <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-vivid-green" />
            <p>Plaça de Catalunya<br />Eixample<br />08002 Barcelona</p>
          </div>
          <div className="w-full h-32 bg-ash-gray rounded-default mt-4 overflow-hidden shadow-contained">
            {/* Google Maps Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.435777123961!2d2.1648784157147043!3d41.38791697926442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f8c5c99945%3A0xe5a3c617b3d4f828!2sPla%C3%A7a%20de%20Catalunya%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1705623000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
            ></iframe>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-medium text-body tracking-body relative inline-block">
            Contacto
            <span className="absolute -bottom-2 -right-2 w-full h-2 bg-sunny-yellow -z-10 opacity-80"></span>
          </h4>
          <div className="flex items-center gap-3 text-steel-gray text-body-sm hover:text-white transition-colors cursor-pointer">
            <Phone className="w-5 h-5 text-sunny-yellow" />
            <span>+34 931 123 456</span>
          </div>
          <div className="flex items-center gap-3 text-steel-gray text-body-sm hover:text-white transition-colors cursor-pointer">
            <Mail className="w-5 h-5 text-sunny-yellow" />
            <span>hola@tuescuela.com</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-medium text-body tracking-body">Horario</h4>
          <ul className="space-y-2 text-steel-gray text-body-sm">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Lun - Vie</span>
              <span>10:00 - 20:00</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Sáb</span>
              <span>10:00 - 14:00</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Dom</span>
              <span>Cerrado</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-steel-gray text-body-sm">
        <p>&copy; {new Date().getFullYear()} Tu Escuela de Música. Tema Algorithmic Canvas.</p>
      </div>
    </footer>
  );
}
