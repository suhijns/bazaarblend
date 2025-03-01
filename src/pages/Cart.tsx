
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { formatPrice, usePageTransition } from '@/utils/animations';
import { Separator } from '@/components/ui/separator';
import { toast } from "sonner";

const Cart = () => {
  const isVisible = usePageTransition();
  const { cart, updateItemQuantity, removeItem, clearCart } = useCart();

  const [total, setTotal] = useState(0);

  // Calculate total price
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => {
      return acc + (item.product.price * item.quantity);
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateItemQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
    toast.success("Item removed from cart");
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center mb-8">
            <ShoppingCart className="h-6 w-6 mr-2" />
            <h1 className="text-2xl font-semibold">Your Cart</h1>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="flex justify-center mb-4">
                <ShoppingCart className="h-12 w-12 text-gray-300" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cart.map((item) => (
                          <li key={item.product.id} className="py-6 flex">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium">
                                  <h3>
                                    <Link to={`/product/${item.product.id}`} className="hover:text-blue-600">
                                      {item.product.name}
                                    </Link>
                                  </h3>
                                  <p className="ml-4">{formatPrice(item.product.price * item.quantity)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.product.vendor}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex items-center space-x-2">
                                  <Button 
                                    variant="outline" 
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-8 text-center">{item.quantity}</span>
                                  <Button 
                                    variant="outline" 
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-red-600 hover:text-red-500 flex items-center"
                                    onClick={() => handleRemoveItem(item.product.id)}
                                  >
                                    <Trash2 className="h-4 w-4 mr-1" />
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-3 sm:px-6">
                    <button
                      type="button"
                      className="text-sm font-medium text-red-600 hover:text-red-500"
                      onClick={handleClearCart}
                    >
                      Clear cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div>Subtotal</div>
                      <div>{formatPrice(total)}</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Shipping</div>
                      <div>Calculated at checkout</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Tax</div>
                      <div>Calculated at checkout</div>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <div>Total</div>
                      <div>{formatPrice(total)}</div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </Button>
                    <div className="text-center mt-4">
                      <Link to="/products" className="text-sm text-blue-600 hover:underline">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
