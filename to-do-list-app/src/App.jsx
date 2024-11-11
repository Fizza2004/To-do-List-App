import { useState, useRef } from "react";
// import "./App.scss";
import "./App.css";
import { RenderTasks } from "./components/RenderTasks";

function App() {
  const inputVal = useRef(null);

  const [task, setTask] = useState(""); //my single task
  const [tasks, setTasks] = useState([]); //my tasks array

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addTask() {
    if(task.trim()){
      setTasks([...tasks, task]);
      setTask("");
      inputVal.current.value = "";
    }
  }

  function removeTask(index) {
    setTasks(tasks.filter((item,i)=>i!==index));
  }

  inputVal.current.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  return (
    <div className="container">
      <h2>To do List App</h2>
      <div className="inputTasksWrapper">
        <div className="inputField">
          <input
            type="text"
            placeholder="Type something..."
            onChange={handleChange}
            ref={inputVal}
          />
        </div>
        <div className="add-btn">
           <button onClick={addTask}>Add</button>
        </div>
      </div>
      <RenderTasks data={tasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
