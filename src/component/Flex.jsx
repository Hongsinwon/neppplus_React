import styled from "styled-components";

const Flex = () => {
  return (
    <>
      <Container>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <button>
          <img src="" />
        </button>
      </Container>
      <Nav>
        <Img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
        인스타그램
        <Input />
      </Nav>
      <ContainerGrid>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </ContainerGrid>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;
const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
const Box = styled.div`
  height: 200px;
  background: aqua;
  border: 1px solid;
`;
const Box1 = styled(Box)`
  background: red;
  height: 100px;
`;
const Box2 = styled(Box)`
  width: 100px;
  background: black;
`;
const Box3 = styled(Box)`
  background: blue;
  width: 300px;
  height: 300px;
`;
const Box4 = styled(Box)`
  background: green;
  height: 300px;
`;

const Nav = styled.nav`
  position: fixed;
  background: #fff;
  top: 0;
  width: 100vw;
  border-bottom: 1px solid #ddd;
  height: 80px;
  display: flex;
  align-items: center;
`;
const Img = styled.img``;
const Input = styled.input`
  flex: 1;
`;
export default Flex;