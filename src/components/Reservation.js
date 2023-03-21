//see https://reactjs.org/docs/forms.html for more info
import React from 'react'

function Reservation() {

    const [eventName, setEventName] = React.useState('')
    const [name, setName] = React.useState('')
    const [isGoing, setIsGoing] = React.useState(true)
    const [numGuests, setNumGuests] = React.useState(2)
    const [eventDate, setEventDate] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`${name} is ${isGoing ? '' : 'not '}attending ${eventName} with ${numGuests} guests on ${eventDate}`)
    }

    return (
        <form onSubmit={handleSubmit} className="Reservation componentBox">
            <h2>Reservation</h2>
            <label>
                Event Name
                <input name="eventname" type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            </label>&nbsp;
            <label>
                Name:
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>&nbsp;
            <label>
                Is going:
                <input name="isGoing" type="checkbox" checked={isGoing} onChange={(e) => setIsGoing(e.target.checked)} />
            </label>
            <br />
            <label>
                Number of guests:
                <input name="numberOfGuests" type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} />
            </label>
            <label>
                Event Date:
                <input name="eventdate" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </label>&nbsp;
            <br />
            <div><button>Register</button></div>
        </form>
    );

    //try adding an 'event name' field to the form and the alert msg
    //try adding an 'event date' field to the form and the alert msg
}

export default Reservation;