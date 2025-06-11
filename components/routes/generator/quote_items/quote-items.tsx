'use client';
import styles from './quote-items.module.css';
import { QuoteItemFormData, QuoteTypeFormData } from '@/app/generator/types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { ProductForm } from './productForm/productForm';
import { Card } from 'primereact/card';
import { InputNumber } from 'primereact/inputnumber';

type Props = {
  products: QuoteItemFormData[];
  quoteType: QuoteTypeFormData[];
};

type ListItem = {
  item: Partial<QuoteItemFormData>;
  type: Partial<QuoteTypeFormData>;
};

export default function QuoteItems({ products, quoteType }: Props) {
  const [visible, setVisible] = useState(true);
  const [productsList, setProductsList] = useState<Partial<ListItem>[]>([]);

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
            <Card key={`${item!.item!.name}-${item!.type!.name}`} className={styles.item_card}>
              <p>{item!.item!.name}</p>
              <p>{item!.item!.price}</p>
              <p>{item!.type!.name}</p>
              <Button 
                icon='pi pi-trash'
                severity='danger'
                aria-label='Delete'
              />
              <InputNumber 
                value={item!.item!.quantity}
                onValueChange={(e) => {
                  updateItemQuantity(e.value, item!.item!.id);
                }}
                showButtons
                min={1}
              />
            </Card>
          ))
        ) : (
          <p>No hay productos agregados.</p>
        )}
      </section>
    </article>
  );
}