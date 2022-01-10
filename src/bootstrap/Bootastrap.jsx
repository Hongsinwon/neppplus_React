import Accordion from "./Accordion";
import { accordionData, carouselData } from "../data/index";
import Dropdown from "./Dropdown";
import Carousel3 from "./Carousel3";
import Modal from "./Modal";

import styled from "styled-components";
import { useState } from "react";

const Bootstrap = () => {
  const [nickName, setNickName] = useState("닉네임");
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  //closeModal을 실행시켜야한다.
  //props로 전달받은 onClose은 Modal에서 onClick이벤트로 실행시킨다
  //setShowModal(false); 값이 true가 되면서 showModal이 false값으로 변환
  const closeModal = () => {
    setShowModal(false);
  };

  //props로 전달받은 onChange Modal에서 onClick이벤트로 실행시킨다.
  //전달받은 value 값은 changeNickName의 파라메타로 전달받는다.
  //즉 onChange={(value) => changeNickName(value)}
  //const changeNickName = (nickName=== value) =>
  const changeNickName = (nickName) => {
    setNickName(nickName);
  };

  return (
    <div style={{paddingLeft : 200}}>
      <Carousel3 data={carouselData} />
      <Dropdown />
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <h2>닉네임 : {nickName} </h2>
      <BtnModal onClick={handleClick}>모달</BtnModal>
      {showModal && <Modal onClose={closeModal} onChange={changeNickName} />}
    </div>
  );
};

const BtnModal = styled.button``;

export default Bootstrap;
