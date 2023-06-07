import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/students/header/Header";
import Classes from "./components/students/main/Classes";
import ClassInfomation from "./components/students/main/ClassInfomation/ClassInfomation";
import ClassSideBar from "./components/students/main/ClassInfomation/ClassSideBar";
import ClassHeader from "./components/students/main/ClassInfomation/ClassHeader";
import SubmitReport from "./components/forms/SubmitReport";
import { Grid } from "@mui/material";
import Student from "./components/students/Student";
import Teacher from "./components/teachers/Teacher";

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Routes>
                <Route path="/" element={<Classes />} />
                <Route path="/class1/*" element={<ClassInfomation />}>
                    <Route
                        path="nopbaocao"
                        element={
                            <Grid item md={10} sm={9}>
                                <Grid
                                    container
                                    border={"1px solid #ccc"}
                                    height={"100%"}
                                >
                                    <ClassHeader />
                                    <SubmitReport />
                                </Grid>
                            </Grid>
                        }
                    ></Route>
                </Route>
            </Routes>

            {/* <Teacher /> */}
        </div>
    );
}

export default App;
