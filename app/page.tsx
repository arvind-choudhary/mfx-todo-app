import TodoTasks from "@/components/Task/TodoTaskComponent ";
import { Toastify } from "@/shared/_toastify/Toast ";

export default function Home() {
  return (
    <main>
      <TodoTasks />
      <Toastify />
    </main>    
  )
}
