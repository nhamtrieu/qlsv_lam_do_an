import { Button, IconButton} from "@mui/material";
import "./Meeting.scss";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useState } from "react";
import ReportInfo from "../report/ReportInfo";

function Meeting({ onClose }) {
  const [showReport, setShowReport] = useState(false);
  const openReport = () => { setShowReport(true);};
  const closeReport = () => { setShowReport(false);};

  return (
    <div className="overlay">
      <div className="meeting">
        <h2 className="title">Cuoc hop ngay:</h2>
        <IconButton className="close-btn"  onClick={onClose}
          variant="outlined" color="error">
          <CloseSharpIcon/>
        </IconButton>

        <div className="content">
          <div className="comment">
            <p>Nhan xet:</p>
            <span>Da hoan thien duoc giao dien, database co ban</span>
          </div>
          <div className="request">
            <p>Yeu cau:</p>
            <span>Can hoan thien tat ca giao dien, ve use-case</span>
          </div>
          <div className="report">
            <p>Bao cao:</p>
            <div>File bao cao</div>
            <Button className="report-button" onClick={openReport}
              variant="contained" size="small">
              Nop bao cao
            </Button>
          </div>
          {showReport && (<ReportInfo onClose={closeReport}/>)}
        </div>
        
      </div>
    </div>
  );
}

export default Meeting;
