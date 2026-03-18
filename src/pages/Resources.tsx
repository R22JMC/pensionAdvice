import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Download, Play, BookOpen, Video, X, Calculator, GitMerge, Building2, ClipboardCheck, Globe, CalendarClock, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import officeTeam from "@/assets/office/office-team.jpg";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { videos, guides } from "@/data/resourcesData";
import retirementOptionsCover from "@/assets/guides/retirement-options-cover.png";
import definedBenefitCover from "@/assets/guides/defined-benefit-cover.png";

const guideCoverImages: Record<string, string> = {
  "retirement-options-cover": retirementOptionsCover,
  "defined-benefit-cover": definedBenefitCover,
};

// Calculator imports
import PensionTransferCalculator from "@/components/calculators/PensionTransferCalculator";
import DirectorsPensionCalculator from "@/components/calculators/DirectorsPensionCalculator";
import PensionReviewCalculator from "@/components/calculators/PensionReviewCalculator";
import UKPensionTransferCalculator from "@/components/calculators/UKPensionTransferCalculator";
import EarlyRetirementCalculator from "@/components/calculators/EarlyRetirementCalculator";
import RedundancyCalculator from "@/components/calculators/RedundancyCalculator";


type Category = "all" | "reports" | "videos" | "calculators";

const categories = [
  { id: "all" as Category, label: "All Resources", icon: BookOpen },
  { id: "reports" as Category, label: "Reports & Guides", icon: FileText },
  { id: "videos" as Category, label: "Videos", icon: Video },
  { id: "calculators" as Category, label: "Calculators", icon: Calculator },
];

const calculatorOptions = [
  { 
    id: "pension-review", 
    label: "Pension Review",
    icon: ClipboardCheck,
    component: PensionReviewCalculator,
  },
  { 
    id: "early-retirement", 
    label: "Early Retirement",
    icon: CalendarClock,
    component: EarlyRetirementCalculator,
  },
  { 
    id: "directors-pension", 
    label: "Directors",
    icon: Building2,
    component: DirectorsPensionCalculator,
  },
  { 
    id: "redundancy", 
    label: "Redundancy",
    icon: LifeBuoy,
    component: RedundancyCalculator,
  },
  { 
    id: "pension-transfer", 
    label: "Consolidation",
    icon: GitMerge,
    component: PensionTransferCalculator,
  },
  { 
    id: "uk-pension", 
    label: "UK Transfer",
    icon: Globe,
    component: UKPensionTransferCalculator,
  }
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);
  const [activeCalculator, setActiveCalculator] = useState("pension-review");
  const [shuffledVideos] = useState(() =>
    [...videos].sort(() => Math.random() - 0.5)
  );

  const showVideos = activeCategory === "all" || activeCategory === "videos";
  const showGuides = activeCategory === "all" || activeCategory === "reports";
  const showCalculators = activeCategory === "all" || activeCategory === "calculators";
  
  const videoCount = videos.length;
  const guideCount = guides.length;
  const calculatorCount = calculatorOptions.length;

  const getCategoryCount = (categoryId: Category) => {
    if (categoryId === "all") return videoCount + guideCount + calculatorCount;
    if (categoryId === "videos") return videoCount;
    if (categoryId === "calculators") return calculatorCount;
    return guideCount;
  };

  const resourceCount = getCategoryCount(activeCategory);

  const ActiveCalculatorComponent = calculatorOptions.find(c => c.id === activeCalculator)?.component;

  return (
    <div className="min-h-screen flex flex-col">

      <Helmet>
        <link rel="canonical" href="https://www.pensionadvice.ie/resources" />
        <meta name="description" content="Free pension guides, videos and calculators from Ireland's leading pension advisers. Explore your options for pension transfers, reviews, early retirement and more." />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${officeTeam})` }}
        />
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Resource Centre
          </h1>
          <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-3xl">
            Explore our collection of guides, reports, videos and calculators to help you make informed decisions about your pension.
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="flex-1 bg-background">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="md:w-64 flex-shrink-0">
              <nav className="sticky top-24 space-y-1">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-3">
                  Categories
                </h2>
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  const count = getCategoryCount(category.id);
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all cursor-pointer",
                        isActive 
                          ? "bg-accent text-accent-foreground shadow-md" 
                          : "text-foreground hover:bg-accent/10 hover:text-accent border border-transparent hover:border-accent/20"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="flex-1 font-medium">{category.label}</span>
                      <span className={cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        isActive 
                          ? "bg-accent-foreground/20 text-accent-foreground" 
                          : "bg-muted text-muted-foreground"
                      )}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Resource Grid */}
            <main className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {categories.find(c => c.id === activeCategory)?.label}
                </h2>
                <p className="text-muted-foreground">
                  {resourceCount} resource{resourceCount !== 1 ? 's' : ''} available
                </p>
              </div>

              {/* Videos Section */}
              {showVideos && (
                <div className="mb-10">
                  {activeCategory === "all" && (
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Video className="w-5 h-5 text-primary" />
                      Videos
                    </h3>
                  )}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shuffledVideos.map((video) => (
                      <div 
                        key={video.id} 
                        className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
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
                        </div>
                        <div className="p-4">
                          <div className="mb-2">
                            <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded bg-primary text-primary-foreground">
                              Video
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                            {video.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Guides Section */}
              {showGuides && (
                <div className="mb-10">
                  {activeCategory === "all" && (
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-secondary" />
                      Guides & Reports
                    </h3>
                  )}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide) => (
                      <div 
                        key={guide.id}
                        className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group"
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
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-1 leading-tight">
                            {guide.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-3">
                            {guide.subtitle}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {guide.description}
                          </p>
                          <Button 
                            asChild
                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                          >
                            <a href={guide.downloadUrl} target="_blank" rel="noopener noreferrer">
                              <FileText className="w-4 h-4 mr-2" />
                              View Guide
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Calculators Section - Tabbed Approach */}
              {showCalculators && (
                <div className="mb-10">
                  {activeCategory === "all" && (
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-accent" />
                      Calculators
                    </h3>
                  )}
                  
                  {/* Calculator Tabs */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {calculatorOptions.map((calc) => {
                      const Icon = calc.icon;
                      const isActive = activeCalculator === calc.id;
                      return (
                        <button
                          key={calc.id}
                          onClick={() => setActiveCalculator(calc.id)}
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                            isActive 
                              ? "bg-accent text-accent-foreground shadow-md" 
                              : "bg-card text-foreground hover:bg-accent/10 hover:text-accent border border-border hover:border-accent/30"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                          {calc.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Calculator */}
                  <div className="max-w-xl mx-auto">
                    {ActiveCalculatorComponent && <ActiveCalculatorComponent />}
                  </div>

                  {/* Trust indicators */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      These calculators provide estimates only. For personalised advice, speak with our team.
                    </p>
                  </div>
                </div>
              )}

            </main>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact our team of experts for personalised pension advice tailored to your needs.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

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


      <Footer />
    </div>
  );
};

export default Resources;