import React from "react";

const Display = ({ personData }) => {
  const personList = personData.map((person) => {
    return (
      <React.Fragment>
        <p>{person.name}</p>
        <p>{person.email}</p>
      </React.Fragment>
    );
  });
  return <>{personList}</>;
};

export default Display;
