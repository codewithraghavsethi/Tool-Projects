import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (event) => {
    let toname = event.target.todoname.value;
    if (!todolist.includes(toname)) {
      let finaltodolist = [...todolist, toname];
      setTodolist(finaltodolist);
    } else {
      alert("To Do Name is Already Exists....");
    }
    event.preventDefault();
  };

  let list = todolist.map((v, index) => {
    return (
      <ToDoListItem
        value={v}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" />
        <button>Save</button>
      </form>

      <div className="outer-div">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItem({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finaldata = todolist.filter((v, i) => i != indexNumber);
    setTodolist(finaldata);
  };

  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? "complete" : " "} onClick={checkStatus}>
      {indexNumber + 1}. {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
