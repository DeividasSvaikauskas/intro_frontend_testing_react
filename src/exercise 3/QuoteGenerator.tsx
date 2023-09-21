/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import api from './api';
import swanson from '../assets/parks-and-recreation-swanson-way.jpg';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState<string>('');
  const [refreshCounter, setRefreshCounter] = useState<number>(0);

  useEffect(() => {
    api.get('/quotes').then((res) => {
      setQuote(res.data);
    });
  }, [refreshCounter]);

  return (
    <>
      <h1>The Greates Quotes By Ron Swanson</h1>
      <img
        src={swanson}
        alt="swanson"
        style={{ width: '1000px', height: '500px' }}
      />
      {quote.length >= 1 && <h2>{`Swanson: ${quote}`}</h2>}
      <button onClick={() => setRefreshCounter(refreshCounter + 1)}>
        New Quote
      </button>
    </>
  );
}
