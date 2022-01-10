import { useState } from "react";
import styled, { css } from "styled-components";

const Accordion = ({ data }) => {
  //몇번째 인덱스가 active가 된건지 알려준다
  const [activeIndex, setActiveIndex] = useState(0);

  const activeClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }

    //return이 없으면 null이 실행을 하지않는다. or 리턴을 넣어 setActiveIndex(index);의 실행을 막는다
    //return 실행값 if else도 사용가능
    /*     if (activeIndex === index) {
      return setActiveIndex(null);
    }
    setActiveIndex(index); */
  };
  //active={index === activeIndex} => 같으면 true / 같지않으면 false
  //index번호와 activeIndex의 useState의 번호가 같으면 active실행
  return (
    <>
      <List>
        {data.map(({ id, title, content }, index) => (
          <Item key={id} active={index === activeIndex}>
            <Header onClick={() => activeClick(index)}>
              {title}
              <ImgArrow
                src={
                  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E"
                }
              />
            </Header>

            <Body>
              <P>{content}</P>
            </Body>
          </Item>
        ))}
      </List>
    </>
  );
};

const List = styled.ul`
  padding: 0;
  margin: 60px auto;
  list-style: none;
  border: 1px solid #dddddd;
  border-radius: 4px;
  max-width: 800px;
`;
const Item = styled.li`
  & + & {
    border-top: 1px solid #dddddd;
  }

  ${({ active }) =>
    active &&
    css`
      ${Header} {
        background: #c8eeff;
        color: #004ffa;
      }
      ${Body} {
        max-height: 200px;
      }

      ${ImgArrow} {
        transform: rotate(-180deg);
      }
    `}
`;
const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Body = styled.div`
  max-height: 0px;
  border-top: 1px solid #dddddd;
  transition: max-height 0.5s ease-out;
  overflow: hidden;
`;

const P = styled.p`
  padding: 0 15px;
`;

const ImgArrow = styled.img`
  width: 20px;
  transition: transform 0.5s ease-out;
`;

export default Accordion;
