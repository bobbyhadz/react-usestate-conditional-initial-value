import './App.css';

import {useState} from 'react';

export default function App() {
  // 👇️ Passing function to useState
  const [num, setNum] = useState(() => {
    if (2 * 2 === 4) {
      return 4;
    }

    return 42;
  });

  // 👇️ Using a ternary
  const [str, setStr] = useState(
    'hi'.length === 2 ? 'hello world' : 'test',
  );

  return (
    <div>
      <h2>num is: {num}</h2>

      <h2>str is: {str}</h2>
    </div>
  );
}
