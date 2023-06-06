import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/students/header/Header";
import Classes from "./components/students/main/Classes";
import ClassInfomation from "./components/students/main/ClassInfomation/ClassInfomation";

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Routes>
                <Route path="/" element={<Classes />} />
                <Route path="/class1" element={<ClassInfomation />} />
            </Routes>
        </div>
    );
}

export default App;
