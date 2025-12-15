import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Design", value: 85 },
  { name: "Marketing", value: 92 },
  { name: "Development", value: 78 },
  { name: "User Experience", value: 88 },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-header">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-header-foreground">
            <h3 className="font-heading text-2xl md:text-3xl mb-6">
              Engaging, creative page and purposeful theme.
            </h3>
            <p className="text-header-foreground/60 text-sm mb-6 leading-relaxed">
              Express yourself and your business through this amazing theme
            </p>
            <p className="text-header-foreground/60 text-sm leading-relaxed">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.
            </p>
          </div>

          {/* Right Skills */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-header-foreground/80 text-sm tracking-[0.15em] uppercase">
                    {skill.name}
                  </h5>
                  <span
                    className="text-header-foreground/80 text-sm font-medium transition-opacity duration-1000"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${index * 0.2 + 0.5}s`,
                    }}
                  >
                    {skill.value}%
                  </span>
                </div>
                <div className="h-1 bg-header-foreground/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.value}%` : "0%",
                      transitionDelay: `${index * 0.2}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
