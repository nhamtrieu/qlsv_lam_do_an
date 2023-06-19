import { Grid } from "@mui/material";
import ScheduleItem from "./schedule/ScheduleItem";

export default function GroupContent() {
    return (
        <Grid item xs={12}>
            <div className="group-content">
                <div className="main-content">
                    <p className="content-title">Lịch họp</p>
                    <div className="list-schedule">
                        <Grid container gap={"16px"}>
                            <ScheduleItem status={{ status: false }} />
                            <ScheduleItem status={{ status: true }} />
                            <ScheduleItem status={{ status: true }} />
                            <ScheduleItem status={{ status: "cancel" }} />
                        </Grid>
                    </div>
                </div>
            </div>
        </Grid>

    );
}
