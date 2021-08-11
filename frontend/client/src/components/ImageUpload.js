import axios from 'axios';
import React, {useState} from 'react'

const ImageUpload = () => {
    const[image, setImage] = useState();

    //update image variable after image chosen
    const onFileChange = (event) => {
        setImage(event.target.files[0]);
    }

    // create POST request and send image as form data
    const onFileUpload = () => {
        const formData = new FormData();
        formData.append('file', image);

        let response =  axios.post("http://127.0.0.1:5000/upload", formData);
        console.log(response.data);
    }

    const fileData = () => {
        if (image) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {image.name}</p>
                    <p>File Type: {image.type}</p>
                    <p>
                    Last Modified:{" "}
                    {image.lastModifiedDate.toDateString()}
                    </p>
       
                </div>
              );
        } else {
            return (
            <div>
                <br />
                <h4>Choose Image before Pressing the Upload button</h4>
            </div>
            );
        }
    }
    
    return (
        <div>
            <h1>
            STL Generator
            </h1>
            <h3>
            Upload image for conversion
            </h3>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                Upload!
                </button>
            </div>
        {fileData()}
        </div>
    );
}

export default ImageUpload;