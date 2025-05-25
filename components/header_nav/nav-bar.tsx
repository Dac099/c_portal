'use client';
import styles from './header-nav.module.css';
import Link from 'next/link';

export function NavBar() {
  return (
    <nav className={styles.header_nav_container}>
      <ul className={styles.header_nav_list}>
        <li className={styles.header_nav_list_item}>
          <Link href="/" className={styles.header_nav_link}>
            <i className='pi pi-home'></i>
            Inicio
          </Link>
        </li>
        <li className={styles.header_nav_list_item}>
          <Link href="/generator" className={styles.header_nav_link}>
            <i className='pi pi-calculator'></i>
            Generador
          </Link>
        </li>
        <li className={styles.header_nav_list_item}>
          <Link href="/quotes" className={styles.header_nav_link}>
            <i className='pi pi-file'></i>
            Cotizaciones
          </Link>
        </li>
        <li className={styles.header_nav_list_item}>
          <Link href="/clients" className={styles.header_nav_link}>
            <i className='pi pi-users'></i>
            Clientes
          </Link>
        </li>
        <li className={styles.header_nav_list_item}>
          <Link href="/products" className={styles.header_nav_link}>
            <i className='pi pi-truck'></i>
            Productos
          </Link>
        </li>
      </ul>
    </nav>
  );
}