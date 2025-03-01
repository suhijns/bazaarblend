
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">MARKETPLACE</h2>
            <p className="text-sm text-gray-500 max-w-xs">
              A premium marketplace for exceptional products from selected vendors.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Shopping</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/vendors" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Vendors
                </Link>
              </li>
              <li>
                <Link to="/sales" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Sales
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-500 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-500 hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Marketplace Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
