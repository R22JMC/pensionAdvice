import { useEffect } from "react";

const ReviewsSection = () => {
  useEffect(() => {
    // Load Reviews.io script
    const script = document.createElement("script");
    script.src = "https://widget.reviews.io/rich-snippet-reviews-widgets/dist.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the widget after script loads
      if (typeof (window as any).richSnippetReviewsWidgets === "function") {
        (window as any).richSnippetReviewsWidgets("carousel-inline-widget-810", {
          store: "pension-advice",
          widgetName: "carousel-inline",
          primaryClr: "#f47e27",
          neutralClr: "#f4f4f4",
          reviewTextClr: "#2f2f2f",
          ratingTextClr: "#2f2f2f",
          layout: "fullWidth",
          numReviews: 21,
        });
      }
    };

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://widget.reviews.io/rich-snippet-reviews-widgets/dist.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="inline-block text-accent font-semibold text-sm mb-2 tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>
        
        <div id="carousel-inline-widget-810" style={{ width: "100%", maxWidth: "810px", margin: "0 auto" }} />
      </div>
    </section>
  );
};

export default ReviewsSection;
