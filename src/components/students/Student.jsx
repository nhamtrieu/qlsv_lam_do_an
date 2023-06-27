import Report from "../forms/Report";
import Header, { useShowNotification } from "../header/Header";
import Classes from "../main/Classes";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ClassInfomation from "../main/ClassInfomation/ClassInfomation";
import ClassHeader from "../main/ClassInfomation/ClassHeader";
import SubmitReport from "../forms/SubmitReport";
import { Grid } from "@mui/material";
const Student = () => {
    const {
        showNotification,
        handleHideNotification,
        handleShowNotification,
        handleToggleNoti,
    } = useShowNotification();
    return (
        <>
            <Header
                showNotification={showNotification}
                handleHideNotification={handleHideNotification}
                handleShowNotification={handleShowNotification}
                toggleNoti={handleToggleNoti}
            />
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
