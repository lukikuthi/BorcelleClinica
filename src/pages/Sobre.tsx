import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import logoInstitutional from "@/assets/logo-institutional.png";

const timeline = [
  { year: "2008", title: "Fundação", desc: "Inauguração da clínica na Av. Paulista com foco em odontologia estética." },
  { year: "2012", title: "Expansão", desc: "Ampliação do espaço e incorporação de novas especialidades." },
  { year: "2016", title: "Tecnologia Digital", desc: "Aquisição do primeiro scanner 3D intraoral da região." },
  { year: "2020", title: "Certificação Premium", desc: "Reconhecimento como clínica de excelência pelo CRO-SP." },
  { year: "2024", title: "Nova Era", desc: "Inauguração da unidade completamente renovada com tecnologia de ponta." },
];

const diferenciais = [
  { icon: Award, title: "Excelência Reconhecida", desc: "Certificações e prêmios que atestam nossa qualidade." },
  { icon: Users, title: "Equipe Especializada", desc: "Profissionais com formação em centros de referência." },
  { icon: Shield, title: "Biossegurança Rigorosa", desc: "Protocolos que excedem as exigências regulatórias." },
];

const Sobre = () => (
  <main>
    <PageHero title="Sobre a Clínica" subtitle="Conheça nossa história, missão e os valores que guiam cada atendimento." />

    {/* História */}
    <section className="section-padding">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <ScrollReveal>
          <div className="divider-navy mb-6 mx-0" />
          <h2 className="font-display text-3xl font-semibold text-foreground">Nossa História</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A Borcelle nasceu em 2008 com um propósito claro: oferecer odontologia de excelência em um ambiente
            acolhedor e tecnológico. Fundada pela Dra. Beatriz Monteiro, a clínica rapidamente se tornou
            referência em tratamentos estéticos e reabilitação oral na capital paulista.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ao longo de mais de 15 anos, mantivemos nosso compromisso com a inovação e o cuidado humanizado,
            investindo continuamente em tecnologia e capacitação profissional para entregar resultados
            que transformam vidas.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <img src={logoInstitutional} alt="Borcelle" className="w-full max-w-md mx-auto" />
        </ScrollReveal>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Missão", text: "Proporcionar saúde bucal de excelência, aliando tecnologia de ponta a um atendimento humanizado e personalizado." },
          { icon: Eye, title: "Visão", text: "Ser reconhecida como a principal referência em odontologia premium no Brasil, transformando o conceito de cuidado dental." },
          { icon: Heart, title: "Valores", text: "Ética, excelência, inovação, respeito ao paciente, compromisso com resultados e responsabilidade social." },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="card-premium p-8 h-full">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="divider-navy mb-6" />
            <h2 className="font-display text-3xl font-semibold text-foreground">Nossa Trajetória</h2>
          </div>
        </ScrollReveal>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.1}>
              <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                  <span className="text-primary font-display text-2xl font-bold">{item.year}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background mt-2" />
                <div className="flex-1 hidden md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Diferenciais */}
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="divider-navy mb-6" />
            <h2 className="font-display text-3xl font-semibold text-foreground">Diferenciais</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diferenciais.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 0.1}>
              <div className="card-premium p-8 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <d.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-narrow mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-semibold text-foreground">Venha nos conhecer</h2>
          <p className="mt-4 text-muted-foreground">Agende sua visita e conheça pessoalmente nossa estrutura.</p>
          <Link to="/contato" className="btn-accent mt-8 inline-block px-8 py-3">Agendar Visita</Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Sobre;
