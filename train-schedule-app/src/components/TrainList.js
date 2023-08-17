import React from 'react';

const TrainList = ({ trains }) => {
  return (
    <div>
      {trains.map((train) => (
        <div key={train.id}>
          {/* Display train information */}
        </div>
      ))}
    </div>
  );
};

export default TrainList;
