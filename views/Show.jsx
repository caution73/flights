const React = require("react");
const DefaultLayout = require("./layout/Default");
const Destination = require('../models/destination')




class Show extends React.Component {
  render() {
    const flight = this.props.flight;
    const destinations = ["AUS", "DAL", "LAX", "SAN", "SEA"]

    console.log(flight)
    console.log(flight.airport)
    console.log(flight.destination)

    
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
            {/* <tr>
              <td>
                Destination Airport
              </td>
              <td className="valueTd">
                {flight.destination.airport}
              </td>
            </tr>
            <tr>
              <td>
                Arrival Time
              </td>
              <td className="valueTd">
                {flight.destination.arrival}
              </td>
            </tr> */}
          </table>
          <div className="destinationContainer">
          <form className="destinationForm" action={`/destination/${flight._id}`} method="POST">
            Set a Destination:{" "}
            <select name="airport">
              {destinations.map((airport) => {
                return(
                    <option>{airport}</option>
                )
              })}
            </select>
            Arrival Date: <input type="datetime-local" name="arrival"></input>
            <input type="submit" value="Update Flight" />
          </form>
          </div>
          
          {/* {flight.destination} */}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;

