import React from 'react';

const TrainDetails = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-3">Train Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700 text-sm font-bold">Train Name:</p>
          <p className="text-gray-800">Train ABC</p>
        </div>
        <div>
          <p className="text-gray-700 text-sm font-bold">Train Number:</p>
          <p className="text-gray-800">12345</p>
        </div>
        <div>
          <p className="text-gray-700 text-sm font-bold">Train Type:</p>
          <p className="text-gray-800">Express</p>
        </div>
        <div>
          <p className="text-gray-700 text-sm font-bold">Train Route:</p>
          <p className="text-gray-800">Route 1</p>
        
       
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Explore the details of this train for a comfortable journey.
      </p>
      <div className="mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Book Ticket
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Note: Booking availability and fare may vary.
      </p>
    </div>
  );
};

export default TrainDetails;
