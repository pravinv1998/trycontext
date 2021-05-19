import React, { useContext } from "react";
import { mycontext } from "./App";

const Main = () => {
  const mydetails = useContext(mycontext);
  return (
    <div>
      {/* <mycontext.Consumer>{(data) => <h1> {data.me} </h1>}</mycontext.Consumer> */}
      <h1> {mydetails.lname} </h1>
    </div>
  );
};

export default Main;
