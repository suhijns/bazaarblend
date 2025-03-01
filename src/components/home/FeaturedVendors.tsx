
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/ui/VendorCard';
import { getFeaturedVendors } from '@/data/mockData';
import { useInView } from '@/utils/animations';

const FeaturedVendors = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });
  
  const featuredVendors = getFeaturedVendors();
  
  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
      <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Featured Vendors</h2>
            <p className="text-gray-500 mt-1">Our curated selection of premium sellers</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex items-center">
            <Link to="/vendors">
              View all
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVendors.map((vendor, index) => (
            <VendorCard key={vendor.id} vendor={vendor} index={index} />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center sm:hidden">
          <Button asChild>
            <Link to="/vendors">View all vendors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
