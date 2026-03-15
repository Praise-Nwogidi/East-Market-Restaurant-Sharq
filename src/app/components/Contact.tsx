import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent text-sm tracking-wider uppercase">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-4">
            Visit Us Today
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We look forward to serving you authentic Afghan cuisine in a warm, welcoming atmosphere
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 East Market Street<br />
                    Sharq District<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@eastmarketsharq.com<br />
                    reservations@eastmarketsharq.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-2">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-serif text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <button className="p-3 bg-primary/10 hover:bg-primary hover:text-white rounded-lg transition-colors group">
                    <Facebook className="w-6 h-6 text-primary group-hover:text-white" />
                  </button>
                  <button className="p-3 bg-accent/10 hover:bg-accent hover:text-white rounded-lg transition-colors group">
                    <Instagram className="w-6 h-6 text-accent group-hover:text-white" />
                  </button>
                  <button className="p-3 bg-secondary/10 hover:bg-secondary hover:text-white rounded-lg transition-colors group">
                    <Twitter className="w-6 h-6 text-secondary group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
            <h3 className="text-2xl font-serif text-foreground mb-6">Make a Reservation</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-foreground mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground mb-2">Number of Guests</label>
                <select className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground mb-2">Special Requests (Optional)</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Any dietary restrictions or special occasions?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Reserve Now
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 h-96 bg-muted rounded-lg overflow-hidden border border-border">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
              <p className="text-lg">Map Location</p>
              <p className="text-sm mt-2">123 East Market Street, Sharq District</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
