
function Comment(props) {

    return (
        <div className="Comment componentBox"> {/* using class names that match the component name is a handy convention for tracking components in the front end */}
            <UserInfo user={props.user} />

            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date.toLocaleString()}
            </div>
        </div>
    );

}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>)
}

export default Comment