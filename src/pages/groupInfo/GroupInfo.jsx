import { Grid } from "@mui/material";
import { Outlet, Route, Routes } from "react-router-dom";
import GroupHeader from "../../components/group/groupHeader/GroupHeader";
import ScheduleItem from "../../components/group/schedule/Schedule";

export default function GroupInfo(){
    return (
        <div className="group-infomation"> 
            <Grid item md={10} sm={9}>
                <Grid container border={"1px solid #ccc"}>
                    <GroupHeader/>
                    <hr  width="100%" align="center" />
                    {/* <Routes>
                        
                        <Route path="/group/schedule" element={<ScheduleItem />} />
                    </Routes> */}
                    <Outlet />
                </Grid>
            </Grid>
        </div>
    )
}