import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const teamMembers = [
  {
    image: team1,
    name: "Cynthia Fowler",
    role: "Senior Designer",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt itudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit.",
  },
  {
    image: team2,
    name: "Emily Watson",
    role: "Marketing Manager",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt itudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit.",
  },
  {
    image: team1,
    name: "Sarah Mitchell",
    role: "PR Manager",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt itudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Amazing Team</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center">
              {/* Image */}
              <div className="relative mb-6 overflow-hidden aspect-square max-w-xs mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>

              {/* Info */}
              <h4 className="font-heading text-xl md:text-2xl mb-1">{member.name}</h4>
              <h5 className="text-xs tracking-[0.2em] uppercase text-rose mb-4">
                {member.role}
              </h5>
              <p className="text-muted-foreground text-sm italic leading-relaxed max-w-sm mx-auto">
                "{member.bio}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
