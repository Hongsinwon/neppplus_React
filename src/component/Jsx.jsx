//js나  jsx와 같은 javascript파일이다. => jsx 이론 공부하기
//리액트 component는 대문자로 시작해야한다.
//jsx는 하나의 엘리먼트만 반환되어야 한다. 그렇지 않은경우 <div>로 감싸주어야한다.
// <> </> => div사용시 css오류때문에 빈 꺽새를 넣기도 한다

// [삼항연산자]리액트는 if문을 사용하지 않고 삼항연산자를 사용한다. => {조건 ? 참 : 거짓}

// [&&연산자] &&를 사용한 조건부 렌더링
// [||연산자] 어떤것이 들어갈지 모를때 사용한다.

// 함수형 컴포넌트
const Jsx = () => {
  const name = "리액트";
  //falsy : 0 undefined null " " NaN false <-if문을 참이 되지 않는 것들...
  const name1 = 0;

  //변수로 스타일 지정
  const style = {
    backgroundColor: "yellow",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <div className="react">리액트</div>

      <div
        style={{
          backgroundColor: "black",
          color: "aqua",
          fontSize: "48px",
          fontWeight: "bold",
          padding: 16,
        }}
      >
        리액트
      </div>

      <div style={style}>리액트</div>
      {
        {
          /* 어떤것이 들어갈지 모를때 사용하며, 변수값이 없으면 false를 출력한다. */
        }
      }
      {name1 || "값이 falsy합니다"}
      {name1 === 0 || "값이 falsy합니다"}
      {
        {
          /* true만 출력됩니다. */
        }
      }
      {name === "리액트" && <h1>리액트 입니댱!</h1>}

      {name === "리액트!" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}

      <h1>{name} 입니다</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
};

//default를 하고있기 때문에 바로 app에 출력할 수 있다.
export default Jsx;
