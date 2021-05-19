import logo from "./logo.svg";
import "./App.css";
import { createContext } from "react";
import Main from "./Main";

export const mycontext = createContext();
const mydata = {
  me: "pravin vargad",
  lname: "vargad",
};
function App() {
  return (
    <div>
      <mycontext.Provider value={mydata}>
        <Main />
      </mycontext.Provider>
    </div>
  );
}

export default App;
