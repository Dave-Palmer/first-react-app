import React from "react";

function HookWeather() {
    const [weather, setWeather] = React.useState('sunny')
    const [temperature, setTemperature] = React.useState('22')
    const [forecast, setForecast] = React.useState('scattered showers')

    const weatherOptions = ['sunny', 'windy', 'cloudy', 'snowing', 'raining', 'hail']

    const isSunny = () => {
        setWeather('sunny')
        setTemperature(temperature + 5)
    }
    const windBlows = () => {
        setWeather('windy')
        setTemperature(temperature - 5)
    }
    const toggleWeather = () => {
        let oldWeatherIndex = weatherOptions.indexOf(weather)
        let newWeatherIndex = oldWeatherIndex === (weatherOptions.length - 1) ? 0 : oldWeatherIndex + 1;
        let newWeather = weatherOptions[newWeatherIndex]
        setWeather(newWeather)
    }

    return (
        <div className="Weather componentBox">
            <div>Weather Today: {weather}. Temp is {temperature}&deg;C</div>
            <div>Weather Tomorrow: {forecast}</div>
            {/* <Forecast weather={this.state.forecast} /> */}

            {/* what happens if the onclick isn't wrapped in an arrow function? */}
            <button onClick={windBlows}>Wind Blows</button> {/* we can use event listeners like onClick, onSubmit, onChange but they need to be camelcased */}
            <button onClick={() => isSunny()}>Suns Out</button>
            <button onClick={() => toggleWeather()}>Change Weather</button>
        </div>
    )
}

export default HookWeather