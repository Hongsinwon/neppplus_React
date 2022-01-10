import { useRef, useState } from "react";
const IterationSample = () => {
  // 리액트에서 키값을 사용해야하는 이유. => 키값을 기준으로 바뀐것을 구분하여 리랜더링하기 때문이다.
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [value, setValue] = useState("");
  //const [nextId, setNextId] = useState(5);

  const nextIdRef = useRef(5);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    //얼리 return => 실행되지 않도록한다. 가독성을 높이는 방법
    if (value.length === 0) return alert("값을 입력하세요");
    //const newNames = [...names, { id: nextId, text: value }];
    const newNames = [...names, { id: nextIdRef.current, text: value }];
    setNames(newNames);
    //setNames([...names, value]);
    setValue(""); //공백만들기
    //setNextId(setNextId +1);
    // .current로 접근하고 값을 바꿔주어야한다.
    nextIdRef.current = nextIdRef.current + 1;
  };

  const handleDelete = (id) => {
    //삭제기능 구현하기
    //1 parameter로 받아온 id와 names배열의 is가 같은 element를 찾는다.
    //2 그 element만 제거된 새로운 배열을 민든다.
    //3. 새로운 배열을 setNames함수를 이용해서 names를 변경한다.

    // id가 동일하지 않는것만 찾는다 => 동일하지 않는 배열만 setNames안에 넣어 리랜더링한다.
    const newNames = names.filter((names) => names.id !== id);
    console.log(newNames);
    setNames(newNames);
  };

  //1. 추가버튼을 누르면 input에 담긴 값이 alert되도록 -useState, onChange, onClick
  return (
    <>
      <div>
        <input
          value={value}
          onChange={handleChange}
          placeholder="내용을 입력해주세요"
        />
        <button onClick={handleClick}>추가</button>
      </div>
      <hr />
      <ul>
        {names.map((name) => (
          <li key={name.id} onDoubleClick={() => handleDelete(name.id)}>
            {name.text}
          </li>
        ))}
        <hr />
        <li>눈사람</li>
        <li>얼음</li>
        <li>눈</li>
        <li>바람</li>
      </ul>
    </>
  );
};

export default IterationSample;

// map() 함수
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((num) => num * num);
// result = [1, 4, 9, 16, 25];
