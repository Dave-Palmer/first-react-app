import React from "react"

function HookExample() {
    const [hungry, setHungry] = React.useState(false)
    const [mood, setMood] = React.useState('great')

    const isHungry = () => {
        setHungry(true)
        setMood('hangry!')
    }

    return (<div className="componentBox">
        <h2>Example Hook Component</h2>
        <p>Mood: {mood}</p>
        <p>hungry? {String(hungry)}</p>
        <button onClick={() => isHungry()}>Change to hungry</button>
    </div>)

}

export default HookExample