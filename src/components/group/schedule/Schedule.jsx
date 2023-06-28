import { Grid } from "@mui/material";
import showStatus from "./JoinStatus.jsx";
import Meeting from "../meeting/Meeting.jsx"
import { useState } from "react";
import Overlay from "../../../overlay/Overlay.jsx";
import CancelMeeting from "../../form/CancelMeeting.jsx";
import {Button} from "@mui/material";
import styles from "./Schedule.module.scss";

export default function ScheduleItem({ status }) {
    const [showMeeting, setShowMeeting] = useState(false);
    const openMeeting = () => { setShowMeeting(true); }
    const closeMeeting = () => { setShowMeeting(false); }

    const [showCancelMeeting, setShowCancelMeeting] = useState(false);
    const openCancelMeeting = () => { setShowCancelMeeting(true); }
    const closeCancelMeeting = () => { setShowCancelMeeting(false); }

    return (
        <Grid item xs={12} className={styles.schedule}>
            <div className={styles.mainSection} onClick={openMeeting}>
                <p className={styles.title}>Cuoc hop ngay 12.1</p>
                <p className={styles.time}>12/1/2022 7:30-9:30 </p>
                <p> B1-202 </p>
                <div className={styles.status}>
                    {showStatus(status.status)}
                </div>
            </div>
            <div className={styles.extension1} >
                <Button onClick={openCancelMeeting} sx={{textTransform: 'none'}}
                    variant="outlined" color="error" size="small">
                    Huy lich hop
                </Button>
            </div>
            { showMeeting && 
                (<Overlay onClose={closeMeeting} 
                    childComponent={<Meeting />}/>)
            }
            { showCancelMeeting && 
                (<Overlay onClose={closeCancelMeeting}
                    childComponent={<CancelMeeting />}/>)
            }
        </Grid>
    );
}
