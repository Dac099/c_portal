import Form from 'next/form';
import { 
  getClients ,
  getCompanies,
  getQuoteTypes,
  getProducts
} from './actions/fetch-data';

export default async function Page(){
  const clients = await getClients();
  const companies = await getCompanies();
  const quoteTypes = await getQuoteTypes();
  const products = await getProducts();
  
  return (
    <main>
      <Form action={"#"}>
      
      </Form>
    </main>
  );
}