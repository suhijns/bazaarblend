
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import FeaturedVendors from '@/components/home/FeaturedVendors';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
