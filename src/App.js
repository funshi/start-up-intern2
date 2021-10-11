import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from 'react'
//import {BrowserRouter as Router, Route } from 'react-router-dom'
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import About from "./component/About";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
  },
  {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
  }

  ])
  
// useEffect(() => {
  //  const fetchTasks = async () => {
    //  const res = await fetch('http://localhost:3000/tasks')
      //const data = await res.json()
      //console.log(data)
   // }
    //fetchTasks()
 // })
//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([ ...tasks, newTask])
}
// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
// Toggle Reminder

const toggleReminder = (id) => {
 setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder}:task
)
)
}
  return (
    <div className="container">
       <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks}
       onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task To Show'}
       <Footer />
       <About />
       </div>
  )
}

export default App;
