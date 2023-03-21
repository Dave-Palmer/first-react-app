import React from 'react';
import { Hello } from '../components/Hello';

function LoginComponent() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [loginError, setLoginError] = React.useState('')
    const [loginCount, setLoginCount] = React.useState(0)
    const [disable, setDisable] = React.useState('')
    const [hideForm, setHideForm] = React.useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username + ' ' + password)
        setLoginCount(loginCount + 1)
        console.log(loginCount)

        //login successful/true if both values exist and match
        let isLoggedIn = (username && password && username === password)
        setLoggedIn(isLoggedIn)
        if (!isLoggedIn && loginCount < 5) { setLoginError("password and username don't match") }
        if (!isLoggedIn && loginCount >= 5) {
            setLoginError("exceeded login attempts");
            setDisable('disabled');
            setHideForm('hide-form')
        }
    }

    // We could handle the onChange like this or have an inline function on the handler

    const handleInputChange = (event) => {
        const target = event.target;
        console.log(target)

        if (target.name === 'username') { setUsername(target.value) }

        if (target.name === 'password') { setPassword(target.value) }

        if (target.name === 'password') { setEmail(target.value) }

    };


    //we can also save JSX into variables to simplify rendering
    //const message = this.state.loggedIn ? <Hello name={this.state.username}/> : 'Please log in';

    return (
        <div className="Login componentBox">

            {/* if we're logged in, use the Hello component to say hello */}
            <div>{loggedIn ? <Hello name={username} /> : 'Please log in'}</div>

            {!loggedIn && loginCount < 5 &&

                <form className={hideForm} onSubmit={handleLogin}>
                    <div className="formRow">
                        <label htmlFor="username">Username: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input disabled={disable} id="username" value={username} name="username" onChange={handleInputChange} />
                    </div>
                    <div className="formRow">
                        <label htmlFor="username">Email: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input disabled={disable} id="email" value={email} name="email" onChange={handleInputChange} />
                    </div>

                    {/* add another form field for email address */}

                    <div className="formRow">
                        <label htmlFor="password">Password: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input disabled={disable} type="password" id="password" name="password" value={password} onChange={handleInputChange} />
                    </div>

                    <button disabled={disable}>Login</button>

                </form>
            }
            <p className='login-fail'>{loginError}</p>
        </div>
    );

}

export default LoginComponent;

//create a hooks based functional component version
//display a useful error message if the login was unsuccessful
//add a counter to record the number of unsuccessful login attempts - hide the form if more than 5