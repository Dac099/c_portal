"use client";

import styles from "./productForm.module.css";
import React, { useState } from "react";
import type { QuoteItemFormData, QuoteTypeFormData } from "@/app/generator/types";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Message } from 'primereact/message';
import { FloatLabel } from 'primereact/floatlabel';
import { Divider } from 'primereact/divider';
import { isFormFullFilled } from '../../helpers';

type Props = {
  products: QuoteItemFormData[];
  productsTypes: QuoteTypeFormData[];
  closeDialog: () => void;
  setProductsList: React.Dispatch<React.SetStateAction<Partial<QuoteItemFormData>[]>>;
};

export function ProductForm({
  closeDialog,
  products,
  productsTypes,
  setProductsList,
}: Props) {
  const [onError, setOnError] = useState<boolean>(false);
  const [productTypeSelected, setProductTypeSelected] = useState<Partial<QuoteTypeFormData> | undefined>(undefined);
  const [productSelected, setProductSelected] = useState<Partial<QuoteItemFormData> | undefined>(undefined);

  const handleSaveData = () => {
    if (!isFormFullFilled(productSelected, productTypeSelected)) {
      setOnError(true);
      return;
    }

    //TODO: Cuando se agregue el productList nuevo, validar su existencia para saber si agregar o sumar cantidad
    setProductSelected(undefined);
    setProductTypeSelected(undefined);
    setOnError(false);
    closeDialog();
  };

  return (
    <article className={styles.product_form}>
        <Dropdown 
          placeholder='Selecciona el tipo de producto'
          options={productsTypes}
          optionLabel='name'
          onChange={e => setProductTypeSelected(e.value)}
          value={productTypeSelected}
          showClear
          style={{
            marginBottom: '1rem',
            width: '100%',
          }}        
        />

        <section className={styles.input_field}>
          <FloatLabel>
            <label htmlFor="type_name">Nombre del tipo</label>
            <InputText 
              id='type_name'
              value={productTypeSelected?.name || ''}
              style={{ width: '100%' }}   
              onChange={e => setProductTypeSelected({
                ...productTypeSelected,
                name: e.target.value
              })}     
            />
          </FloatLabel>
          {onError && !(productTypeSelected?.name) &&
            <article className={styles.error_message}>
              <Message 
                severity='error' 
                text='El nombre es requerido'
                style={{ width: '100%' }}
              />
            </article>
          }
        </section>
        
        <section className={styles.input_field}>
          <FloatLabel>
            <label htmlFor="type_desc">Descripción del tipo</label>
            <InputText 
              id='type_desc'
              value={productTypeSelected?.description || ''}
              style={{ width: '100%' }}  
              onChange={e => setProductTypeSelected({
                ...productTypeSelected,
                description: e.target.value
              })}      
            />
          </FloatLabel>
          {onError && !(productTypeSelected?.description) &&
            <article className={styles.error_message}>
              <Message 
                severity='error' 
                text='La descripción es requerida'
                style={{ width: '100%' }}
              />
            </article>
          }
        </section>

        <Divider />

        <Dropdown 
          placeholder='Selecciona el producto'
          options={products}
          optionLabel='name'
          style={{ width: '100%', margin: '1rem 0' }}
          showClear
          value={productSelected}
          onChange={e => setProductSelected(e.value)}
        />

        <section className={styles.input_field}>
          <FloatLabel>
            <label htmlFor="product_name">Nombre del producto</label>
            <InputText 
              id='product_name'
              value={productSelected?.name || ''}
              style={{ width: '100%' }}
              onChange={e => setProductSelected({
                ...productSelected,
                name: e.target.value
              })}
            />
          </FloatLabel>
          { onError && !(productSelected?.name) &&
            <article className={styles.error_message}>
              <Message 
                severity='error' 
                text='Nombre del producto requerido'
                style={{ width: '100%' }}
              />
            </article>
          }
        </section>

        <section className={styles.input_field}>
          <FloatLabel>
            <label htmlFor="product_desc">Descripción del producto</label>
            <InputTextarea 
              value={productSelected?.description || ''}
              id='product_desc'
              style={{ width: '100%' }}
              autoResize
              onChange={e => setProductSelected({...productSelected, description: e.target.value })}
            />
          </FloatLabel>
          {onError && !(productSelected?.description) &&
            <article className={styles.error_message}>
              <Message
                severity='error'
                text='Descripción del producto requerida'
                style={{ width: '100%' }}
              />
            </article>
          }
        </section>

        <section className={styles.input_field}>
          <FloatLabel>
            <label htmlFor="product_price">Precio del producto</label>
            <InputNumber 
              id='product_price'
              value={productSelected?.price}
              mode='currency'
              currency='MXN'
              locale='es-MX'
              min={0}
              style={{ width: '100%' }}
              onValueChange={e => setProductSelected({
                ...productSelected,
                price: e.value || 0
              })}
            />
          </FloatLabel>
          {onError && !(productSelected?.price) &&        
            <article className={styles.error_message}>
              <Message 
                severity='error' 
                text='Precio del producto requerido'
                style={{ width: '100%' }}
              />
            </article>
          }
        </section>

        <section className={styles.input_field}>
          <FloatLabel>
            <label htmlFor="product_quantity">Cantidad del producto</label>
            <InputNumber
              id='product_quantity'
              value={productSelected?.quantity || 1}
              min={1}
              style={{ width: '100%' }}
              onValueChange={e => setProductSelected({
                ...productSelected,
                quantity: e.value || 1
              })}
            />
          </FloatLabel>
          {onError && !(productSelected?.quantity) &&
            <article className={styles.error_message}>
              <Message
                severity='error'
                text='Cantidad del producto requerida'
                style={{ width: '100%' }}
              />
            </article>
          }
        </section>

        <Divider />

        <section className={styles.controls}>
          <Button
            label='Cancelar'
            icon='pi pi-times'
            className='p-button-outlined'
            onClick={() => {
              setProductSelected(undefined);
              setProductTypeSelected(undefined);
              setOnError(false);
              closeDialog();
            }}
          />
          <Button
            label='Guardar'
            icon='pi pi-check'
            className='p-button-outlined'
            severity='success'
            onClick={handleSaveData}
          />
        </section>

    </article>
  );
}
