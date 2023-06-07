import { Grid, Button } from "@mui/material";
import "./Mettings.scss";
export const Metting = ({ info }) => {
    return (
        <Grid
            item
            xs={12}
            border={"1px solid #ccc"}
            height={"90px"}
            className="meeting-item"
            borderRadius={"8px"}
            display={"flex"}
            gap={"10px"}
        >
            <Grid item xs={9}>
                <Grid container>
                    <Grid item xs={4} className="time">
                        Thoi gian: {info?.time || ""}
                    </Grid>
                    <Grid item xs={4} className="class">
                        Lop: {info?.class || ""}
                    </Grid>
                    <Grid item xs={4} className="name-group">
                        Ten nhom: {info?.nameGroup || ""}
                    </Grid>
                </Grid>
                <Grid item xs={12} className="name-topic">
                    Ten de tai: {info?.nameTopic || ""}
                </Grid>
            </Grid>
            <Grid item xs={3} className="check-meetings-button">
                <Button variant="outlined" color="success">
                    Dong y
                </Button>
                <Button variant="outlined" color="error">
                    Tu choi
                </Button>
            </Grid>
        </Grid>
    );
};

const data = [
    {
        time: "11h30 12/1/1111",
        class: "Lop IT2020",
        nameGroup: "Nhom 1",
        nameTopic: "abc",
    },
    {
        time: "11h30 12/1/1111",
        class: "Lop IT2020",
        nameGroup: "Nhom 1",
        nameTopic: "abc",
    },
    {
        time: "11h30 12/1/1111",
        class: "Lop IT2020",
        nameGroup: "Nhom 1",
        nameTopic: "abc",
    },
];

const Meetings = () => {
    return (
        <div className="meeting-container">
            <div className="title">Xac nhan yeu cau lich hen</div>
            <div className="meeting-list">
                <Grid container gap={"10px"}>
                    {data.map((item, index) => (
                        <Metting key={index} info={item} />
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Meetings;
