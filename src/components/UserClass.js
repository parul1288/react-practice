import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor")

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " component did mount")
  }

  render() {
    console.log(this.props.name + " render")
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> {
            this.setState({
                count: this.state.count + 1
            })
        }}>Increase Count</button>
        <h2>User - Class Component</h2>
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}

export default UserClass;
