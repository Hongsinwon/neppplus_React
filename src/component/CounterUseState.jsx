import { useState } from "react/cjs/react.development";

const Counter2 = () => {
  const [number, setNumber] = useState(0);

  const addNumber = (e) => {
    setNumber(number + e);
  };

  return (
    <>
      <h1>현재 카운터 값은 {number} 입니다.</h1>
      <button onClick={() => addNumber(1)}>+1</button>
      <button onClick={() => addNumber(-1)}>-1</button>
      <button onClick={() => addNumber(2)}>+2</button>
      <button onClick={() => addNumber(-2)}>-2</button>
    </>
  );
};

export default Counter2;
