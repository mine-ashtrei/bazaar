export type Order = {
  orderId: string;
  date: string;
  retailerId: string;
  supplierId: string;
  payment: string;
  status: string;
  total: number;
};

const ORDERS: Order[] = [
  {
    orderId: "1",
    date: "2023-09-25",
    retailerId: "1",
    supplierId: "1",
    payment: "Credit Card",
    status: "Shipped",
    total: 100.0,
  },
  {
    orderId: "2",
    date: "2023-09-24",
    retailerId: "2",
    supplierId: "1",
    payment: "Paypal",
    status: "Processing",
    total: 200.0,
  },
  {
    orderId: "3",
    date: "2023-09-23",
    retailerId: "1",
    supplierId: "1",
    payment: "Cash",
    status: "Delivered",
    total: 150.0,
  },
  {
    orderId: "4",
    date: "2023-09-22",
    retailerId: "2",
    supplierId: "1",
    payment: "Credit Card",
    status: "Cancelled",
    total: 50.0,
  },
];

export const orders = {
  getOrdersBySupplierId: async (id: string): Promise<Order[]> => {
    return ORDERS.filter((order) => order.supplierId === id).slice(0, 10);
  },
  getOrdersByRetailerId: async (id: string): Promise<Order[]> => {
    return ORDERS.filter((order) => order.retailerId === id).slice(0, 10);
  },
};
