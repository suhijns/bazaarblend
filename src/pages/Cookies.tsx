
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { usePageTransition } from '@/utils/animations';
import { Cookie } from 'lucide-react';

const Cookies = () => {
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
              <div className="bg-orange-100 p-3 rounded-full">
                <Cookie className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Last Updated: May 1, 2023
            </p>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p>
              This Cookie Policy explains how Marketplace Inc. ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. 
              It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2>What are cookies?</h2>
            
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order 
              to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            
            <p>
              Cookies set by the website owner (in this case, Marketplace Inc.) are called "first party cookies". Cookies set by parties other than the website owner are 
              called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g., advertising, 
              interactive content and analytics).
            </p>
            
            <h2>Why do we use cookies?</h2>
            
            <p>
              We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer 
              to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience 
              on our website. Third parties serve cookies through our website for advertising, analytics and other purposes.
            </p>
            
            <h2>Types of cookies we use</h2>
            
            <p>
              The specific types of first and third party cookies served through our website and the purposes they perform are described below:
            </p>
            
            <h3>Essential website cookies:</h3>
            
            <ul>
              <li>Authentication cookies to identify you when you sign in</li>
              <li>Session cookies to remember your input while browsing</li>
              <li>Security cookies for security purposes</li>
            </ul>
            
            <h3>Performance and functionality cookies:</h3>
            
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Remember if you've already completed a survey</li>
              <li>Remember if you've already seen our cookie notice</li>
            </ul>
            
            <h3>Analytics and customization cookies:</h3>
            
            <ul>
              <li>Collect information about how you use our website</li>
              <li>Help us understand which parts of our website are most popular</li>
              <li>Help us improve our website</li>
            </ul>
            
            <h3>Advertising cookies:</h3>
            
            <ul>
              <li>Deliver advertisements relevant to your interests</li>
              <li>Limit how many times you see an advertisement</li>
              <li>Measure the effectiveness of advertising campaigns</li>
            </ul>
            
            <h2>How can you control cookies?</h2>
            
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. 
              The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly 
              necessary to provide you with services.
            </p>
            
            <p>
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your 
              access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary 
              from browser-to-browser, you should visit your browser's help menu for more information.
            </p>
            
            <h2>How often will we update this Cookie Policy?</h2>
            
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory 
              reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <h2>Where can you get further information?</h2>
            
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at privacy@marketplace.com or by post to:
            </p>
            
            <p>
              Marketplace Inc.<br />
              123 Market Street<br />
              San Francisco, CA 94105<br />
              United States<br />
              Phone: (800) 555-0123
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
