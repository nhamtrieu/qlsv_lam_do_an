import { Grid } from "@mui/material";
// import { Outlet, Route, Routes } from "react-router-dom";
import GroupHeader from "./groupInfo/GroupHeader";
import GroupContent from "./groupInfo/GroupContent";
import "./Group.scss";

function Group(){
    return (
        <div className="group-infomation"> 
            <Grid item md={10} sm={9}>
                <Grid container border={"1px solid #ccc"}>
                    <GroupHeader />
                    <GroupContent />
                </Grid>
            </Grid>
        </div>
    )
}
export default Group;
