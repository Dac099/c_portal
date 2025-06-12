import styles from './generator.module.css';
import Form from 'next/form';
import { 
  getClients ,
  getCompanies,
  getQuoteTypes,
  getProducts
} from './actions/fetch-data';
import { ClientData } from '@/components/routes/generator/client_data/client-data';
import QuoteItems from '@/components/routes/generator/quote_items/quote-items';
import { Button } from 'primereact/button';

export default async function Page(){
  const clients = await getClients();
  const companies = await getCompanies();
  const quoteTypes = await getQuoteTypes();
  const products = await getProducts();

  //TODO: Handle submit form by an action and passing the data
  //OPC1: change to client component and use useState to handle form data
  //OPC2: use FormData to handle form data and pass it to an action
  return (
    <main>
      <Form action={"#"}>
        <h2 className={styles.section_title}>Datos del cliente</h2>
        <section>
          <ClientData 
            companies={companies}
            clients={clients}
          />
        </section>

        <h2 className={styles.section_title}>Productos de la cotización</h2>
        <section>
          <QuoteItems
            products={products}
            quoteType={quoteTypes}
          />
        </section>

        <Button 
          severity='success'
          type='submit'
          label="Generar cotización" 
          className={styles.submit_button}
          icon="pi pi-check"
          aria-label="Generar cotización"
          style={{ width: '100%', marginTop: '1rem' }}
        />
      </Form>
    </main>
  );
}