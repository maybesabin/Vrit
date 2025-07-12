import { Link } from "react-router-dom"
import Task1 from "./Task1"
import Task3 from "./Task3"
import Task4 from "./Task4"

const Homepage = () => {
    const tasks = [
        { title: "Task 1", component: <Task1 /> },
        { title: "Task 3", component: <Task3 /> },
        { title: "Task 4", component: <Task4 /> },
    ]

    return (
        <div className="h-svh w-full flex items-center justify-center">
            <div className="w-[20rem] flex flex-col items-start justify-center gap-4">
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
        </div>
    )
}

export default Homepage