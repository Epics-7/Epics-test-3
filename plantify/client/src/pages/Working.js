// import React from 'react';

// const Portfolio = () => {
//   return <section className='section bg-green-200'>
//     <div className='card section container mx-auto h-full relative flex flex-col items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
//       <div className='top'>
//         <p>Drag & Drop image uploading</p>
//       </div>
//       <div className='drag-area'>
//         <span className='select'>
//           Drop images here 
//         </span>
//         Drag & drop image here of (" ")
//         <span className='select'>
//           Browse
//         </span>
//         <input name='file' type='file' className='file' multiple></input>
//       </div>
//       <div className='container'>
//         {/* <div className='image lg:pl-11'>
//           <span className='delete'>&times;</span>
//         </div> */}
//         <img src='' alt=''/>
//       </div>
//       <button type='button'>Upload</button>
//     </div>
//   </section>;
// };

// export default Portfolio;




// import React, { useState } from 'react';


// const Working = () => {
//   const [file, setFile] = useState(null);
//   const [cameraActive, setCameraActive] = useState(false);
//   const videoRef = React.useRef();

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     setCameraActive(false); // Deactivate camera when a file is selected
//   };

//   const handleCapture = () => {
//     const canvas = document.createElement('canvas');
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;
//     canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
//     canvas.toBlob((blob) => {
//       setFile(new File([blob], 'snapshot.png', { type: 'image/png' }));
//     });
//     setCameraActive(false); // Deactivate camera after capturing image
//   };

//   return (
//     <div>
//     <div className="flex justify-center items-center h-screen">
//       <div style={{ backgroundColor: '#26633E' }} className=" rounded-lg px-48 pt-48">
//         <h1 className="text-2xl font-bold mb-4">Upload a File</h1>
//         {cameraActive ? (
//           <div>
//             <video
//               ref={videoRef}
//               autoPlay
//               className="w-full mb-4"
//             ></video>
//             <button
//               onClick={handleCapture}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
//             >
//               Capture
//             </button>
//             <button
//               onClick={() => setCameraActive(false)}
//               className="bg-red-500 text-white py-2 px-4 rounded-lg"
//             >
//               Close Camera
//             </button>
//           </div>
//         ) : (
//           <>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className="mb-4"
//             />
//             <button
//               onClick={() => setCameraActive(true)}
//               className="bg-green-500 lg:hidden text-white py-2 px-4 rounded-lg mr-2"
//             >
//               Open Camera
//             </button>
//           </>
//         )}
//         {file && (
//           <div>
//             <p className="text-green-500 mb-2">File selected: {file.name}</p>
//             <button
//               onClick={() => setFile(null)}
//               className="bg-red-500 text-white py-2 px-4 rounded-lg"
//             >
//               Remove File
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//     </div>
    
//   );
// };

// export default Working;

// import React, { useState } from 'react';

// const Working = () => {
//   const [file, setFile] = useState(null);
//   const [cameraActive, setCameraActive] = useState(false);
//   const [image, setImage] = useState(null); // State to store uploaded image
//   const videoRef = React.useRef();

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     setCameraActive(false); // Deactivate camera when a file is selected
//     // Display the uploaded image
//     setImage(URL.createObjectURL(selectedFile));
//   };

//   const handleCapture = () => {
//     const canvas = document.createElement('canvas');
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;
//     canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
//     canvas.toBlob((blob) => {
//       setFile(new File([blob], 'snapshot.png', { type: 'image/png' }));
//     });
//     setCameraActive(false); // Deactivate camera after capturing image
//   };

//   const handleRemoveFile = () => {
//     // Reset file and image state
//     setFile(null);
//     setImage(null);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-green-500 rounded-lg p-12 flex flex-col items-center">
//         <h1 className="text-2xl font-bold mb-4">Upload a File</h1>
//         {cameraActive ? (
//           <div>
//             <video
//               ref={videoRef}
//               autoPlay
//               className="w-full mb-4"
//             ></video>
//             <button
//               onClick={handleCapture}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
//             >
//               Capture
//             </button>
//             <button
//               onClick={() => setCameraActive(false)}
//               className="bg-red-500 text-white py-2 px-4 rounded-lg"
//             >
//               Close Camera
//             </button>
//           </div>
//         ) : (
//           <>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className="mb-4"
//             />
//             <button
//               onClick={() => setCameraActive(true)}
//               className="bg-green-500 lg:hidden text-white py-2 px-4 rounded-lg mr-2"
//             >
//               Open Camera
//             </button>
//           </>
//         )}
//         {file && (
//           <div className="flex items-center">
//             <p className="text-green-500 mb-2">File selected: {file.name}</p>
//             <button
//               onClick={handleRemoveFile}
//               className="bg-red-500 text-white py-2 px-4 rounded-lg ml-4"
//             >
//               Remove File
//             </button>
//           </div>
//         )}
//       </div>
//       {/* Display the uploaded image */}
//       {image && (
//         <div className="bg-grey-500 rounded-lg p-12 mt-8 flex flex-col items-center">
//           <h1 className='text-center mb-4'>Uploaded Image</h1>
//           <img src={image} alt="Uploaded" className="max-w-md mx-auto mb-4" />
//           <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
//             Upload
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Working;

// App.js

/* eslint-disable */
import React from "react";
import Card from "../components/Card";


function App() {
  return (
    <div className="flex justify-center items-center h-screen " style={{top: "55px",
      position: "relative",}}>
      <Card/>
    </div>
  );
}

export default App;
/* eslint-enable */