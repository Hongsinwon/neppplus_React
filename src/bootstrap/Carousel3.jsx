import { useState } from "react";
import styled from "styled-components";

const Carousel3 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
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
      <List activeIndex={activeIndex}>
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
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 400}px)`};

  transition: transform 0.5s ease-in;
`;
const Item = styled.li``;
const Image = styled.img`
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
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
export default Carousel3;
