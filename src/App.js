
import './App.css';
import MyComponent from './components/MyComponent';
import PropDisplayer from './components/PropsDisplayer';
import Comment from './components/Comment';
import GreetingComponent from './components/GreetingComponent';
import Example from './components/ExampleComponent';
import Weather from './components/Weather';
import HookExample from './components/HookExample';
import HookWeather from './components/HookWeather';
import ClockDisplay from './components/Clock';
import HookClockDisplay from './components/HookClock';
import GreetingHook from './components/GreetingHook';
// import Login from './components/Login';
// import { HelloClass, Hello } from './components/Hello';
import LoginComponent from './components/HookLogin';
import Reservation from './components/Reservation';
import StudentList from './components/StudentList';


function userName(user) {
  return user.firstName + ' ' + user.lastName
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Dave',
    avatarUrl: './logo192.png',
  },
};

const myNames = { firstName: "David", lastName: "Palmer" }

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className='componentBox'><h2 >{userName(myNames)}</h2></div>
      <MyComponent />
      <PropDisplayer name="Beer" location="In my tummy" />
      <Comment user={comment.author} date={comment.date} text={comment.text} />
      <GreetingComponent name="David!" />
      <Example />
      <Weather />
      <HookExample />
      <HookWeather />
      <ClockDisplay />
      <HookClockDisplay />
      <GreetingHook name="David!" />
      <LoginComponent />
      <Reservation />
      <StudentList />



    </div>
  );
}

export default App;
