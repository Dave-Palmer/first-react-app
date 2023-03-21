import React from "react";

class GreetingComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showName: false }
        this.name = props.name
    }

    changeToNameProp() {
        this.setState({ showName: true })
    }

    render() {
        return (
            <div className="componentBox"><h1>Hello {this.state.showName ? this.name : 'World!'}</h1>
                <button onClick={() => this.changeToNameProp()}>Replace with Name</button>
            </div>

        )
    }
}

export default GreetingComponent

//• Create a button for your Greeting class component which replaces “Hello World” with “Hello <your name>” when clicked.