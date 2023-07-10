import { Outlet, Route, Routes } from "react-router-dom";
import Classes from "../main/Classes";
import ClassInfomation from "../main/ClassInfomation/ClassInfomation";
import ClassHeader from "../main/ClassInfomation/ClassHeader";
import SubmitReport from "../forms/SubmitReport";
import { Grid } from "@mui/material";
import Header from "../header/Header";

const Student = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Classes />
            {/* <Notification /> */}
            {/* <Report /> */}

            <Routes>
                <Route path="/class1" element={<ClassInfomation />}>
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
                    />
                </Route>
            </Routes>
        </>
    );
};

export default Student;
