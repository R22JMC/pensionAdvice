import { useState } from "react";
import { Play, X, Video } from "lucide-react";
import { videos, Video as VideoType } from "@/data/resourcesData";
import logo from "@/assets/logo.png";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ServiceVideosProps {
  category: string;
  title?: string;
  subtitle?: string;
}

const ServiceVideos = ({ 
  category, 
  title = "Related Videos",
  subtitle = "Watch our educational content to learn more"
}: ServiceVideosProps) => {
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);
  
  // Pick a random video from the matching category, or fall back to a random general video
  const [primaryVideo] = useState(() => {
    const categoryVideos = videos.filter((v) => v.category === category);
    const generalVideos = videos.filter((v) => v.category === "general");
    const pool = categoryVideos.length > 0 ? categoryVideos : generalVideos;
    return pool[Math.floor(Math.random() * pool.length)] ?? null;
  });
  
  if (!primaryVideo) return null;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">
            Resources
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
            <Video className="w-6 h-6 text-primary" />
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            onClick={() => setSelectedVideo({ id: primaryVideo.id, title: primaryVideo.title })}
          >
            <div className="relative aspect-video overflow-hidden bg-black">
              <img
                src={primaryVideo.customThumb ? `https://img.youtube.com/vi/${primaryVideo.id}/${primaryVideo.customThumb}.jpg` : `https://img.youtube.com/vi/${primaryVideo.id}/maxresdefault.jpg`}
                alt={primaryVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${primaryVideo.id}/hqdefault.jpg`;
                }}
              />
              {/* Logo overlay for branded thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg md:hidden">
                  <img src={logo} alt="Pension Advice" className="h-8 w-auto" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent/80 transition-colors shadow-lg">
                  <Play className="w-4 h-4 text-accent-foreground fill-current ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2">
                {primaryVideo.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {primaryVideo.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{selectedVideo?.title || "Video"}</DialogTitle>
          </VisuallyHidden>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedVideo && (
            <div className="aspect-video w-full overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=0&fs=0&iv_load_policy=3&cc_load_policy=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full pointer-events-none"
                style={{ transform: 'scale(1.15) translateY(-4%)' }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServiceVideos;
