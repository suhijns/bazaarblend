
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { usePageTransition } from '@/utils/animations';
import { Shield } from 'lucide-react';

const Privacy = () => {
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
              <div className="bg-indigo-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Last Updated: May 1, 2023
            </p>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p>
              Your privacy is important to us. It is Marketplace Inc.'s policy to respect your privacy regarding any information we may collect from you across our website, 
              and other sites we own and operate.
            </p>
            
            <h2>1. Information We Collect</h2>
            
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. 
              We also let you know why we're collecting it and how it will be used.
            </p>
            
            <p>
              We may collect the following types of information:
            </p>
            
            <ul>
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information</li>
              <li>Purchase history</li>
              <li>Device and browser information</li>
              <li>Usage data and preferences</li>
            </ul>
            
            <h2>2. Use of Information</h2>
            
            <p>
              We use the information we collect in various ways, including to:
            </p>
            
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Process your transactions</li>
              <li>Send you emails about your orders</li>
              <li>Find and prevent fraud</li>
            </ul>
            
            <h2>3. Data Storage</h2>
            
            <p>
              We retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially 
              acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>
            
            <h2>4. Cookies</h2>
            
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data 
              which may include an anonymous unique identifier.
            </p>
            
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use 
              some portions of our Service.
            </p>
            
            <h2>5. Third-Party Services</h2>
            
            <p>
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform 
              Service-related services or to assist us in analyzing how our Service is used.
            </p>
            
            <p>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            
            <h2>6. Security</h2>
            
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            
            <h2>7. Your Rights</h2>
            
            <p>
              You have the right to:
            </p>
            
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to our use and processing of your personal data</li>
              <li>Request that we limit our use and processing of your personal data</li>
              <li>Request portability of your personal data</li>
            </ul>
            
            <h2>8. Children's Privacy</h2>
            
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. 
              If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us.
            </p>
            
            <h2>9. Changes to This Privacy Policy</h2>
            
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 
              "Last Updated" date at the top of this Privacy Policy.
            </p>
            
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2>10. Contact Us</h2>
            
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            
            <ul>
              <li>By email: privacy@marketplace.com</li>
              <li>By phone: (800) 555-0123</li>
              <li>By mail: 123 Market Street, San Francisco, CA 94105, United States</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
