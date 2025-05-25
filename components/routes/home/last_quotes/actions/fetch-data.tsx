'use server';
import { LastQuote } from '../types';

export async function getLastQuotes(): Promise<LastQuote[]> {
  const mockData: LastQuote[] = [
    {
      id: '1',
      createdAt: new Date(),
      price: 100,
      clientName: 'Cliente 1',
      clientCompany: 'Empresa 1',
    },
    {
      id: '2',
      createdAt: new Date(),
      price: 200,
      clientName: 'Cliente 2',
      clientCompany: 'Empresa 2',
    },
    {
      id: '3',
      createdAt: new Date(),
      price: 300,
      clientName: 'Cliente 3',
      clientCompany: 'Empresa 3',
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockData;
}