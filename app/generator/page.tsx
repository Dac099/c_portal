import styles from './generator.module.css';
import Form from 'next/form';
import { 
  getClients ,
  getCompanies,
  getQuoteTypes,
  getProducts
} from './actions/fetch-data';
import { ClientData } from '@/components/routes/generator/client_data/client-data';

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
      </Form>
    </main>
  );
}