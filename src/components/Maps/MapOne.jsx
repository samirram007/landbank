
import 'jsvectormap/dist/jsvectormap.css';
import jsvectormap from 'jsvectormap/dist/jsvectormap.js';
import { useEffect } from 'react';
import '../../js/us-aea-en';

const MapOne = () => {
  useEffect(() => {
    const mapOne = new jsvectormap({
      selector: '#mapOne',
       map: 'us_aea_en',
      zoomButtons: true,
      markers: [
        { coords: [37.7749, -122.4194], name: 'San Francisco' },
        { coords: [37.7749, -120.4194], name: 'San Francisco' },
        { coords: [37.7749, -122.4194], name: 'San Francisco' },
        { coords: [48.8566, 2.3522], name: 'Paris' }
    ],
    markerStyle: {
        initial: {
            fill: '#FF0000',
            stroke: '#FFFFFF',
            r: 5
        }
    },
      regionStyle: {
        initial: {
          fill: ['#585D5888'],
        },
        hover: {
          fillOpacity: 1,
          fill: '#3056D3',
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: 'Satoshi',
          fontWeight: 'semibold',
          fill: '#fff',
        },
        hover: {
          cursor: 'pointer',
        },
      },

      labels: {
        regions: {
          render(code ) {
            return code.split('-')[1];
          },
        },
      },
    });

    mapOne;
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Plot Label
      </h4>
      <div id="mapOne" className="mapOne map-btn h-90"></div>
    </div>
  );
};

export default MapOne;
