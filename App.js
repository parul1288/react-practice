import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {}, "Hello World!")

const parent = React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child1"}, 
    [React.createElement("h1", {}, "I am a h1 element"),
    React.createElement("h2", {}, "I am a h2 element")]
    )],
[React.createElement("div", {id: "child2"}, 
    [React.createElement("h1", {}, "I am a h1 element"),
    React.createElement("h2", {}, "I am a h2 element")]
)])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)