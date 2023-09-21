/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import api from './api';
import swanson from '../assets/parks-and-recreation-swanson-way.jpg';

export default function QuoteContainer() {
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    api.get('/quotes').then((res) => {
      setQuote(res.data);
    });
  }, []);

  return (
    <>
      <img
        src={swanson}
        alt="swanson"
        style={{ width: '1000px', height: '500px' }}
      />
      {quote.length >= 1 && <h2>{`Swanson: ${quote}`}</h2>}
    </>
  );
}
