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

export default async function Page(){
  const clients = await getClients();
  const companies = await getCompanies();
  const quoteTypes = await getQuoteTypes();
  const products = await getProducts();
  
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
      </Form>
    </main>
  );
}