import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => (
        <h1>This is the start of React</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h2 className="heading">Hello Parul</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render( <HeadingComponent />)