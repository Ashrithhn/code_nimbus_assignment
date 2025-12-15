import { Lightbulb, Users, Target } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Discover What's Possible",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.",
  },
  {
    icon: Users,
    title: "People Really Matter",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.",
  },
  {
    icon: Target,
    title: "Having A Plan Feels Good",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full border border-border group-hover:border-accent transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <h4 className="font-heading text-xl md:text-2xl mb-4 text-foreground">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
