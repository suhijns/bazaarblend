
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, ShoppingBag } from 'lucide-react';

interface AddToCartButtonProps {
  product: Product;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  withQuantity?: boolean;
}

const AddToCartButton = ({ 
  product, 
  variant = 'default',
  size = 'default',
  withQuantity = false 
}: AddToCartButtonProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    if (withQuantity) {
      setQuantity(1); // Reset quantity after adding
    }
  };

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex items-center">
      {withQuantity && (
        <div className="flex items-center mr-4 border border-gray-200 rounded-md">
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8 rounded-r-none border-r border-gray-200"
            onClick={decrement}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <div className="w-10 text-center">{quantity}</div>
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8 rounded-l-none border-l border-gray-200"
            onClick={increment}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      )}
      <Button 
        variant={variant} 
        size={size}
        onClick={handleAddToCart}
        className="flex items-center"
      >
        <ShoppingBag className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
