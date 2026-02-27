import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const blogPosts = [
  {
    slug: "cuidados-apos-implante",
    title: "Cuidados Essenciais Após um Implante Dentário",
    excerpt: "Descubra os cuidados fundamentais para garantir o sucesso do seu implante dentário e uma recuperação tranquila.",
    date: "15 de Fevereiro, 2025",
    category: "Implantes",
    readTime: "5 min de leitura",
    content: `O implante dentário é uma das soluções mais eficazes para a reposição de dentes perdidos. No entanto, o sucesso do procedimento depende não apenas da técnica cirúrgica, mas também dos cuidados pós-operatórios adequados.

## Primeiras 24 horas

Nas primeiras 24 horas após a cirurgia, é fundamental repouso relativo. Evite atividades físicas intensas, não fume e não consuma bebidas alcoólicas. Aplique compressas de gelo na região externa por 15 minutos, com intervalos de 15 minutos.

## Alimentação

Nos primeiros dias, prefira alimentos pastosos e frios. Sopas, vitaminas, iogurtes e sorvetes são boas opções. Evite alimentos quentes, crocantes ou que exijam mastigação intensa.

## Higiene Bucal

Mantenha a higiene bucal rigorosa, mas com cuidado na região operada. Use escova macia e enxaguante bucal sem álcool conforme orientação do seu dentista.

## Medicação

Siga rigorosamente a prescrição médica. Os medicamentos anti-inflamatórios e antibióticos são essenciais para o processo de cicatrização.

## Acompanhamento

Não falte às consultas de acompanhamento. Elas são essenciais para monitorar a osseointegração e garantir o sucesso do tratamento.`,
  },
  {
    slug: "alinhadores-invisiveis-guia",
    title: "Alinhadores Invisíveis: O Guia Completo para um Sorriso Perfeito",
    excerpt: "Tudo o que você precisa saber sobre o tratamento com alinhadores invisíveis, desde a consulta até os resultados.",
    date: "02 de Fevereiro, 2025",
    category: "Ortodontia",
    readTime: "7 min de leitura",
    content: `Os alinhadores invisíveis revolucionaram a ortodontia moderna, oferecendo uma alternativa estética e confortável aos aparelhos tradicionais.

## O que são alinhadores invisíveis?

São placas transparentes removíveis, fabricadas sob medida, que movimentam os dentes gradualmente até a posição desejada. São praticamente imperceptíveis e podem ser removidos para comer e escovar os dentes.

## Como funciona o tratamento?

O tratamento inicia com um escaneamento digital 3D da sua arcada dentária. A partir dessas imagens, é criado um plano de tratamento digital com a simulação do resultado final.

## Vantagens

- Estética superior
- Conforto durante o uso
- Removíveis para alimentação e higiene
- Menos consultas de manutenção
- Planejamento digital preciso

## Duração do tratamento

A duração varia de 6 a 18 meses, dependendo da complexidade do caso. É fundamental usar os alinhadores por 22 horas diárias para obter os resultados esperados.`,
  },
  {
    slug: "clareamento-mitos-verdades",
    title: "Clareamento Dental: Mitos e Verdades que Você Precisa Conhecer",
    excerpt: "Separamos os fatos da ficção sobre clareamento dental para você tomar a melhor decisão sobre seu sorriso.",
    date: "20 de Janeiro, 2025",
    category: "Estética",
    readTime: "4 min de leitura",
    content: `O clareamento dental é um dos procedimentos estéticos mais procurados nos consultórios odontológicos. Mas com tanta informação disponível, é difícil separar o que é mito do que é verdade.

## Mito: Clareamento enfraquece os dentes

Verdade: Quando realizado por um profissional qualificado, o clareamento dental é seguro e não danifica o esmalte dos dentes.

## Mito: Bicarbonato de sódio clareia os dentes

Verdade: O bicarbonato pode causar abrasão no esmalte dentário. Não é recomendado como método de clareamento.

## Verdade: A sensibilidade é temporária

A sensibilidade dental durante e após o clareamento é normal e temporária. Geralmente desaparece em poucos dias após o término do tratamento.

## Verdade: O resultado não é permanente

O clareamento dura em média de 1 a 3 anos, dependendo dos hábitos alimentares e de higiene do paciente.

## Verdade: Nem todos podem fazer clareamento

Gestantes, lactantes, menores de 16 anos e pessoas com restaurações extensas na região anterior podem ter contraindicações.`,
  },
];

const Blog = () => (
  <main>
    <PageHero title="Blog" subtitle="Conteúdo relevante sobre saúde bucal e odontologia moderna." />

    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <article className="card-premium overflow-hidden h-full flex flex-col">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1"><Calendar size={12} /> {post.date}</div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:text-navy-light transition-colors"
                  >
                    Ler mais <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Blog;
