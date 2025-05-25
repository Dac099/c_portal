import styles from './styles.module.css';
import { Fieldset } from "primereact/fieldset";
import { getLastClients } from './actions/fetch-data';
import { Suspense } from 'react';
import { LastItemsSkeleton } from "@/components/common/last_items_skeleton/last-items-skeleton";

export async function LastClients() {
  const lastClients = await getLastClients();

  return (
    <Fieldset legend="Últimos clientes">
      <Suspense fallback={<LastItemsSkeleton />}>
        {lastClients.map((client) => (
          <article key={client.id} className={styles.last_client_card}>
            <div className={styles.client_info}>
              <h3 className={styles.client_company}>{client.company}</h3>
              <h4 className={styles.client_name}>{client.name}</h4>
            </div>
            
            <div className={styles.client_contact}>
              {client.email || client.phone ? (
                <span>{client.email || client.phone}</span>
              ) : (
                <span>Sin contacto</span>
              )}
            </div>
            
            <p className={styles.client_date}>
              {client.createdAt.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>            
          </article>
        ))}
      </Suspense>
    </Fieldset>
  );
}
