"use server";
import styles from "./styles.module.css";
import { Fieldset } from "primereact/fieldset";
import { LastItemsSkeleton } from "@/components/common/last_items_skeleton/last-items-skeleton";
import { Suspense } from "react";
import { getLastQuotes } from "./actions/fetch-data";

export async function LastQuotes() {
  const lastQuotes = await getLastQuotes();

  return (
    <Fieldset legend="Últimas cotizaciones">
      <Suspense fallback={<LastItemsSkeleton />}>
        {lastQuotes.map((quote) => (
          <article key={quote.id} className={styles.last_quote_card}>
            <div className={styles.last_quote_info}>
              <h3 className={styles.client_name}>
                {quote.clientCompany.split(" ")[0]} - {quote.clientName.split(" ")[0]}
              </h3>
              <p className={styles.quote_date}>
                {quote.createdAt.toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className={styles.quote_price}>
              ${quote.price.toLocaleString("es-ES")}
            </p>
          </article>
        ))}
      </Suspense>
    </Fieldset>
  );
}
