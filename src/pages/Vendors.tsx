
import { useEffect } from 'react';
import { vendors } from '@/data/mockData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VendorCard from '@/components/ui/VendorCard';
import { Store } from 'lucide-react';
import { useInView } from '@/utils/animations';

const Vendors = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div 
              ref={ref} 
              className={`text-center mb-12 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Store className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vendors</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our curated selection of premium vendors offering high-quality products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vendors.map((vendor, index) => (
                <VendorCard key={vendor.id} vendor={vendor} index={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vendors;
