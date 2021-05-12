import { useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Total from './components/Total';
import Description from './components/Description';
import Social from './components/Social';
import Footer from './components/Footer';

export default function App() {
  const [total, setTotal] = useState(null);

  const getResult = result => setTotal(result);

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

        <Social />
      </main>

      <Footer />
    </>
  );
}
