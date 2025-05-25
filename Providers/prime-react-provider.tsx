'use client';
import { PrimeReactProvider } from 'primereact/api';

type Props = {
  children: React.ReactNode;
};

export default function PrimeReact({ children }: Props) {
  return (
    <PrimeReactProvider>
      {children}
    </PrimeReactProvider>
  );
}
