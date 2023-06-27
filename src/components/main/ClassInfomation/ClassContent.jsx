import { Grid } from "@mui/material";
import ScheduleItem from "./ScheduleItem";

export default function ClassContent() {
    return (
        <Grid item xs={12}>
            <div className="class-content">
                <div className="main-content">
                    <p className="content-title">Lịch họp</p>
                    <div className="list-schedule">
                        <Grid container gap={"16px"}>
                            <Grid
                                item
                                xs={12}
                                border={"1px solid #ccc"}
                                borderBottom={"none"}
                            >
                                <ScheduleItem status={{ status: false }} />
                            </Grid>
                            <Grid item xs={12}>
                                <ScheduleItem status={{ status: true }} />
                            </Grid>
                            <Grid item xs={12}>
                                <ScheduleItem status={{ status: true }} />
                            </Grid>
                            <Grid item xs={12}>
                                <ScheduleItem
                                    status={{
                                        status: "cancel",
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </Grid>
    );
}
