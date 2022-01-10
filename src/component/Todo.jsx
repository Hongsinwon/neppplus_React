import styled, {css} from "styled-components";
import { useState, useRef } from "react";
const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(1);

  const handleAddTodo = () => {
    //if (text === "") return;
    // text값을 todoList에 추가.
    const newList = [...todoList, { id: nextId.current, text: text, isDone: false }];
    setTodoList(newList);
    setText("");
    nextId.current++;
  };
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  }

  // const handleIsDone = (e, id) => {
  //  const newTodoList = todoList.map((todo)=> {
  //    if (todo.id === id) {
  //    todo.isDone = e.target.checked;
  //   }
  //   return todo;
  //   })
  //   setTodoList(newTodoList);
  // }

// 1번째 체크박스의 바뀐값 2번째 체크박스 눌린 어떤 todolist인지!
  const handleIsDone = (e, id) => {
    const isDone = e.target.checked;

    //모든 todo를 return하게 된다.
    const newTodoList = todoList.map((todo)=> { 
      //isDone값만 새롭게 바뀐다. 기존내용은 그대로진행.
      return todo.id === id ? {...todo, isDone} : todo;
      })
    setTodoList(newTodoList);
  }

  //form안에 button은 기본적으로 type="submit"이다. 기본기능을 하기 싫을시 type="button"으로 따로 설정해 주어야한다.
  return (
    <Container>
      <Title>일정관리</Title>
      {/*<form action="https://naver.com"> */}
      <form onSubmit={handleSubmit}>
      <InputWrapper>
        <InputText onChange={(e) => setText(e.target.value)} value={text} required/>
        <BtnSubmit>추가</BtnSubmit>
      </InputWrapper>
      </form>
      <List>
        {todoList.map(({id, text, isDone}) => (
          <Item key={id}>
            <label>
              <Checkbox type="checkbox" 
              checked={isDone} 
              onChange={(e)=>handleIsDone(e, id)}
              readOnly/>
              <Content isDone={isDone}>{text}</Content>
            </label>
            <BtnDelete onClick={() => handleDelete(id)}>삭제</BtnDelete>
          </Item>
        ))}
      </List>
    </Container>
  );
};
const Container = styled.div`
  width: 500px;
  margin: 10px auto;
  border: 1px solid #000;
`;
const Title = styled.div`
  background: #000;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 10px 0;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #000;
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSubmit = styled.button``;
const List = styled.ul``;
const Item = styled.li`
  display: flex;
  padding: 10px;
  label {
    flex: 1;
    display: flex;
    align-items: center;
  }
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Checkbox = styled.input``;
const Content = styled.div`
color: ${({isDone})=>(isDone && "#dddddd")};
text-decoration: ${({isDone}) => isDone && "line-through"};

// {css에 넣은경우 => 많은 것을 바꿀때 좋다.}
${({isDone}) => 
isDone && 
css`
  color: #dddddd;
  text-decoration:line-through;
`}
`;

const BtnDelete = styled.button``;
export default Todo;