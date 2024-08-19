import React from "react";
import { useParams } from "react-router-dom";

const ItemDetails = ({ todos }) => {
  const { id } = useParams();
  const todo = todos.find((item) => item.id === parseInt(id));

  if (!todo) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </div>
  );
};

export default ItemDetails;
