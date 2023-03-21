import React from 'react';

//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const students = [
    {
        id: 1,
        name: 'Adam Sagar',
        location: 'NZ',
        gender: 'Male'
    },
    {
        id: 2,
        name: 'Alannie Decena',
        location: 'NZ',
        gender: 'Female'
    },
    {
        id: 3,
        name: 'Amber Min Hsuan Hong',
        location: 'AU',
        gender: 'Female'
    },
    {
        id: 4,
        name: 'Christopher Marsh',
        location: 'AU',
        gender: 'Male'
    },
    {
        id: 5,
        name: 'David Palmer',
        location: 'NZ',
        gender: 'Male'
    },
    {
        id: 6,
        name: 'Jason Reid',
        location: 'AU',
        gender: 'Male'
    },
    {
        id: 7,
        name: 'Luke Barker',
        location: 'NZ',
        gender: 'Male'
    },
    {
        id: 8,
        name: 'Marco Wells',
        location: 'NZ',
        gender: 'Male'
    },
    {
        id: 9,
        name: 'Preshen Govender',
        location: 'NZ',
        gender: 'Male'
    }
]

// class StudentList extends Component {

//     render() {

//         return (
//             <div className="StudentList componentBox">
//                 <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
//                 <ul className="hideBullets">
//                     {
//                         students.map((student, index) => /* in a pinch you can use the array index as the key but it's not recommended */
//                             <li key={student.id}><img src={`https://robohash.org/${student.name}?size=50x50`} alt={student.name} /> {student.name}, based in {student.location}</li>
//                         )
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

function StudentList() {
    let studentsArray = students
    studentsArray.reverse()


    //convert this to a functional component
    return (
        <div className="StudentList componentBox">
            <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
            <p>😃😃😃😃😃😃</p>
            <ul className="hideBullets">
                {
                    studentsArray.map((student, index) => /* in a pinch you can use the array index as the key but it's not recommended */
                        // < Student name={student.name + " " + index} location={student.location} key={student.id} />

                        < Student {...student} key={student.id} /> //Unpacking the student object from the map function 
                    )
                }
            </ul>
        </div>
    );

}

//move the <li> on line 66 into its own Student functional component and pass in details as props

function Student(props) {
    return (
        <li><img src={`https://robohash.org/${props.name}?size=50x50`} alt={props.name} /> {props.name}, is a {props.gender === 'Male' ? 'Man' : 'Woman'} based in {props.location}</li>
    )
}

//make sure you don't get any warnings about keys

//add a new property to each student in the list (eg. pets, fav colour, height, age) and include it in the Student component output

//add some CSS to style the students

//add a button to reverse the sort order


//add a button to reverse the sort order

//add two buttons to filter the list and show only AU students and only NZ students

export default StudentList;