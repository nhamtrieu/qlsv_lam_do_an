import ScheduleItem from "../../../components/group/schedule/Schedule";
import styles from "./SchedulePage.module.scss";

export default function SchedulePage() {
    return (
        <div className={styles.schedulePage}>
            <h2 className={styles.name}>Lịch họp</h2>
            <div className={styles.scheduleList}>
                <ScheduleItem status={{ status: false }} />
                <ScheduleItem status={{ status: true }} />
                <ScheduleItem status={{ status: true }} />
                <ScheduleItem status={{ status: "cancel" }} />
            </div>
        </div>

    );
}