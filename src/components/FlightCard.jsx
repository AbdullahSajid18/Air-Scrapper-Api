import PropTypes from "prop-types";

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
  
  FlightCard.propTypes = {
    flight: PropTypes.shape({
      airline: PropTypes.string,
      price: PropTypes.string,
      currency: PropTypes.string,
      departure_time: PropTypes.string,
      arrival_time: PropTypes.string,
      stops: PropTypes.number,
      deep_link: PropTypes.string,
    }).isRequired,
  };
  
  export default FlightCard;
  