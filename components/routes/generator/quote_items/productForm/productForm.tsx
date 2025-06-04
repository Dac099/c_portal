"use client";

import styles from "./productForm.module.css";
import type { QuoteItemFormData, QuoteTypeFormData } from "@/app/generator/types";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Message } from 'primereact/message';
import { FloatLabel } from 'primereact/floatlabel';
import React, { useState } from "react";

type Props = {
  products: QuoteItemFormData[];
  productsTypes: QuoteTypeFormData[];
  closeDialog: () => void;
  productsList: Partial<QuoteItemFormData>[];
  setProductsList: React.Dispatch<React.SetStateAction<Partial<QuoteItemFormData>[]>>;
};

export function ProductForm({
  closeDialog,
  products,
  productsList,
  productsTypes,
  setProductsList,
}: Props) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [productTypeSelected, setProductTypeSelected] = useState<QuoteTypeFormData | null>(null);
  const [productSelected, setProductSelected] = useState<QuoteItemFormData | null>(null);

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
              disabled={productTypeSelected === null}    
              style={{ width: '100%' }}        
            />
          </FloatLabel>
          <article className={styles.error_message}>
            <Message 
              severity='error' 
              text='El nombre es requerido'
              style={{ width: '100%' }}
            />
          </article>
        </section>
        
        <section className={styles.input_field}>
          <FloatLabel>
            <label htmlFor="type_desc">Descripción del tipo</label>
            <InputText 
              id='type_desc'
              value={productTypeSelected?.description || ''}
              disabled={productTypeSelected === null}    
              style={{ width: '100%' }}        
            />
          </FloatLabel>
          <article className={styles.error_message}>
            <Message 
              severity='error' 
              text='La descripción es requerida'
              style={{ width: '100%' }}
            />
          </article>
        </section>

        <Dropdown 
          placeholder='Selecciona el producto'
          options={products}
          optionLabel='name'
          style={{ width: '100%', margin: '1rem 0' }}
          showClear
          value={productSelected}
          onChange={e => setProductSelected(e.value)}
        />

    </article>
  );
}
