import { Grid } from "@mui/material";
import showStatus from "./JoinStatus.jsx";
import Meeting from "../../../meeting/Meeting.jsx"
import { useState } from "react";

export default function ScheduleItem({ status }) {
    const [showMeeting, setShowMeeting] = useState(false);
    const openMeeting = () => { setShowMeeting(true);}
    const closeMeeting = () => { setShowMeeting(false);}

    return (
        <Grid item xs={12}>
            <div className="item-schedule" onClick={openMeeting}>
                <p className="title">Ngày: 12/1/1111</p>
                <div className="schedule-content">
                    {/* <CalendarMonthIcon /> */}
                    <div className="main-schedule">
                        <p className="name-schedule">Ten cuoc hop: Cuoc hop ngay 12/1</p>
                        <p className="location">Dia diem: B1-201</p>
                    </div>    
                </div>
                <div className="corner-text">
                    {showStatus(status.status)}
                </div>
            </div>
            {showMeeting && (<Meeting onClose={closeMeeting} />)}
        </Grid>
    );
}
