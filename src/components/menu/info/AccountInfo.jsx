import logo from "../../../assets/image/hust-logo-official_.3m.jpeg";

import Cookies from "js-cookie";

const AccountInfo = () => {
    const handleLogout = () => {
        const token = Cookies.get("qlsv_test_cookie");
        console.log(token);
    };
    return (
        <div className="account-info-container">
            <div className="header">
                <div className="img-avatar">
                    <img src={logo} alt="avatar" />
                    <div className="short-info">
                        <div className="name">Abc</div>
                        <div className="mail">abc@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className="action">Thong tin ca nhan</div>
            <div className="action" onClick={handleLogout}>
                Dang xuat
            </div>
        </div>
    );
};

export default AccountInfo;
