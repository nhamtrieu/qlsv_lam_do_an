import React from "react";
import styles from "./TimeTable.module.scss";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import FreeTime from "../../components/group/freeTime/FreeTime";


export default function TimeTable() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const times = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 AM",
         "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"]
    
    const numRows = 11;
    const numColumns = 7;
    
    // Tạo mảng 2 chiều và khởi tạo các phần tử là rỗng
    const emptyGrid = [];
    for (let i = 0; i < numRows; i++) {
        const row = Array(numColumns).fill('');
        emptyGrid.push(row);
    }
    emptyGrid[1][2] = [<FreeTime />];
    let h = emptyGrid[1][2];
    console.log(h);
    h.push(2);

    return (
        <table>
            <thead>
                <tr>
                    <th className={styles.time}></th>
                    {daysOfWeek.map((day, index) => (
                        <th key={index}>{day}</th>
                    ))}
                </tr>
            </thead>
            
            <tbody>
                {emptyGrid.map((row, r) => (
                    <tr key={r}>
                        <td className={styles.time}>{times[r]}</td>
                        {row.map((cell, c) => (
                            <td key={c}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
            
        </table>
    )
}