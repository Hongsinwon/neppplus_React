import { useState } from "react/cjs/react.development";

const EventPractisce = () => {
  const [form, setForm] = useState({ userName: "", message: "" });
  const { userName, message } = form;
  //const userName = userName: "";
  //const message = message: "";

  //🔽아래와 같은내용 useState가 많아져서 비구조 할당으로 진행하였다.
  // const [message, setMessage] = useState("");
  // const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    // 바뀐 타겟 userName/message 중 name과 value 출력
    const { name, value } = e.target;
    //const name = e.target.name;
    //const value = e.target.value;

    //name을 키값으로 하는 name="userName"  name="message"
    //value의 내용값 value={userName} value={message}
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  // const handleChangeMessage = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleChangeUserName = (e) => {
  //   setUserName(e.target.value);
  // };

  const handleClick = () => {
    alert(userName + ":" + message);
    setForm({ userName: "", message: "" });
    // alert(userName + ":" + message);
    // setMessage("");
    // setUserName("");
  };

  const hacdleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <hr />
      <h1>이벤트 연습 input</h1>

      <input
        type="text"
        name="userName"
        value={userName}
        placeholder="사용자 이름을 입력해주세요"
        onChange={handleChange}
      />

      <input
        type="text"
        name="message"
        value={message}
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        onKeyPress={hacdleKeyPress}
      />

      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractisce;
