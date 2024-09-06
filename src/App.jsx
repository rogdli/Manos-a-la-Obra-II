import './styles/App.css'
import { AddTask } from './components/AddTask/'
import { TaskList } from './components/TaskList/'
function App() {
  return(
  <div className = "container">

    <h2>Lista de tareas de Rodrigo</h2>
    <AddTask></AddTask>
    <TaskList></TaskList>

  </div>
  )
}

export default App
