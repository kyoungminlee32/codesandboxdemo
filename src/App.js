import React from "react";
import "./styles.css";
import MyName from "./MyName";

export default function App() {
  const name = "react";
  const values = 3;
  const h1_style = {
    backgroundColor: "#000",
    padding: "16px",
    color: "#ff0",
    fontSize: "16px",
    textAlign: "left"
  };
  return (
    <div className="App">
      <h1 style={h1_style}>안녕하세요</h1>
      <input type="text" />
      <div>hello {name}!</div>
      {1 + 1 === 3 ? "맞다" : "틀리다"}
      {name === "react" && <div>리엑트다</div>}
      {(() => {
        if (values === 1) return <div>1이다.</div>;
        if (values === 2) return <div>2이다.</div>;
        if (values === 3) return <div>3이다.</div>;
        return <div>없다.</div>;
      })()}
      <MyName name="리엑트" />
    </div>
  );
}
