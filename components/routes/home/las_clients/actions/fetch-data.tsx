'use server';
import { LastClient } from '../types';

export async function getLastClients() {
  const mockData: LastClient[] = [
    {
      id: "CLI-00001",
      company: "Empresa Alpha",
      name: "Juan Pérez",
      email: "juan.perez@alpha.com",
      phone: "555-1234",
      createdAt: new Date("2024-06-01T10:00:00Z"),
    },
    {
      id: "CLI-00002",
      company: "Beta Solutions",
      name: "María Gómez",
      email: "maria.gomez@beta.com",
      phone: "555-5678",
      createdAt: new Date("2024-06-02T11:30:00Z"),
    },
    {
      id: "CLI-00003",
      company: "Gamma Corp",
      name: "Carlos Ruiz",
      email: "carlos.ruiz@gamma.com",
      phone: "555-9012",
      createdAt: new Date("2024-06-03T09:15:00Z"),
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockData;
}