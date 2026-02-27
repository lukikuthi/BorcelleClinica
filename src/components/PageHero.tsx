import ScrollReveal from "./ScrollReveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-primary overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
    </div>
    <div className="container-narrow mx-auto px-4 sm:px-6 relative z-10">
      <ScrollReveal>
        <div className="w-12 h-0.5 bg-white mb-6" />
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl">{subtitle}</p>
        )}
      </ScrollReveal>
    </div>
  </section>
);

export default PageHero;
