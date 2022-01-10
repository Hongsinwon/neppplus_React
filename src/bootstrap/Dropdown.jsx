import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const btnEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      //if (btnEl.current && !btnEl.current.contains(e.target))
      if (!btnEl.current?.contains(e.target)) {
        setIsShow(false);
      }
    };
    document.body.addEventListener("click", onClick);

    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

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
