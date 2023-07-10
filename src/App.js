import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";
import Student from "./components/students/Student";
import Teacher from "./components/teachers/Teacher";
import ClassInfomation from "./components/main/ClassInfomation/ClassInfomation";
import ClassHeader from "./components/main/ClassInfomation/ClassHeader";
import SubmitReport from "./components/forms/SubmitReport";
import { Grid } from "@mui/material";
import Login from "./components/login/Login";
import ExcelTable from "./components/import/Import";
import ExcelExport from "./components/export/Export";
import Info from "./components/menu/info/Info";
function App() {
    return (
        <div className="App">
            <Outlet />
            <Routes>
                <Route
                    path={localStorage.getItem("qlsv_token") ? "*" : "/login"}
                    element={
                        localStorage.getItem("qlsv_token") ? (
                            <Student />
                        ) : (
                            <Login />
                        )
                    }
                />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/meeting" element={<Meeting />} /> */}
                <Route path="/import" element={<ExcelTable />} />
                <Route path="/export" element={<ExcelExport />} />
                <Route path="/overlay" element={<Info />} />
                <Route path="/class1/*" element={<ClassInfomation />}>
                    <Route
                        path="nopbaocao/"
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
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
