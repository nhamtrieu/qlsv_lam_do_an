import "./Member.scss";
import { useState } from "react";

const MemberInfo = () => {
    return <div>info</div>;
};

const Member = ({ add, actionComponent, name }) => {
    const [showMemberInfo, setShowMemberInfo] = useState(false);
    const handleShowMemberInfo = () => {
        setShowMemberInfo(true);
        return <MemberInfo />;
    };
    return (
        <li>
            <span className="full-name" onClick={() => handleShowMemberInfo()}>
                {name}
            </span>
            {actionComponent}
            {showMemberInfo && <MemberInfo />}
        </li>
    );
};

export default Member;
