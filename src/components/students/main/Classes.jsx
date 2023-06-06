import { NavLink } from "react-router-dom";
import Class from "./Class";
import "./Classes.scss";

export default function Classes() {
    return (
        <div className="classes">
            <NavLink to="class1" end>
                <Class />
            </NavLink>
            <NavLink to="class1" end>
                <Class />
            </NavLink>
            <NavLink to="class1" end>
                <Class />
            </NavLink>
            <NavLink to="class1" end>
                <Class />
            </NavLink>
            <NavLink to="class1" end>
                <Class />
            </NavLink>
            '
        </div>
    );
}
