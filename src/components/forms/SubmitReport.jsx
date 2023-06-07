import { Button, Grid } from "@mui/material";
// import { NavLink } from "react-router-dom";
import useFocus from "../actions/useFocus";
import "./SubmitReport.scss";

import Report from "./Report";
export default function SubmitReport() {
    const [variant, handleButtonFocus] = useFocus(3, 0);
    return (
        <>
            <Grid item xs={12} height={"100%"}>
                <div className="report">
                    <header className="report-header">
                        <Button
                            variant={variant[0]}
                            onClick={() => handleButtonFocus(0)}
                        >
                            Hien tai
                        </Button>
                        <Button
                            variant={variant[1]}
                            onClick={() => handleButtonFocus(1)}
                        >
                            Da qua
                        </Button>
                        <Button
                            variant={variant[2]}
                            onClick={() => handleButtonFocus(2)}
                        >
                            Da hoan thanh
                        </Button>
                    </header>
                    <main className="main">
                        <Report />
                    </main>
                </div>
            </Grid>
        </>
    );
}
