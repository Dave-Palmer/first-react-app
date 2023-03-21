import React from "react"

class PropDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props)
        return (
            <div className="componentBox">
                <h1>Props Displayer</h1>
                <h2>{stringProps}</h2>
                <h3>{this.props.name}</h3>
                <h3>{this.props.location}</h3>
            </div>
        )
    }
}

export default PropDisplayer