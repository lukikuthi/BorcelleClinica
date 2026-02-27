import { Monitor, ScanLine, Microscope, Cpu, Wifi, Camera } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import technologyImg from "@/assets/technology.jpg";

const technologies = [
  {
    icon: ScanLine,
    title: "Scanner Intraoral 3D",
    desc: "Captura digital de alta precisão da arcada dentária em poucos minutos, eliminando completamente a necessidade de moldagens convencionais desconfortáveis. Permite visualização imediata em 3D e compartilhamento digital com laboratórios.",
    brand: "iTero Element 5D",
    benefits: ["Sem desconforto", "Precisão submilimétrica", "Visualização instantânea"]
  },
  {
    icon: Monitor,
    title: "Tomografia Cone Beam",
    desc: "Imagens tridimensionais de altíssima resolução que permitem visualização detalhada de estruturas ósseas, nervos e seios maxilares. Essencial para planejamento cirúrgico de implantes e diagnóstico de patologias.",
    brand: "Kodak 9000 3D",
    benefits: ["Diagnóstico preciso", "Planejamento cirúrgico", "Baixa radiação"]
  },
  {
    icon: Microscope,
    title: "Microscopia Operatória",
    desc: "Microscópio odontológico com ampliação de até 25x e iluminação LED de alta intensidade. Permite visualização de detalhes invisíveis a olho nu em procedimentos endodônticos e restauradores complexos.",
    brand: "Zeiss OPMI PROergo",
    benefits: ["Precisão cirúrgica", "Preservação dental", "Resultados superiores"]
  },
  {
    icon: Cpu,
    title: "CAD/CAM Odontológico",
    desc: "Sistema completo de design e fabricação assistida por computador. Permite projetar e produzir coroas, facetas e próteses em cerâmica com perfeição de ajuste em uma única sessão, sem necessidade de moldagens ou provisórios.",
    brand: "CEREC Primescan",
    benefits: ["Sessão única", "Sem provisório", "Ajuste perfeito"]
  },
  {
    icon: Wifi,
    title: "Radiografia Digital",
    desc: "Sistema de radiografia digital que reduz em até 90% a exposição à radiação comparado com filmes radiográficos convencionais. Imagens instantâneas em alta resolução com possibilidade de ajustes digitais para melhor diagnóstico.",
    brand: "Dentsply Schick 33",
    benefits: ["90% menos radiação", "Imagens instantâneas", "Diagnóstico aprimorado"]
  },
  {
    icon: Camera,
    title: "Fotografia Clínica",
    desc: "Câmera DSLR profissional com lentes macro especializadas e sistema de iluminação ring flash para documentação fotográfica de alta qualidade. Essencial para planejamento estético e registro de evolução de tratamentos.",
    brand: "Canon EOS R5 + 100mm Macro",
    benefits: ["Documentação profissional", "Planejamento estético", "Registro de casos"]
  },
];

const Tecnologia = () => (
  <main>
    <PageHero title="Tecnologia" subtitle="Equipamentos de última geração para diagnósticos precisos e tratamentos avançados." />

    <section className="section-padding">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <ScrollReveal>
          <img src={technologyImg} alt="Tecnologia dental" className="rounded-lg shadow-lg w-full" />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="divider-navy mb-6 mx-0" />
          <h2 className="font-display text-3xl font-semibold text-foreground">Inovação a Serviço da Saúde</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Na Borcelle, acreditamos que a tecnologia é fundamental para oferecer o melhor cuidado odontológico.
            Nosso investimento contínuo em equipamentos de ponta permite diagnósticos mais precisos, tratamentos
            menos invasivos e resultados superiores.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cada equipamento foi criteriosamente selecionado para garantir máxima eficiência,
            conforto ao paciente e excelência nos resultados.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="divider-navy mb-6" />
            <h2 className="font-display text-3xl font-semibold text-foreground">Nossos Equipamentos</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 0.08}>
              <div className="card-premium p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <t.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{t.title}</h3>
                <p className="text-xs font-medium text-primary mb-3">{t.brand}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{t.desc}</p>
                <div className="pt-4 border-t border-border space-y-1.5">
                  {t.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Tecnologia;
