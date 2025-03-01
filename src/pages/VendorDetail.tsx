
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getVendorById, getProductsByVendor } from '@/data/mockData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { ArrowLeft, Store, Star } from 'lucide-react';
import { useInView } from '@/utils/animations';
import { Button } from '@/components/ui/button';

const VendorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vendor = getVendorById(id || '');
  const products = getProductsByVendor(id || '');
  
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!vendor) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Vendor not found</h1>
            <Button asChild>
              <Link to="/vendors">Back to vendors</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <Button variant="ghost" asChild className="mb-6">
                <Link to="/vendors" className="inline-flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to vendors
                </Link>
              </Button>
            </div>

            <div 
              ref={ref} 
              className={`flex flex-col md:flex-row items-start gap-8 mb-12 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-24 w-24 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={vendor.logo}
                  alt={vendor.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{vendor.name}</h1>
                  <div className="bg-blue-100 p-1.5 rounded-full">
                    <Store className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span className="font-medium">{vendor.rating.toFixed(1)}</span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-600">{vendor.productsCount} products</span>
                </div>
                <p className="text-gray-600 max-w-3xl">{vendor.description}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">Products from {vendor.name}</h2>
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No products available from this vendor.</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorDetail;
