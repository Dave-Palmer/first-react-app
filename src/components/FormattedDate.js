
function FormattedDate(props) {
    return <h2 className="FormattedDate">It is {props.date.toLocaleTimeString()}.</h2>;
}

export default FormattedDate;