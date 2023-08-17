import React from 'react';

const TrainList = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-3">Available Trains</h2>
      <p className="text-gray-700 mb-4">
        Browse through the list of trains to find the perfect one for your journey.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-gray-800">Train 1</li>
        <li className="text-gray-800">Train 2</li>
        <li className="text-gray-800">Train 3</li>
        {/* Add more trains here */}
      </ul>
      <p className="mt-4 text-sm text-gray-600">
        Note: Train availability may vary based on schedules and routes.
      </p>
      <div className="mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          View Train Details
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Note: You will be redirected to the train details page.
      </p>
      <hr className="mt-8" />
      <div className="px-4 py-5 sm:p-6">
        <p className="text-sm leading-5 font-medium text-indigo-600">
          <a
            href="/"
            className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
          >
            Back to All Trains
          </a>
        </p>
      </div>
    </div>
  );
};

export default TrainList;
