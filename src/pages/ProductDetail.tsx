
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getProductById, getVendorById, getProductsByVendor } from '@/data/mockData';
import ProductCard from '@/components/ui/ProductCard';
import { formatPrice, usePageTransition } from '@/utils/animations';
import { toast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const isVisible = usePageTransition();
  const [product, setProduct] = useState(id ? getProductById(id) : null);
  const [vendor, setVendor] = useState(product ? getVendorById(product.vendorId) : null);
  const [relatedProducts, setRelatedProducts] = useState(
    product ? getProductsByVendor(product.vendorId).filter(p => p.id !== product.id).slice(0, 4) : []
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Demo images for product gallery
  const productImages = [
    product?.image,
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  ];

  useEffect(() => {
    // Fetch product data based on ID
    if (id) {
      const productData = getProductById(id);
      setProduct(productData);
      
      if (productData) {
        const vendorData = getVendorById(productData.vendorId);
        setVendor(vendorData);
        
        const related = getProductsByVendor(productData.vendorId)
          .filter(p => p.id !== productData.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product?.name} has been added to your cart.`,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-medium">Product not found</h2>
            <p className="mt-2 text-gray-500">The product you are looking for doesn't exist.</p>
            <Button asChild className="mt-4">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex text-sm">
              <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="flex items-center">
                <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="text-gray-900 font-medium truncate">{product.name}</li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              
              <div className="flex space-x-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`relative aspect-w-1 aspect-h-1 w-20 overflow-hidden rounded-md transition-all ${
                      selectedImage === index 
                        ? 'ring-2 ring-black' 
                        : 'ring-1 ring-gray-200 hover:ring-gray-400'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <Link 
                  to={`/vendor/${product.vendorId}`}
                  className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                >
                  {product.vendor}
                </Link>
                <h1 className="mt-1 text-3xl font-semibold">{product.name}</h1>
                
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.934l-6.18 3.246L5.66 12.8 0 7.748l7.38-1.073L10 0l2.62 6.675L20 7.748l-5.66 5.052 1.84 6.38L10 15.934z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating.toFixed(1)} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              
              <p className="text-2xl font-medium">{formatPrice(product.price)}</p>
              
              <div className="prose prose-sm max-w-none text-gray-600">
                <p>{product.description}</p>
              </div>
              
              <div className="pt-6 border-t border-gray-200 space-y-6">
                {/* Quantity Selector */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <span className="sr-only">Decrease quantity</span>
                      <span className="text-lg">−</span>
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="mx-2 w-12 text-center border-none focus:outline-none focus:ring-0"
                    />
                    <button
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <span className="sr-only">Increase quantity</span>
                      <span className="text-lg">+</span>
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <div className="flex space-x-4">
                  <Button 
                    size="lg" 
                    className="flex-1"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
                
                {/* Vendor Information */}
                {vendor && (
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-medium mb-2">Sold by</h3>
                    <Link 
                      to={`/vendor/${vendor.id}`}
                      className="flex items-center hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                        <img
                          src={vendor.logo}
                          alt={vendor.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium">{vendor.name}</p>
                        <div className="mt-1 flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(vendor.rating) ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 15.934l-6.18 3.246L5.66 12.8 0 7.748l7.38-1.073L10 0l2.62 6.675L20 7.748l-5.66 5.052 1.84 6.38L10 15.934z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                          <span className="ml-1 text-xs text-gray-500">{vendor.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold mb-8">More from this vendor</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
