import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import HomePage from "./pages/home/Home";
import GroupInfo from "./pages/groupInfo/GroupInfo";
import SchedulePage from "./pages/groupInfo/schedulePage/SchedulePage";
import FreeTimePage from "./pages/groupInfo/freeTimePage/FreeTimePage";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/group" element={<GroupInfo />}>
                    <Route path="schedule"  element={<SchedulePage/>} />
                    <Route path="freeTime"  element={<FreeTimePage />} />
                </Route>
            </Routes>
        </div>
    );
}
