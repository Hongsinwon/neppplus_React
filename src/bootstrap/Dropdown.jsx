import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const btnEl = useRef(null);

  // 유튜브 처럼 다른페이지로 이동이 가능하며, 공백바탕을 누르면 꺼지도록 만드는 방법
  // 최초 렌더링 됐을때만 사용하도록 할려면 useEffect와 []빈배열을 넣는다.
  // 1번 누를때 1번만 실행된다. useEffect를 쓰지않으면 중복실행으로 된다.
  useEffect(() => {
    const onClick = (e) => {
      console.log (e.target); 

      // 자바에서는 특정 문자가 포함되었지를 알기 위해 ontains() 함수를 통해 true/false를 출력한다.
      // btnEl이 e.target<Btn />을 포함하고 있지 않으면 setIsShow(false);실행
      // false인 경우 isShow 화면이 꺼짐
      // ?의 의미 => btnEl.current가 존재할때만 contains(e.target) 실행
      
      // if (btnEl.current && !btnEl.current.contains(e.target))
      if (!btnEl.current?.contains(e.target)) {
        setIsShow(false);
      }
    };

    document.body.addEventListener("click", onClick);

    //cleanup 함수
    // 다른 함수에 영향을 준다면 cleanup 함수로 전부 치워야한다. 하지 않을경우 계속 남아있어 오류와 성능하락의 주범이 된다.
    return () => {
      //제거하지 않으면 addEventListener이 남아 계속 작동된다.  
      // console.log()를 작성하면 콘솔창에서 남는 기록들을 확인하자
      document.body.removeEventListener("click", onClick);
    };
  }, []);

   /* 
  useEffect 변경되는 상황
  1. onClick이 e.target되기 직전에 cleanup 함수 실행 => body에 붙은 eventListener을 제거
  2. e.terget실행
  3. onClick 함수 실행
  */

  const heandleClick = () => {
    setIsShow((current) => !current);
    console.log(isShow);
  };

  //조건부 렌더링 할 시 태그 자체가 사라진다.
  return (
    <Weapper>
      <Btn ref={btnEl} onClick={heandleClick}>
        Dropdown Button
      </Btn>
      {isShow && (
        <>
          <Backdrop onClick={heandleClick}></Backdrop>
          <Menu>
            <Item>메뉴1</Item>
            <Item>메뉴2</Item>
            <Item>메뉴3</Item>
          </Menu>
        </>
      )}
    </Weapper>
  );
};

const Weapper = styled.div`
  position: relative;
`;

const Btn = styled.button`
  margin-top: 20px;
  border: none;
  position: relative;
  padding: 8px 20px;
  background: #009e28;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  z-index: 1;
`;
const Menu = styled.ul`
  padding: 0;
  margin: 5px auto;
  list-style: none;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: absolute;
  z-index: 100;
`;
const Item = styled.li`
  width: 120px;
  padding: 10px 20px;
  cursor: pointer;

  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background: #eee;
    color: #009e28;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background: #000000a6;
`;

export default Dropdown;
