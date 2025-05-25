'use client';
import styles from './header-nav.module.css';
import { NavBar } from './nav-bar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';

export function HeaderNav() {
  const op = useRef<OverlayPanel>(null);

  return (
    <section className={styles.header_container}>
      <h1 className={styles.header_title}>Carrocerías David</h1>
      <article 
        className={styles.mobile_menu_btn}
        onClick={e => op.current?.toggle(e)}
      >
        <i className="pi pi-bars"></i>
        Menu
      </article>
      <article className={styles.header_nav}>
        <NavBar />
      </article>
      <OverlayPanel ref={op}>
        <NavBar />
      </OverlayPanel>
    </section>    
  );
};
