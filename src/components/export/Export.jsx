import { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

const exportToExcel = async (fileName) => {
    try {
        // Gọi API để lấy dữ liệu từ server
        const response = await axios.get("https://reqres.in/api/users");
        const data = response.data.data;
        console.log(data);

        // Tạo file Excel từ dữ liệu
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });
        const excelBlob = new Blob([excelBuffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        // Tạo URL để tải file xuống
        const excelURL = URL.createObjectURL(excelBlob);
        const link = document.createElement("a");
        link.href = excelURL;
        link.download = fileName || "abc.xlsx";
        link.click();
    } catch (error) {
        console.error(error);
    }
};

const ExcelExport = () => {
    const [nameFile, setNameFile] = useState("");
    const handleInputName = (event) => {
        setNameFile(event.target.value);
    };
    return (
        <div>
            <h1>Export to Excel</h1>
            <button
                onClick={() => {
                    exportToExcel(nameFile);
                }}
            >
                Export
            </button>
            <input type="text" onInput={handleInputName} />
        </div>
    );
};

export default ExcelExport;
