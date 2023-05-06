const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const flight = this.props.flight;
    const destinations = ["AUS", "DAL", "LAX", "SAN", "SEA"]
    return (
      <DefaultLayout>
        <h1> Show Page </h1>
        <div>
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
          </table>
          <form className="destinationForm" action="/flights/:id" method="POST">
            Set a Destination:{" "}
            <select name="destination">
              {destinations.map((airport) => {
                return(
                    <option>{airport}</option>
                )
              })}
            </select>
            Arrival Date: <input type="datetime-local" name="arrival"></input>
          </form>
          {/* {flight.destination} */}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
