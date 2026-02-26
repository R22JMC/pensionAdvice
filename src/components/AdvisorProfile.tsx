import { Award, Quote, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdvisorProfileProps {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  stats?: {
    rating: number;
    reviews: number;
    experience: string;
  };
}

const AdvisorProfile = ({ name, title, bio, imageUrl, stats }: AdvisorProfileProps) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container-custom px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust-green text-white font-medium text-sm mb-4">
              <Award className="w-4 h-4" />
              Meet Our Team
            </div>
          </div>
          
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Profile Image Section */}
              <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/80 p-6 md:p-8 flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                
                {/* Profile Image */}
                <div className="relative mb-4">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-white/30 shadow-xl">
                    {imageUrl ? (
                      <img src={imageUrl} alt={name} className="w-full h-full object-cover scale-90" />
                    ) : (
                      <span className="text-4xl font-bold text-white">
                        {name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  {/* Verified badge */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-1">{name}</h3>
                <p className="text-white/80 text-center text-sm mb-4">{title}</p>
                
                {/* Experience stat */}
                {stats && (
                  <div className="flex items-center gap-3 text-white/90 text-sm">
                    <span>{stats.experience}</span>
                  </div>
                )}
              </div>
              
              {/* Bio Content */}
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                <Quote className="w-8 h-8 text-accent/20 mb-3" />
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{bio}"
                </p>
                
                {/* Stats Row */}
                {stats && (
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-secondary/50">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-xl font-bold text-foreground">{stats.experience}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Experience</p>
                    </div>
                    <div className="text-center border-l border-border">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-xl font-bold text-foreground">5000+</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Clients Helped</p>
                    </div>
                  </div>
                )}
                
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit gap-2 shadow-lg shadow-accent/20">
                  <Phone className="w-4 h-4" />
                  Book a Call with {name.split(' ')[0]}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorProfile;