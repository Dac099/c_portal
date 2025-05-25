import Link from 'next/link';

export default function NotFound() {
  return (
    <article>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '1rem',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: '2rem',
          }}
        >
          404
        </h1>
        <p>Página no encontrada</p>
      </section>

      <section>
        <Link 
          href="/"
          style={{
            display: 'block',
            padding: '10px',
            backgroundColor: '#0070f3',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
            fontSize: '1rem',
            width: 'fit-content',
            margin: '0 auto',
          }}
        >
          Volver a la página principal
        </Link>
      </section>
    </article>
  );
}