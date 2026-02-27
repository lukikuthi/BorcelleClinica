import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "./Blog";
import ScrollReveal from "@/components/ScrollReveal";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-32 section-padding text-center">
        <h1 className="font-display text-2xl text-foreground">Artigo não encontrado</h1>
        <Link to="/blog" className="btn-accent mt-6 inline-block">Voltar ao Blog</Link>
      </main>
    );
  }

  return (
    <main className="pt-28 sm:pt-36">
      <article className="container-narrow mx-auto px-4 sm:px-6 pb-20">
        <ScrollReveal>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>
          <div className="divider-navy mb-6 mx-0" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-1"><Calendar size={14} /> {post.date}</div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 prose prose-lg max-w-none text-muted-foreground">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} className="font-display text-xl font-semibold text-foreground mt-8 mb-4">{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-1 my-4">
                    {block.split("\n").map((item, j) => (
                      <li key={j} className="text-muted-foreground leading-relaxed">{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="leading-relaxed mb-4">{block}</p>;
            })}
          </div>
        </ScrollReveal>
      </article>
    </main>
  );
};

export default BlogPost;
