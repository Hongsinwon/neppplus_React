import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Modal1 = ({ onClose, onChange }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  const [value, setValue] = useState("");
  const [collapse, setCollapse] = useState(false);

  const closeClick = () => {
    setCollapse(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  //onChange에 value값을 전달한다.
  const nickNameSave = () => {
    if (!window.confirm("닉네임을 변경하시겠습니까?")) return;
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

const slideIn = keyframes`
  from {
    opacity : 0;

  } 
  to {
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

export default Modal1;
