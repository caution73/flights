const React = require("react");
const DefaultLayout = require("./layout/Default");
const Destination = require("../models/destination");

class Show extends React.Component {
  render() {
    const flight = this.props.flight;
    const destinationAirport = ["AUS", "DAL", "LAX", "SAN", "SEA"];

    console.log("Entire flight: " + flight);

    return (
      <DefaultLayout>
        <h1> Show Page </h1>
        <div className="container">
          <table>
            <tr>
              <td>Airline</td>
              <td className="valueTd">{flight.airline}</td>
            </tr>
            <tr>
              <td>Flight Number</td>
              <td className="valueTd">{flight.flightNo}</td>
            </tr>
            <tr>
              <td>Departing Airport</td>
              <td className="valueTd">{flight.airport}</td>
            </tr>
            <tr>
              <td>Departure Date</td>
              <td className="valueTd">
                {flight.departs.toISOString().slice(0, 16)}
              </td>
            </tr>
            <tr>
              <td>Destination and Arrival Time</td>
              <td className="valueTd">
                {flight?.destination?.map((destination) => {
                  return(
                    <h4>{destination.airport} - {destination.arrival.toISOString().slice(0, 16)}</h4>
                    ) 
                })}
              </td>
            </tr>
          </table>
          <div className="destinationContainer">
            <form
              className="destinationForm"
              action={`/destination/${flight._id}`}
              method="POST"
            >
              Set a Destination:{" "}
              <select name="airport">
                {destinationAirport.map((airport) => {
                  return <option value={airport}>{airport}</option>;
                })}
              </select>
              Arrival Date: <input type="datetime-local" name="arrival"></input>
              <input type="submit" value="Add Destination" />
            </form>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
