import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./GroupHeader.module.scss";

export default function GroupHeader() {
    return (
        <div className={styles.groupHeader} >
            <h2 className={styles.name}>Nhom 1</h2>
            <nav className={styles.navigateBar}>
                <NavLink to="/">
                    <Button variant={"outlined"} className="home">
                        Trang chu
                    </Button>
                </NavLink>
                <NavLink to="schedule">
                    <Button variant={"outlined"} className="appointment">
                        Lich hop
                    </Button>
                </NavLink>
                <NavLink to="freeTime">
                    <Button variant={"outlined"} className="freeTime">
                        Lịch rảnh
                    </Button>
                </NavLink>
            </nav>
        </div>
    );
}
