import logo from "../../../assets/image/hust-logo-official_.3m.jpeg";
import "./AccountInfo.scss";
import { useNavigate } from "react-router-dom";

const AccountInfo = ({ handleShowStudentInfo, handelHideAccInfo }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem("isLogin", false);
        localStorage.removeItem("qlsv_token");
        navigate("/login");
    };
    return (
        <>
            <div className="account-info-container">
                <div className="header">
                    <div className="img-avatar">
                        <img src={logo} alt="avatar" />
                    </div>
                    <div className="short-info">
                        <div className="name">Abc</div>
                        <div className="mail">abc@gmail.com</div>
                    </div>
                </div>
                <div
                    className="action"
                    onClick={() => {
                        handelHideAccInfo();
                        handleShowStudentInfo();
                    }}
                >
                    Thong tin ca nhan
                </div>
                <div className="action" onClick={handleLogout}>
                    Dang xuat
                </div>
            </div>
        </>
    );
};

export default AccountInfo;
