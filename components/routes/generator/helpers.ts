import type { QuoteItemFormData, QuoteTypeFormData } from '@/app/generator/types';

export function isFormFullFilled(
  productSelected: Partial<QuoteItemFormData> | undefined, 
  typeSelected: Partial<QuoteTypeFormData> | undefined
): boolean {
  if(!productSelected || !typeSelected) return false;
  
  return (
    productSelected.name?.trim() !== '' &&
    productSelected.description?.trim() !== '' &&
    productSelected.price !== undefined &&
    productSelected.quantity !== undefined &&
    typeSelected.name?.trim() !== '' &&
    typeSelected.description?.trim() !== ''
  );
}