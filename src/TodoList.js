import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoList({ item, id, key, onDelete }) {
  return (
    <div key={key} className="todo_list">
      <DeleteIcon onClick={() => {onDelete(id)}} id="delete_button" />
      <li>{item}</li>
    </div>
  );
}

export default TodoList;
