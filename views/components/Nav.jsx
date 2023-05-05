const React = require("react")

class Nav extends React.Component {
  render() {
    return (
      <nav>
            <a href="/flights">All Flights</a>
            <span>   </span>
            <a href="/flights/new">Create Flight</a>
      </nav>
    )
  }
}

module.exports = Nav