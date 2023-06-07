import { Button } from "@mui/material";
import "./FormCancelMeetSchedule.scss";
function FormCancelMeerSchedule({ onClose }) {
    return (
        <div className="overlay">
            <form action="" className="cancel-schedule">
                <div className="time">
                    <label htmlFor="date">Chon ngay:</label>
                    <input type="date" id="date" />
                </div>
                <div className="reason">
                    <label htmlFor="reason">Ly do xin huy lich:</label>
                    <textarea type="text" id="reason"></textarea>
                </div>
                <div className="button">
                    <Button
                        variant="contained"
                        color="success"
                        className="send-btn"
                    >
                        Gui
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={onClose}
                        className="cancel-btn"
                    >
                        Huy
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default FormCancelMeerSchedule;
