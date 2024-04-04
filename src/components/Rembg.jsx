import React from "react";
import CustomButton from "./CustomButton";

const Rembg = ({ file, setFile, readFile }) => {
  return (
    <div className="rembg-container">
      <div className="flex-1 fle flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="rembg-label">
          Upload File{" "}
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected " : file.name}
        </p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <CustomButton
            type="filled"
            title="Logo"
            handleClick={() => readFile("logo")}
            customStyles="text-s"
          />

          <CustomButton
            type="filled"
            title="Full"
            handleClick={() => readFile("full")}
            customStyles="text-s"
          />
        </div>
      </div>
    </div>
  );
};

export default Rembg;
