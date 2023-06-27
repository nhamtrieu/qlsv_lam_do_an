import { Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
// import useFocus from "../../actions/useFocus";

export default function ClassHeader() {
    return (
        <Grid item xs={12}>
            <div className="class-header">
                <p className="class-header__title">Nhom 1</p>
                <nav>
                    <NavLink to="/">
                        <Button variant={"outlined"} className="notification">
                            Trang chu
                        </Button>
                    </NavLink>
                    <NavLink to="/class1">
                        <Button variant={"outlined"} className="meeting">
                            Lich hop
                        </Button>
                    </NavLink>
                    <NavLink to="nopbaocao">
                        <Button variant={"outlined"} className="free-schedule">
                            Nop bao cao
                        </Button>
                    </NavLink>
                    <NavLink end to="trogiup">
                        <Button variant={"outlined"} className="help">
                            Tro giup
                        </Button>
                    </NavLink>
                </nav>
            </div>
        </Grid>
    );
}
