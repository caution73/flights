const React = require('react')
const DefaultLayout = require("../layout/Default")

class Show extends React.Component {
   render () {
    const vegetable = this.props.vegetable
    return (
        <DefaultLayout>
            <h1> Show Page </h1>
        </DefaultLayout>
          
        );
    }
 }
 module.exports  = Show;