import { Grid } from "@mui/material";
import Join from "./Join"

export default function ScheduleItem({ status }) {
    return (
        <Grid item xs={12}>
            <div className="item-schedule">
                <p className="title">Ngày: 12/1/1111</p>
                <div className="schedule-content">
                    {/* <CalendarMonthIcon /> */}
                    <div className="main-schedule">
                        <p className="name-schedule">
                            Ten cuoc hop: Cuoc hop ngay 12/1
                        </p>
                        <p className="location">Dia diem: B1-201</p>
                    </div>
                    <div className="status">{Join(status.status)}</div>
                </div>
            </div>
        </Grid>
    );
}
