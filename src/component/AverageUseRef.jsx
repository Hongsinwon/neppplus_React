import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중 ...");
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  //값이 변하더라도 랜더링을 하지않는다.\

  // html의 DOM을 담을때, 가져올 때.
  // 로컬변수 = 값을 계속 유지를 해야할때
  const inputEl = useRef(null);
  const fileEl = useRef(null);

  //useCallback (생성하고 실행하고싶은 함수 , [배열])
  //useMemo와 상당히 비슷한 함수 (최적화) 
  //onChange을 onChange할때만 실행됩니다.
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  //onInsert 기존의 list 와 number를 조회해서 nextList를 생성하기 때문에 배열안에 list와 number을 꼭 넣어주어야 한다.
  // useCallback => 함수의 최소화
  const onInsert = useCallback(
    (e) => {
      // input에 입력한 숫자를 정수로 바꾼다.
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");

      inputEl.current.focus();
    },
    [list, number]
  );

  /*  const flieClick = () => {
    flieEl.current.click();
  }; */

  // 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다. (함수를 최소한으로 사용할때 사용)
  // 특정값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않는다면 이전의 연산했던 결과를 다시 사용하는 방식
  // list 배열의 내용이 바뀔때만 getAverage가 호출됩니다.

  // useMemo(() => 함수 , [배열=변할때만 앞의 함수 실행]) = 실행최소화
  const avg = useMemo(() => getAverage(list), [list]);

  //useRef를 통해 만든 객체 안의 crrent값이 실제 엘리먼트를 가르킵니다.
  return (
    <>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {avg}
      </div>
      <input type="file" style={{ display: "none" }} ref={fileEl} />
      <button onClick={() => fileEl.current.click()}>파일</button>
    </>
  );
};

export default Average;
