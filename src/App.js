import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(

    [{
      "id": 1,
      "text": "Email Client",
      "day": "June 13th at 12:15pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meet Dan",
      "day": "June 20th at 5:00pm",
      "reminder": true
    }, 
    { 
      "id": 3,
      "text": "Grocery Shopping",
      "day": "June 21th at 7:10pm",
      "reminder": true
    }, 
]
)

// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random()*1000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Tasks 

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? 
  {...task, reminder:!task.reminder}: 
  task))
}

  return (
    <div className="container">

      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask}/>}

      {
        tasks.length > 0 ? 
          ( <Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder} />):
          ('No Tasks To Show')
        }

      
    </div>
  );
}

export default App;
