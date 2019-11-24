import React from "react";

function Food1(asdf) {
  // properties를 argument(인자)로 넣음. props라는 이름으로 대신해줌. 이름은은 아무거나 됨.
  console.log(asdf, asdf.fav, asdf["fav"]);
  return <p>Food1 see the console</p>;
}

function Food2({ fav }) {
  return <h3>I love {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food1 fav="veges" />
      <Food2 fav="samgyeopsal" />
      <Food2 fav="abocado" />
      <Food2 fav="ichigo" />
    </div>
  );
}

export default App;
