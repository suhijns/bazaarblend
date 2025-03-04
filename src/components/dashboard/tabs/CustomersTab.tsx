
import { useState } from 'react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { Pencil, Trash2, Plus, Search, User, Mail, MapPin, Phone } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalOrders: number;
  totalSpent: number;
  createdAt: string;
}

export const CustomersTab = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(null);
  
  // Mock customers data
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 'cust-001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      address: '123 Main St, New York, NY 10001',
      totalOrders: 5,
      totalSpent: 450.75,
      createdAt: '2023-05-10T14:30:00Z'
    },
    {
      id: 'cust-002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '(555) 987-6543',
      address: '456 Oak Ave, Los Angeles, CA 90001',
      totalOrders: 3,
      totalSpent: 289.50,
      createdAt: '2023-06-15T09:15:00Z'
    },
    {
      id: 'cust-003',
      name: 'Robert Johnson',
      email: 'robert@example.com',
      phone: '(555) 789-0123',
      address: '789 Pine Blvd, Chicago, IL 60601',
      totalOrders: 7,
      totalSpent: 875.20,
      createdAt: '2023-04-22T11:45:00Z'
    },
    {
      id: 'cust-004',
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: '(555) 321-6547',
      address: '321 Maple St, Houston, TX 77001',
      totalOrders: 2,
      totalSpent: 159.99,
      createdAt: '2023-07-03T08:30:00Z'
    },
    {
      id: 'cust-005',
      name: 'Michael Wilson',
      email: 'michael@example.com',
      phone: '(555) 654-9870',
      address: '654 Cedar Ln, Miami, FL 33101',
      totalOrders: 4,
      totalSpent: 345.80,
      createdAt: '2023-03-17T14:20:00Z'
    }
  ]);
  
  // New customer form state
  const [newCustomer, setNewCustomer] = useState<Partial<Customer>>({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const handleAddCustomer = () => {
    // Basic validation
    if (!newCustomer.name || !newCustomer.email) {
      toast({
        title: "Error",
        description: "Name and email are required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Generate a unique ID
    const id = `cust-${(customers.length + 1).toString().padStart(3, '0')}`;
    
    const customerToAdd: Customer = {
      id,
      name: newCustomer.name || '',
      email: newCustomer.email || '',
      phone: newCustomer.phone || '',
      address: newCustomer.address || '',
      totalOrders: 0,
      totalSpent: 0,
      createdAt: new Date().toISOString()
    };
    
    setCustomers([customerToAdd, ...customers]);
    setNewCustomer({
      name: '',
      email: '',
      phone: '',
      address: ''
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Customer Added",
      description: `${customerToAdd.name} has been added successfully.`,
    });
  };

  const handleEditCustomer = () => {
    if (!currentCustomer) return;
    
    // Basic validation
    if (!currentCustomer.name || !currentCustomer.email) {
      toast({
        title: "Error",
        description: "Name and email are required fields.",
        variant: "destructive",
      });
      return;
    }
    
    const updatedCustomers = customers.map(customer => 
      customer.id === currentCustomer.id ? currentCustomer : customer
    );
    
    setCustomers(updatedCustomers);
    setIsEditDialogOpen(false);
    
    toast({
      title: "Customer Updated",
      description: `${currentCustomer.name} has been updated successfully.`,
    });
  };

  const handleDeleteCustomer = () => {
    if (!currentCustomer) return;
    
    const filteredCustomers = customers.filter(customer => customer.id !== currentCustomer.id);
    setCustomers(filteredCustomers);
    setIsDeleteDialogOpen(false);
    
    toast({
      title: "Customer Deleted",
      description: `${currentCustomer.name} has been removed.`,
      variant: "destructive",
    });
  };

  const openEditDialog = (customer: Customer) => {
    setCurrentCustomer(customer);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (customer: Customer) => {
    setCurrentCustomer(customer);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Customer Management</h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search customers..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button><Plus size={16} className="mr-2" /> Add New Customer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Customer</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      value={newCustomer.name} 
                      onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                      placeholder="Customer name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={newCustomer.email} 
                      onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                      placeholder="customer@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    value={newCustomer.phone} 
                    onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address" 
                    value={newCustomer.address} 
                    onChange={(e) => setNewCustomer({...newCustomer, address: e.target.value})}
                    placeholder="Full address"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddCustomer}>
                  Add Customer
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
                <TableHead>Email</TableHead>
                <TableHead className="hidden md:table-cell">Phone</TableHead>
                <TableHead className="hidden lg:table-cell">Joined</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell className="hidden md:table-cell">{customer.phone}</TableCell>
                  <TableCell className="hidden lg:table-cell">{formatDate(customer.createdAt)}</TableCell>
                  <TableCell>{customer.totalOrders}</TableCell>
                  <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => openEditDialog(customer)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-500" 
                        onClick={() => openDeleteDialog(customer)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredCustomers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                    No customers found. Try adjusting your search or add a new customer.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Customer Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Customer</DialogTitle>
          </DialogHeader>
          {currentCustomer && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-name">Full Name</Label>
                  <Input 
                    id="edit-name" 
                    value={currentCustomer.name} 
                    onChange={(e) => setCurrentCustomer({...currentCustomer, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-email">Email</Label>
                  <Input 
                    id="edit-email" 
                    type="email" 
                    value={currentCustomer.email} 
                    onChange={(e) => setCurrentCustomer({...currentCustomer, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-phone">Phone Number</Label>
                <Input 
                  id="edit-phone" 
                  value={currentCustomer.phone} 
                  onChange={(e) => setCurrentCustomer({...currentCustomer, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-address">Address</Label>
                <Input 
                  id="edit-address" 
                  value={currentCustomer.address} 
                  onChange={(e) => setCurrentCustomer({...currentCustomer, address: e.target.value})}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditCustomer}>
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
            {currentCustomer && (
              <p>Are you sure you want to delete customer <strong>{currentCustomer.name}</strong>? This action cannot be undone.</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteCustomer}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
