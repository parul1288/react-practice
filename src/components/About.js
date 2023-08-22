import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props) {
        console.log("Parent constructor")
        super(props)
    }

    componentDidMount() {
        console.log("Parent component did Mount")
    }

    render() {
        console.log("Parent render")
        return (
            <div>
                <h1>About Us</h1>
                <h2>React Series Practice</h2>
                <hr></hr>
                <UserClass name={"First"} location={"Fremont, California - Class"}/>
            </div>
            
        )
    }
}

export default About