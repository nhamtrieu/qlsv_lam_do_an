import hustLogo from "../../../assets/image/hust-logo-official_.3m.jpeg";
import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
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
                    <img src={hustLogo} alt="avatar" className="avatar" />
                </div>
                <div className="now-schedule">
                    <p>Tuần 30 (Tuần học thứ 6): </p>
                    <p>24/04-29/04</p>
                </div>
            </div>
        </div>
    );
}
