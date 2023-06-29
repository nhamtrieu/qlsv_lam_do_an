import React, { useState, useId } from "react";
import * as XLSX from "xlsx";
import "./Import.scss";

const ExcelTable = () => {
    const [data, setData] = useState(null);
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            setData(jsonData);
        };
        reader.readAsArrayBuffer(file);
    };
    return (
        <div>
            <input type="file" onChange={handleFileUpload} />

            {data && (
                <>
                    <h1>Danh sach sinh vien</h1>
                    <table className="excel-table">
                        <thead>
                            <tr>
                                {data[0].map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(1).map((row, index) => (
                                <tr key={index}>
                                    {row.map((cell, index) => (
                                        <td key={index}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default ExcelTable;
