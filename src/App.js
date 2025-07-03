import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, Users, Settings, Star, ArrowRight, Menu, X, Phone, Mail, Clock, Shield, Award, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Fleet', 'Services', 'About', 'Contact'];

  const featuredCars = [
    {
      id: 1,
      name: 'Lamborghini Huracán',
      category: 'Supercar',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specs: ['V10 Engine', '630 HP', '0-60 in 3.2s', 'AWD']
    },
    {
      id: 2,
      name: 'Porsche 911 Turbo S',
      category: 'Sports Car',
      price: '$649',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specs: ['Flat-6 Turbo', '640 HP', '0-60 in 2.6s', 'AWD']
    },
    {
      id: 3,
      name: 'BMW M8 Competition',
      category: 'Grand Tourer',
      price: '$549',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specs: ['V8 Twin-Turbo', '617 HP', '0-60 in 3.2s', 'AWD']
    }
  ];

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Premium Insurance',
      description: 'Comprehensive coverage for complete peace of mind during your rental experience.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure your journey is smooth and worry-free.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Concierge Service',
      description: 'White-glove service with vehicle delivery and pickup at your preferred location.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Booking',
      description: 'Reserve your dream car in minutes with our streamlined booking process.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCars.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-lg border-b border-red-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center font-bold text-xl">
                A
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                APEX MOTORS
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-red-500/10"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Phone className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium">+1 (555) 123-4567</span>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-red-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Car Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${featuredCars[currentSlide].image})`
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4">
              PREMIUM CAR RENTAL
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">
                Drive Your
              </span>
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Dream Car
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the thrill of luxury automotive excellence. From supercars to classics, 
            we deliver premium vehicles that match your passion for performance.
          </p>

          {/* Quick Booking Bar */}
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Pick-up Location
                </label>
                <input 
                  type="text" 
                  placeholder="Enter location"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Pick-up Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Return Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center space-x-2">
                <span>Search Cars</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {featuredCars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-red-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section id="fleet" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Premium <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Fleet</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Handpicked collection of the world's finest automobiles, meticulously maintained for your ultimate driving experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="group bg-gradient-to-b from-gray-800/50 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 border border-gray-700/50"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-red-400">
                    {car.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{car.name}</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">4.9 (127 reviews)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {car.specs.map((spec, index) => (
                      <div key={index} className="text-sm text-gray-300 bg-gray-800/50 rounded-lg px-3 py-1">
                        {spec}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-white">{car.price}</span>
                      <span className="text-gray-400 text-sm">/day</span>
                    </div>
                    <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Choose <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Apex Motors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We go beyond car rental to deliver an unparalleled luxury experience tailored to automotive enthusiasts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-b from-gray-800/30 to-black/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-red-500 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-12 border border-red-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Experience <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Excellence?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their luxury automotive experiences. 
              Your dream car awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Reserve Your Car</span>
                <ArrowRight className="h-6 w-6" />
              </button>
              <button className="border-2 border-red-500 text-red-500 px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-500/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Us Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center font-bold">
                  A
                </div>
                <span className="text-xl font-bold text-white">APEX MOTORS</span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium car rental service delivering unmatched luxury and performance for automotive enthusiasts.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Our Fleet</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Locations</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Insurance</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-red-500" />
                  <span>info@apexmotors.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>123 Luxury Drive, Miami, FL</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Apex Motors. All rights reserved. Drive with passion, arrive with style.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;