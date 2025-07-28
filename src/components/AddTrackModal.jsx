// import React from 'react';

// const AddTrackModal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 z-50 bg-[#E6E6E6]/50 flex items-center justify-center">
//       <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-md">
        
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-5 text-gray-400 text-xl font-bold hover:text-black"
//         >
//           ×
//         </button>

//         {/* Title */}
//         <h2 className="text-center text-xl font-semibold mb-6">Add New Track</h2>

//         {/* Form */}
//         <form className="space-y-4">
//           {/* Track name */}
//           <div>
//             <label className="text-sm font-medium text-gray-700 block mb-1">Track name</label>
//             <input
//               type="text"
//               placeholder="Enter track name"
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="text-sm font-medium text-gray-700 block mb-1">Price</label>
//             <input
//               type="text"
//               placeholder="Enter price"
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Duration */}
//           <div>
//             <label className="text-sm font-medium text-gray-700 block mb-1">Duration</label>
//             <input
//               type="text"
//               placeholder="e.g. 8 weeks"
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Instructor */}
//           <div>
//             <label className="text-sm font-medium text-gray-700 block mb-1">Instructor</label>
//             <input
//               type="text"
//               placeholder="Instructor name"
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Picture */}
//           <div>
//             <label className="text-sm font-medium text-gray-700 block mb-1">Picture</label>
//             <input
//               type="file"
//               multiple
//               className="w-full border border-gray-300 rounded px-3 py-2 file:mr-3 file:py-1 file:px-4 file:rounded file:border-0 file:bg-gray-100 file:text-sm file:text-gray-600"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
//             <textarea
//               placeholder="Enter a brief description"
//               rows={3}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#0866B3] hover:bg-[#01589A] text-white py-2 rounded font-semibold transition"
//           >
//             Create track
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTrackModal;


import React from 'react';

const AddTrackModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#E6E6E6]/50 flex items-start justify-center pt-8 pb-8 px-4 overflow-y-auto">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-md my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 text-xl font-bold hover:text-black"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6">Add New Track</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Track name */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Track name</label>
            <input
              type="text"
              placeholder="Enter track name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Price</label>
            <input
              type="text"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Duration</label>
            <input
              type="text"
              placeholder="e.g. 8 weeks"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Instructor */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Instructor</label>
            <input
              type="text"
              placeholder="Instructor name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Picture */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Picture</label>
            <input
              type="file"
              multiple
              className="w-full border border-gray-300 rounded px-3 py-2 file:mr-3 file:py-1 file:px-4 file:rounded file:border-0 file:bg-gray-100 file:text-sm file:text-gray-600"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
            <textarea
              placeholder="Enter a brief description"
              rows={3}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0866B3] hover:bg-[#01589A] text-white py-2 rounded font-semibold transition"
          >
            Create track
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTrackModal;