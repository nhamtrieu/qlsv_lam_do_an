import { Button, IconButton} from "@mui/material";
import styles from "./Meeting.module.scss";
import { useState } from "react";
import ReportInfo from "../../report/ReportInfo";
import Overlay from "../../../others/overlay/Overlay";

function Meeting({}) {
  const [showOverlay, setShowOverlay] = useState(false);
  const openOverlay = () => { setShowOverlay(true); }
  const closeOverlay = () => { setShowOverlay(false); }

  return (
    <div className={styles.meeting}>
      <h2 className={styles.title}>cuoc hop ngay</h2> 
      <div className={styles.comment}>
        <p>Nhan xet:</p>
        <span>Da hoan thien duoc giao dien, database co ban</span>
      </div>
      <div className={styles.request}>
        <p>Yeu cau:</p>
        <span>Can hoan thien tat ca giao dien, ve use-case</span>
      </div>
      <div className={styles.report}>
        <p>Bao cao:</p>
        <div>File bao cao</div>
        <Button className={styles.reportButton} onClick={openOverlay}
          variant="contained" size="small">
          Nop bao cao
        </Button>
      </div>
      {showOverlay && 
        (<Overlay onClose={closeOverlay}
        childComponent={<ReportInfo/>} />)}
    </div>
  );
}

export default Meeting;
