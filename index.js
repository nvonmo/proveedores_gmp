import Head from 'next/head';
import ProveedorApp from '../components/ProveedorApp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clasificación de Proveedores</title>
      </Head>
      <main className="p-4">
        <ProveedorApp />
      </main>
    </>
  );
}
