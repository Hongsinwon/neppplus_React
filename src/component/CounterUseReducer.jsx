import { useReducer } from "react";

function reducer(state, action) {
  //action의 타입에 따라서 state변경을 진행한다.
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + action.number };
    case "DECRMENT":
      return { value: state.value + 1 };
    case "RESET":
      return { value: 0 };
    default:
      //아무것도 해당하지 않을때 기존 상태 반환
      return state;
  }
}

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT", number: 5 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "DECRMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </>
  );
};

export default Counter3;
