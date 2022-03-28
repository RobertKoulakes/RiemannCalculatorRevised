import { useState, useEffect } from 'react';

const ConfirmationField = (props) => {
  return(
    <div>
  <h3>Equation entered: {props.userText}</h3>
  </div>
  );
};

export default ConfirmationField;