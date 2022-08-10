import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Save from "../../components/save/save.jsx";
import Triangle from "../../components/triangle/triangle.jsx";
import PeopleIcon from "@mui/icons-material/People";

function UploadFile() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <div className="contribute-main">
      <div className="top-wrapper">
        <h2>Contribute</h2>
        <div className="share">
          <div>
            <PeopleIcon />
          </div>
          <div className="invite">Invite Friends to contribute</div>
        </div>
      </div>

      <div>
        <Triangle />
        <div className="contribute-bar">
          <div className="contribute-wrapper">
            <div>Add a</div>
            <div className="custom-select">
              <select className="contribute-select">
                <option value="0">Photo</option>
                <option value="1">Video</option>
                <option value="2">Text</option>
                <option value="3">A Thing he liked</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Save content="Choose a photo file to upload" />
      </div>
      <div>{images}</div>
    </div>
  );
}

export default UploadFile;
