import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-wide mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-display text-xl font-semibold mb-4">Borcelle</h3>
          <p className="text-sm leading-relaxed opacity-70">
            Clínica Odontológica de alto padrão, comprometida com a excelência em cada sorriso.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Navegação</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { to: "/sobre", label: "Sobre" },
              { to: "/especialidades", label: "Especialidades" },
              { to: "/tecnologia", label: "Tecnologia" },
              { to: "/equipe", label: "Equipe" },
              { to: "/blog", label: "Blog" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Contato</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <a href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:opacity-100 transition-opacity"><Phone size={14} className="mt-0.5 flex-shrink-0" /> (11) 96998-7340</a>
            <div className="flex items-start gap-2"><Mail size={14} className="mt-0.5 flex-shrink-0" /> lucaskikuthi@gmail.com</div>
            <div className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0" /> Av. Paulista, 1000 - Bela Vista, São Paulo - SP</div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Horários</h4>
          <div className="flex flex-col gap-2.5 text-sm opacity-70">
            <div className="flex items-start gap-2"><Clock size={14} className="mt-0.5 flex-shrink-0" /> Seg - Sex: 8h às 19h</div>
            <div className="flex items-start gap-2"><Clock size={14} className="mt-0.5 flex-shrink-0" /> Sáb: 8h às 13h</div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-50">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <p>© 2026 Borcelle Clínica Odontológica. - Feito para Portfólio pelo melhor.</p>
          <p className="text-primary-foreground/40">Desenvolvido por Lucas Kikuthi</p>
        </div>
        <div className="flex gap-6">
          <Link to="/privacidade" className="hover:opacity-100 transition-opacity">Política de Privacidade</Link>
          <Link to="/termos" className="hover:opacity-100 transition-opacity">Termos de Uso</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
