import axios from "axios";
import React, { useState } from "react";
const Cloudinary = () => {
    const [file, setFile] = useState("");
  
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    const handleChange = async (e) => {
      const file = e.target.files[0];
      const b64 = await convertBase64(file)
     
      setFile(b64);
    };
  console.log(file , typeof file)
    const handleClick = async () => {
      axios
        .post("api/api/upload",{file: file})
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    };
  
    return (
      
        <>
        <input onChange={handleChange} type="file" name="image" />
        <button onClick={handleClick}>upload it</button>
        </>
    );
  };
  
  export default Cloudinary;
  