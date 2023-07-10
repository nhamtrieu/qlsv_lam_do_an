import { Grid } from "@mui/material";
import ClassSideBar from "./ClassSideBar";
import ClassHeader from "./ClassHeader";
import ClassContent from "./ClassContent";
import { Outlet, Route, Routes } from "react-router-dom";
// import Class from "../Class";

import "./ClassInfomation.scss";
// import Header from "../../header/Header";
import ReportInfo from "../../report/ReportInfo";
import Header from "../../header/Header";
import { useState } from "react";
import Info from "../../menu/info/Info";

function ClassInfomation() {
    const [showStudentInfo, setShowStudentInfo] = useState(false);
    const handleShowStudentInfo = () => {
        setShowStudentInfo(true);
    };
    const handleHideStudentInfo = () => {
        setShowStudentInfo(false);
    };
    return (
        <div className="class-infomation">
            <Grid container position={"relative"} height={"100%"}>
                <Header handleShowStudentInfo={handleShowStudentInfo} />
                <ClassSideBar />
                <Outlet />
                {showStudentInfo && (
                    <Info
                        handleHideStudentInfo={handleHideStudentInfo}
                        showStudentInfo={showStudentInfo}
                    />
                )}
                {/* <ReportInfo /> */}
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
