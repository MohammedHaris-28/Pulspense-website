import { Star } from "lucide-react";

const items = [
  {
    quote: "Pulspense changed how I think about money. The analytics are gorgeous and actually useful.",
    name: "Sarah Chen",
    role: "Designer",
  },
  {
    quote: "Finally, an expense tracker that doesn't feel like a spreadsheet. I check it daily.",
    name: "Marcus Patel",
    role: "Engineer",
  },
  {
    quote: "I saved $400 in my first month just by seeing where my money was going. Worth it.",
    name: "Lena Rivera",
    role: "Founder",
  },
];

export const Testimonials = () => (
  <section className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">Loved by users</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Loved by people managing<br /> their <span className="text-gradient">daily finances</span>.
        </h2>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {items.map((t) => (
          <figure key={t.name} className="glass-card p-7 flex flex-col">
            <div className="flex gap-0.5 text-primary mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="text-base leading-relaxed text-foreground/90 flex-1">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
