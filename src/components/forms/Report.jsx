import { Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import "./Report.scss";
const listReportItem = [
    {
        nameReport: "Bai kiem tra abc",
        timeSubmit: "1:30 pm",
    },
    {
        nameReport: "Bai kiem tra abc",
        timeSubmit: "1:30 pm",
    },
];
const Report = () => {
    return (
        <div className="report-item">
            <div className="title-time">
                <b>Jan 22, 2022 </b>
                <span>Saturday</span>
            </div>
            <Grid container className="main-report-item">
                <Grid item xs={10} className="info">
                    <div className="name-report">Bai kiem tra abc</div>
                    <div className="time-submit">Submited at 1:30 pm</div>
                </Grid>
                {/* <Grid item xs={2} className="turn-in">
                    <CheckIcon />
                    <span>Turned in</span>
                </Grid> */}
            </Grid>
        </div>
    );
};
export default Report;
