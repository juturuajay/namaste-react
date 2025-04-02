import React from "react";
import  ReactDOM  from "react-dom/client";

const HeadingComponent = () => (
       <div id="container">
            <h6>{Title()} </h6> 
            {Title()}          
            <h1>Namaste React using Functional Component</h1>
            <HeadingComponent2 />
        </div>
);

const HeadingComponent2 = () => (
    <h1>Namaste React using F2</h1>
)

const Title = () => (
    <>
       //testing
     <h1 className="heading">Namaste React</h1>
     <HeadingComponent2 />
     <HeadingComponent2></HeadingComponent2>
     </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
