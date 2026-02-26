import { Phone, Mail, Linkedin, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TeamMember } from "@/data/teamData";

interface TeamMemberCardProps {
  member: TeamMember;
  image: string;
  showFullBio?: boolean;
}

const TeamMemberCard = ({ member, image, showFullBio = true }: TeamMemberCardProps) => {
  const hasLinkedIn = member.linkedin && member.linkedin.length > 0;
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={image}
          alt={member.name}
          className="w-full h-full object-cover scale-[0.85] object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-sm opacity-90">{member.credentials.join(" | ")}</p>
          <p className="text-accent font-medium">{member.title}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground text-sm mb-4">{member.shortBio}</p>
        
        <div className="space-y-2 mb-4">
          <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
            <Phone className="w-4 h-4 text-accent" />
            {member.phone}
          </a>
          <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
            <Mail className="w-4 h-4 text-accent" />
            {member.email}
          </a>
          {hasLinkedIn && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
              <Linkedin className="w-4 h-4 text-accent" />
              LinkedIn Profile
            </a>
          )}
        </div>

        {showFullBio && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full gap-2">
                View Full Bio
                <ChevronRight className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-start gap-4">
                  <img
                    src={image}
                    alt={member.name}
                    className="w-24 h-24 rounded-xl object-cover scale-[0.9]"
                  />
                  <div>
                    <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                    <p className="text-accent font-medium">{member.credentials.join(" | ")}</p>
                    <p className="text-muted-foreground">{member.title}</p>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">About</h4>
                  <p className="text-muted-foreground whitespace-pre-line">{member.fullBio}</p>
                </div>

                {member.education.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Education</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {member.education.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.qualifications.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Qualifications & Accreditations</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {member.qualifications.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.specializations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Specialises in</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((item, index) => (
                        <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Contact {member.name.split(" ")[0]}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                      <Phone className="w-4 h-4 text-accent" />
                      {member.phone}
                    </a>
                    {member.mobile && (
                      <a href={`tel:${member.mobile.replace(/\s/g, "")}`} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                        <Phone className="w-4 h-4 text-accent" />
                        {member.mobile}
                      </a>
                    )}
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                      <Mail className="w-4 h-4 text-accent" />
                      {member.email}
                    </a>
                    {hasLinkedIn && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                        <Linkedin className="w-4 h-4 text-accent" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
