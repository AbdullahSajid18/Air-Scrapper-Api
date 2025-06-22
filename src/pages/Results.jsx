import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchFlights } from '../services/flightService';
import FlightCard from '../components/FlightCard';

const Results = () => {
  const location = useLocation();
  const query = location.state;

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchFlights(query)
      .then(data => {
        const flightsArray = data.data?.itineraries || [];
        setFlights(flightsArray);
      })
      .catch(err => {
        console.error("API Error:", err);
  
        if (err.response?.status === 429) {
          alert("API limit reached. Showing mock flights instead.");
        } else {
          alert("Error fetching flights. Showing mock data.");
        }
  
        // Fallback: Mock flight data
        const mockFlights = [
          {
            airline: "Emirates",
            price: "420",
            currency: "USD",
            departure_time: "2025-06-25T10:00",
            arrival_time: "2025-06-25T14:00",
            stops: 0,
            deep_link: "https://emirates.com/book"
          },
          {
            airline: "Qatar Airways",
            price: "380",
            currency: "USD",
            departure_time: "2025-06-25T16:00",
            arrival_time: "2025-06-25T20:00",
            stops: 1,
            deep_link: "https://qatarairways.com/book"
          }
        ];
  
        setFlights(mockFlights);
      })
      .finally(() => setLoading(false));
  }, [query]);
  

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-bold">Flight Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {flights.length ? (
            flights.map((flight, i) => (
              <FlightCard key={i} flight={flight} />
            ))
          ) : (
            <p>No Flights Found </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Results;
