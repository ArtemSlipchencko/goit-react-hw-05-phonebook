import React from 'react';

const Alert = (props) => { 

  return (
    <div><h2>This contact is already exist!</h2><button onClick={props.ok}>OK</button></div>
  )
  
};

export default Alert;
