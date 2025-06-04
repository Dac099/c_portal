'use client';
import styles from './quote-items.module.css';
import { QuoteItemFormData, QuoteTypeFormData } from '@/app/generator/types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { ProductForm } from './productForm/productForm';

type Props = {
  products: QuoteItemFormData[];
  quoteType: QuoteTypeFormData[];
};

export default function QuoteItems({ products, quoteType }: Props) {
  const [visible, setVisible] = useState(true);
  const [productsList, setProductsList] = useState<Partial<QuoteItemFormData>[]>([]);

  return (
    <article>
      <Dialog 
        visible={visible}
        onHide={() => visible ? setVisible(false) : null}
        header="Datos del producto"
      >
        <ProductForm 
          products={products}
          productsTypes={quoteType}
          closeDialog={() => setVisible(false)}
          productsList={productsList}
          setProductsList={setProductsList}
        />
      </Dialog>

      <section className={styles.items_control}>
        <Button 
          label='Agregar producto'
          icon='pi pi-plus'
          onClick={() => setVisible(true)}
        />
      </section>

      <section className={styles.items_list}>
        {productsList.length > 0 ? (
          productsList.map((item) => (
            <div key={item.id} className={styles.item}>
            </div>
          ))
        ) : (
          <p>No hay productos agregados.</p>
        )}
      </section>
    </article>
  );
}