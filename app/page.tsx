import TaskForm from "@/components/TaskForm"


const HomePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="title">
        <h1 className="text-2xl md:text-4xl border-b py-5">Task Management Application</h1>
      </div>
      <TaskForm />
    </div>
  )
}

export default HomePage