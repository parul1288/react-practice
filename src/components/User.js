import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const {name, location} = props;
    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>User - Functional Component</h2>
            <h4>Name: {name}</h4>
            <h4>Location: {location}</h4>
        </div>
    )
}

export default User;