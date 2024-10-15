import React from "react";
import CustomButton from "./CustomButton";

const Rembg = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container p-4 rounded-lg bg-gray-800 shadow-lg">
      <div className="flex-1 flex flex-col space-y-4">
        <div className="flex justify-center">
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="filepicker-label px-4 py-2 bg-white text-black rounded-md cursor-pointer hover:bg-black hover:text-white transition-all"
            style={{
              backgroundColor: "rgb(14, 116, 144)",
              color: "white",
              border: "none",
            }}
          >
            Upload File
          </label>
        </div>
        <p className="text-center text-gray-300 text-sm truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <CustomButton
            type="filled"
            title="Logo"
            handleClick={() => readFile("logo")}
            customStyles=""
          />
          <CustomButton
            type="filled"
            title="Full"
            handleClick={() => readFile("full")}
            customStyles=""
          />
        </div>
      </div>
    </div>
  );
};

export default Rembg;
