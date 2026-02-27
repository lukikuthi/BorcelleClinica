import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const Privacidade = () => (
  <main>
    <PageHero title="Política de Privacidade" />
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground/60">Última atualização: Fevereiro de 2025</p>
            <h2 className="font-display text-xl font-semibold text-foreground">1. Informações Coletadas</h2>
            <p>A Borcelle Clínica Odontológica coleta informações pessoais necessárias para a prestação de serviços odontológicos, incluindo nome, e-mail, telefone, endereço e dados de saúde relevantes ao tratamento.</p>
            <h2 className="font-display text-xl font-semibold text-foreground">2. Uso das Informações</h2>
            <p>As informações coletadas são utilizadas para agendamento de consultas, comunicação com pacientes, prontuário eletrônico, envio de lembretes e melhorias em nossos serviços.</p>
            <h2 className="font-display text-xl font-semibold text-foreground">3. Compartilhamento de Dados</h2>
            <p>Não compartilhamos dados pessoais com terceiros, exceto quando necessário para cumprimento de obrigações legais ou com consentimento expresso do titular.</p>
            <h2 className="font-display text-xl font-semibold text-foreground">4. Segurança</h2>
            <p>Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, perda ou destruição.</p>
            <h2 className="font-display text-xl font-semibold text-foreground">5. Direitos do Titular</h2>
            <p>Você tem direito a acessar, corrigir, excluir ou solicitar a portabilidade de seus dados pessoais, conforme previsto na Lei Geral de Proteção de Dados (LGPD).</p>
            <h2 className="font-display text-xl font-semibold text-foreground">6. Contato</h2>
            <p>Para questões relacionadas à privacidade, entre em contato através do e-mail: privacidade@borcelle.com.br</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Privacidade;
