
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { usePageTransition } from '@/utils/animations';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Sample job listings data
const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Customer Support Specialist",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
];

const Careers = () => {
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
              <div className="bg-green-100 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're on a mission to revolutionize online shopping. Come build the future with us.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto mb-16">
            <p>
              At Marketplace, we're building the next generation of e-commerce experiences. We're a team of passionate individuals
              who love what we do and are dedicated to creating something truly remarkable.
            </p>
            <p>
              We believe in a collaborative, inclusive work environment where everyone has a voice and the opportunity to make a
              meaningful impact. We offer competitive compensation, great benefits, and the chance to work on challenging problems
              that affect millions of users.
            </p>
          </div>

          <Separator className="my-12" />
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
              {jobListings.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-medium">{job.title}</h3>
                      <p className="text-gray-600">{job.department} • {job.type}</p>
                      <div className="flex items-center mt-2 text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0" variant="outline">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't see a position that fits?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities.
            </p>
            <Button>
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
