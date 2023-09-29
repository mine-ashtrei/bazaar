export type RetailerData = {
  name: string;
  accountNumber: string;
  orderCount: number;
  totalSpent: number;
  supplierId: string;
  retailerId: string;
};

export const retailers = {
  getAllRetailerData: async (supplierId: string): Promise<RetailerData[]> => {
    return RETAILERS.filter((retailer) => retailer.supplierId === supplierId);
  },
};

const RETAILERS: RetailerData[] = [
  {
    name: "محمد علي",
    accountNumber: "123456789",
    orderCount: 5,
    totalSpent: 10000,
    supplierId: "1",
    retailerId: "1",
  },
  {
    name: "محمد علي",
    accountNumber: "123456789",
    orderCount: 5,
    totalSpent: 10000,
    supplierId: "2",
    retailerId: "2",
  },
  {
    name: "علي محمد",
    accountNumber: "987654321",
    orderCount: 10,
    totalSpent: 20000,
    supplierId: "2",
    retailerId: "3",
  },
  {
    name: "محمد علي",
    accountNumber: "123456789",
    orderCount: 5,
    totalSpent: 10000,
    supplierId: "1",
    retailerId: "3",
  },
  {
    name: "علي محمد",
    accountNumber: "987654321",
    orderCount: 10,
    totalSpent: 20000,
    supplierId: "1",
    retailerId: "4",
  },
  {
    name: "محمد علي",
    accountNumber: "123456789",
    orderCount: 5,
    totalSpent: 10000,
    supplierId: "1",
    retailerId: "5",
  },
];
