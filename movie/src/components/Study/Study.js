import React from 'react'

function Study() {
  // JSX 문법
  // 1. class => className
  // 2. 부모 div가 있어야 함
  // 3. JSX에는 IF문이 없다.
  // 4. 인라인 css는 카멜로 표현한다.
  // 5. 무조건 태그는 닫는다.

  // 리액트는 let 아니면 const만 활용 var는 이제 byebye
  const name = '메시';
  // IF가 아닌 삼항 연산자로 표현

  // CSS 카멜로 표현
  const style = {
    fontSize: '32px',
    backGroundColor: 'red'
  };
  return (
    <>
      <div>{name == '메시' ? <h2>메시!</h2> : <h2>호날두!</h2>}</div>
      <div style={style}>인라인 CSS</div>
      <input value='Hello World!'></input>
    </>

  )
}

export default Study