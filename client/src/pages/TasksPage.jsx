import { useEffect } from "react"
import TaskCard from "../components/TaskCard"
import { useTasks } from "../context/TaskContext"


function TasksPage() {

  const { tasks, loadTasks } = useTasks();

  useEffect(() => {    
    loadTasks()
  }, [])
  
  function renderMain(){
    if (tasks.length ===0) return <h1>No tasks yet</h1>
    return tasks.map(task => <TaskCard key={task.id} task={task} />)
  }
  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center pb-3">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">
        {renderMain()}  
      </div>
    </div>
  )
}

export default TasksPage