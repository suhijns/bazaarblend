
import { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Pencil, Trash2, Plus, X, Save, Search } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  vendor: string;
  price: number;
  rating: number;
  description?: string;
  stock?: number;
}

interface ProductsTabProps {
  products: Product[];
}

export const ProductsTab = ({ products: initialProducts }: ProductsTabProps) => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  
  // New product form state
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    category: '',
    vendor: '',
    image: 'https://placehold.co/600x400',
    stock: 0,
    rating: 0
  });

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.vendor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = () => {
    // Generate a unique ID
    const id = `prod-${Date.now()}`;
    
    const productToAdd = {
      ...newProduct,
      id,
      price: Number(newProduct.price) || 0,
      stock: Number(newProduct.stock) || 0,
      rating: Number(newProduct.rating) || 0
    } as Product;
    
    setProducts([productToAdd, ...products]);
    setNewProduct({
      name: '',
      description: '',
      price: 0,
      category: '',
      vendor: '',
      image: 'https://placehold.co/600x400',
      stock: 0,
      rating: 0
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Product Added",
      description: `${productToAdd.name} has been added successfully.`,
    });
  };

  const handleEditProduct = () => {
    if (!currentProduct) return;
    
    const updatedProducts = products.map(product => 
      product.id === currentProduct.id ? currentProduct : product
    );
    
    setProducts(updatedProducts);
    setIsEditDialogOpen(false);
    
    toast({
      title: "Product Updated",
      description: `${currentProduct.name} has been updated successfully.`,
    });
  };

  const handleDeleteProduct = () => {
    if (!currentProduct) return;
    
    const filteredProducts = products.filter(product => product.id !== currentProduct.id);
    setProducts(filteredProducts);
    setIsDeleteDialogOpen(false);
    
    toast({
      title: "Product Deleted",
      description: `${currentProduct.name} has been removed.`,
      variant: "destructive",
    });
  };

  const openEditDialog = (product: Product) => {
    setCurrentProduct(product);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (product: Product) => {
    setCurrentProduct(product);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button><Plus size={16} className="mr-2" /> Add New Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input 
                      id="name" 
                      value={newProduct.name} 
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      placeholder="Enter product name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input 
                      id="price" 
                      type="number" 
                      value={newProduct.price} 
                      onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input 
                      id="category" 
                      value={newProduct.category} 
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                      placeholder="Category"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vendor">Vendor</Label>
                    <Input 
                      id="vendor" 
                      value={newProduct.vendor} 
                      onChange={(e) => setNewProduct({...newProduct, vendor: e.target.value})}
                      placeholder="Vendor name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock</Label>
                    <Input 
                      id="stock" 
                      type="number" 
                      value={newProduct.stock} 
                      onChange={(e) => setNewProduct({...newProduct, stock: parseInt(e.target.value)})}
                      placeholder="Available quantity"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rating">Rating</Label>
                    <Input 
                      id="rating" 
                      type="number" 
                      min="0"
                      max="5"
                      step="0.1"
                      value={newProduct.rating} 
                      onChange={(e) => setNewProduct({...newProduct, rating: parseFloat(e.target.value)})}
                      placeholder="0.0"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input 
                    id="image" 
                    value={newProduct.image} 
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    value={newProduct.description} 
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    placeholder="Product description"
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  <X size={16} className="mr-2" /> Cancel
                </Button>
                <Button onClick={handleAddProduct}>
                  <Save size={16} className="mr-2" /> Save Product
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="hidden md:table-cell">Vendor</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden md:table-cell">Stock</TableHead>
                <TableHead className="hidden md:table-cell">Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-10 w-10 mr-3 rounded overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{product.category}</TableCell>
                  <TableCell className="hidden md:table-cell">{product.vendor}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell className="hidden md:table-cell">{product.stock || 'N/A'}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex items-center">
                      {product.rating.toFixed(1)}
                      <div className="ml-1 text-yellow-400">★</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => openEditDialog(product)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-500" 
                        onClick={() => openDeleteDialog(product)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredProducts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                    No products found. Try adjusting your search or add a new product.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Product Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          {currentProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-name">Product Name</Label>
                  <Input 
                    id="edit-name" 
                    value={currentProduct.name} 
                    onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-price">Price ($)</Label>
                  <Input 
                    id="edit-price" 
                    type="number" 
                    value={currentProduct.price} 
                    onChange={(e) => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-category">Category</Label>
                  <Input 
                    id="edit-category" 
                    value={currentProduct.category} 
                    onChange={(e) => setCurrentProduct({...currentProduct, category: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-vendor">Vendor</Label>
                  <Input 
                    id="edit-vendor" 
                    value={currentProduct.vendor} 
                    onChange={(e) => setCurrentProduct({...currentProduct, vendor: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-stock">Stock</Label>
                  <Input 
                    id="edit-stock" 
                    type="number" 
                    value={currentProduct.stock || 0} 
                    onChange={(e) => setCurrentProduct({
                      ...currentProduct, 
                      stock: parseInt(e.target.value)
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-rating">Rating</Label>
                  <Input 
                    id="edit-rating" 
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    value={currentProduct.rating} 
                    onChange={(e) => setCurrentProduct({
                      ...currentProduct, 
                      rating: parseFloat(e.target.value)
                    })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-image">Image URL</Label>
                <Input 
                  id="edit-image" 
                  value={currentProduct.image} 
                  onChange={(e) => setCurrentProduct({...currentProduct, image: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea 
                  id="edit-description" 
                  value={currentProduct.description || ''} 
                  onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})}
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditProduct}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {currentProduct && (
              <p>Are you sure you want to delete <strong>{currentProduct.name}</strong>? This action cannot be undone.</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteProduct}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
