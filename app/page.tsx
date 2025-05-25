import styles from './page.module.css';
import { LastClients } from '@/components/routes/home/las_clients/last-clients';
import { LastQuotes } from '@/components/routes/home/last_quotes/last-quotes';
// import { SalesGraph } from '@/components/routes/home/sales_graph/sales-graph';

export default function Home() {
  return (
    <>
      <section className={styles.card_section}>
        <LastQuotes />
      </section>

      <section className={styles.card_section}>
        <LastClients />
      </section>

      {/* TODO: Uncomment when implement the module to track sales */}
      {/* <section className={styles.card_section}>
        <SalesGraph />
      </section>       */}
    </>
  );
}
