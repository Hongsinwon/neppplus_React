import { useState } from "react";

const Say = () => {
  const [message, setmessage] = useState("");
  const onClickEnter = () => setmessage("안녕하세요.");
  const onClickLeave = () => setmessage("안녕히 가세요.");

  //{ color } =>  { color : color }
  const [color, setColor] = useState("black");

  //변화하고 싶은값만 적고 변하지않는 값은 나머지 변수값으로 받아온다.
  const [style, setStyle] = useState({ color: "black", fontSize: 60 });

  //onClick={() => onClickEnter("매개변수")} <- 이렇게 작성해야 변수를 전달할 수 있습니다.
  return (
    <>
      <hr />
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <h1 style={style}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>

      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>

      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑색
      </button>
      <hr />
      <button
        style={{ color: "red" }}
        onClick={() => setStyle({ ...style, color: "red" })}
      >
        빨간색
      </button>

      <button
        style={{ color: "green" }}
        onClick={() => setStyle({ ...style, color: "green" })}
      >
        초록색
      </button>

      <button
        style={{ color: "blue" }}
        onClick={() => setStyle({ ...style, color: "blue" })}
      >
        파랑색
      </button>
    </>
  );
};

export default Say;
