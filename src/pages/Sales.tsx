
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/mockData';
import { usePageTransition } from '@/utils/animations';
import { Link } from 'react-router-dom';
import { Percent } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';

const Sales = () => {
  const isVisible = usePageTransition();
  
  // Filter products with discount
  const discountedProducts = products.filter(product => product.discount && product.discount > 0);
  
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
              <div className="bg-red-100 p-3 rounded-full">
                <Percent className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Special Offers & Discounts</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our current sales and special offers. Limited time discounts on selected products.
            </p>
          </div>
          
          {discountedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {discountedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-900 mb-4">No active sales at the moment</h3>
              <p className="text-gray-600 mb-8">Check back soon for new discounts and special offers!</p>
              <Button asChild>
                <Link to="/products">Browse All Products</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sales;
