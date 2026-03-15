import { ImageWithFallback } from "./figma/ImageWithFallback";

const dishes = [
  {
    name: "Kabuli Pulao",
    description: "Afghanistan's national dish - aromatic rice with tender lamb, raisins, and carrots",
    image: "https://images.unsplash.com/photo-1688940738506-acfe9334bf5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHJpY2UlMjBwaWxhZiUyMGdvbGRlbnxlbnwxfHx8fDE3NzM2MTMzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$18.99"
  },
  {
    name: "Afghani Kebabs",
    description: "Succulent grilled meat marinated in Afghan spices, served with naan and chutney",
    image: "https://images.unsplash.com/photo-1713780131162-618efcd6a790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmdoYW4lMjBrZWJhYiUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc3MzYxMzM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$16.99"
  },
  {
    name: "Mantu Dumplings",
    description: "Steamed dumplings filled with spiced meat, topped with yogurt and lentils",
    image: "https://images.unsplash.com/photo-1648726443433-d5a62ba13863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGR1bXBsaW5ncyUyMHN0ZWFtZWR8ZW58MXx8fHwxNzczNjEzMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$14.99"
  },
  {
    name: "Bolani",
    description: "Traditional flatbread stuffed with potatoes, herbs, and spices",
    image: "https://images.unsplash.com/photo-1767974916988-5b63acdbcaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0YnJlYWQlMjBzdHVmZmVkJTIwcGFzdHJ5fGVufDF8fHx8MTc3MzYxMzM2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$8.99"
  },
  {
    name: "Fresh Naan Bread",
    description: "Warm, fluffy bread baked fresh in our traditional tandoor oven",
    image: "https://images.unsplash.com/photo-1610064094685-2015f42d8586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmdoYW4lMjBicmVhZCUyMG5hYW4lMjB0YW5kb29yfGVufDF8fHx8MTc3MzYxMzM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$3.99"
  },
  {
    name: "Afghan Tea",
    description: "Traditional green tea infused with cardamom and served with sweets",
    image: "https://images.unsplash.com/photo-1770162150861-4f48c6689822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRlYSUyMHNlcnZpbmd8ZW58MXx8fHwxNzczNjEzMzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$4.99"
  }
];

export function FeaturedDishes() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent text-sm tracking-wider uppercase">Signature Dishes</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-4">
            Our Featured Dishes
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the authentic flavors of Afghanistan with our carefully crafted traditional dishes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div 
              key={index}
              className="group bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full shadow-lg">
                  <span className="font-semibold">{dish.price}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>

                <button className="mt-4 w-full py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
