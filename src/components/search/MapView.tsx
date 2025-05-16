import React from 'react';

const MapView: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-gray-200 rounded-lg overflow-hidden h-[200px] mb-4">
        <img 
          src="https://images.pexels.com/photos/4452283/pexels-photo-4452283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-blue-600 py-2 px-4 rounded-md font-medium shadow-md hover:bg-gray-50 transition-colors">
        Show on map
      </button>
    </div>
  );
};

export default MapView;