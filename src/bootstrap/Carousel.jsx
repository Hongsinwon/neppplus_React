import { useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const precClick = () => {
    setActiveIndex(activeIndex - 1);
    if (activeIndex === 0) {
      return setActiveIndex(data.length - 1);
    }
  };

  const nextClick = () => {
    setActiveIndex(activeIndex + 1);
    if (activeIndex === data.length - 1) {
      return setActiveIndex(0);
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
      <BtnPrev onClick={precClick}>이전</BtnPrev>
      <BtnNext onClick={nextClick}>다음</BtnNext>
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => !active && 0};
  transition: opacity 0.5s ease-in;
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
export default Carousel;
