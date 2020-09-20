import React, { Fragment } from "react";
import "./styles/App.css";
import { InputTodo, ListTodos } from "./components";
const App = () => {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
};

export default App;
