const React = require("react")
const DefaultLayout = require('./layout/Default')

class Index extends React.Component {
  render() {
    const { flights } = this.props
    return(
      <DefaultLayout title="Flights">
        <div>
          <ul>
              {flights.map((flight, i) => {
                  return (
                    <div className="flightTableItem" key={i}>
                      <div> <a href={`/flights/${flight._id}`}>
                              {flight.airline}</a>
                      </div>
                      <div>
                        flight number {" "}{flight.flightNo}
                      </div>
                      <div>
                        Departing: {flight.departs.toISOString().slice(0, 16)}
                      </div>
                      <div>
                        <a href="/Show">Details</a>
                      </div>
                    </div>
                      // <li key={i}>
                      //     <a href={`/flights/${flight._id}`}>
                      //         {flight.airline}
                      //     </a> {": "}flight number {" "}
                      //     {flight.flightNo} <span></span>Departing: {flight.departs.toISOString().slice(0, 16)}<br/>
                          
                      // </li>
                  );
              })}
          </ul>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index
