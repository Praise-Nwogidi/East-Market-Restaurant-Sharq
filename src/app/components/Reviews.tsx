import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    review: "Absolutely amazing! The Kabuli Pulao was the best I've ever had. The flavors are authentic and the atmosphere is so warm and welcoming. Highly recommend!",
    date: "2 weeks ago"
  },
  {
    name: "Michael Chen",
    rating: 5,
    review: "This is my go-to place for Afghan food. The kebabs are perfectly grilled and the naan bread is always fresh. The staff is incredibly friendly and the service is excellent.",
    date: "1 month ago"
  },
  {
    name: "Fatima Al-Rahman",
    rating: 5,
    review: "As someone who grew up eating Afghan food, I can confidently say this restaurant serves authentic, home-style dishes. The Mantu dumplings remind me of my grandmother's cooking!",
    date: "3 weeks ago"
  },
  {
    name: "David Martinez",
    rating: 5,
    review: "First time trying Afghan cuisine and I was blown away! Every dish was flavorful and fresh. The tea with cardamom was a perfect ending to an amazing meal.",
    date: "1 week ago"
  },
  {
    name: "Emily Thompson",
    rating: 5,
    review: "The quality of food here is outstanding. You can taste the love and care in every dish. The prices are very reasonable for the portion sizes. Will definitely be back!",
    date: "2 months ago"
  },
  {
    name: "Ahmed Hassan",
    rating: 5,
    review: "Best Afghan restaurant in the area! The spices are perfectly balanced and the meat is always tender. The family atmosphere makes you feel right at home.",
    date: "3 weeks ago"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent text-sm tracking-wider uppercase">Testimonials</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-4">
            What Our Customers Say
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <h4 className="text-foreground font-semibold">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 text-center p-8 bg-background rounded-lg border border-border">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-6xl font-serif text-primary">5.0</div>
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground">Based on 500+ reviews</p>
            </div>
          </div>
          
          <button className="mt-6 px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-colors">
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
}
