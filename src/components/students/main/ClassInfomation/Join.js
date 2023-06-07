import { Button } from "@mui/material";
import Comment from "../../../forms/Comment";
import FormCancelMeerSchedule from "../../../forms/FormCancelMeetSchedule";
import React, { useState } from "react";
const Join = (status) => {
    const [showComment, setShowComment] = useState(false);
    const handleComment = () => {
        setShowComment(true);
    };

    const handleCloseComment = () => {
        setShowComment(false);
    };
    const [showCancelForm, setShowCancelForm] = useState(false);
    const handleShowCancelForm = () => {
        setShowCancelForm(true);
    };
    const handleCloseCancelForm = () => {
        setShowCancelForm(false);
    };
    if (status === true) {
        return (
            <>
                <Button
                    onClick={handleComment}
                    variant="outlined"
                    color="success"
                >
                    Da tham gia
                </Button>
                {showComment && <Comment onClose={handleCloseComment} />}
            </>
        );
    } else if (status === false) {
        return (
            <>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleShowCancelForm}
                >
                    Huy lich gap
                </Button>
                {showCancelForm && (
                    <FormCancelMeerSchedule onClose={handleCloseCancelForm} />
                )}
            </>
        );
    } else {
        return (
            <Button variant="outlined" disabled>
                Da huy
            </Button>
        );
    }
};

export default Join;
