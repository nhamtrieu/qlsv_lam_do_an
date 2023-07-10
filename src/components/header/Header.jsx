import { useState } from "react";
import "./Header.scss";
import hustLogo from "../../assets/image/hust-logo-official_.3m.jpeg";
import Notification from "../menu/notification/Notification";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountInfo from "../menu/info/AccountInfo";

export const useShowNotification = () => {
    const [showNotification, setShowNotification] = useState(false);
    const handleShowNotification = () => {
        setShowNotification(true);
    };

    const handleHideNotification = () => {
        setShowNotification(false);
    };

    const handleToggleNoti = () => {
        setShowNotification((prevState) => !prevState);
    };

    return {
        showNotification,
        handleHideNotification,
        handleShowNotification,
        handleToggleNoti,
    };
};

export default function Header({ handleShowStudentInfo }) {
    const [showAccInfo, setShowAccInfo] = useState(false);
    const handleToggleShowAccInfo = () => {
        setShowAccInfo(!showAccInfo);
    };
    const handelHideAccInfo = () => {
        setShowAccInfo(false);
    };
    const {
        showNotification,
        handleHideNotification,
        handleToggleNoti,
        handleShowNotification,
    } = useShowNotification();

    return (
        <div className="main-header">
            <div className="university">
                <img src={hustLogo} alt="logo" className="hust-logo" />
                <div className="title">
                    <h1 className="title-1">
                        Hệ thống quản trị đại học trực tuyến
                    </h1>
                    <h2 className="title-2">
                        Đại học bách khoa hà nội - trường công nghệ thông tin và
                        truyền thông
                    </h2>
                </div>
            </div>
            <div className="info-student">
                <div className="profile">
                    <div className="avatar-container">
                        <img
                            src={hustLogo}
                            alt="avatar"
                            className="avatar"
                            onClick={handleToggleShowAccInfo}
                        />
                        {showAccInfo && (
                            <AccountInfo
                                handleShowStudentInfo={handleShowStudentInfo}
                                handelHideAccInfo={handelHideAccInfo}
                            />
                        )}
                    </div>
                    {showNotification && (
                        <Notification
                            handleHideNotification={handleHideNotification}
                        />
                    )}
                    <div className="noti-icon" onClick={handleToggleNoti}>
                        <NotificationsIcon />
                    </div>
                </div>
                <div className="now-schedule">
                    <p>Tuần 30 (Tuần học thứ 6):</p>
                    <p>24/04-29/04</p>
                </div>
            </div>
        </div>
    );
}
