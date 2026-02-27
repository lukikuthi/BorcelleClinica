import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const cases = [
  { id: 1, title: "Lentes de Contato Dental", desc: "Paciente de 32 anos com transformação completa do sorriso utilizando 10 laminados ultrafinos em porcelana. Procedimento minimamente invasivo com resultado natural e harmonioso.", category: "Estética", duration: "2 sessões", details: "Porcelana E-Max" },
  { id: 2, title: "Clareamento Dental a Laser", desc: "Tratamento de clareamento a laser realizado em sessão única com resultado de 8 tons mais claro. Protocolo personalizado com gel dessensibilizante para máximo conforto.", category: "Clareamento", duration: "1 sessão", details: "Whiteness HP" },
  { id: 3, title: "Implante com Carga Imediata", desc: "Reabilitação total de arcada superior com 6 implantes de zircônia e prótese protocolo instalada no mesmo dia. Paciente saiu da clínica com dentes fixos.", category: "Implantes", duration: "1 dia", details: "Implantes Straumann" },
  { id: 4, title: "Ortodontia com Alinhadores Invisíveis", desc: "Correção de apinhamento dental e mordida profunda em 14 meses utilizando alinhadores transparentes. Planejamento digital 3D com simulação do resultado final.", category: "Ortodontia", duration: "14 meses", details: "28 alinhadores" },
  { id: 5, title: "Harmonização Orofacial Completa", desc: "Protocolo integrado com toxina botulínica para sorriso gengival, preenchimento labial com ácido hialurônico e lifting facial não cirúrgico.", category: "Harmonização", duration: "3 sessões", details: "Resultados naturais" },
  { id: 6, title: "Reabilitação Oral Completa", desc: "Caso de reabilitação total com 14 implantes, enxerto ósseo e próteses em porcelana fabricadas com tecnologia CAD/CAM para ajuste perfeito.", category: "Prótese", duration: "6 meses", details: "Porcelana sobre implantes" },
];

const AntesDepois = () => {
  const [sliderPos, setSliderPos] = useState<Record<number, number>>({});

  return (
    <main>
      <PageHero title="Antes e Depois" subtitle="Confira resultados reais de tratamentos realizados em nossa clínica." />

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Cada caso é único. Os resultados abaixo representam tratamentos reais realizados por nossa equipe.
              As imagens serão atualizadas com registros de pacientes autorizados.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <ScrollReveal key={c.id} delay={i * 0.08}>
                <div className="card-premium overflow-hidden">
                  {/* Slider placeholder */}
                  <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    <div className="absolute inset-0 flex">
                      <div
                        className="h-full bg-primary/10 flex items-center justify-center"
                        style={{ width: `${sliderPos[c.id] ?? 50}%` }}
                      >
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Antes</span>
                      </div>
                      <div className="h-full flex-1 bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Depois</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={90}
                      value={sliderPos[c.id] ?? 50}
                      onChange={(e) => setSliderPos({ ...sliderPos, [c.id]: Number(e.target.value) })}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                    />
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-foreground/30 z-5"
                      style={{ left: `${sliderPos[c.id] ?? 50}%` }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{c.category}</span>
                      <span className="text-xs text-muted-foreground">{c.duration}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground/70">{c.details}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AntesDepois;
