import { Button, Grid } from "@mui/material";
import "./Comment.scss";

function Comment({ onClose }) {
    return (
        <div className="overlay">
            <div className="comment">
                <h1 className="title">Nhan xet:</h1>

                <div className="content">
                    <div className="completed">
                        <p>Da hoan thanh:</p>
                        <span>
                            Da hoan thien duoc giao dien, database co ban
                        </span>
                    </div>
                    <div className="required">
                        <p>Yeu cau cho buoi gap tiep theo</p>
                        <span>
                            Can hoan thien tat ca giao dien, ve use-case
                        </span>
                    </div>
                </div>

                <Button
                    className="close-btn"
                    onClick={onClose}
                    variant="outlined"
                    color="error"
                >
                    Dong
                </Button>

                <div className="footer"></div>
            </div>
        </div>
    );
}

export default Comment;
