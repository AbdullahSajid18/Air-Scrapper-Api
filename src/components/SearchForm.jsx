import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const countryAirports = {
  Pakistan: [
    { code: "KHI", name: "Karachi" },
    { code: "LHE", name: "Lahore" },
    { code: "ISB", name: "Islamabad" },
  ],
  UAE: [
    { code: "DXB", name: "Dubai" },
    { code: "AUH", name: "Abu Dhabi" },
  ],
  USA: [
    { code: "JFK", name: "New York JFK" },
    { code: "LAX", name: "Los Angeles" },
    { code: "ORD", name: "Chicago" },
  ],
};

const SearchForm = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const [fromCountry, setFromCountry] = useState("Pakistan");
  const [toCountry, setToCountry] = useState("UAE");

  const [fromAirport, setFromAirport] = useState("KHI");
  const [toAirport, setToAirport] = useState("DXB");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results", {
      state: {
        from: fromAirport,
        to: toAirport,
        date: date.toISOString().split("T")[0],
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-lg font-semibold text-center">Search Flights</h2>

      {/* From Country */}
      <div>
        <label>From Country</label>
        <select
          className="w-full p-2 border rounded"
          value={fromCountry}
          onChange={(e) => {
            setFromCountry(e.target.value);
            setFromAirport(countryAirports[e.target.value][0].code);
          }}
        >
          {Object.keys(countryAirports).map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>

      {/* From Airport */}
      <div>
        <label>From Airport</label>
        <select
          className="w-full p-2 border rounded"
          value={fromAirport}
          onChange={(e) => setFromAirport(e.target.value)}
        >
          {countryAirports[fromCountry].map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.name} ({airport.code})
            </option>
          ))}
        </select>
      </div>

      {/* To Country */}
      <div>
        <label>To Country</label>
        <select
          className="w-full p-2 border rounded"
          value={toCountry}
          onChange={(e) => {
            setToCountry(e.target.value);
            setToAirport(countryAirports[e.target.value][0].code);
          }}
        >
          {Object.keys(countryAirports).map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>

      {/* To Airport */}
      <div>
        <label>To Airport</label>
        <select
          className="w-full p-2 border rounded"
          value={toAirport}
          onChange={(e) => setToAirport(e.target.value)}
        >
          {countryAirports[toCountry].map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.name} ({airport.code})
            </option>
          ))}
        </select>
      </div>

      {/* Date */}
      <DatePicker
        selected={date}
        onChange={setDate}
        className="w-full p-2 border rounded"
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
      />

      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
