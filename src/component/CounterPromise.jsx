import { useState } from "react";

const Counter = () => {
  let number1 = 0;

  //set 함수는 비동기
  //useState - 리액트 컴퍼넌트 안에서 사용하는 변수를의미 useState와 비교되는게 props.
  //props는 부모로 부터 받아온 데이터, 부모로부터 받아온 변수 = 읽기전용
  //자식이 props를 변경하고 싶으면 직접 변경할 수 없다. 부모로부터 props를 변경할 수 있는 함수를 다시 받아와서 그것을 실행시켜서 props를 실행 
  
  //useState를 사용하는 경우.
  //1. 변수가 jsx에서 출력되는 변수
  //2. 계속 바뀌는 변수(고정X, 계속 변하면서 jsx에 출력되는 경우), 변화가 감지되면 렌더링이 다시 일어남.
  const [number, setNumber] = useState(0);
  // [실제로 쓰이는 변수, 앞변수를 수정할 수 있는 함수(비동기) ] = 비 구조화 할당진행

  //const arr = [0, 1, 2];
  //const one = arr[0];
  //const two = arr[1];
  //const [one, two] = arr; <- 비구조와 할당


  //useState(함수)의 개념 
  const useState = (init) => {
    let state = init; 
    const setState = (value) => {
      state = value; 
      //값을 바꿔주고 렌더링
    };

    return [state , setState];
  }

  //setNumber((prev) => {return prev + 1}); 이전값을 받아온다.
  return (
    <>
      <h1>{number1}</h1>
      <button
        onClick={() => {
          return (number1 += 1);
        }}
      >
        ++
      </button>

      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((prev) => {return prev + 1});
          setNumber((prev) => {return prev + 1});
          setNumber((prev) => {return prev + 1});
          setNumber((prev) => {return prev + 1});
          setNumber(number + 1)
          setNumber((prev) => {return prev + 1});
          {/*setNumber(number + 1);
            // <- 비동기적 실행 (변화가 한번에 일어난다. // 0 + 1 = 1)
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);*/}
          console.log(number)
        }}
      >
        +
      </button>
    </>
  );
};

export default Counter;
