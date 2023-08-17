import React from 'react';

const SingleTrainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Single Train Page</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Train Name
          </label>
          <p className="text-gray-700 text-base">Train 1</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Train Description
          </label>
          <p className="text-gray-700 text-base">Description of Train 1</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Train Departure Time
          </label>
          <p className="text-gray-700 text-base">Departure time of Train 1</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Train Arrival Time
          </label>
          <p className="text-gray-700 text-base">Arrival time of Train 1</p>
        </div>
        
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Back to All Trains
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTrainPage;
