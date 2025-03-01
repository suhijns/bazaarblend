
import { Link } from 'react-router-dom';
import { Vendor } from '@/types';
import { useInView } from '@/utils/animations';

interface VendorCardProps {
  vendor: Vendor;
  index: number;
}

const VendorCard = ({ vendor, index }: VendorCardProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px 100px 0px',
  });

  // Calculate staggered animation delay based on index
  const delay = `${index * 0.05}s`;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-lg bg-white border border-gray-200 transition-all duration-300 hover:shadow-md ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: delay }}
    >
      <Link to={`/vendor/${vendor.id}`} className="block p-6">
        <div className="flex items-center">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
            <img
              src={vendor.logo}
              alt={vendor.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium">{vendor.name}</h3>
            <div className="mt-1 flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
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
              <span className="ml-1 text-sm text-gray-500">{vendor.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-500 line-clamp-2">{vendor.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{vendor.productsCount} products</span>
          <span className="text-sm text-blue-600 group-hover:underline">View store</span>
        </div>
      </Link>
    </div>
  );
};

export default VendorCard;
