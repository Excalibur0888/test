import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log('works');
  };

  return (
    <div className="qty">
      <button className="qty__btn">-</button>

      <input type="number" defaultValue={count} min="1" max="500" />
      <span>{props.unit}</span>

      <button className="qty__btn" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
