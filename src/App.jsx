import { useState } from "react";
import "./App.css";
// import Square from "./Components/SquareComponent";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    const tasksCopy = [...tasks];
    tasksCopy.push(task);
    setTasks(tasksCopy);
  }

  function handleInputChange(e) {
    setTask(e.target.value);
  }

  return (
    <section>
      <div
        className="card"
        style={{
          width: 350,
        }}
      >
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              Enter Task name
            </label>
            <input
              type="email"
              className="form-control"
              id="task"
              placeholder="Enter your task here"
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Save
          </button>
        </div>
        <div id="task-list-container">
          <ul>
            {tasks.map((task, index) => (
              <li key={`${task}-${index}`}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// const data = [
//   {
//     title: "Square 1",
//     value: 0,
//     isFree: true,
//   },
//   {
//     title: "Square 2",
//     value: 20,
//     isFree: false,
//   },
//   {
//     title: "Square 3",
//     value: 30,
//     isFree: false,
//   },
// ];

// {
//   data.map((d, index) => {
//     return (
//       <Square
//         key={index}
//         title={d.title}
//         value={d.value}
//         isFree={d.isFree}
//         onClick={(e) => {
//           console.log(e);
//         }}
//       />
//     );
//   });
// }
