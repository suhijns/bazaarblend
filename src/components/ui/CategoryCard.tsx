
import { Link } from 'react-router-dom';
import { Category } from '@/types';
import { useInView } from '@/utils/animations';
import { getProductsByCategory } from '@/data/mockData';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px 100px 0px',
  });

  // Calculate staggered animation delay based on index
  const delay = `${index * 0.05}s`;
  
  // Get number of products in this category
  const products = getProductsByCategory(category.id);

  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-md ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: delay }}
    >
      <Link 
        to={`/products?category=${category.id}`} 
        className="block p-6 text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 flex items-center justify-center bg-gray-100 rounded-full">
            {category.icon ? (
              <img src={category.icon} alt={category.name} className="h-8 w-8" />
            ) : (
              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium">{category.name.charAt(0)}</span>
              </div>
            )}
          </div>
        </div>
        <h3 className="text-lg font-medium mb-2">{category.name}</h3>
        <p className="text-sm text-gray-500">{products.length} products</p>
        <div className="mt-4">
          <span className="text-sm text-blue-600 group-hover:underline">Browse category</span>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
