import React, { useState } from "react";
import "./Header.scss";
import hustLogo from "../../assets/image/hust-logo-official_.3m.jpeg";
import Notification from "../menu/notification/Notification";

import { useRef, useEffect } from "react";
export const useShowNotification = () => {
    const [showNotification, setShowNotification] = useState(false);
    const handleShowNotification = () => {
        setShowNotification(true);
    };
    const handleHideNotification = () => {
        setShowNotification(false);
    };
    const handleToggleNoti = () => {
        setShowNotification(!showNotification);
    };
    return {
        showNotification,
        handleHideNotification,
        handleShowNotification,
        handleToggleNoti,
    };
};

export default function Header({
    showNotification,
    handleHideNotification,
    toggleNoti,
}) {
    const notiRef = useRef(null);
    const handleClickOutside = (event) => {
        if (notiRef.current && !notiRef.current.contains(event.target)) {
            handleHideNotification();
        } else {
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
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
                    <img
                        src={hustLogo}
                        alt="avatar"
                        className="avatar"
                        ref={notiRef}
                        onClick={toggleNoti}
                    />
                    {showNotification && (
                        <Notification hideNoti={handleHideNotification} />
                    )}
                </div>
                <div className="now-schedule">
                    <p>Tuần 30 (Tuần học thứ 6): </p>
                    <p>24/04-29/04</p>
                </div>
            </div>
        </div>
    );
}
