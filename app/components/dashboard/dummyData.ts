export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  inventory: number;
  sku: string;
    images?: string[];

}

export interface Category {
  id: string;
  name: string;
  productCount: number;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: 'Fulfilled' | 'Unfulfilled' | 'Restocked' | 'Cancelled';
}

export const initialCategories: Category[] = [
  { id: '1', name: 'Apparel', productCount: 24 },
  { id: '2', name: 'Electronics', productCount: 12 },
  { id: '3', name: 'Home & Living', productCount: 18 },
];

export const initialProducts: Product[] = [
  { id: 'p1', name: 'Premium Silk Sherwani', category: 'Apparel', price: 899, inventory: 15, sku: 'SH-001' },
  { id: 'p2', name: 'Classic Designer Kurta', category: 'Apparel', price: 150, inventory: 45, sku: 'KU-012' },
  { id: 'p3', name: 'Minimalist Walnut Desk Organiser', category: 'Home & Living', price: 65, inventory: 8, sku: 'HO-891' },
];

export const mockOrders: Order[] = [
  { id: '#ORD-9921', customer: 'Aarav Sharma', date: 'Oct 24, 2026', total: 899.00, status: 'Fulfilled' },
  { id: '#ORD-9920', customer: 'Priya Patel', date: 'Oct 23, 2026', total: 150.00, status: 'Unfulfilled' },
  { id: '#ORD-9919', customer: 'Kabir Mehta', date: 'Oct 22, 2026', total: 300.00, status: 'Fulfilled' },
  { id: '#ORD-9918', customer: 'Ananya Rao', date: 'Oct 21, 2026', total: 65.00, status: 'Cancelled' },
];