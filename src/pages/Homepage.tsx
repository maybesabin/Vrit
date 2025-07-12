import { Link } from "react-router-dom"
import Task1 from "./Task1"
import Task2 from "./Task2"
import Task3 from "./Task3"

const Homepage = () => {
    const tasks = [
        { title: "Task 1", component: <Task1 /> },
        { title: "Task 2", component: <Task2 /> },
        { title: "Task 3", component: <Task3 /> },
    ]

    return (
        <div className="h-svh w-full flex flex-col items-center justify-center gap-4">
            <h1 className="font-medium md:text-4xl text-2xl">
                Tasks 📋
            </h1>

            <ol>
                {tasks.map((task) => (
                    <li
                        key={task.title}
                        className="hover:underline cursor-pointer text-xl"
                    >
                        <Link to={`/${task.title.toLowerCase().split(" ").join('')}`}>
                            {task.title}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Homepage