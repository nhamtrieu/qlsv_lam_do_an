import avata from "../../../assets/image/hust-logo-official_.3m.jpeg";
import "./Notification.scss";

import { useShowNotification } from "../../header/Header";
import { useRef, useEffect, useState } from "react";
const NotificationItem = () => {
    return (
        <div className="notification-item">
            <div className="noti-header">
                <div className="img">
                    <img src={avata} alt="" />
                </div>
                <div className="title">
                    <span className="name">Nguyen Van A </span>
                    <span className="time">7:22pm 25/05/2022</span>
                </div>
            </div>
            <div className="noti-main">
                <div className="title">Muon nop bao cao</div>
                <div className="info-nofi">
                    <p>Ten cuoc hop</p>
                    <p>7:30am 25/05/2022 B1-101</p>
                </div>
            </div>
        </div>
    );
};

const Notification = () => {
    const notiRef = useRef(null);

    return (
        <div className="notification-list" ref={notiRef}>
            <div className="list-header">Thong bao</div>
            <NotificationItem />
        </div>
    );
};

export default Notification;
