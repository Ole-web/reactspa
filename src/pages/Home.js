import React from "react";
import TodoList from "../components/TodoList";

const Home = ({ todos, setTodos }) => (
  <div>
    <h2>My To-Do Lists</h2>
    <TodoList todos={todos} setTodos={setTodos} />
  </div>
);

export default Home;
