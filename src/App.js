import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Groups from "./components/group/Groups";
import Group from "./components/group/Group";
// import { Grid } from "@mui/material";
// import SubmitReport from "./components/forms/SubmitReport";
// import GroupHeader from "./components/group/groupInfo/GroupHeader";

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/groups/group" element={<Group />} />
                {/* <Route path="/groups/group/nopbaocao"
                        element={
                            <Grid item md={10} sm={9}>
                                <Grid
                                    container
                                    border={"1px solid #ccc"}
                                    height={"100%"}
                                >
                                    <GroupHeader />
                                    <SubmitReport />
                                </Grid>
                            </Grid>
                        }
                    ></Route> */}
            </Routes>
        </div>
    );
}

export default App;
