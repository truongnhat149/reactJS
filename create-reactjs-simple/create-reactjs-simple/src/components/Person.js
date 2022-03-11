import React, {Component} from 'react';

// const Person = () => {
//     return <p>this is a person
//     vd: về import export 1 class thành tag
//     gọi là: function component</p>
// }

//  cách 1: dùng kế thừa lại component

// class Person extends Component {
//     render() {
//         return (
//             <p>This is {this.props.name} , I'm {this.props.age} year old</p>
//         );
//     }
// }

// cách 2:

const Person = (props) => {
    return (
        <div>
        <p>This is {props.name}. I'm {props.age} year old</p>
        <p>{props.children}</p>
        </div>
    );
}
export default Person;