/* eslint-disable */
import React, { useState, useRef } from "react";

const Card = () => {
  const cardWidth = "50rem"; // Adjust as needed
  const cardHeight = "20rem"; // Adjust as needed
  const paddingAroundImage = "2rem"; // Adjust padding around the image

  const [selectedFile, setSelectedFile] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setCameraActive(false);
  };

  const handleRemove = () => {
    setSelectedFile(null);
  };

  const handleCameraCapture = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    }
    setCameraActive(true);
  };

  const handleCaptureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    canvas.toBlob((blob) => {
      const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
      setSelectedFile(file);
      setCameraActive(false);
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }, "image/jpeg");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-black text-4xl text-bold mb-6">Upload an Image</p>
      <div className="bg-green-900 rounded-lg p-12 sm:w-full md:w-[50rem] md:h-[20rem] relative">
        {selectedFile ? (
          <div className="absolute inset-0 flex justify-center items-center">
            {selectedFile.type && selectedFile.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className="max-w-full max-h-full object-contain"
                style={{ padding: paddingAroundImage }}
              />
            ) : (
              <p className="text-white text-lg">{selectedFile.name}</p>
            )}
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        ) : (
          <>
            {cameraActive && (
              <div className="absolute inset-0 flex justify-center items-center">
                <video
                  ref={videoRef}
                  className="max-w-full max-h-full object-contain"
                  style={{ padding: paddingAroundImage }}
                ></video>
                <button
                  className="absolute bottom-2 left-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCaptureImage}
                >
                  Capture Image
                </button>
              </div>
            )}
            <label
              htmlFor="fileInput"
              className={`text-black text-2xl font-bold mb-6 cursor-pointer flex justify-center items-center sm:flex-row sm:justify-center bg-white rounded ${
                cameraActive ? "hidden" : ""
              }`}
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "1rem",
                margin: "auto",
                marginTop: "3.5rem", // Adjust the value as needed
              }}
            >
              Choose a file
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </>
        )}
      </div>
      <button
        className={`bg-white border border-black hover:bg-gray-200 text-black lg:hidden font-bold py-2 px-4 rounded mt-4 ${
          cameraActive || selectedFile ? "hidden" : ""
        }`}
        onClick={handleCameraCapture}
      >
        Use Camera
      </button>
      <button className="bg-white border border-black hover:bg-gray-200 text-black font-bold py-2 px-4 rounded mt-4">
        Upload
      </button>
    </div>
  );
};

export default Card;
/* eslint-enable */



