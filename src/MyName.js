import React from "react";

export default function MyName(props) {
  return (
    <>
      <div>안녕하세요! 제 이름은 {props.name} 입니다.</div>
    </>
  );
}

MyName.defaultProps = {
  name: "기본이름"
};
