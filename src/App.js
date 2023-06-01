import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

function App() {
  const NAME = "Rizman";
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:8000/");
    const data = await response.json();

    return data;
  };

  const addTask = (task) => {
    console.log("add task", task);
    // manually add id
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { ...task, id };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    console.log("Toggling reminder for", id);
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.reminder = !task.reminder;
        }
        return task;
      })
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          username={NAME}
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "NO TASKS"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

/**
 * This is using Classes instead of a function
 * The import React is required as the class is extending from React.Componnent
 */
// import React from "react";
// class App extends React.Component {
//   render() {
//     return (
//       <h1>HELLO THERE</h1>
//     )
//   }
// }

export default App;
