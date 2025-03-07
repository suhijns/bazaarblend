
import { useEffect } from 'react';
import { vendors } from '@/data/mockData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VendorCard from '@/components/ui/VendorCard';
import { Store, Search, Filter, MapPin, Star, Info } from 'lucide-react';
import { useInView } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Vendors = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Featured vendor categories
  const vendorCategories = [
    'Electronics', 'Fashion', 'Home Decor', 'Beauty', 'Food & Beverage', 'Sports'
  ];

  // Featured locations
  const locations = [
    'New York', 'Los Angeles', 'Chicago', 'Miami', 'Seattle', 'Austin'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Discover Our Premium Vendors</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore unique products from our carefully selected vendors, each offering exceptional quality and service.
            </p>
            <div className="relative max-w-md mx-auto">
              <Input 
                type="text" 
                placeholder="Search vendors" 
                className="pl-10 pr-4 py-3 rounded-full text-black shadow-lg" 
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter Section */}
            <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-gray-500 mr-2" />
                  <h2 className="text-lg font-medium">Filter Vendors</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {vendorCategories.map((category) => (
                    <Badge key={category} variant="outline" className="cursor-pointer hover:bg-gray-100">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-700 mr-2">Locations:</span>
                {locations.map((location) => (
                  <Badge key={location} variant="secondary" className="cursor-pointer hover:bg-gray-200">
                    {location}
                  </Badge>
                ))}
              </div>
            </div>

            <div 
              ref={ref} 
              className={`text-center mb-12 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Store className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vendors</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our curated selection of premium vendors offering high-quality products.
              </p>
            </div>

            {/* Featured Vendors */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Featured Vendors</h3>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {vendors.slice(0, 3).map((vendor, index) => (
                  <VendorCard key={vendor.id} vendor={vendor} index={index} />
                ))}
              </div>
            </div>

            {/* All Vendors */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">All Vendors</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="text-sm border rounded-md p-1">
                    <option>Popular</option>
                    <option>Newest</option>
                    <option>Rating: High to Low</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vendors.map((vendor, index) => (
                  <VendorCard key={vendor.id} vendor={vendor} index={index} />
                ))}
              </div>
            </div>

            {/* Vendor Information */}
            <div className="bg-indigo-50 rounded-lg p-6 mt-12">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                  <Info className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Become a Vendor</h3>
                  <p className="text-gray-700 mb-4">
                    Join our marketplace and showcase your products to thousands of customers. 
                    We provide the platform, tools, and support you need to grow your business.
                  </p>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">Apply Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vendors;
