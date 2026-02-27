import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoTransparent from "@/assets/logo-transparent.png";
import logoBlue from "@/assets/logo-blue-bg.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/especialidades", label: "Especialidades" },
  { href: "/tecnologia", label: "Tecnologia" },
  { href: "/antes-depois", label: "Antes e Depois" },
  { href: "/equipe", label: "Equipe" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-primary/98 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-24 sm:h-28">
        <Link to="/" className="flex-shrink-0">
          <img
            src={scrolled ? logoBlue : logoTransparent}
            alt="Borcelle Clínica Odontológica"
            className="transition-all duration-700 ease-out"
            style={{
              height: scrolled ? '80px' : '120px',
              transition: 'height 0.7s ease-out'
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-500 rounded-md ${
                location.pathname === link.href
                  ? scrolled
                    ? "text-white bg-white/10"
                    : "text-white bg-white/10"
                  : scrolled
                    ? "text-white/90 hover:text-white hover:bg-white/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contato" className="ml-3 text-sm px-5 py-2.5 inline-flex items-center justify-center rounded-md font-medium tracking-wide transition-all duration-500 bg-white text-primary hover:bg-white/90 border-2 border-white/20 hover:border-white/30 shadow-lg">
            Agendar Consulta
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 transition-colors duration-500 text-white"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-white/20 shadow-lg">
          <nav className="flex flex-col py-6 px-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`py-3 px-4 text-sm font-medium tracking-wide rounded-md transition-all ${
                  location.pathname === link.href
                    ? "bg-white text-primary"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contato" className="mt-4 text-center bg-white text-primary py-3 px-4 rounded-md font-medium hover:bg-white/90 transition-colors">
              Agendar Consulta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
