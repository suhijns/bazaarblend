
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { usePageTransition } from '@/utils/animations';
import { Building2, Users, Award, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const AboutUs = () => {
  const isVisible = usePageTransition();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Marketplace</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're on a mission to build the most trusted and convenient destination for quality products.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto mb-16">
            <p>
              Founded in 2023, Marketplace began with a simple idea: create a platform where people could find exceptional products 
              from trusted vendors all in one place. What started as a small curated collection has grown into a thriving 
              online marketplace featuring thousands of products across dozens of categories.
            </p>
            <p>
              We believe in quality over quantity, which is why we carefully vet each vendor before they can sell on our platform.
              This ensures that every product you find on Marketplace meets our high standards for quality, authenticity, and value.
            </p>
          </div>

          <Separator className="my-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Our Team</h3>
              <p className="text-gray-600">
                Our diverse team of experts is passionate about creating the best shopping experience possible.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Our Values</h3>
              <p className="text-gray-600">
                Quality, transparency, and customer satisfaction are at the core of everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Our Commitment</h3>
              <p className="text-gray-600">
                We're committed to sustainability, ethical sourcing, and supporting independent businesses.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
            <p className="text-center max-w-3xl mx-auto">
              "We're building the most trusted marketplace where people discover products they love from vendors who care."
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
