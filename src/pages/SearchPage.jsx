import React from 'react';
import Navbar from '../components/Navbar';
import SearchHeader from '../components/search/SearchHeader';
import FilterSidebar from '../components/search/FilterSidebar';
import HotelListingCard from '../components/search/HotelListingCard';
import MapView from '../components/search/MapView';
import Footer from '../components/home/Footer';

function SearchPage() {
  const hotels = [
    {
      id: 1,
      name: 'The Montcalm At Brewery London City',
      location: 'Westminster Borough, London',
      rating: 4.8,
      reviews: 3014,
      price: 72,
      oldPrice: 109,
      imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      amenities: ['Breakfast', 'WiFi', 'Spa', 'Bar'],
      distance: '2 km'
    },
    {
      id: 2,
      name: 'Staycity Aparthotels Deptford Bridge Station',
      location: 'Canal Walk, Barcelona',
      rating: 4.7,
      reviews: 2014,
      price: 85,
      oldPrice: 110,
      imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      amenities: ['Breakfast', 'WiFi', 'Spa'],
      distance: '2 km'
    },
    {
      id: 3,
      name: 'The Westin New York at Times Square West',
      location: 'Manhattan, New York',
      rating: 4.9,
      reviews: 3514,
      price: 68,
      oldPrice: 95,
      imageUrl: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      amenities: ['Breakfast', 'WiFi', 'Spa', 'Bar'],
      distance: '2 km'
    },
    {
      id: 4,
      name: 'DoubleTree by Hilton Hotel New York Times Square West',
      location: 'Vaticano Prati, Rome',
      rating: 4.6,
      reviews: 3214,
      price: 89,
      oldPrice: 129,
      imageUrl: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      amenities: ['Breakfast', 'WiFi', 'Spa', 'Bar'],
      distance: '2 km'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <SearchHeader />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <FilterSidebar />
          </div>
          
          <div className="md:w-3/4">
            <div className="mb-6">
              <MapView />
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <div className="text-gray-700">
                <p className="font-medium">3,269 properties in Europe</p>
                <p className="text-sm mt-1">Showing 1 - 20 of 3001 properties</p>
              </div>
            </div>
            
            <div>
              {hotels.map(hotel => (
                <HotelListingCard 
                  key={hotel.id}
                  {...hotel}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="flex items-center">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium mx-1">
                  1
                </button>
                {[2, 3, 4, 5, '...', 20].map((page, index) => (
                  <button 
                    key={index}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-700 font-medium mx-1 hover:bg-gray-100 transition-colors"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default SearchPage;