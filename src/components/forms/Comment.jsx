import { Button } from "@mui/material";
import { useEffect, useRef } from "react";

import "./Comment.scss";

const Comment = ({ onClose }) => {
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
            <div className="comment" ref={commentRef}>
                <h1 className="title">Nhan xet:</h1>

                <div className="content">
                    <div className="completed content-item">
                        <p>Da hoan thanh:</p>
                        <span>
                            Da hoan thien duoc giao dien, database co ban
                        </span>
                    </div>
                    <div className="required content-item">
                        <p>Yeu cau cho buoi gap tiep theo</p>
                        <span>
                            Can hoan thien tat ca giao dien, ve use-case
                        </span>
                    </div>
                    <div className="upload-report content-item">
                        <p>Nop bao cao</p>
                        <span>
                            Yeu cau sinh vien nop bao cao ngay 11/1/1111
                        </span>
                        <Button
                            variant="contained"
                            className="upload-report-btn"
                        >
                            Nop bao cao
                        </Button>
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
};

export default Comment;
