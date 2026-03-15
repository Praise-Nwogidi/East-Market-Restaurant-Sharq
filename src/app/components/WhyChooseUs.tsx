import { Award, Clock, Heart, Leaf, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Authentic Afghan Cuisine",
    description: "Traditional recipes passed down through generations, prepared with passion and expertise"
  },
  {
    icon: Leaf,
    title: "Fresh & Healthy Ingredients",
    description: "We source the finest and freshest ingredients daily to ensure quality in every bite"
  },
  {
    icon: Award,
    title: "Traditional Cooking Techniques",
    description: "Our chefs use time-honored methods including tandoor ovens for authentic flavors"
  },
  {
    icon: Users,
    title: "Warm Family-Friendly Atmosphere",
    description: "Experience true Afghan hospitality in our welcoming and comfortable dining space"
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Every dish is crafted with care and attention to detail, ensuring your satisfaction"
  },
  {
    icon: Clock,
    title: "Fast & Reliable Service",
    description: "Dine-in, takeout, or delivery - we're committed to serving you with excellence"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%239a1c1c' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent text-sm tracking-wider uppercase">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-4">
            What Makes Us Special
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic Afghan cuisine, rich tradition, fresh ingredients, and unforgettable flavor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 group-hover:bg-primary group-hover:text-white rounded-lg transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-serif text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Authentic Dishes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-primary mb-2">5★</div>
            <div className="text-muted-foreground">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
