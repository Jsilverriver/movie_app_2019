import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
// <App /> 이 부분을 component라고 부른다. react는 component와 함께 동작함.
// 컴포넌트를 만들것이고, 이쁘게 하게 할것이고.. 컴포넌트로 계속 놀것이다.
// 컴포터는트는 기본적으로 HTML을 반환하는 함수이다.
// JSX 이 JSX라는 개념은 오직 리액트에서만 적용된다. 다른 어떤 언어도 이런걸 쓰진 않음.
// react는 한번에 하나의 컴포넌트(<App />)만 rendering 할 수 있다. <App />, <Potato /> 이런식으로 하면 아니된다!
