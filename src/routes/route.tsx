import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Task3 from "../pages/Task3";
import Task1 from "../pages/Task1";
import Task4 from "../pages/Task4";

const RouteComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="task1" element={<Task1 />} />
                <Route path="task3" element={<Task3 />} />
                <Route path="task4" element={<Task4 />} />
            </Routes>
        </Router>
    )
}

export default RouteComponent