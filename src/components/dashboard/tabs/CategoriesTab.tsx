
import { useState } from 'react';
import { 
  Card, 
  CardContent 
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Pencil, Trash2, Plus, Search, Tag } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  productCount: number;
  createdAt: string;
  updatedAt: string;
}

export const CategoriesTab = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  
  // Mock categories data
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 'cat-001',
      name: 'Electronics',
      description: 'Electronic devices and gadgets',
      slug: 'electronics',
      productCount: 24,
      createdAt: '2023-02-15T10:30:00Z',
      updatedAt: '2023-08-22T14:15:00Z'
    },
    {
      id: 'cat-002',
      name: 'Clothing',
      description: 'Apparel and fashion items',
      slug: 'clothing',
      productCount: 36,
      createdAt: '2023-03-10T09:45:00Z',
      updatedAt: '2023-07-18T11:20:00Z'
    },
    {
      id: 'cat-003',
      name: 'Home & Kitchen',
      description: 'Home furnishings and kitchen appliances',
      slug: 'home-kitchen',
      productCount: 42,
      createdAt: '2023-04-05T13:15:00Z',
      updatedAt: '2023-09-12T16:30:00Z'
    },
    {
      id: 'cat-004',
      name: 'Books',
      description: 'Books, eBooks, and publications',
      slug: 'books',
      productCount: 18,
      createdAt: '2023-05-20T08:00:00Z',
      updatedAt: '2023-06-15T10:45:00Z'
    },
    {
      id: 'cat-005',
      name: 'Sports & Outdoors',
      description: 'Sporting goods and outdoor equipment',
      slug: 'sports-outdoors',
      productCount: 29,
      createdAt: '2023-06-08T14:30:00Z',
      updatedAt: '2023-08-30T09:15:00Z'
    }
  ]);
  
  // New category form state
  const [newCategory, setNewCategory] = useState<Partial<Category>>({
    name: '',
    description: '',
    slug: ''
  });

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const generateSlug = (name: string) => {
    return name.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleAddCategory = () => {
    // Basic validation
    if (!newCategory.name) {
      toast({
        title: "Error",
        description: "Category name is required.",
        variant: "destructive",
      });
      return;
    }
    
    // Generate a unique ID
    const id = `cat-${(categories.length + 1).toString().padStart(3, '0')}`;
    const timestamp = new Date().toISOString();
    
    const categoryToAdd: Category = {
      id,
      name: newCategory.name,
      description: newCategory.description || '',
      slug: newCategory.slug || generateSlug(newCategory.name),
      productCount: 0,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    
    setCategories([categoryToAdd, ...categories]);
    setNewCategory({
      name: '',
      description: '',
      slug: ''
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Category Added",
      description: `${categoryToAdd.name} has been added successfully.`,
    });
  };

  const handleEditCategory = () => {
    if (!currentCategory) return;
    
    // Basic validation
    if (!currentCategory.name) {
      toast({
        title: "Error",
        description: "Category name is required.",
        variant: "destructive",
      });
      return;
    }
    
    const updatedCategory = {
      ...currentCategory,
      updatedAt: new Date().toISOString(),
      slug: currentCategory.slug || generateSlug(currentCategory.name)
    };
    
    const updatedCategories = categories.map(category => 
      category.id === currentCategory.id ? updatedCategory : category
    );
    
    setCategories(updatedCategories);
    setIsEditDialogOpen(false);
    
    toast({
      title: "Category Updated",
      description: `${currentCategory.name} has been updated successfully.`,
    });
  };

  const handleDeleteCategory = () => {
    if (!currentCategory) return;
    
    const filteredCategories = categories.filter(category => category.id !== currentCategory.id);
    setCategories(filteredCategories);
    setIsDeleteDialogOpen(false);
    
    toast({
      title: "Category Deleted",
      description: `${currentCategory.name} has been removed.`,
      variant: "destructive",
    });
  };

  const openEditDialog = (category: Category) => {
    setCurrentCategory(category);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (category: Category) => {
    setCurrentCategory(category);
    setIsDeleteDialogOpen(true);
  };

  const handleSlugGeneration = (name: string) => {
    const slug = generateSlug(name);
    setNewCategory({...newCategory, name, slug});
  };

  const handleEditSlugGeneration = (name: string) => {
    if (!currentCategory) return;
    
    const slug = generateSlug(name);
    setCurrentCategory({...currentCategory, name, slug});
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Category Management</h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search categories..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button><Plus size={16} className="mr-2" /> Add New Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Category Name</Label>
                  <Input 
                    id="name" 
                    value={newCategory.name} 
                    onChange={(e) => handleSlugGeneration(e.target.value)}
                    placeholder="Category name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input 
                    id="slug" 
                    value={newCategory.slug} 
                    onChange={(e) => setNewCategory({...newCategory, slug: e.target.value})}
                    placeholder="category-slug"
                    className="font-mono text-sm"
                  />
                  <p className="text-sm text-gray-500">
                    Auto-generated from name. Only edit if necessary.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    value={newCategory.description} 
                    onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                    placeholder="Category description"
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddCategory}>
                  Add Category
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
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead className="hidden lg:table-cell">Slug</TableHead>
                <TableHead>Products</TableHead>
                <TableHead className="hidden md:table-cell">Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-2 text-blue-500" />
                      {category.name}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs truncate">{category.description}</TableCell>
                  <TableCell className="hidden lg:table-cell font-mono text-xs">{category.slug}</TableCell>
                  <TableCell>{category.productCount}</TableCell>
                  <TableCell className="hidden md:table-cell">{formatDate(category.updatedAt)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => openEditDialog(category)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-500" 
                        onClick={() => openDeleteDialog(category)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredCategories.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No categories found. Try adjusting your search or add a new category.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Category Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
          </DialogHeader>
          {currentCategory && (
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Category Name</Label>
                <Input 
                  id="edit-name" 
                  value={currentCategory.name} 
                  onChange={(e) => handleEditSlugGeneration(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-slug">URL Slug</Label>
                <Input 
                  id="edit-slug" 
                  value={currentCategory.slug} 
                  onChange={(e) => setCurrentCategory({...currentCategory, slug: e.target.value})}
                  className="font-mono text-sm"
                />
                <p className="text-sm text-gray-500">
                  Auto-generated from name. Only edit if necessary.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea 
                  id="edit-description" 
                  value={currentCategory.description} 
                  onChange={(e) => setCurrentCategory({...currentCategory, description: e.target.value})}
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditCategory}>
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
            {currentCategory && (
              <>
                <p>Are you sure you want to delete the category <strong>{currentCategory.name}</strong>?</p>
                <p className="mt-2 text-red-500">This action cannot be undone and may affect products using this category.</p>
              </>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteCategory}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
