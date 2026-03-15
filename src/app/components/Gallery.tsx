import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1688940738506-acfe9334bf5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHJpY2UlMjBwaWxhZiUyMGdvbGRlbnxlbnwxfHx8fDE3NzM2MTMzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Kabuli Pulao"
  },
  {
    src: "https://images.unsplash.com/photo-1713780131162-618efcd6a790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmdoYW4lMjBrZWJhYiUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc3MzYxMzM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Grilled Kebabs"
  },
  {
    src: "https://images.unsplash.com/photo-1738680981649-3f81bdfe225d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNwaWNlcyUyMG1hcmtldHxlbnwxfHx8fDE3NzM1NzYzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Fresh Spices"
  },
  {
    src: "https://images.unsplash.com/photo-1764694876978-3ac3cd494515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmdoYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5pbmd8ZW58MXx8fHwxNzczNjEzMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Restaurant Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDF8fHx8MTc3MzYwNDgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Chef Cooking"
  },
  {
    src: "https://images.unsplash.com/photo-1743674453093-592bed88018e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwYXBwZXRpemVycyUyMG1lenplfGVufDF8fHx8MTc3MzYxMzM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Appetizers"
  },
  {
    src: "https://images.unsplash.com/photo-1610064094685-2015f42d8586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmdoYW4lMjBicmVhZCUyMG5hYW4lMjB0YW5kb29yfGVufDF8fHx8MTc3MzYxMzM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Fresh Naan"
  },
  {
    src: "https://images.unsplash.com/photo-1676014959543-81df1079b423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtsYXZhJTIwZGVzc2VydCUyMHN3ZWV0fGVufDF8fHx8MTc3MzYxMzM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Desserts"
  },
  {
    src: "https://images.unsplash.com/photo-1578172397201-efaa902004a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwdmVnZXRhYmxlJTIwcGxhdHRlcnxlbnwxfHx8fDE3NzM2MTMzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Grilled Vegetables"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent text-sm tracking-wider uppercase">Gallery</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-4">
            A Visual Feast
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of delicious dishes, skilled chefs at work, and welcoming atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif">{image.alt}</h3>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Follow us on social media to see more delicious photos!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors">
              Instagram
            </button>
            <button className="px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
