import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Task3 from "../pages/Task3";
import Task2 from "../pages/Task2";
import Task1 from "../pages/Task1";

const RouteComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="task1" element={<Task1 />} />
                <Route path="task2" element={<Task2 />} />
                <Route path="task3" element={<Task3 />} />
            </Routes>
        </Router>
    )
}

export default RouteComponent