import { Button, Grid } from "@mui/material";
import ScheduleItem from "./ScheduleItem";

import "./ClassInfomation.scss";

function ClassInfomation() {
    return (
        <div className="class-infomation">
            <Grid container position={"relative"}>
                <Grid item xs={12} md={2} sm={3}>
                    <div className="sidebar">
                        <div className="class-info">
                            <p>Ma lop: 1234</p>
                            <p>Mon hoc: abcd</p>
                            <p>Ma hoc phan: abcd</p>
                        </div>
                        <nav className="main-sidebar">
                            <p className="title-sidebar">Nhom</p>
                            <Button variant="outlined">Chung</Button>
                            <Button variant="outlined" className="group">
                                Nhom 1
                            </Button>
                            <Button variant="outlined" className="group">
                                Nhom 2
                            </Button>
                            <Button variant="outlined" className="group">
                                Nhom 3
                            </Button>
                        </nav>
                    </div>
                </Grid>
                <Grid item md={10} sm={9}>
                    <Grid container border={"1px solid #ccc"}>
                        <Grid item xs={12}>
                            <div className="class-header">
                                <p className="class-header__title">Nhom 1</p>
                                <nav>
                                    <Button
                                        variant={"outlined"}
                                        className="notification"
                                    >
                                        Thong bao
                                    </Button>
                                    <Button
                                        variant={"outlined"}
                                        className="meeting"
                                    >
                                        Cuoc hop
                                    </Button>
                                    <Button
                                        variant={"outlined"}
                                        className="free-schedule"
                                    >
                                        Lich ranh
                                    </Button>
                                    <Button
                                        variant={"outlined"}
                                        className="help"
                                    >
                                        Tro giup
                                    </Button>
                                </nav>
                            </div>
                        </Grid>
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
                                            >
                                                <ScheduleItem
                                                    status={{ status: false }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <ScheduleItem
                                                    status={{ status: true }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <ScheduleItem
                                                    status={{ status: true }}
                                                />
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
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ClassInfomation;
