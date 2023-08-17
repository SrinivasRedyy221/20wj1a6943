import React from 'react';
import TrainList from '../components/TrainList';

const AllTrainsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            <a href="/" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
              Back to All Trains
            </a>
          </p>

          <h1 className="text-3xl leading-6 font-semibold text-gray-900">All Trains</h1>
          <h4 className="mt-2 text-sm text-gray-500">List of all available trains</h4>

          <p className="mt-2 text-sm text-gray-500">
            Browse through the list of all available trains.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <TrainList />
        </div>
        <hr className="mt-8" />
        <div className="px-4 py-5 sm:p-6">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            <a href="/" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
              Back to All Trains
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllTrainsPage;
