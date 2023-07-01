import React from "react";
import styles from "./FreeTimePage.module.scss";
import TimeTable from "../../../others/timeTable/TimeTable";

export default function FreeTimePage(){
    return(
        <div className={styles.freeTimePage}>
            <h2 className={styles.name}>Lịch rảnh</h2>
            <div className={styles.table}>
                <TimeTable />
            </div>
        </div>
    )
}