import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import styles from './FileList.module.scss';

export default function ListFile({data, download }) {
    console.log(download);
    const renderTreeNode = (node, index) => {
      return (
        <ListItem key={index} className={styles.fileListItem}> 
          <InsertDriveFileOutlinedIcon/>
          <div className={styles.name}> {node.name}</div>
          { download && <FileDownloadOutlinedIcon className={styles.downloadIcon}/>}
        </ListItem>
      )
    };
    return (
      <List className={styles.fileList}>
          {data.map((node,index) => renderTreeNode(node, index))}
      </List>
    )
}