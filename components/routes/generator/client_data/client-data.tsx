"use client";
import styles from "./client-data.module.css";
import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import type { CompanyFormData, ClientFormData } from "@/app/generator/types";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";

type Props = {
  companies: CompanyFormData[];
  clients: ClientFormData[];
};

type ClientData = {
  companyName: string | undefined;
  clientName: string | undefined;
  companyActivity: string | undefined;
  clientEmail: string | undefined;
  clientPhone: string | undefined;
};

export function ClientData({ companies, clients }: Props) {
  const [selectedCompany, setSelectedCompany] = useState<
    CompanyFormData | undefined
  >(undefined);
  const [selectedClient, setSelectedClient] = useState<
    ClientFormData | undefined
  >(undefined);
  const [filteredClients, setFilteredClients] = useState<ClientFormData[]>([]);
  const [clientData, setClientData] = useState<ClientData>({
    companyName: undefined,
    clientName: undefined,
    companyActivity: undefined,
    clientEmail: undefined,
    clientPhone: undefined,
  });

  useEffect(() => {
    const filteredClients = clients.filter(
      (client) => client.companyId === selectedCompany?.id
    );
    setFilteredClients(filteredClients);

    if (!selectedCompany) {
      setSelectedClient(undefined);
      setClientData({
        companyName: undefined,
        clientName: undefined,
        companyActivity: undefined,
        clientEmail: undefined,
        clientPhone: undefined,
      });
    }
  }, [clients, selectedCompany]);

  return (
    <>
      <article className={styles.form_field}>
        <Dropdown
          filter
          showClear
          value={selectedCompany}
          onChange={(e) => {
            setSelectedCompany(e.value);
            setClientData({
              ...clientData,
              companyName: e.value?.name || null,
              companyActivity: e.value?.activity || null,
            });
          }}
          options={companies}
          optionLabel="name"
          placeholder="Seleccionar empresa"
          style={{ width: "100%" }}
        />
      </article>

      <article className={styles.form_field}>
        <FloatLabel>
          <label htmlFor="client_company">Compañía</label>
          <InputText
            id="client_company"
            value={clientData.companyName || ""}
            onChange={(e) =>
              setClientData({ ...clientData, companyName: e.target.value })
            }
            disabled={selectedCompany !== undefined}
            style={{ width: "100%" }}
          />
        </FloatLabel>
      </article>

      <article className={styles.form_field}>
        <FloatLabel>
          <label htmlFor="company_activity">Actividad de la compañía</label>
          <InputText
            id="company_activity"
            value={clientData.companyActivity || ""}
            onChange={(e) =>
              setClientData({ ...clientData, companyActivity: e.target.value })
            }
            disabled={selectedCompany !== undefined}
            style={{ width: "100%" }}
          />
        </FloatLabel>
      </article>

      <article className={styles.form_field}>
        <Dropdown
          filter
          showClear
          value={selectedClient}
          onChange={(e) => {
            console.log("Selected client:", e.value);
            setSelectedClient(e.value);
            setClientData({
              ...clientData,
              clientName: e.value?.name,
              clientEmail: e.value?.email,
              clientPhone: e.value?.phone,
            });
          }}
          options={filteredClients}
          optionLabel="name"
          placeholder="Seleccionar cliente"
          style={{ width: "100%" }}
          disabled={!selectedCompany}
        />
      </article>

      <article className={styles.form_field}>
        <FloatLabel>
          <label htmlFor="client_name" className={styles.float_label}>
            Nombre del cliente
          </label>
          <InputText
            id="client_name"
            value={clientData.clientName || ""}
            onChange={(e) =>
              setClientData({ ...clientData, clientName: e.target.value })
            }
            disabled={selectedClient !== undefined}
            style={{ width: "100%" }}
          />
        </FloatLabel>
      </article>

      <article className={styles.form_field}>
        <FloatLabel>
          <label htmlFor="client_phone">Teléfono</label>
          <InputText
            id="client_phone"
            value={clientData.clientPhone || ""}
            onChange={(e) =>
              setClientData({ ...clientData, clientPhone: e.target.value })
            }
            disabled={selectedClient !== undefined}
            style={{ width: "100%" }}
          />
        </FloatLabel>
      </article>

      <article className={styles.form_field}>
        <FloatLabel>
          <label htmlFor="client_email">Correo</label>
          <InputText
            id="client_email"
            value={clientData.clientEmail || ""}
            onChange={(e) =>
              setClientData({ ...clientData, clientEmail: e.target.value })
            }
            disabled={selectedClient !== undefined}
            style={{ width: "100%" }}
          />
        </FloatLabel>
      </article>

      <input type="text" defaultValue={selectedClient?.id} readOnly hidden name='client_id'/>
      <input type="text" defaultValue={selectedCompany?.id} readOnly hidden name='company_id'/>
    </>
  );
}
