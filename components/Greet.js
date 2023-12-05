import React from "react";

function Greet(props) {
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.firstname} {props.lastname}!
      </h1>
      {props.children}
    </>
  );
}

const Greet2 = ({ firstname, lastname }) => {
  return (
    <h1>
      Hello {firstname} {lastname}! Second greeting!
    </h1>
  );
};

const Greet3 = (props) => {
  const { firstname, lasntame } = props;
  return (
    <h1>
      Hello {firstname} {lasntame} ! third Greeting!
    </h1>
  );
};
export { Greet, Greet2, Greet3 };
