import { Heart, GraduationCap, UserCheck, Megaphone, Users, Pencil, LucideIcon } from "lucide-react";

interface Priority {
  icon: LucideIcon;
  title: string;
  description: string;
}

const priorities: Priority[] = [
  {
    icon: Users,
    title: "The Client Comes First",
    description: "We are a client focused business, we aim to understand your needs and objectives and deliver based on this. This is at the very core of our business – you are what matters most.",
  },
  {
    icon: GraduationCap,
    title: "We are Qualified Experts",
    description: "All our staff are qualified experts and have the technical knowledge and experience to handle all your pension related queries.",
  },
  {
    icon: Heart,
    title: "We are Real People",
    description: "We are real people who are here to assist you. We have direct phone numbers and email addresses, and will deal with your enquiry from start to finish.",
  },
  {
    icon: Megaphone,
    title: "We are Always Professional in All That We Do",
    description: "Professionalism is the minimum you can expect from us. We pride ourselves on this and we will deliver for you in a professional manner.",
  },
  {
    icon: Pencil,
    title: "We are Here to Educate You",
    description: "It is important to us that we educate you so you can make informed decisions. Before we do any business with you we will educate you as to why it is the right choice for you. We want you to understand the decisions you are making.",
  },
];

const CorePriorities = () => {
  return (
    <section className="py-16 md:py-20 bg-section-light">
      <div className="container-custom px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust-green text-white font-medium text-sm mb-4">
            <Heart className="w-4 h-4" />
            Our Values
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Our Core Priorities</h2>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {priorities.map((priority, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <priority.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{priority.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{priority.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePriorities;