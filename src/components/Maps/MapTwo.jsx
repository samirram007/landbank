import React, { useRef, useState } from 'react';
import map05 from '../../images/map/map05.png';

const MapTwo = () => {
  const mapRef = useRef(null);
  const [scale, setScale] = useState(1);

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop the event from propagating to the window
    let newScale = scale + e.deltaY * -0.01;

    // Restrict scale
    if (newScale < 0.5) {
      newScale = 0.5;
    } else if (newScale > 3) {
      newScale = 3;
    }

    setScale(newScale);
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Plot(005) Label
      </h4>
      <div
        id="mapTwo"
        className="mapOne map-btn h-90 overflow-hidden"
        ref={mapRef}
        onWheel={handleWheel}
      >
        <img
          src={map05}
          alt=""
          className="h-full w-full transform"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </div>
  );
};

export default MapTwo;
