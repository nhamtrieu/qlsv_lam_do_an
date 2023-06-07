import { Button, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Member, { MemberInfo } from "./Member";
import { useState } from "react";
import "./AddStudent.scss";

const AddStudent = () => {
    const [findMember, setFindMember] = useState(false);
    console.log(findMember);
    const handleEditMembers = () => {
        setFindMember(true);
        // handleShowAddMember();
    };
    // const handleShowAddMember = () => {
    //     if (findMember) {
    //         document.querySelector(".add-members").style.transform =
    //             "translateX(0)";
    //     } else {
    //         document.querySelector(".add-members").style.transform =
    //             "translateX(-300%)";
    //     }
    // };
    return (
        <Grid
            container
            className="add-student"
            overflow={findMember ? "hidden" : "unset"}
        >
            <Grid item className="info" xs={findMember ? 8 : 12}>
                <div className="header">
                    <div className="group-name">
                        <label htmlFor="group-name" className="label">
                            Ten nhom:
                        </label>
                        <div className="input">
                            <TextField
                                id="group-name"
                                label="Ten nhom"
                                variant="outlined"
                            />
                        </div>
                    </div>
                </div>
                <div className="members">
                    <div className="info">
                        <h2 className="title">Thanh vien</h2>
                        <ul className="list-members">
                            <li className="item-member">Abc</li>
                            <li className="item-member">abc</li>
                            <li className="item-member">abc</li>
                        </ul>
                    </div>
                    <Button
                        className="edit-member"
                        variant="outlined"
                        onClick={() => handleEditMembers()}
                    >
                        Chinh sua
                    </Button>
                </div>
            </Grid>
            <Grid
                className="add-members"
                item
                xs={4}
                overflow={findMember ? "unset" : "hidden"}
            >
                <div className="add-student-to-group">
                    <span className="title">Thanh vien</span>
                    <div className="old-members">
                        <Member
                            add={true}
                            actionComponent={
                                <HighlightOffIcon className="delete-member group-teacher-button" />
                            }
                            name="Nguyen van A"
                        />
                        <Member
                            add={true}
                            actionComponent={
                                <HighlightOffIcon className="delete-member group-teacher-button" />
                            }
                            name="Nguyen van A"
                        />
                        <Member
                            add={true}
                            actionComponent={
                                <HighlightOffIcon className="delete-member group-teacher-button" />
                            }
                            name="Nguyen van A"
                        />
                    </div>
                    <div className="new-member">
                        <div className="find-member">
                            <span>Tim kiem</span>
                            <div className="find-input">
                                <input type="text" />
                                <SearchIcon />
                            </div>
                        </div>
                        <div className="new-members">
                            <Member
                                add={false}
                                actionComponent={
                                    <AddCircleOutlineIcon className="add-member group-teacher-button" />
                                }
                                name="Nguyen van A"
                            />
                            <Member
                                add={false}
                                actionComponent={
                                    <AddCircleOutlineIcon className="add-member group-teacher-button" />
                                }
                                name="Nguyen Van B"
                            />
                        </div>
                    </div>
                </div>
                <div className="add-student-footer">
                    <Button variant="outlined" color="success">
                        Xac nhan
                    </Button>
                    <Button variant="outlined" color="error">
                        Huy
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default AddStudent;
