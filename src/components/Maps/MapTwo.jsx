import React, { useEffect, useRef, useState } from 'react';
import map05 from '../../images/map/map05.png';

const MapTwo = () => {
  const mapRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleWheel = (e) => {
    e.preventDefault();
    let newScale = scale + e.deltaY * -0.01;

    // Restrict scale
    if (newScale < 0.5) {
      newScale = 1;
      setPosition({ x: 0, y: 0 });
    } else if (newScale > 10) {
      newScale = 10;
    }

    setScale(newScale);
  };


  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    // Prevent default behavior to avoid text selection
    e.preventDefault();

  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    const mapElement = mapRef.current;
    if (mapElement) {
      mapElement.addEventListener('wheel', handleWheel, { passive: false });
      mapElement.addEventListener('mousedown', handleMouseDown);
      mapElement.addEventListener('mouseup', handleMouseUp);
      mapElement.addEventListener('mouseleave', handleMouseUp);

      // Clean up the event listeners on component unmount
      return () => {
        mapElement.removeEventListener('wheel', handleWheel);
        mapElement.removeEventListener('mousedown', handleMouseDown);
        mapElement.removeEventListener('mouseup', handleMouseUp);
        mapElement.removeEventListener('mouseleave', handleMouseUp);
      };
    }
  }, [dragging, scale]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Plot(005) Label
      </h4>
      <div
        ref={mapRef}
        className="mapOne map-btn h-90 overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={dragging ? handleMouseMove : null}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={map05}
          alt=""
          className="transform"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: dragging ? 'grabbing' : 'grab',
            transition: dragging ? 'none' : 'transform 0.2s ease-out',
          }}
        />
      </div>
    </div>
  );
};

export default MapTwo;