import { useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Total from './components/Total';
import Description from './components/Description';
import Footer from './components/Footer';

export default function App() {
  const [total, setTotal] = useState('');

  const getResult = (result: string) => setTotal(result);

  useEffect(() => {
    document.title = total
      ? `Result: ${total} | Exponent calculator`
      : 'Exponent calculator | React App';
  }, [total]);

  return (
    <>
      <Header />

      <main className="App">
        <Form onSubmit={getResult} />

        <Total total={total} />

        <Description />
      </main>

      <Footer />
    </>
  );
}
