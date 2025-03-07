
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Star, MessageSquare, Filter, ThumbsUp, Search } from 'lucide-react';
import { usePageTransition } from '@/utils/animations';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  product?: string;
  vendor?: string;
  avatar?: string;
  helpful: number;
}

const Reviews = () => {
  const isVisible = usePageTransition();
  const { toast } = useToast();
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'I absolutely love the products I received. The quality exceeded my expectations, and the shipping was incredibly fast. The packaging was also eco-friendly, which I appreciate.',
      date: '2023-12-15',
      product: 'Wireless Headphones',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      helpful: 24
    },
    {
      id: '2',
      name: 'Michael Chen',
      rating: 4,
      comment: 'Great experience overall. The product works as described. The only minor issue was that the delivery was delayed by a day, but customer service was responsive and helpful.',
      date: '2023-11-28',
      product: 'Smart Watch',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      helpful: 15
    },
    {
      id: '3',
      name: 'Amelia Rodriguez',
      rating: 5,
      comment: 'The vendor was extremely professional and helpful. They answered all my questions promptly and even sent a personalized thank you note with my order.',
      date: '2023-12-03',
      vendor: 'TechWorld',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      helpful: 32
    },
    {
      id: '4',
      name: 'James Wilson',
      rating: 3,
      comment: 'Decent product for the price. It does what it says, but the build quality could be better. I would recommend it if you\'re on a budget.',
      date: '2023-11-20',
      product: 'Portable Speaker',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      helpful: 8
    },
    {
      id: '5',
      name: 'Emily Zhang',
      rating: 5,
      comment: 'I\'ve purchased from this vendor multiple times and have never been disappointed. Their customer service is exceptional and their products are high-quality.',
      date: '2023-12-10',
      vendor: 'HomeGoods',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      helpful: 19
    },
    {
      id: '6',
      name: 'David Brown',
      rating: 4,
      comment: 'The product arrived in perfect condition and works great. Installation was easy following the provided instructions.',
      date: '2023-11-15',
      product: 'Smart Home Hub',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      helpful: 11
    }
  ]);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newReview: Review = {
      id: `${reviews.length + 1}`,
      name: formData.get('name') as string,
      rating: parseInt(formData.get('rating') as string),
      comment: formData.get('comment') as string,
      date: new Date().toISOString().split('T')[0],
      product: formData.get('product') as string,
      helpful: 0
    };
    
    setReviews([newReview, ...reviews]);
    
    toast({
      title: "Review Submitted",
      description: "Thank you for sharing your experience!",
    });
    
    e.currentTarget.reset();
  };

  const handleHelpfulClick = (reviewId: string) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: review.helpful + 1 } 
        : review
    ));
    
    toast({
      title: "Thanks for your feedback!",
      description: "You marked this review as helpful.",
    });
  };

  const filteredReviews = reviews.filter(review => {
    const matchesRating = filterRating === null || review.rating === filterRating;
    const matchesSearch = searchTerm === '' || 
      review.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (review.product && review.product.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (review.vendor && review.vendor.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesRating && matchesSearch;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our customers have to say about their shopping experiences.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search reviews..." 
                  className="pl-10 w-full sm:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center border rounded-md p-2">
                <Filter className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-700 mr-2">Filter by rating:</span>
                <div className="flex gap-1">
                  {[null, 5, 4, 3, 2, 1].map((rating, index) => (
                    <button
                      key={index}
                      onClick={() => setFilterRating(rating)}
                      className={`w-8 h-8 rounded-full text-sm flex items-center justify-center transition-colors
                        ${rating === filterRating 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                    >
                      {rating === null ? 'All' : rating}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button>Write a Review</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Share Your Experience</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmitReview} className="space-y-4 py-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="rating" className="text-sm font-medium">Rating</label>
                    <select 
                      id="rating" 
                      name="rating" 
                      required
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select a rating</option>
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Good</option>
                      <option value="3">3 - Average</option>
                      <option value="2">2 - Below Average</option>
                      <option value="1">1 - Poor</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="product" className="text-sm font-medium">Product/Vendor (Optional)</label>
                    <Input id="product" name="product" />
                  </div>
                  <div>
                    <label htmlFor="comment" className="text-sm font-medium">Your Review</label>
                    <Textarea id="comment" name="comment" rows={4} required />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Submit Review</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md"
                >
                  <div className="flex items-start">
                    <div className="mr-4">
                      {review.avatar ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img 
                            src={review.avatar} 
                            alt={review.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xl font-medium text-gray-700">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{review.name}</h3>
                          <div className="flex items-center mt-1">
                            {renderStars(review.rating)}
                            <span className="ml-2 text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        {(review.product || review.vendor) && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            {review.product || review.vendor}
                          </Badge>
                        )}
                      </div>
                      <p className="mt-3 text-gray-700">{review.comment}</p>
                      <div className="mt-4 flex items-center">
                        <button 
                          onClick={() => handleHelpfulClick(review.id)}
                          className="flex items-center text-sm text-gray-500 hover:text-gray-700"
                        >
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <MessageSquare className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Reviews Found</h3>
                <p className="text-gray-500">
                  {searchTerm || filterRating !== null
                    ? "Try adjusting your search filters"
                    : "Be the first to write a review!"}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
