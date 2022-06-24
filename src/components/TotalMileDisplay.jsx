import React from "react";

class TotalMileDisplay extends React.Component {

    render() {
        return (
         <div className="TotalMileDisplay">
            <h2>Total Milage In Rotation</h2>
            <label htmlFor ="totalMiles"> Total Miles:</label>
            <span id="totatlMiles" >{this.props.totalMiles}</span>
         </div>

        )
    }
}

export default TotalMileDisplay