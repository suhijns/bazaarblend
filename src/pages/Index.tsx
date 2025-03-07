
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import FeaturedVendors from '@/components/home/FeaturedVendors';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    // Here you would typically send this to your backend
    console.log('Subscribing email:', email);
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our newsletter at " + email,
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <FeaturedVendors />
        
        {/* About Section */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We bring together the best vendors and products to provide you with an exceptional shopping experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality Assurance',
                  description: 'All vendors undergo a rigorous vetting process to ensure they meet our high standards.',
                  icon: '🔍'
                },
                {
                  title: 'Customer Support',
                  description: '24/7 customer support to assist you with any questions or concerns about your purchase.',
                  icon: '🛎️'
                },
                {
                  title: 'Fast Shipping',
                  description: 'Most orders ship within 24 hours, with options for express delivery on many items.',
                  icon: '🚚'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:shadow-md hover:-translate-y-1">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="group">
                <Link to="/about" className="flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Testimonials</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what customers have to say about their shopping experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Regular Customer",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                  quote: "I've been shopping here for years. The quality of products and customer service is unmatched. Highly recommended!",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  role: "First-time Buyer",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                  quote: "As a first-time buyer, I was impressed with how easy the purchasing process was. The product arrived earlier than expected!",
                  rating: 5
                },
                {
                  name: "Amelia Rodriguez",
                  role: "Frequent Shopper",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                  quote: "The vendor selection is amazing. I can find unique items that aren't available on other marketplaces. Never disappointed!",
                  rating: 4
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full w-12 h-12 overflow-hidden border-2 border-white">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center pt-8">
                    <div className="flex justify-center mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="group">
                <Link to="/reviews" className="flex items-center">
                  Read More Reviews
                  <MessageSquare className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for exclusive deals, new product announcements, and more!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                name="email" 
                type="email" 
                placeholder="Your email address" 
                required 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 flex-grow"
              />
              <Button type="submit" className="bg-white text-blue-600 hover:bg-white/90">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
            <p className="text-sm mt-4 opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
