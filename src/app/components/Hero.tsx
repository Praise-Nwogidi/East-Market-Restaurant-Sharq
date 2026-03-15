import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1745808977891-0c820f46f543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwZmVhc3QlMjB0YWJsZXxlbnwxfHx8fDE3NzM2MTMzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Afghan feast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Afghan Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23c89a3f' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-6 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full">
          <span className="text-accent text-sm tracking-wider uppercase">Authentic Afghan Cuisine</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-6">
          East Market & Restaurant
        </h1>
        
        <p className="text-xl sm:text-2xl text-accent mb-4">
          Sharq
        </p>
        
        <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Afghani food – the most delicious food in the world. 
          <span className="text-accent"> Healthy, delicious, and fresh.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection("menu")}
            className="px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Menu
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Order Online
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
