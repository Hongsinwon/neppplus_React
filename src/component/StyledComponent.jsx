import styled, { css } from "styled-components";

const Btn = styled.button`
  background: #fff;
  border: none;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
`;

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  ${Btn} { 
    background : black;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  :hover {
    background: rgba(255, 255, 255, 0.9);
  }

  //$(오퍼링) <- 자기자신을 가르킨다. 
  // 어떤 조건에 따라서 속성이 많이 변화가 될때 사용한다.
  //inverted가 true면 css내용을 다 사용한다.
  // css 함수를 사용한다
  ${({ inverted }) =>
    inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      //scss처럼 사용 할 수있다.
      &:hover {
        background: white;
        color: black;
      }
    `};
    // + 연산자는 :: html에 자신뒤에 button이 오면 아래 속성이 들어감
  & + button {
    margin-left: 1rem;
  }
`;


const BtnBlue = styled(Btn)`
  background: blue;
  color: #fff;
`;
const BtnRed = styled(Btn)`
  background: red;
  color: #fff;
`;

const StyledComponent = () => (
  <>
  <Box color="red">
    <Box></Box>
    <Btn>기본 버튼</Btn>
    <BtnBlue>파란 버튼</BtnBlue>
    <BtnRed>빨간 버튼</BtnRed>
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
    <Button inverted>테두리만</Button>
    <Button inverted>테두리만</Button>
  </Box>
  <Btn>기본 버튼(하양)</Btn>
  </>
);

export default StyledComponent;