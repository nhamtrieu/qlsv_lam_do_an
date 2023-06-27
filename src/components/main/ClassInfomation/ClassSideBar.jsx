import { Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function ClassSideBar({ group }) {
    return (
        <Grid item xs={12} md={2} sm={3}>
            <div className="sidebar">
                <div className="class-info">
                    <p>Ma lop: 1234</p>
                    <p>Mon hoc: abcd</p>
                    <p>Ma hoc phan: abcd</p>
                </div>
                <nav className="main-sidebar">
                    <p className="title-sidebar">Nhom</p>
                    <NavLink>
                        <Button variant="outlined" className="group">
                            Nhom 1
                        </Button>
                    </NavLink>
                    <NavLink>
                        <Button variant="outlined" className="group" disabled>
                            Nhom 2
                        </Button>
                    </NavLink>
                    <NavLink>
                        <Button variant="outlined" className="group" disabled>
                            Nhom 3
                        </Button>
                    </NavLink>
                </nav>
            </div>
        </Grid>
    );
}
