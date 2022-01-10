import { useState } from "react";
import styled from "styled-components";

// padeIn / padeOut 
const Carousel2 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(activeIndex)

  const Click = (n) => {
    if (n === -1 && activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else if (n === 1 && activeIndex === data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + n);
    }
  };

  return (
    <Weapper>
      <List>
        {data.map((img, index) => (
          <Item key={index}>
            <Image src={img} active={index === activeIndex} />
          </Item>
        ))}
      </List>
      <BtnPrev onClick={() => Click(-1)}>이전</BtnPrev>
      <BtnNext onClick={() => Click(1)}>다음</BtnNext>
    </Weapper>
  );
};

const Weapper = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const Item = styled.li``;
const Image = styled.img`
  position: absolute; //이미지를 다 겹친다.
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in;
  opacity: ${({active})=> !active && 0};   //active가 없으면 opacity값 0 // 기본값 1
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const BtnPrev = styled(Btn)`
  left: 10px;
`;
const BtnNext = styled(Btn)`
  right: 10px;
`;
export default Carousel2;
