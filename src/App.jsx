import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Simple Counter App</h1>
      <h2>{count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
