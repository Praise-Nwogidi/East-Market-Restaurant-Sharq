import { Flame, Heart, LeafyGreen, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDF8fHx8MTc3MzYwNDgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef cooking"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-lg -z-10"></div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-accent text-sm tracking-wider uppercase">Our Story</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-6">
              Welcome to East Market & Restaurant
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At East Market & Restaurant - Sharq, we bring the rich culinary heritage of Afghanistan to your table. 
              Our journey began with a passion for sharing authentic Afghan recipes passed down through generations.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every dish is crafted with love, using traditional cooking methods and the freshest ingredients. 
              We believe that Afghan food is not just a meal, but an experience of warm hospitality and unforgettable flavors.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground mb-1">Authentic Recipes</h4>
                  <p className="text-sm text-muted-foreground">Traditional Afghan cooking methods</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <LeafyGreen className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-foreground mb-1">Fresh Ingredients</h4>
                  <p className="text-sm text-muted-foreground">Sourced daily for quality</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Flame className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-foreground mb-1">Expert Chefs</h4>
                  <p className="text-sm text-muted-foreground">Masters of Afghan cuisine</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground mb-1">Family Atmosphere</h4>
                  <p className="text-sm text-muted-foreground">Warm and welcoming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
