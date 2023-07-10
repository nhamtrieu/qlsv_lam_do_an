import { Button } from "@mui/material";
import "./FormCancelMeetSchedule.scss";
import { useRef, useEffect } from "react";
function FormCancelMeerSchedule({ onClose }) {
    const commentRef = useRef(null);
    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (
                commentRef.current &&
                !commentRef.current.contains(event.target)
            ) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, [onClose]);
    return (
        <div className="overlay">
            <form action="" className="cancel-schedule" ref={commentRef}>
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
