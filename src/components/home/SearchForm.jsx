import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Search, MapPin, Calendar, UserPlus } from 'lucide-react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3008';

function SearchForm({ activeTab }) {
  const [tripType, setTripType] = useState('oneway');
  const cities = [
    { name: "New York", code: "NYC" },
    { name: "London", code: "LON" },
    { name: "Paris", code: "PAR" },
    { name: "Tokyo", code: "TYO" },
    { name: "Dubai", code: "DXB" },
    { name: "Singapore", code: "SIN" },
    { name: "Los Angeles", code: "LAX" },
    { name: "Hong Kong", code: "HKG" },
    { name: "Sydney", code: "SYD" },
    { name: "Rome", code: "ROM" },
    { name: "Bangkok", code: "BKK" },
    { name: "Amsterdam", code: "AMS" },
    { name: "Mumbai", code: "BOM" },
    { name: "Shanghai", code: "SHA" },
    { name: "Istanbul", code: "IST" }
  ];
  
  const [flightData, setFlightData] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    returnDate: '',
    adults: 2,
    max: 5,
    currencyCode: 'USD'
  });
  const [addPlace, setAddPlace] = useState(false);
  const [addCar, setAddCar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flightOffers, setFlightOffers] = useState([]);
  const [error, setError] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const handleCitySearch = (value, type) => {
    const searchTerm = value.toLowerCase();
    const filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(searchTerm) ||
      city.code.toLowerCase().includes(searchTerm)
    );
    
    if (type === "from") {
      setFromSuggestions(filteredCities);
      setShowFromSuggestions(true);
    } else {
      setToSuggestions(filteredCities);
      setShowToSuggestions(true);
    }
  };

  const handleFlightSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const dataToSend = {
        ...flightData,
        ...(tripType === 'roundtrip' && { returnDate: flightData.returnDate }),
      };

      const response = await axios.post(
        `${API_URL}/api/user/flightOffers`,
        new URLSearchParams(dataToSend).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
          },
          withCredentials: true,
          timeout: 10000,
        }
      );

      setFlightOffers(response.data);
      window.history.pushState({}, '', '/flights');
    } catch (err) {
      if (err.response) {
        setError(`Server error: ${err.response.status} - ${err.response.data.message || 'Please try again later'}`);
        console.error('Server error:', err.response.data);
      } else if (err.request) {
        setError('Unable to reach the server. Please check your connection and try again.');
        console.error('Network error:', err.request);
      } else {
        setError('An error occurred while preparing the request. Please try again.');
        console.error('Request setup error:', err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlightData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  if (activeTab === 'flights') {
    return (
      <div className="relative" style={{ zIndex: 1 }}> {/* Changed container to relative with z-index */}
      <form onSubmit={handleFlightSearch} className="p-4 space-y-4">
        {/* Subtabs */}
        <div className="flex space-x-4 mb-4">
          <button
            type="button"
            onClick={() => handleTripTypeChange('oneway')}
            className={`px-4 py-2 rounded-md border ${tripType === 'oneway' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
          >
            One Way
          </button>
          <button
            type="button"
            onClick={() => handleTripTypeChange('roundtrip')}
            className={`px-4 py-2 rounded-md border ${tripType === 'roundtrip' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
          >
            Round Trip
          </button>
        </div>

        {/* Inputs and Submit in One Row */}
        <div className="flex flex-wrap gap-4 items-end relative"> {/* Added relative here */}
          {/* Leaving From */}
          <div className="relative flex-1 min-w-[180px]">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="originLocationCode"
              placeholder="Leaving from"
              value={flightData.originLocationCode}
              onChange={(e) => {
                handleInputChange(e);
                handleCitySearch(e.target.value, "from");
              }}
              onFocus={() => setShowFromSuggestions(true)}
              onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
              className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {showFromSuggestions && fromSuggestions.length > 0 && (
              <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-y-auto"
                style={{
                  top: 'calc(100% + 5px)',
                  left: 0,
                  maxHeight: '300px',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                }}>
                {fromSuggestions.map((city, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                    onClick={() => {
                      setFlightData(prev => ({
                        ...prev,
                        originLocationCode: `${city.name} (${city.code})`
                      }));
                      setShowFromSuggestions(false);
                    }}
                  >
                    {city.name} ({city.code})
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Going To */}
          <div className="relative flex-1 min-w-[180px]">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="destinationLocationCode"
              placeholder="Going to"
              value={flightData.destinationLocationCode}
              onChange={(e) => {
                handleInputChange(e);
                handleCitySearch(e.target.value, "to");
              }}
              onFocus={() => setShowToSuggestions(true)}
              onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
              className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {showToSuggestions && toSuggestions.length > 0 && (
              <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-y-auto"
                style={{
                  top: 'calc(100% + 5px)',
                  left: 0,
                  maxHeight: '300px',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                }}>
                {toSuggestions.map((city, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                    onClick={() => {
                      setFlightData(prev => ({
                        ...prev,
                        destinationLocationCode: `${city.name} (${city.code})`
                      }));
                      setShowToSuggestions(false);
                    }}
                  >
                    {city.name} ({city.code})
                  </div>
                ))}
              </div>
            )}
          </div>


            {/* Dates */}
            {tripType === 'oneway' ? (
              <div className="relative flex-1 min-w-[180px]">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  name="departureDate"
                  value={flightData.departureDate}
                  onChange={handleInputChange}
                  className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ) : (
              <div className="flex flex-1 min-w-[300px] gap-2">
                {/* Departure Date */}
                <div className="relative w-1/2">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="departureDate"
                    value={flightData.departureDate}
                    onChange={handleInputChange}
                    className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                {/* Return Date */}
                <div className="relative w-1/2">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="returnDate"
                    value={flightData.returnDate || ''}
                    onChange={handleInputChange}
                    className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            )}

            {/* Travelers */}
            <div className="relative flex-1 min-w-[100px]">
              <UserPlus className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="number"
                name="adults"
                min={1}
                value={flightData.adults}
                onChange={handleInputChange}
                className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Travelers"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Searching...' : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    <span>Search</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-4 mt-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={addPlace} onChange={() => setAddPlace(!addPlace)} />
              <span>Add a place to stay</span>
            </label>

            {tripType === 'roundtrip' && (
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={addCar} onChange={() => setAddCar(!addCar)} />
                <span>Add a car</span>
              </label>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md border border-red-200 mt-4">
              {error}
            </div>
          )}
        </form>
      </div>
    );
  }

  return null;
}

SearchForm.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default SearchForm;