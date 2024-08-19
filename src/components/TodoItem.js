import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({ todo, onDelete, onToggleComplete }) => (
  <li>
    <span
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => onToggleComplete(todo.id)}
    >
      {todo.title}
    </span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
    <Link to={`/todos/${todo.id}`}>Details</Link>
  </li>
);

export default TodoItem;
