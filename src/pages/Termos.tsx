import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const Termos = () => (
  <main>
    <PageHero title="Termos de Uso" />
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground/60">Última atualização: Fevereiro de 2025</p>
            <h2 className="font-display text-xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar o site da Borcelle Clínica Odontológica, você concorda com estes termos de uso e se compromete a respeitá-los.</p>
            <h2 className="font-display text-xl font-semibold text-foreground">2. Serviços</h2>
            <p>O site tem caráter informativo sobre os serviços odontológicos oferecidos pela clínica. As informações não substituem consulta profissional.</p>
            <h2 className="font-display text-xl font-semibold text-foreground">3. Propriedade Intelectual</h2>
            <p>Todo o conteúdo deste site, incluindo textos, imagens, logos e design, é propriedade da Borcelle Clínica Odontológica e protegido por leis de propriedade intelectual.</p>
            <h2 className="font-display text-xl font-semibold text-foreground">4. Responsabilidades</h2>
            <p>A Borcelle se reserva o direito de modificar ou descontinuar qualquer funcionalidade do site sem aviso prévio. Não nos responsabilizamos por indisponibilidades temporárias.</p>
            <h2 className="font-display text-xl font-semibold text-foreground">5. Agendamento Online</h2>
            <p>O agendamento realizado através do site está sujeito à confirmação por parte da clínica. Horários solicitados serão confirmados via WhatsApp ou telefone.</p>
            <h2 className="font-display text-xl font-semibold text-foreground">6. Legislação Aplicável</h2>
            <p>Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo para dirimir questões relacionadas.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Termos;
