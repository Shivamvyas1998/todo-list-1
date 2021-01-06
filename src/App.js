import "./App.css";
import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [inputItem, setInputItem] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputItem(e.target.value);
  };

  const listOfItems = () => {
    setItems([...items, inputItem]);
    setInputItem("");
  };

  const deleteItem = (id) => {
    console.log("deleted", id);
    items.splice(id,1);
    setItems([...items]);
  };

  return (
    <div className="App">
      <div className="center_div">
        <h1>ToDo List</h1>
        <br />
        <input
          id="my_input"
          type="text"
          placeholder="Add a Item"
          onChange={itemEvent}
          value={inputItem}
        />
        <button onClick={listOfItems}>+</button>
        <ol>
          {items.map((item, itm_key) => {
            return (
              <TodoList item={item} id={itm_key} key={itm_key} onDelete={deleteItem}/>
            )
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
