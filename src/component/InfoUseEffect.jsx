import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeNickName = (e) => {
    setNickName(e.target.value);
  };

  //useEffect(() => {}) <- 함수 
  //첫번째 인자 = 함수(function) (2번째 인자를 넣지않으면 랜더링이 될때마다 실행됩니다.)
  //두번째 인자 = 배열(Array) ([] <- 빈배열일때 처음 랜더링될 때 실행됩니다.)
  useEffect(() => {
    console.log("💖 랜더링이 완료되었습니다.");
  });

  //최초 마운트 될 때 한번만 실행하고 싶을 때.
  useEffect(() => {
    console.log("🔊 마운트(최초 랜더링 생성) 될때만 실행됩니다.");
  }, []);


  useEffect(() => {
    console.log("🔊 마운트(최초 랜더링 생성) 될때만 실행됩니다.");
  // cleanup 함수 = unmount 될 때 (리액트 컴포넌트가 종료 될 때)
    return () => {
      console.log("❌ unmount");
    };
  }, []);

   
  // update 될 때 (특정 배열이 업데이트 될때 실항)
  // [name] => name배열이 이 바뀔때마다 함수가 실행됩니다
  useEffect(() => {
    console.log("🤦‍♀️name값이 변경되었습니다. " + name);
  }, [name]);

   // [name, nickName] => name배열과 nickName배열 중 하나가 바뀔때마다 함수가 실행됩니다
  useEffect(() => {
    console.log("🤦‍♀️name값과 🤦‍♂️nickName이 변경되었습니다. " + name + nickName);
  }, [name, nickName]);


  /* 
  nickName 변경되는 상황
  1. nickName이 바뀌기 직전에 cleanup 함수 실행 //nickName값이 바뀌기 직전에 실행됩니다.
  2. nickName 실행 // input창에서 nickName 값변경
  3. useEffect 함수 실행 //nickName값이 변경되어 useEffect실행 // nickName값이 변경되었습니다. " + nickName
   */
  useEffect(() => {
    console.log("🤦‍♂️nickName값이 변경되었습니다. " + nickName);
    return () => {
      console.log("🤦‍♂️nickName값이 바뀌기 💬직전에 실행됩니다.");
    };
  }, [nickName]);

  return (
    <>
      <div>
        <input
          placeholder="이름을 입력해주세요"
          onChange={changeName}
          value={name}
        />
        <input
          placeholder="닉네임을 입력해주세요"
          onChange={changeNickName}
          value={nickName}
        />
      </div>
      <h2>이름 : {name}</h2>
      <h2>닉네임 : {nickName}</h2>
    </>
  );
};

export default Info;
