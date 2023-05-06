const React = require("react")
const DefaultLayout = require('./layout/Default')

class Index extends React.Component {
  render() {
    const { flights } = this.props
    return(
      <DefaultLayout title="Flights">
        <div className="indexHeading">
          <div>Airline</div>
          <div>Flight Number</div>
          <div>Departure Date</div>
          <div></div>
        </div>
          <div className="flightTable">
              {flights.map((flight, i) => {
                  return (
                    <div className="flightTableItem" key={i}>
                      <div className="airlineLink">
                              <h4>{flight.airline}</h4>
                      </div>
                      <div>
                        {flight.flightNo}
                      </div>
                      <div>
                        {flight.departs.toISOString().slice(0, 16)}
                      </div>
                      <div className="detailsLink">
                        <a href={`/flights/${flight._id}`}>Details</a>
                      </div>
                    </div>
                  );
              })}
          </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index
