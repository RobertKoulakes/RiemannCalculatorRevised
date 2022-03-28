import { useState, useEffect } from 'react';

const SumType = () => {
  const [LHSvalue, setLHSValue] = useState(false);
  const handleLHSChange = () => {
    setLHSValue(!LHSvalue);
  }
  const [RHSvalue, setRHSValue] = useState(false);
  const handleRHSChange = () => {
    setRHSValue(!RHSvalue);
  }
  const [MPSvalue, setMPSValue] = useState(false);
  const handleMPSChange = () => {
    setMPSValue(!MPSvalue);
  }
  return(
    <div>
      <label>
      <input type='radio' value={LHSvalue} name='sum' onChange={handleLHSChange}/> Left-Hand Sum
      </label>
      <label>
      <input type='radio' value={RHSvalue} name='sum' onChange={handleRHSChange}/> Right-Hand Sum
      </label>
      <label>
      <input type='radio' value={MPSvalue} name='sum' onChange={handleMPSChange}/> Midpoint Sum
      </label>
    </div>
  );
};

export default SumType;