import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Modal = ({ onClose, onChange }) => {

  // 바디에 스크롤을 막기위한 기능. 
  // 렌더링 될때마다 overflow가 실행됨으로 cleanup함수로 리셋을 진행시킨다.
  useEffect(() => {
    //Modal 컴포넌트가 생성되면 body에 overflow:hidden 속성으로 스크롤을 막는다.
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px"; // 옆으로 밀리는 것 때문에 넣어준다.

    return () => {
      //Modla컴포넌트가 제거되면 원래대로 돌려놓는다.
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  const [value, setValue] = useState("");

  //바로꺼질 수 있기 때문에 이를 방지하기 위한 useState를 만든다. => collapse(무너지다)
  const [collapse, setCollapse] = useState(false);

  const closeClick = () => {
     // true가 되면 사라질 준비를 한다. opacity: ${({ collapse }) => collapse && 0};
    setCollapse(true);
    //.5초 후에 onClose를 실행단다. opacity 값 변동
    setTimeout(() => {
      onClose();
    }, 500);
  };

  //onChange에 value값을 전달한다.
  const nickNameSave = () => {
    //confirm은 앞에 window를 붙여야한다.
    if (!window.confirm("닉네임을 변경하시겠습니까?")) return; //false일때 return
    onChange(value);
    onClose();
  };

  return (
    <>
      <BackModal onClick={closeClick} collapse={collapse} />
      <Container collapse={collapse}>
        <Header>닉네임 변경</Header>
        <Body>
          <input
            placeholder="닉네임을 입력해주세요."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Body>
        <Footer>
          <BtnClose onClick={closeClick}>닫기</BtnClose>
          <BtnSave onClick={nickNameSave}>저장하기</BtnSave>
        </Footer>
      </Container>
    </>
  );
};

//css animation
const slideIn = keyframes`
  from { // 시작속성
    opacity : 0;

  } 
  to { // 범용속성
    opacity : 1;
  }
`;

const slideBackModal = keyframes`
  from {
    opacity : 0;

  } 
  to {
    opacity : 0.7;
  }
`;

const Container = styled.div`
  animation: ${slideIn} 0.5s;
  background: #fff;
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  box-shadow: 0px 0px 20px #555;
  z-index: 3;
  opacity: ${({ collapse }) => collapse && 0};
  transition: opacity 0.5s;
`;

const Header = styled.header`
  padding: 16px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  font-weight: bold;
`;
const Body = styled.main`
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: end;
  padding: 16px;
`;

const Btn = styled.button`
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  color: #fff;
  line-height: 1.5;
  margin: 4px;
`;
const BtnClose = styled(Btn)`
  background: #555;
`;
const BtnSave = styled(Btn)`
  background: #0059ff;
`;

const BackModal = styled.div`
  animation: ${slideBackModal} 0.5s;
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  z-index: 2;
  opacity: ${({ collapse }) => (collapse ? 0 : 0.7)};
  transition: opacity 0.5s;
`;

export default Modal;
