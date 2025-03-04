
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { usePageTransition } from '@/utils/animations';
import { 
  HelpCircle, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  RefreshCw,
  Search,
  Users
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from '@/components/ui/separator';

const FAQ = () => {
  const isVisible = usePageTransition();

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
              <div className="bg-amber-100 p-3 rounded-full">
                <HelpCircle className="h-6 w-6 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <h3 className="font-medium">Shopping</h3>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <CreditCard className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <h3 className="font-medium">Payment</h3>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Package className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <h3 className="font-medium">Shipping</h3>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">General Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Marketplace?</AccordionTrigger>
                <AccordionContent>
                  Marketplace is an online platform that connects customers with trusted vendors selling high-quality products. 
                  We curate a selection of products across various categories to provide you with an exceptional shopping experience.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I create an account?</AccordionTrigger>
                <AccordionContent>
                  To create an account, click on the "Sign Up" button in the top right corner of any page. 
                  You'll need to provide your name, email address, and create a password. You can also sign up using your Google or Facebook account.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                <AccordionContent>
                  You can reach our customer support team by emailing support@marketplace.com, calling (800) 555-0123 between 9am and 5pm ET 
                  Monday through Friday, or by filling out the contact form on our Contact page.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Separator className="my-8" />
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Shopping</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I find products on Marketplace?</AccordionTrigger>
                <AccordionContent>
                  You can browse products by category, search for specific items using the search bar, 
                  or explore our curated collections on the homepage. You can also filter products by price, rating, and other attributes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I save products for later?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can add products to your wishlist by clicking the heart icon on any product. 
                  You'll need to be logged in to use this feature, and you can view your saved items in your account dashboard.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I know if a product is in stock?</AccordionTrigger>
                <AccordionContent>
                  Product availability is displayed on each product page. If an item is out of stock, 
                  you'll see an "Out of Stock" notice, and in some cases, you may have the option to be notified when it's back in stock.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Payment & Pricing</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), 
                  PayPal, and Apple Pay. In some regions, we also offer buy-now-pay-later options like Klarna and Afterpay.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Are there any hidden fees when I purchase?</AccordionTrigger>
                <AccordionContent>
                  No, there are no hidden fees. The price you see includes the product cost. 
                  Shipping costs, if applicable, will be calculated and displayed during checkout before you complete your purchase.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer discounts or promotional codes?</AccordionTrigger>
                <AccordionContent>
                  Yes, we regularly offer promotions and discount codes. You can find current offers on our 
                  Sales page or by subscribing to our newsletter. If you have a promo code, you can apply it during checkout.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Shipping & Delivery</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
                <AccordionContent>
                  Delivery times vary depending on your location and the vendor. Standard shipping typically takes 3-7 business days, 
                  while expedited shipping options are often available for faster delivery. You can see the estimated delivery date for 
                  each product during checkout.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. 
                  Please note that international orders may be subject to import duties and taxes, which are the responsibility of the customer.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I track my order?</AccordionTrigger>
                <AccordionContent>
                  Once your order ships, you'll receive a shipping confirmation email with tracking information. 
                  You can also track your order by logging into your account and viewing your order history.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Returns & Refunds</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for most items. Products must be in their original condition with all tags and packaging intact. 
                  Some items, such as personalized products or perishable goods, may not be eligible for return. Please check the product page for specific return information.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I initiate a return?</AccordionTrigger>
                <AccordionContent>
                  To initiate a return, log into your account, go to your order history, and select the item you wish to return. 
                  Follow the prompts to generate a return label and instructions. If you have any issues, please contact our customer support team.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How long does it take to process a refund?</AccordionTrigger>
                <AccordionContent>
                  Once we receive your returned item, it typically takes 3-5 business days to process the return. 
                  Refunds will be issued to your original payment method and may take an additional 5-10 business days to appear on your statement, 
                  depending on your financial institution.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer you were looking for, please contact our customer support team and we'll be happy to help.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
