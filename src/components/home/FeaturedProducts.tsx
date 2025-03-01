
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import { getFeaturedProducts } from '@/data/mockData';
import { useInView } from '@/utils/animations';

const FeaturedProducts = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });
  
  const [visibleProducts, setVisibleProducts] = useState(4);
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <p className="text-gray-500 mt-1">Handpicked premium products for you</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex items-center">
            <Link to="/products">
              View all
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center sm:hidden">
          <Button asChild>
            <Link to="/products">View all products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
