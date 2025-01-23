//! this file is just for development purposes
export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '12a3bc45',
    amount: 200,
    status: 'success',
    email: 'user1@example.com',
  },
  {
    id: '34b5de67',
    amount: 150,
    status: 'failed',
    email: 'user2@example.com',
  },
  {
    id: '56c7ef89',
    amount: 175,
    status: 'pending',
    email: 'user3@example.com',
  },
  {
    id: '78d9f012',
    amount: 300,
    status: 'processing',
    email: 'user4@example.com',
  },
  {
    id: '90e1f234',
    amount: 250,
    status: 'success',
    email: 'user5@example.com',
  },
  {
    id: 'a1b2c3d4',
    amount: 50,
    status: 'failed',
    email: 'user6@example.com',
  },
  {
    id: 'b2c3d4e5',
    amount: 400,
    status: 'pending',
    email: 'user7@example.com',
  },
  {
    id: 'c3d4e5f6',
    amount: 350,
    status: 'processing',
    email: 'user8@example.com',
  },
  {
    id: 'd4e5f607',
    amount: 450,
    status: 'success',
    email: 'user9@example.com',
  },
  {
    id: 'e5f60718',
    amount: 500,
    status: 'failed',
    email: 'user10@example.com',
  },
  {
    id: 'f6071829',
    amount: 600,
    status: 'pending',
    email: 'user11@example.com',
  },
  {
    id: '0718293a',
    amount: 700,
    status: 'processing',
    email: 'user12@example.com',
  },
  {
    id: '18293a4b',
    amount: 800,
    status: 'success',
    email: 'user13@example.com',
  },
];
