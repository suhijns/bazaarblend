
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getVendorById, getProductsByVendor } from '@/data/mockData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { ArrowLeft, Store, Star, MapPin, Mail, Phone, Clock, Calendar, CheckCircle, Filter, ShoppingBag } from 'lucide-react';
import { useInView } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const VendorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vendor = getVendorById(id || '');
  const allProducts = getProductsByVendor(id || '');
  const [products, setProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products by category
  const filterProducts = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter(product => product.category === category));
    }
  };

  // Get unique categories from products
  const categories = ['all', ...Array.from(new Set(allProducts.map(product => product.category)))];

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
        {/* Vendor Hero Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <Button variant="ghost" asChild className="text-white border-white hover:bg-white/10">
                <Link to="/vendors" className="inline-flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to vendors
                </Link>
              </Button>
            </div>
            
            <div 
              ref={ref} 
              className={`flex flex-col md:flex-row items-start gap-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-24 w-24 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-full bg-white border-4 border-white shadow-xl">
                <img
                  src={vendor.logo}
                  alt={vendor.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-white">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{vendor.name}</h1>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">Verified</Badge>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span className="font-medium">{vendor.rating.toFixed(1)}</span>
                  </div>
                  <span className="mx-2 text-white/50">•</span>
                  <span>{vendor.productsCount} products</span>
                  <span className="mx-2 text-white/50">•</span>
                  <span>Member since 2021</span>
                </div>
                <p className="text-white/90 max-w-3xl">{vendor.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Vendor Information Tabs */}
          <div className="mb-12">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="w-full justify-start mb-6 bg-gray-100 p-1">
                <TabsTrigger value="products" className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Products
                </TabsTrigger>
                <TabsTrigger value="about" className="flex items-center gap-2">
                  <Store className="h-4 w-4" />
                  About
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Reviews
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="products">
                {/* Product Filter */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                  <h2 className="text-2xl font-semibold">Products from {vendor.name}</h2>
                  <div className="flex items-center overflow-x-auto pb-2">
                    <Filter className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                    <div className="flex gap-2">
                      {categories.map((category) => (
                        <Badge 
                          key={category} 
                          variant={activeCategory === category ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => filterProducts(category)}
                        >
                          {category === 'all' ? 'All Products' : category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {products.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No products available</h3>
                    <p className="text-gray-500">This vendor doesn't have any products in this category yet.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="about">
                <div className="bg-white rounded-lg border p-6">
                  <h2 className="text-2xl font-semibold mb-6">About {vendor.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Company Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Store className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Business Type</h4>
                            <p className="text-gray-600">Retailer & Wholesaler</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Year Established</h4>
                            <p className="text-gray-600">2021</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Location</h4>
                            <p className="text-gray-600">New York, USA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Email</h4>
                            <p className="text-gray-600">contact@{vendor.name.toLowerCase().replace(/\s+/g, '')}.com</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Phone</h4>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Working Hours</h4>
                            <p className="text-gray-600">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Quality Certifications</h3>
                    <div className="flex flex-wrap gap-3">
                      {['ISO 9001', 'Fair Trade', 'Organic Certified', 'Eco-Friendly'].map((cert) => (
                        <div key={cert} className="flex items-center px-3 py-2 bg-green-50 text-green-700 rounded-lg">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="bg-white rounded-lg border p-6">
                  <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
                  <div className="flex items-center mb-8">
                    <div className="flex items-center mr-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${
                            i < Math.floor(vendor.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-bold">{vendor.rating.toFixed(1)}</span>
                    <span className="text-gray-500 ml-2">out of 5</span>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      {
                        name: 'Emma Johnson',
                        date: '2 months ago',
                        rating: 5,
                        comment: 'Excellent products and fast shipping. Would definitely recommend!'
                      },
                      {
                        name: 'Michael Smith',
                        date: '3 months ago',
                        rating: 4,
                        comment: 'Quality products and good customer service. Delivery was a bit slow.'
                      },
                      {
                        name: 'Sarah Wilson',
                        date: '4 months ago',
                        rating: 5,
                        comment: 'Best vendor I\'ve purchased from! Product quality exceeded my expectations.'
                      }
                    ].map((review, index) => (
                      <div key={index} className="border-b pb-6 last:border-b-0">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-medium">{review.name}</h4>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3 text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorDetail;
