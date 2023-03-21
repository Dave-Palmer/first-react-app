import React from "react";

function GreetingHook(props) {
    const [showName, setShowName] = React.useState(false)
    const changeToNameProp = () => {
        setShowName(true)
    }

    return (
        <div className="componentBox"><h1>Hello {showName ? props.name : 'World!'}</h1>
            <button onClick={changeToNameProp}>Replace with Name</button>
        </div>

    )

}

export default GreetingHook