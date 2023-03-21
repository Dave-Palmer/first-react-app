import React from 'react'

// State can be modified based on user action or network changes
// Every time the state of an object changes, React re-renders the component to the browser
// The state object is initialized in the constructor
// The state object can store multiple properties
// this.setState() is used to change the value of the state object
// setState() function performs a shallow merge between the new and the previous state
// State shouldn’t be modified directly – the setState( ) should be used
// State affects the performance of your app, and therefore it shouldn’t be used unnecessarily

class Weather extends React.Component {

    constructor(props) {

        //both props and state are stored as objects, with individual custom properties for storing different bits of data

        super(props); //props are passed in from parent components up the chain

        //The only place where you can assign this.state is the constructor.
        this.state = { weather: 'sunny', temperature: 27, forecast: 'scattered showers' }; //state 'belongs' to the component itself

        this.weatherOptions = ['sunny', 'windy', 'cloudy', 'snowing', 'raining', 'hail']

        //this.windBlows = this.windBlows.bind(this); //what happens if we comment this line out? why?
    }

    windBlows() {
        //Always use the setState() method to change the state object, 
        //since it will ensure that the component knows it’s been updated and triggers the render() method.        
        this.setState({ weather: 'windy' });
        //this just changes the 'weather' state and leaves the others unchanged

        //how could we make the button also lower the temperature by 5 degrees?

        //this.state.weather = 'windy' //this would change the state value as well but is doing it WRONG - always use the setState method instead.
    }

    isSunny() {
        this.setState({ weather: 'sunny' })
    }

    // toggleWeather() {
    //     if (this.state.weather === 'sunny') {
    //         this.setState({ weather: 'windy' })
    //     }
    //     else if (this.state.weather === 'windy') {
    //         this.setState({ weather: 'sunny' })
    //     }
    // }
    // toggleWeather() {
    //     if (this.state.weather === 'sunny') {
    //         this.windBlows()
    //     }
    //     else if (this.state.weather === 'windy') {
    //         this.isSunny()
    //     }
    // }
    //Jo's example
    // toggleWeather() {
    //     let newWeather = this.state.weather === 'sunny' ? 'windy' : 'sunny';
    //     this.setState({ weather: newWeather })
    // }

    //add another button and function sunShines() to set the weather bsck to sunny

    //add another button and function changeWeather() to toggle the weather between windy and sunny

    //how could we switch between multiple possible weather states? 

    toggleWeather() {
        let oldWeatherIndex = this.weatherOptions.indexOf(this.state.weather)
        let newWeatherIndex = oldWeatherIndex === (this.weatherOptions.length - 1) ? 0 : oldWeatherIndex + 1;
        let newWeather = this.weatherOptions[newWeatherIndex]
        this.setState({ weather: newWeather })
    }

    render() {
        return (
            <div className="Weather componentBox">
                <div>Weather Today: {this.state.weather}. Temp is {this.state.temperature}&deg;C</div>
                <div>Weather Tomorrow: {this.state.forecast}</div>
                {/* <Forecast weather={this.state.forecast} /> */}

                {/* what happens if the onclick isn't wrapped in an arrow function? */}
                <button onClick={() => this.windBlows()}>Wind Blows</button> {/* we can use event listeners like onClick, onSubmit, onChange but they need to be camelcased */}
                <button onClick={() => this.isSunny()}>Suns Out</button>
                <button onClick={() => this.toggleWeather()}>Change Weather</button>
            </div>
        )
    }
}

export default Weather;

//now create hooks based functional component equivalent