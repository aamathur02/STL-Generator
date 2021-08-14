import React from "react";
import fileDownload from "js-file-download";
import axios from "axios";

const ModelDownload = () => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        console.log(res);
        console.log(res.status);
        fileDownload(res.data, filename);
      });
  };

  return (
    // <button type='button' onClick={downloadFile}>Download</button>
    <button
      onClick={() => {
        handleDownload("http://127.0.0.1:5000/stl", "model.stl");
      }}
    >
      Download Image
    </button>
  );
};

export default ModelDownload;
