import { Link } from "react-router-dom";
import { Sparkles, Shield, Zap, Star, Smile, Heart, Crown } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const specialties = [
  {
    icon: Shield,
    title: "Implantes Dentários",
    desc: "Reabilitação oral com implantes de titânio e zircônia, utilizando planejamento digital 3D para máxima precisão. Realizamos desde implantes unitários até protocolos de carga imediata.",
    highlights: ["Planejamento Digital 3D", "Carga Imediata", "Implantes em Zircônia"],
  },
  {
    icon: Smile,
    title: "Ortodontia",
    desc: "Tratamentos ortodônticos com alinhadores invisíveis e aparelhos estéticos de última geração. Planejamento digital com simulação do resultado final.",
    highlights: ["Alinhadores Invisíveis", "Aparelhos Autoligados", "Ortodontia Digital"],
  },
  {
    icon: Zap,
    title: "Clareamento Dental",
    desc: "Técnicas avançadas de clareamento com LED e laser, proporcionando resultados seguros e duradouros. Protocolos personalizados para cada paciente.",
    highlights: ["Clareamento a Laser", "Moldeiras Personalizadas", "Resultados em Sessão Única"],
  },
  {
    icon: Star,
    title: "Lentes de Contato Dental",
    desc: "Laminados ultrafinos em porcelana que transformam o sorriso com naturalidade. Preparação minimamente invasiva e resultado estético excepcional.",
    highlights: ["Porcelana Ultrafina", "Minimamente Invasivo", "Design Digital do Sorriso"],
  },
  {
    icon: Sparkles,
    title: "Harmonização Orofacial",
    desc: "Procedimentos estéticos faciais integrados à odontologia, incluindo toxina botulínica, ácido hialurônico e bioestimuladores de colágeno.",
    highlights: ["Toxina Botulínica", "Ácido Hialurônico", "Bioestimuladores"],
  },
  {
    icon: Heart,
    title: "Endodontia",
    desc: "Tratamento de canal com microscopia operatória e instrumentação mecanizada, garantindo precisão, conforto e altas taxas de sucesso.",
    highlights: ["Microscopia Operatória", "Instrumentação Mecanizada", "Lima Reciprocante"],
  },
  {
    icon: Crown,
    title: "Prótese Dentária",
    desc: "Próteses fixas e removíveis confeccionadas com materiais de alta qualidade. Tecnologia CAD/CAM para peças com ajuste perfeito.",
    highlights: ["Tecnologia CAD/CAM", "Cerâmicas de Alta Estética", "Próteses sobre Implantes"],
  },
];

const Especialidades = () => (
  <main>
    <PageHero title="Especialidades" subtitle="Soluções completas em odontologia com profissionais altamente qualificados." />

    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="space-y-8">
          {specialties.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05}>
              <div className="card-premium p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <s.icon size={26} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.highlights.map((h) => (
                      <span key={h} className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-16">
          <ScrollReveal>
            <h3 className="font-display text-2xl font-semibold text-foreground">Ficou com alguma dúvida?</h3>
            <p className="mt-3 text-muted-foreground">Nossa equipe está pronta para ajudá-lo a escolher o melhor tratamento.</p>
            <Link to="/contato" className="btn-accent mt-6 inline-block px-8 py-3">Fale Conosco</Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
);

export default Especialidades;
