import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4caf50"
        ariaLabel="three-dots-loading"
        visible={true}
      />
      <p>Analyzing GitHub profile...</p>
      <p className="loader-sub">This may take up to 2 minutes</p>
    </div>
  );
};

export default Loader;