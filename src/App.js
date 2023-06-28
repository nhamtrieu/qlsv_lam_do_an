import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
// import Login from "./components/login/Login";
// import Groups from "./components/group/Groups";
// import Group from "./components/group/Group";
import HomePage from "./pages/home/Home";
import GroupInfo from "./pages/groupInfo/GroupInfo";
import SchedulePage from "./pages/groupInfo/schedulePage/SchedulePage";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/group" element={<GroupInfo />}>
                    <Route path="schedule"  element={<SchedulePage/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
