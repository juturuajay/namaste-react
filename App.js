import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'm from H1 main tag"),
    React.createElement("h2", {}, "i'm from H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'm from H1 tag"),
    React.createElement("h2", {}, "i'm from H2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
