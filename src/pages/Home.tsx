import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Zap, Star, Award, Users, Heart } from "lucide-react";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import clinicInterior from "@/assets/clinic-interior.jpg";
import heroVideo from "@/assets/hero-bg.mp4";

const specialties = [
  { icon: Sparkles, title: "Implantes Dentários", desc: "Reabilitação oral com implantes de titânio, carga imediata e planejamento digital 3D para resultados precisos e duradouros.", href: "/especialidades" },
  { icon: Shield, title: "Ortodontia", desc: "Alinhadores invisíveis, aparelhos autoligados e ortodontia digital com simulação do resultado final antes de iniciar.", href: "/especialidades" },
  { icon: Zap, title: "Clareamento", desc: "Clareamento a laser e com LED, moldeiras personalizadas e protocolos seguros para até 8 tons mais claros.", href: "/especialidades" },
  { icon: Star, title: "Lentes de Contato Dental", desc: "Laminados ultrafinos em porcelana com preparação minimamente invasiva e design digital personalizado do sorriso.", href: "/especialidades" },
];

const testimonials = [
  { name: "Ana Carolina S.", text: "Fiz lentes de contato dental e o resultado foi além das minhas expectativas. Atendimento impecável do início ao fim, profissionais extremamente atenciosos e cuidadosos.", rating: 5 },
  { name: "Roberto M.", text: "Realizei implantes dentários com carga imediata e saí da clínica no mesmo dia com meu sorriso restaurado. Profissionais excepcionais e tecnologia de ponta. Super recomendo!", rating: 5 },
  { name: "Mariana L.", text: "Ambiente sofisticado, equipamentos modernos e uma equipe que realmente se preocupa com o bem-estar do paciente. Melhor experiência odontológica que já tive.", rating: 5 },
];

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
  <>

    <main>
    {/* Hero Assimétrico */}
 <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* VIDEO BACKGROUND CENTRAL */}
  <video
    ref={videoRef}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    src={heroVideo}
  />

  {/* OVERLAY ESCURO */}
  <div className="absolute inset-0 bg-black/50" />

  {/* CONTEÚDO CENTRAL */}
  <div className="relative z-10 w-full max-w-6xl px-6 sm:px-12 text-white">
    <ScrollReveal>
      <div className="w-16 h-0.5 bg-white mb-8" />
      <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8">
        <span className="block font-light">Excelência</span>
        <span className="block font-semibold">em cada</span>
        <span className="block font-semibold">sorriso</span>
      </h1>
      <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-12 leading-relaxed">
        Odontologia de alto padrão com tecnologia avançada e atendimento humanizado em São Paulo.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/contato" className="btn-accent text-base px-8 py-4 inline-block text-center">
          Agendar Consulta
        </Link>
        <Link to="/sobre" className="btn-outline-light text-base px-8 py-4 inline-block text-center">
          Conheça a Clínica
        </Link>
      </div>
    </ScrollReveal>
  </div>

</section>

    {/* Institutional - Grid Assimétrico */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-center">
        <ScrollReveal>
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Referência em odontologia premium
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
            Há mais de 15 anos transformando sorrisos com excelência, a Borcelle Clínica Odontológica combina
            tecnologia de ponta com um atendimento personalizado e humanizado.
          </p>
          <Link to="/sobre" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:text-navy-light transition-colors">
            Saiba mais sobre nós <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="relative">
            <img src={clinicInterior} alt="Interior da Clínica Borcelle" className="rounded-lg shadow-2xl w-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10 hidden lg:block" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Specialties - Cards Sobrepostos */}
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="container-wide mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <div className="w-12 h-0.5 bg-white mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary-foreground leading-tight">
              Especialidades que transformam sorrisos
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {specialties.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <Link to={s.href} className="group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-[1.02] block">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5 group-hover:bg-white/30 transition-colors">
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</p>
                <ArrowRight size={18} className="text-white mt-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12">
          <ScrollReveal delay={0.4}>
            <Link to="/especialidades" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors">
              Ver todas as especialidades <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Technology - Layout Invertido */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
        <ScrollReveal>
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Tecnologia a serviço do seu sorriso
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
            Investimos continuamente em equipamentos de última geração para oferecer diagnósticos
            precisos e tratamentos minimamente invasivos.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
            <div className="flex items-start gap-3">
              <Award size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground mt-1">Anos de Experiência</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground">10k+</p>
                <p className="text-xs text-muted-foreground mt-1">Pacientes Atendidos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground">98%</p>
                <p className="text-xs text-muted-foreground mt-1">Satisfação</p>
              </div>
            </div>
          </div>
          <Link to="/tecnologia" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:text-navy-light transition-colors">
            Conheça nossa tecnologia <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.2} direction="left">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-secondary/50 border border-border rounded-lg p-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Scanner 3D</p>
              <p className="text-sm text-muted-foreground">Precisão digital submilimétrica</p>
            </div>
            <div className="bg-secondary/50 border border-border rounded-lg p-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Microscopia</p>
              <p className="text-sm text-muted-foreground">Ampliação de até 25x</p>
            </div>
            <div className="bg-secondary/50 border border-border rounded-lg p-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">CAD/CAM</p>
              <p className="text-sm text-muted-foreground">Próteses em sessão única</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Testimonials - Layout Diagonal */}
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="container-wide mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
              Experiências que transformam
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <p className="text-foreground font-medium text-sm">{t.name}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA - Fundo Escuro Assimétrico */}
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="container-wide mx-auto relative z-10">
        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="w-16 h-0.5 bg-white mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
              Agende sua avaliação e descubra como podemos ajudá-lo a alcançar o sorriso dos seus sonhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link to="/contato" className="btn-accent text-base px-10 py-4 inline-block text-center">
                Agendar Avaliação
              </Link>
              <Link to="/sobre" className="btn-outline-light text-base px-10 py-4 inline-block text-center">
                Conheça Nossa Estrutura
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
  </>
  );
};

export default Home;
