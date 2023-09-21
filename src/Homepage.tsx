import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
      <h1>Intro til frontend-testing i React</h1>
      <div style={{ display: 'flex', gap: '100px', justifyContent: 'center' }}>
        <Link to="lecture1">Lecture 1</Link>
        <Link to="lecture2">Lecture 2</Link>
        <Link to="lecture3">Lecture 3</Link>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '100px',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <Link to="exercise1">Exercise 1</Link>
        <Link to="exercise2">Exercise 2</Link>
        <Link to="exercise3">Exercise 3</Link>
      </div>
    </>
  );
}
