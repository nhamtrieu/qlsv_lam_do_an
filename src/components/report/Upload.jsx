import React, { useState, useRef } from 'react';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import Button from '@mui/material/Button';
import styles from'./Upload.module.scss';
import ListFile from './fileList/FileList';

export default function UploadFiles() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    // Xử lý các tệp đã được tải lên ở đây
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const removeFile = (file) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <>
      <div className={styles.uploadZone}>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} 
          onChange={handleFileUpload} multiple 
          />
        <div className={styles.title}>
          <h3>Nop bao cao: </h3>
          {uploadedFiles.length > 0 && (
            <Button className={styles.submitButton}
              variant="contained" size="small">
              Nop
            </Button>
          )}
        </div>
        {uploadedFiles.length > 0 && (
            <ListFile className={styles.fileZone} data ={uploadedFiles} />
        )}
        <Button onClick={() => fileInputRef.current.click()}
          className={styles.uploadButton}
          variant="contained" size="small">
          Upload
        </Button>
      </div>
    </>
  );
};
