import { Star, Quote, BadgeCheck } from "lucide-react";
import { serviceReviews, ServiceReview } from "@/data/reviewsData";

interface ServiceReviewsProps {
  category: string;
  title?: string;
}

const ReviewCard = ({ review }: { review: ServiceReview }) => (
  <div className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-3">
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-foreground">{review.name}</h4>
          {review.verified && (
            <BadgeCheck className="w-4 h-4 text-trust-green" />
          )}
        </div>
        <div className="flex gap-0.5 mt-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
      <Quote className="w-6 h-6 text-accent/20 flex-shrink-0" />
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
  </div>
);

const ServiceReviews = ({
  category,
  title = "What Our Clients Say",
}: ServiceReviewsProps) => {
  const reviews = serviceReviews[category];
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="section-padding bg-gradient-to-b from-background to-accent/5">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">
            Client Reviews
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground">
            Real feedback from clients who used this service
          </p>
        </div>

        <div className={`max-w-5xl mx-auto grid gap-6 ${reviews.length === 1 ? "max-w-2xl" : reviews.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-2"}`}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceReviews;
