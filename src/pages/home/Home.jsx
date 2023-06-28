import React from "react";
import styles from "./Home.module.scss";
import { NavLink } from "react-router-dom";

const groups = [
    { id: 1, name: 'Nhóm A' },
    { id: 2, name: 'Nhóm B' },
    { id: 3, name: 'Nhóm C' },
  ];

export default function HomePage(){
    return (
        <div className={styles.homePage}>
            <h2 className={styles.title}> Danh sách các nhóm</h2>
            <div className={styles.groupList}>
                {groups.map((group, index) => (
                <NavLink to="group" end>
                    <div className={styles.group} key={index}>
                        <div className={styles.name}>
                            {group.name}
                        </div>
                    </div>
                </NavLink>
                ))}
            </div>
        </div>
    )
}