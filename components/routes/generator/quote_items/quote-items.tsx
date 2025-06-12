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

  function updateItemQuantity(quantity: number, id: string) {
    const updatedList = productsList.map((item) => {
      if (item.item?.id === id) {
        return {
          ...item,
          item: {
            ...item.item,
            quantity: quantity
          }
        };
      }
      return item;
    }
    );
    setProductsList(updatedList);
  }

  function handleDeleteItem(id: string) {
    const updatedList = productsList.filter((item) => item.item?.id !== id);
    setProductsList(updatedList);
  }

  function calculateTotalPrice() {
    return productsList.reduce((total, item) => {
      return total + (item.item?.price || 0) * (item.item?.quantity || 1);
    }, 0);
  }

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
        <p className={styles.total_quote_price}>${calculateTotalPrice()}</p>        
        <Button 
          aria-label='Agregar producto'
          icon='pi pi-plus'
          onClick={() => setVisible(true)}
          className={styles.add_item_button}
          outlined
        />          
      </section>

      <section className={styles.items_list}>
        {productsList.length > 0 ? (
          productsList.map((item) => (
            <Card key={`${item!.item!.name}-${item!.type!.name}`} className={styles.item_card}>
              <section className={styles.item_card_header}>
                <section className={styles.item_card_header_title}>
                  <p>{item!.item!.name}</p>
                  <p>{item!.type!.name}</p>
                </section>


                <Button 
                  icon='pi pi-trash'
                  severity='danger'
                  aria-label='Delete'
                  onClick={() => handleDeleteItem(item!.item!.id as string)}
                  />
              </section>

              <section className={styles.item_card_description}>
                <p>{item!.item!.description}</p>
              </section>
              
              { item!.type!.name! === 'Carrocerías' && 
                <section className={styles.item_card_measurements}>
                  <table>
                    <thead>
                      <tr>
                        <th>Ancho</th>
                        <th>Alto</th>
                        <th>Largo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item!.item!.width} cm</td>
                        <td>{item!.item!.height} cm</td>
                        <td>{item!.item!.length} cm</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              }

              <section className={styles.item_card_body}>
                <p>${item!.item!.price}</p>
                <InputNumber 
                  value={item!.item!.quantity}                
                  onValueChange={(e) => {
                    updateItemQuantity(e.value as number, item!.item!.id as string);
                  }}
                  showButtons
                  min={1}
                  inputStyle={{ width: '100%' }}
                  suffix={ item!.item!.quantity === 1 ? ' unidad' : ' unidades' }
                />
              </section>
            </Card>
          ))
        ) : (
          <p className={styles.empty_list_text}>No hay productos agregados.</p>
        )}
      </section>
    </article>
  );
}