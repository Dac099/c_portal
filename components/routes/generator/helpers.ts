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
    productSelected.quantity > 0 &&
    (typeSelected.name === 'Carrocerías' ? 
      productSelected.width !== undefined && productSelected.width > 0 &&
      productSelected.height !== undefined && productSelected.height > 0 &&
      productSelected.length !== undefined && productSelected.length > 0
      : true
    ) &&
    typeSelected.name?.trim() !== '' &&
    typeSelected.description?.trim() !== ''
  );
}