import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {  // functional component
                                             //when a file is uploaded this function is called

  const [error, setError] = useState(""); //store valigdation message
  const [fileName, setFileName] = useState(""); //show uploaded file name

  const handleFile = (file) => {
    if (!file) return;

    if (file.type !== 'application/pdf') {  //validation file type
      setError("Only PDF files are allowed.");
      return;
    }


    setError("");
    setFileName(file.name);  

onFileUpload(file);  //here we are sending file to parent


     setFileName("");
  };



  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl">

      <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl p-10 cursor-pointer hover:bg-blue-50 hover:border-blue-500 transition-all duration-300">




        <input
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => handleFile(e.target.files[0])}
        />

        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-xl">
          ⬆️
        </div>

        <div className="flex flex-col items-center mt-3 space-y-1">
          <p className="text-gray-800 font-medium">
            Drag & drop your resume here
          </p>

          <p className="text-sm text-gray-400">
            or click to browse · PDF only
          </p>
        </div>

        {fileName && (
          <p className="mt-4 text-green-600 font-semibold">
           {fileName}
          </p>
        )}





        {error && (
          <p className="mt-3 text-red-500 text-sm">
            {error}
          </p>
        )}

      </label>
    </div>
  );
};

export default FileUpload;