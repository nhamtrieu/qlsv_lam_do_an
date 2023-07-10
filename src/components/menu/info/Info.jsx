import styles from "./Info.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useState } from "react";
export default function Info({ handleHideStudentInfo }) {
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState("");

    const handleUploadAvatar = (event) => {
        const file = event.target.files[0];
        setAvatarFile(file);

        const reader = new FileReader();
        reader.onload = () => {
            setAvatarPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Thong tin sinh vien</h1>
                    <CloseIcon
                        className={styles.closeIcon}
                        onClick={handleHideStudentInfo}
                    />
                </div>
                <div className={styles.body}>
                    <div className={styles.info}>
                        <div className={styles.avatar}>
                            <div className={styles.title}>anh dai dien 4x6</div>
                            <img
                                src={avatarPreview}
                                alt="avatar"
                                className={styles.studentAvatar}
                            />
                            <div className={styles.upload}>
                                <label
                                    htmlFor="account-avatar"
                                    style={{ cursor: "pointer" }}
                                >
                                    Upload
                                </label>
                                <input
                                    type="file"
                                    id="account-avatar"
                                    style={{ display: "none" }}
                                    onChange={handleUploadAvatar}
                                />
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoType}>Ho va ten *</div>
                            <div className={styles.infoValue}>
                                <input type="text" placeholder="Abc" />
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoType}>
                                Ma so sinh vien *
                            </div>
                            <div className={styles.infoValue}>
                                <input
                                    type="text"
                                    placeholder="Abc"
                                    readOnly
                                    className={styles.disable}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.info}></div>
                    <p>Lưu ý: Các trường có dấu (*) là bắt buộc!</p>
                </div>
                <div className={styles.footer}>
                    <Button variant="contained">Save</Button>
                    <Button
                        style={{ marginLeft: "5px" }}
                        variant="contained"
                        color="error"
                        onClick={handleHideStudentInfo}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}
