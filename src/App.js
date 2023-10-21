import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css'

const App = () => {
  const [todo, setTodo] = useState("");
  const distapch = useDispatch();
  const taskName = useSelector((state) => state.taskName);

  const handleAddTask = () => {
    distapch({
      type: "TODOADD",
      payload: todo,
    });
    setTodo("");
  };

  const handleRemove = (todo) => {
    distapch({
      type: "TODOREMOVE",
      payload: todo,
    });
  };

  const handleUnderline = (index) => {
    // console.log("working");
    distapch({
      type: "TODOFINISHED",
      payload: index,
    });
  };

  // console.log(taskName)
  return (
    <>
      <div>
        <h1>Todo App</h1>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter your Task..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        {taskName.map((todo, index) => (
          <div
            key={index}
            className="card"
           >
           
            <h2  style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            </h2>
            <span onClick={() => handleRemove(todo)}>X</span>
            {!todo.completed && (
              <span onClick={() => handleUnderline(index)}>Completed</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
