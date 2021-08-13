import React from 'react'
import getDownloadFile from './getDownloadFile'
import { saveAs } from 'file-saver'


const ModelDownload = () => {
   
    const downloadFile = () => {
        getDownloadFile()
        .then(blob => saveAs(blob, 'response.stl'))

        
    }
    
    return (
        <button type='button' onClick={downloadFile}>Download</button>
      )
}

export default ModelDownload;