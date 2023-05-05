const React = require("react");
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Create a Flight">
        <div>
          <form className="flightForm" action="/flights" method="POST">
            Airline:{" "}
            <select name="airline">
              <option>Southwest</option>
              <option>American</option>
              <option>United</option>
            </select>
            Flight Number: <input type="text" name="flightNo" />
            Departure Date: <input type="datetime-local" name="departs"></input>
            Departing Airport:{" "}
            <select name="airport">
              <option value="SAN">SAN</option>
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SEA">SEA</option>
            </select>
            <input type="submit" value="Create Flight" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;
