
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatPrice, usePageTransition } from '@/utils/animations';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Lock, MapPin, ShoppingBag, TruckIcon } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const isVisible = usePageTransition();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(0);
  
  // Form states
  const [formData, setFormData] = useState({
    // Shipping info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    
    // Payment info
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

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

  // Redirect to cart if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate shipping info
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.address || !formData.city || !formData.state || !formData.zipCode) {
      toast.error("Please fill out all required fields");
      return;
    }
    setStep(2);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate payment info
    if (!formData.cardName || !formData.cardNumber || !formData.expDate || !formData.cvv) {
      toast.error("Please fill out all payment fields");
      return;
    }
    
    // Process order (mock)
    toast.success("Order placed successfully!");
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Checkout</h1>
            <div className="flex items-center space-x-2">
              <div className={`flex items-center justify-center rounded-full h-8 w-8 ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>1</div>
              <div className={`w-8 h-0.5 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center rounded-full h-8 w-8 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>2</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {step === 1 && (
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      <h2 className="text-lg font-medium">Shipping Information</h2>
                    </div>
                    <form onSubmit={handleSubmitShipping}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            id="firstName" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            id="lastName" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleInputChange} 
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="address">Address *</Label>
                          <Input 
                            id="address" 
                            name="address" 
                            value={formData.address} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input 
                            id="city" 
                            name="city" 
                            value={formData.city} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State/Province *</Label>
                          <Input 
                            id="state" 
                            name="state" 
                            value={formData.state} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">Postal Code *</Label>
                          <Input 
                            id="zipCode" 
                            name="zipCode" 
                            value={formData.zipCode} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Input 
                            id="country" 
                            name="country" 
                            value={formData.country} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                      </div>
                      <div className="flex justify-between mt-6">
                        <Button type="button" variant="outline" asChild>
                          <Link to="/cart">Back to Cart</Link>
                        </Button>
                        <Button type="submit">Continue to Payment</Button>
                      </div>
                    </form>
                  </div>
                )}

                {step === 2 && (
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                      <h2 className="text-lg font-medium">Payment Information</h2>
                    </div>
                    <form onSubmit={handleSubmitPayment}>
                      <div className="space-y-4 mb-6">
                        <div>
                          <Label htmlFor="cardName">Name on Card *</Label>
                          <Input 
                            id="cardName" 
                            name="cardName" 
                            value={formData.cardName} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input 
                            id="cardNumber" 
                            name="cardNumber" 
                            value={formData.cardNumber} 
                            onChange={handleInputChange} 
                            required 
                            placeholder="XXXX XXXX XXXX XXXX"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expDate">Expiration Date *</Label>
                            <Input 
                              id="expDate" 
                              name="expDate" 
                              value={formData.expDate} 
                              onChange={handleInputChange} 
                              required 
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input 
                              id="cvv" 
                              name="cvv" 
                              value={formData.cvv} 
                              onChange={handleInputChange} 
                              required 
                              placeholder="XXX"
                            />
                          </div>
                        </div>
                        <div className="flex items-center mt-2">
                          <Lock className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-500">Your payment information is secure.</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-6">
                        <Button type="button" variant="outline" onClick={() => setStep(1)}>
                          Back to Shipping
                        </Button>
                        <Button type="submit">
                          Place Order
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                <div className="max-h-80 overflow-y-auto mb-4">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex py-2">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium">
                            <h3>{item.product.name}</h3>
                            <p className="ml-4">{formatPrice(item.product.price * item.quantity)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div>Subtotal</div>
                    <div>{formatPrice(total)}</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Shipping</div>
                    <div>Free</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Tax</div>
                    <div>{formatPrice(total * 0.1)}</div>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium text-lg">
                    <div>Total</div>
                    <div>{formatPrice(total * 1.1)}</div>
                  </div>
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

export default Checkout;
