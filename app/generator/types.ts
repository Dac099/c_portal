export type ClientFormData = {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyId?: string;
};

export type CompanyFormData = {
  id: string;
  name: string;
  activity: string;
};

export type QuoteItemFormData = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity?: number;
  width?: number;
  height?: number;
  length?: number;
  typeId: string;
};


export type QuoteTypeFormData = {
  id: string;
  name: string;
  description: string;
};

export type QuoteFormData = {
  id: string;
  client: ClientFormData;
  company: CompanyFormData;
  items: QuoteItemFormData[];
  totalPrice: number;
  createdAt: Date;
};