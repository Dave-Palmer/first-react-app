import { useState, useEffect, useRef } from "react"
import FormattedDate from './FormattedDate';

function HookClock() {

    const [date, setDate] = useState(new Date())
    const [tickCount, setTickCount] = useState(0)
    let timerId = useRef() //will revisit later on - like storing a class property

    //replaces didmount and willunmount in one hook
    useEffect(() => {
        console.log('hookclock did mount')
        timerId.current = setInterval(
            () => tick(),
            1000
        );

        //a function returned from useEffect will be run when the component is unmounted
        return () => {
            console.log('hookclock will unmount')
            clearInterval(timerId.current);
        }
    }, [])

    //custom function, called from our custom interval inside useEffect
    //calls setDate and setTickCount which triggers a re-render
    const tick = () => {
        console.log('hookclock tick')
        setDate(new Date());
        setTickCount(tickCount => tickCount + 1)
    }

    console.log('hookclock render')
    return (
        <div className="HookClock">
            <h3>Hello, world! {tickCount} seconds have elapsed</h3>
            <FormattedDate date={date} />
        </div>
    );
}

function HookClockDisplay() {

    const [showClock, setShowClock] = useState(false);

    // const hideClock = () => {
    //     setShowClock(false)
    // }

    //make a generic toggleClock function that will hide or show based on the current state

    const toggleClock = () => {
        showClock === true ? setShowClock(false) : setShowClock(true)
    }

    return (
        <div className="HookClockDisplay componentBox">
            {showClock ? <HookClock /> : null}
            {/* <button onClick={hideClock}>Hide HookClock</button> */}
            <button onClick={toggleClock}>{showClock ? 'Hide Hook Clock' : 'Show Hook Clock'}</button>
        </div>
    )
}

export default HookClockDisplay