import styled, {css} from "styled-components";
import { useState, useRef } from "react"

const Todolist = () => {
  // 텍스트 
  const [text, setText] = useState("")
  const [arrValue, setArrValue] = useState([]);
  const id = useRef(0)

  const submitClick = () => {
    const newValue = [...arrValue, {id:id.current, text:text, isDone : false}]
    setArrValue(newValue); //배열에 넣기
    setText("") //공란만들기
    id.current++
  }
  const clickDelete = (id) => {
    // 정답 :: const newTodoList = todoList.filter((todo) => todo.id !== id);

    //실행은 되지만 실제 사용시 todo.id !== id가 아닌경우 배열의 true만 출력됨으로 뒤에 작업을 안써도 된다.
    const deleteValue = arrValue.filter((todo) => 
    todo.id !== id ?? [...arrValue, {id:id}])
    setArrValue(deleteValue)

  }
  const onSubmit = (e) => {
    e.preventDefault();
    submitClick();
  }

  //e => 누른 타겟 id 아이디로 누른걸 확인
  const isDoneClick = (e, id) => {
    const isDone =e.target.checked;
    console.log(isDone)

    const newValue = arrValue.map((todo) => {
      return todo.id === id ? {...todo, isDone} : todo
    })
    setArrValue(newValue);


  }

  //setText(e.target.value) <- 적힌 값이 text에 렌더링 된다.
  return (
  <Container>
    <Title>일정관리</Title>
    <form onSubmit={onSubmit}>
      <InputWrapper>
        <InputText
        value={text}
        onChange={(e) =>setText(e.target.value)}
        placeholder="내용을 입력해주세요"
        required/>
        <BtnSubmit onClick={submitClick}>추가</BtnSubmit>
      </InputWrapper>
      </form>
        <List>
          {arrValue.map(({id, text, isDone}) => 
            <Item key={id}>
            <label>
             <Checkbox type="checkbox" 
             checked={isDone}
             onClick={(e) =>isDoneClick(e, id)}
             readOnly/>
            <Content isDone={isDone}>{text}</Content>
            </label>
            <BtnDelete onClick={()=>clickDelete(id)}>삭제</BtnDelete>
            </Item>
          )}
      </List>

  </Container>
  )}

  const Container = styled.div`
    width:500px; 
    background : #eee;
    margin : 10px auto;
    border: 1px solid #000;
    
  `;
  const Title = styled.div`
    background : #000;
    color:#fff;
    text-align: center;
    font-weight : bold;
    padding: 10px 0;
  `;

  const InputWrapper = styled.div`
    display : flex;
    align-items:center;
    padding:10px;
    border-bottom: 1px solid #000;
  `;

  const InputText = styled.input`
    flex: 1;
    margin-right:10px;
  `;
  const BtnSubmit = styled.button``;
  
  const List = styled.ul`
  padding:0; 
  margin: 0;
  background : #fff;
  `;

  const Item = styled.li`
  display: flex;
  padding: 10px;
    label{
      display: flex;
      flex:1;
      align-items:center
    }

& + & {
  border-top : 1px solid #000;
}
    `;

  const Checkbox = styled.input`
  `;
  const Content = styled.div`
     ${({isDone}) => 
      isDone && 
      css`
        color:#999; 
        text-decoration: line-through;
      `
      }
  `;
  const BtnDelete = styled.button``;


export default Todolist;