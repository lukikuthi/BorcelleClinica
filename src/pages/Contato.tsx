import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <main>
      <PageHero title="Contato" subtitle="Entre em contato conosco e agende sua consulta." />

      <section className="section-padding">
        <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <div className="divider-navy mb-6 mx-0" />
            <h2 className="font-display text-2xl font-semibold text-foreground mb-8">Envie uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nome completo</label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
                <textarea
                  rows={5}
                  required
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                />
              </div>
              <button type="submit" className="btn-accent inline-flex items-center gap-2">
                <Send size={16} /> Enviar Mensagem
              </button>
              {sent && <p className="text-sm text-primary font-medium">Mensagem enviada com sucesso!</p>}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Informações</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3"><MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" /> Av. Paulista, 1000 - 12º andar, Sala 1201<br />Bela Vista, São Paulo - SP, 01310-100</div>
                  <a href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors"><Phone size={18} className="text-primary flex-shrink-0 mt-0.5" /> (11) 96998-7340</a>
                  <div className="flex items-start gap-3"><Mail size={18} className="text-primary flex-shrink-0 mt-0.5" /> lucaskikuthi@gmail.com</div>
                  <div className="flex items-start gap-3"><Clock size={18} className="text-primary flex-shrink-0 mt-0.5" /> Seg a Sex: 8h às 19h<br />Sáb: 8h às 13h</div>
                </div>
                <p className="text-xs text-muted-foreground/50 mt-6">CNPJ: 12.000.000/0000-00</p>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976595944!2d-46.65390492378627!3d-23.56317006111029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c0776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1707000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Borcelle"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contato;
