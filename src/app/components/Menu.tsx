import { useState } from "react";

const menuCategories = [
  {
    name: "Appetizers",
    items: [
      { name: "Bolani", description: "Stuffed flatbread with potatoes and herbs", price: "$8.99" },
      { name: "Sambosa", description: "Crispy pastries filled with spiced vegetables or meat", price: "$7.99" },
      { name: "Ashak", description: "Leek-filled dumplings with yogurt and meat sauce", price: "$12.99" },
      { name: "Mixed Platter", description: "A selection of our finest appetizers", price: "$15.99" }
    ]
  },
  {
    name: "Main Dishes",
    items: [
      { name: "Kabuli Pulao", description: "Aromatic rice with lamb, raisins, and carrots", price: "$18.99" },
      { name: "Qabili Palaw", description: "Seasoned rice with chunks of lamb and sweet carrots", price: "$19.99" },
      { name: "Mantu", description: "Steamed dumplings with meat, topped with yogurt", price: "$14.99" },
      { name: "Korma", description: "Tender meat in rich tomato and onion sauce", price: "$16.99" },
      { name: "Kofta Challow", description: "Meatballs with rice and tomato sauce", price: "$15.99" }
    ]
  },
  {
    name: "Grilled Specials",
    items: [
      { name: "Lamb Kebab", description: "Marinated lamb chunks grilled to perfection", price: "$17.99" },
      { name: "Chicken Kebab", description: "Tender chicken pieces with Afghan spices", price: "$15.99" },
      { name: "Chapli Kebab", description: "Spiced ground beef patties", price: "$14.99" },
      { name: "Mixed Grill", description: "Combination of lamb, chicken, and beef kebabs", price: "$22.99" },
      { name: "Tikka Kebab", description: "Boneless meat cubes marinated in yogurt and spices", price: "$16.99" }
    ]
  },
  {
    name: "Vegetarian Dishes",
    items: [
      { name: "Sabzi", description: "Spinach cooked with herbs and spices", price: "$11.99" },
      { name: "Dal", description: "Yellow lentils with garlic and spices", price: "$10.99" },
      { name: "Banjan Borani", description: "Fried eggplant with yogurt and tomato sauce", price: "$12.99" },
      { name: "Vegetable Korma", description: "Mixed vegetables in aromatic sauce", price: "$13.99" }
    ]
  },
  {
    name: "Drinks & Desserts",
    items: [
      { name: "Afghan Tea", description: "Green tea with cardamom", price: "$4.99" },
      { name: "Doogh", description: "Traditional yogurt drink", price: "$3.99" },
      { name: "Sheer Yakh", description: "Afghan ice cream with rose water and pistachios", price: "$6.99" },
      { name: "Baklava", description: "Sweet pastry with honey and nuts", price: "$5.99" },
      { name: "Firni", description: "Creamy milk pudding with cardamom", price: "$5.99" }
    ]
  }
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent text-sm tracking-wider uppercase">Full Menu</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-4">
            Explore Our Menu
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic Afghan dishes prepared with love and traditional recipes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-white shadow-lg transform scale-105"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {menuCategories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <span className="text-accent font-semibold ml-4">{item.price}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Note */}
        <div className="mt-12 p-6 bg-accent/10 border-l-4 border-accent rounded-lg">
          <p className="text-foreground">
            <span className="font-semibold">Note:</span> All dishes can be customized to your spice preference. 
            Please inform our staff of any dietary restrictions or allergies.
          </p>
        </div>
      </div>
    </section>
  );
}
