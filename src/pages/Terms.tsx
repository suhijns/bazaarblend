
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { usePageTransition } from '@/utils/animations';
import { FileText } from 'lucide-react';

const Terms = () => {
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
              <div className="bg-gray-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-gray-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Last Updated: May 1, 2023
            </p>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Marketplace website 
              (the "Service") operated by Marketplace Inc. ("us", "we", or "our").
            </p>
            
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. 
              These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, 
              you may not access the Service.
            </p>
            
            <h2>1. Accounts</h2>
            
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, 
              whether your password is with our Service or a third-party service.
            </p>
            
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or 
              unauthorized use of your account.
            </p>
            
            <h2>2. Purchases</h2>
            
            <p>
              If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information 
              relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, 
              and your shipping information.
            </p>
            
            <p>
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; 
              and that (ii) the information you supply to us is true, correct, and complete.
            </p>
            
            <p>
              By submitting such information, you grant us the right to provide the information to third parties for purposes of facilitating the completion of Purchases.
            </p>
            
            <h2>3. Content</h2>
            
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). 
              You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
            </p>
            
            <p>
              By posting Content to the Service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such Content on and through the Service.
            </p>
            
            <h2>4. Links To Other Web Sites</h2>
            
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Marketplace Inc.
            </p>
            
            <p>
              Marketplace Inc. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. 
              You further acknowledge and agree that Marketplace Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged 
              to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
            
            <h2>5. Termination</h2>
            
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
            
            <h2>6. Governing Law</h2>
            
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid 
              or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2>7. Changes</h2>
            
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' 
              notice prior to any new terms taking effect.
            </p>
            
            <p>
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, 
              you agree to be bound by the revised terms.
            </p>
            
            <h2>8. Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at legal@marketplace.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
