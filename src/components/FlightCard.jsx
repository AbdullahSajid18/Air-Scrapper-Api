


const FlightCard = ({ flight }) => {
    return (
      <div className="p-4 border rounded shadow-sm">
        <p><strong>Airline:</strong> {flight.airline || "N/A"}</p>
        <p><strong>Price:</strong> {flight.price || "N/A"} {flight.currency || "USD"}</p>
        <p><strong>Departure:</strong> {flight.departure_time || "N/A"}</p>
        <p><strong>Arrival:</strong> {flight.arrival_time || "N/A"}</p>
        <p><strong>Stops:</strong> {flight.stops ?? 0}</p>
        <a
          href={flight.deep_link}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </div>
    );
  };
  
  export default FlightCard;
  