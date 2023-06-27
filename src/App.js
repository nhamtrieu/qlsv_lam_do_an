import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Student from "./components/students/Student";
import Teacher from "./components/teachers/Teacher";
import ClassInfomation from "./components/main/ClassInfomation/ClassInfomation";
import ClassHeader from "./components/main/ClassInfomation/ClassHeader";
import SubmitReport from "./components/forms/SubmitReport";
import { Grid } from "@mui/material";
function App() {
    return (
        <div className="App">
            {/* <Outlet /> */}
            <Routes>
                <Route path="*" element={<Student />} />
                <Route path="/teacher" element={<Teacher />} />
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
