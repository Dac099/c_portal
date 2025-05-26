'use server';
import { 
  ClientFormData,
  CompanyFormData,
  QuoteItemFormData,
  QuoteTypeFormData
} from '../types';

export async function getClients(): Promise<ClientFormData[]> {
  const mockData: ClientFormData[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      email: 'juan.perez@email.com',
      phone: '555-0123',
    },
    {
      id: '2',
      name: 'María García',
      email: 'maria.garcia@email.com',
      phone: '555-0124',
    },
    {
      id: '3',
      name: 'Carlos López',
      email: 'carlos.lopez@email.com',
      phone: '555-0125',
    }
  ];

  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockData;
}

export async function getCompanies(): Promise<CompanyFormData[]> {
  const mockData: CompanyFormData[] = [
    {
      id: '1',
      name: 'Constructora ABC',
      activity: 'Construcción',
    },
    {
      id: '2',
      name: 'Diseños XYZ',
      activity: 'Diseño de interiores',
    },
    {
      id: '3',
      name: 'Arquitectos Unidos',
      activity: 'Arquitectura y diseño',
    }
  ];

  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockData;
}

export async function getQuoteTypes(): Promise<QuoteTypeFormData[]> {
  const mockData: QuoteTypeFormData[] = [
    {
      id: '1',
      name: 'Carrocerías',
      description: 'Carrocerías para camiones y camionetas',
    },
    {
      id: '2',
      name: 'Servicios',
      description: 'Reparaciones y mantenimientos de carrocerías',
    },
    {
      id: '3',
      name: 'Accesorios',
      description: 'Accesorios y piezas para carrocerías',
    }
  ];

  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockData;
}

export async function getProducts(): Promise<QuoteItemFormData[]> {
  const mockData: QuoteItemFormData[] = [
    {
      id: '1',
      name: 'Caja seca',
      description: 'Caja seca para Nissan NP300',
      price: 18200,
      width: 155,
      height: 180,
      length: 210,
      typeId: '1'
    },
    {
      id: '2',
      name: 'Cambio de abrazaderas',
      description: 'Cambio de abrazaderas para camioneta Toyota Hilux',
      price: 600,
      typeId: '2'
    },
    {
      id: '3',
      name: 'Juego de loderas',
      description: '4 loderas para camioneta Ford Ranger',
      price: 430,
      typeId: '3'
    }
  ];

  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockData;
}