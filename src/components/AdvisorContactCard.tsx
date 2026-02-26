import { Phone, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chrisMcKenzie, chrisCrowley, TeamMember } from "@/data/teamData";
import chrisMcKenzieImage from "@/assets/team/chris-mckenzie.jpg";
import chrisCrowleyImage from "@/assets/team/chris-crowley.jpg";

const AdvisorCard = ({ advisor, image }: { advisor: TeamMember; image: string }) => (
  <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
    <div className="relative h-64">
      <img
        src={image}
        alt={advisor.name}
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
        <h3 className="text-xl font-bold">{advisor.name}</h3>
        <p className="text-sm opacity-90">{advisor.credentials.join(" | ")}</p>
        <p className="text-accent font-medium">{advisor.title}</p>
      </div>
    </div>
    
    <div className="p-5">
      <div className="space-y-2 mb-4">
        <a href={`tel:${advisor.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
          <Phone className="w-4 h-4 text-accent" />
          <span className="text-muted-foreground">Office:</span> {advisor.phone}
        </a>
        <a href={`tel:${advisor.mobile.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
          <Phone className="w-4 h-4 text-accent" />
          <span className="text-muted-foreground">Mobile:</span> {advisor.mobile}
        </a>
        <a href={`mailto:${advisor.email}`} className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
          <Mail className="w-4 h-4 text-accent" />
          {advisor.email}
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1">
          <a href={`tel:${advisor.phone.replace(/\s/g, "")}`}>
            <Phone className="w-4 h-4 mr-1" />
            Call
          </a>
        </Button>
        <Button asChild size="sm" variant="outline" className="flex-1">
          <a href={`mailto:${advisor.email}`}>
            <Mail className="w-4 h-4 mr-1" />
            Email
          </a>
        </Button>
        <Button asChild size="sm" variant="ghost">
          <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  </div>
);

const AdvisorContactCard = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-2xl" />
      </div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-accent font-medium mb-2">Speak with our experts</p>
          <h2 className="text-3xl font-bold text-primary-foreground">Contact Our Directors</h2>
          <p className="text-primary-foreground/80 mt-2 max-w-2xl mx-auto">
            Get personalised pension advice from our experienced team of qualified financial advisors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AdvisorCard advisor={chrisMcKenzie} image={chrisMcKenzieImage} />
          <AdvisorCard advisor={chrisCrowley} image={chrisCrowleyImage} />
        </div>
      </div>
    </section>
  );
};

export default AdvisorContactCard;
