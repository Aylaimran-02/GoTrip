import React from 'react';
import { Star, MapPin, Heart } from 'lucide-react';

interface HotelListingCardProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  amenities: string[];
  distance: string;
}

const HotelListingCard: React.FC<HotelListingCardProps> = ({
  id,
  name,
  location,
  rating,
  reviews,
  price,
  oldPrice,
  imageUrl,
  amenities,
  distance
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-[240px] md:h-full object-cover"
          />
          <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-rose-500 hover:bg-white transition-colors">
            <Heart className="h-5 w-5" />
          </button>
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            Exceptional
          </div>
          <div className="absolute bottom-3 left-3 bg-white text-gray-900 text-xs font-semibold px-2 py-1 rounded flex items-center">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
            <span>{rating}</span>
            <span className="ml-1 text-gray-600">({reviews} reviews)</span>
          </div>
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <h3 className="font-bold text-gray-900 text-xl">{name}</h3>
            </div>
            
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>{location}</span>
              <span className="mx-2">•</span>
              <span>Show on map</span>
              <span className="mx-2">•</span>
              <span>{distance} to city center</span>
            </div>
            
            <div className="mb-4">
              <p className="font-semibold mb-1">King Room</p>
              <p className="text-gray-600 text-sm">1 king double bed</p>
            </div>
            
            <div className="text-sm text-green-600 font-medium mb-2">
              Free cancellation
            </div>
            <div className="text-sm text-green-600 mb-4">
              You can cancel later, so lock in this great price today.
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {amenities.map((amenity, index) => (
              <span 
                key={index} 
                className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center mb-1">
              {oldPrice && (
                <span className="text-gray-400 text-sm line-through mr-2">${oldPrice}</span>
              )}
              <span className="font-bold text-xl text-gray-900">${price}</span>
            </div>
            <div className="text-gray-500 text-sm mb-3">
              taxes and charges included
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors">
              See Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListingCard;