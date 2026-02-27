import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const members = [
  {
    name: "Dra. Beatriz Monteiro",
    role: "Diretora Clínica • Implantodontia",
    bio: "Graduada pela Faculdade de Odontologia da USP, com especialização em Implantodontia e mestrado em Reabilitação Oral. Mais de 20 anos de experiência, tendo realizado mais de 5.000 implantes dentários. Referência nacional em protocolos de carga imediata e técnicas avançadas de enxerto ósseo.",
    img: team2,
    cro: "CRO-SP 45.678",
    credentials: ["Especialista USP", "Mestre em Reabilitação Oral", "Certificação Internacional Straumann"],
    experience: "20+ anos"
  },
  {
    name: "Dr. Ricardo Almeida",
    role: "Ortodontia • Ortopedia Facial",
    bio: "Mestre em Ortodontia pela Unicamp e certificado internacional em alinhadores invisíveis. Especialista em casos complexos de maloclusão e ortodontia digital com planejamento 3D. Membro da Sociedade Brasileira de Ortodontia e Ortopedia Facial.",
    img: team1,
    cro: "CRO-SP 56.789",
    credentials: ["Mestre Unicamp", "Invisalign Diamond Provider", "Membro SBOO"],
    experience: "15+ anos"
  },
  {
    name: "Dra. Camila Santos",
    role: "Endodontia • Microscopia",
    bio: "Especialista em Endodontia pela ABO-SP com formação avançada em microscopia operatória pela Universidade da Pensilvânia. Referência em retratamentos endodônticos complexos e cirurgias apicais. Utiliza tecnologia de ponta incluindo localizadores apicais e sistemas rotatórios.",
    img: team3,
    cro: "CRO-SP 67.890",
    credentials: ["Especialista ABO-SP", "Formação UPenn", "Certificação em Microscopia"],
    experience: "12+ anos"
  },
  {
    name: "Dr. Felipe Torres",
    role: "Harmonização Orofacial",
    bio: "Cirurgião-dentista especializado em Harmonização Orofacial pela ABO Nacional. Pós-graduado em Estética Facial com foco em procedimentos minimamente invasivos. Membro da Sociedade Brasileira de Toxina Botulínica e Implantes Faciais da Odontologia.",
    img: team4,
    cro: "CRO-SP 78.901",
    credentials: ["Pós-graduado HOF", "Membro SOBRATIBO", "Certificação em Estética Facial"],
    experience: "8+ anos"
  },
];

const Equipe = () => (
  <main>
    <PageHero title="Nossa Equipe" subtitle="Profissionais especializados, comprometidos com a excelência." />

    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.1}>
              <div className="card-premium overflow-hidden h-full">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="font-display text-lg font-semibold text-foreground">{m.name}</h3>
                  <p className="text-xs text-primary font-medium mt-1">{m.role}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-muted-foreground/60">{m.cro}</span>
                    <span className="text-xs text-muted-foreground/40">•</span>
                    <span className="text-xs text-muted-foreground/60">{m.experience}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed flex-1">{m.bio}</p>
                  <div className="mt-4 pt-4 border-t border-border space-y-1.5">
                    {m.credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
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

export default Equipe;
