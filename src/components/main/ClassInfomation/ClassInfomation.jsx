import { Grid } from "@mui/material";
import ClassSideBar from "./ClassSideBar";
import ClassHeader from "./ClassHeader";
import ClassContent from "./ClassContent";
import { Outlet, Route, Routes } from "react-router-dom";
// import Class from "../Class";

import "./ClassInfomation.scss";

function ClassInfomation() {
    return (
        <div className="class-infomation">
            <Grid container position={"relative"} height={"100%"}>
                <ClassSideBar />
                <Outlet />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Grid item md={10} sm={9}>
                                <Grid container border={"1px solid #ccc"}>
                                    <ClassHeader />
                                    <ClassContent />
                                </Grid>
                            </Grid>
                        }
                    ></Route>
                </Routes>
            </Grid>
        </div>
    );
}

export default ClassInfomation;
