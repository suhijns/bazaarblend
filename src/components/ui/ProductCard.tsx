
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { formatPrice } from '@/utils/animations';
import { useInView } from '@/utils/animations';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px 100px 0px',
  });

  // Calculate staggered animation delay based on index
  const delay = `${index * 0.05}s`;

  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-md ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: delay }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-sm text-gray-500">{product.vendor}</h3>
          <h2 className="mt-1 text-lg font-medium">{product.name}</h2>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-medium">{formatPrice(product.price)}</p>
            <div className="flex items-center">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
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
              <span className="ml-1 text-xs text-gray-500">
                ({product.reviews})
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
