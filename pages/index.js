import Head from 'next/head';

import Header from '../components/Header';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Head>Serena Stante - Foreign Language Expert</Head>
      <Header>
        <h2>Serena Stante</h2>
        <h1>Foreign Language Expert</h1>
        <p>Helping businesses overcome the language barrier</p>
        <Button>Contact Me</Button>
      </Header>
    </>
  );
}
