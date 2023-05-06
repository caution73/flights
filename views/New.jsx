const React = require("react");
const DefaultLayout = require("./layout/Default");

const airports = ["AUS", "DAL", "LAX", "SAN", "SEA"]
const airlines = ['Southwest', 'American', 'United']

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Create a Flight">
        <div>
          <form className="flightForm" action="/flights" method="POST">
            Airline:{" "}
            <select name="airline">
              {airlines.map((airline) => {
                return(
                    <option>{airline}</option>
                )
              })}
            </select>
            Flight Number: <input type="text" name="flightNo" />
            Departure Date: <input type="datetime-local" name="departs"></input>
            Departing Airport:{" "}
            <select name="airport">
              {airports.map((airport) => {
                return(
                    <option>{airport}</option>
                )
              })}
            </select>
            <input type="submit" value="Create Flight" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;
