import React from "react";

class Example extends React.Component {
    constructor(props) {
        // React components always have to
        // call super in their constructors
        // to be set up properly
        super(props);
        // this.state should be an object
        // representing the initial “state”
        // of any component instance
        this.state = {
            mood: 'great',
            hungry: false
        };
    }
    isHungry() {
        this.setState({ hungry: true })
    }


    render() {
        return (<div className="componentBox">
            <h2>Example Component</h2>
            <p>Mood: {String(this.state.mood)}</p>
            <p>hungry? {String(this.state.hungry)}</p>
            <button onClick={() => this.isHungry()}>Change to hungry</button>
        </div>)
    }
}


export default Example