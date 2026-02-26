import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Download, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { videos, guides } from "@/data/resourcesData";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import retirementOptionsCover from "@/assets/guides/retirement-options-cover.png";
import definedBenefitCover from "@/assets/guides/defined-benefit-cover.png";

const guideCoverImages: Record<string, string> = {
  "retirement-options-cover": retirementOptionsCover,
  "defined-benefit-cover": definedBenefitCover,
};

const ResourcesCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);
  
  // Shuffle and show first 4 videos for variety
  const [featuredVideos] = useState(() => {
    const shuffled = [...videos].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  });

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Helpful Guides & Videos
          </h2>
          <p className="text-muted-foreground text-lg">
            Educational content to help you make informed decisions about your pension
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {/* Guide Cards */}
            {guides.map((guide) => (
              <CarouselItem key={guide.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <a 
                  href={guide.downloadUrl}
                  download
                  className="block bg-card rounded-xl overflow-hidden border border-border shadow-sm h-full flex flex-col group hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-primary">
                    <img
                      src={guideCoverImages[guide.coverImage]}
                      alt={guide.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded bg-secondary text-secondary-foreground">
                        Guide
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-3">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}

            {/* Video Cards */}
            {featuredVideos.map((video) => (
              <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="bg-card rounded-xl overflow-hidden border border-border shadow-sm cursor-pointer group h-full flex flex-col"
                  onClick={() => setSelectedVideo({ id: video.id, title: video.title })}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.customThumb ? `https://img.youtube.com/vi/${video.id}/${video.customThumb}.jpg` : `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute bottom-3 left-3">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent/80 transition-colors shadow-lg">
                        <Play className="w-3.5 h-3.5 text-accent-foreground fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded bg-primary text-primary-foreground">
                        Video
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                      {video.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/resources" className="flex items-center gap-2">
              View All Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
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

export default ResourcesCarousel;