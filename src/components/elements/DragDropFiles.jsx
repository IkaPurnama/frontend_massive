import { useState, useRef } from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };

  if (files) return (
    <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx} style={{justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button className= "miniButton" onClick={() => setFiles(null)}>Cancel</button>
            <button className= "miniButton" onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )

  return (
    <>
        <div 
            className="dropzone container"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h5 style={{marginTop: "5rem"}}>Click to upload or drag and drop</h5>
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button className="miniButton" onClick={() => inputRef.current.click()}>Unggah File</button>
        </div>
    </>
  );
};

export default DragDropFiles;