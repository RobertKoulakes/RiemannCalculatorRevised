import { useState, useEffect } from 'react';
import ConfirmationField from './ConfirmationField.js';

const SearchField = () => {
  const [userText, updateUserText] = useState('');

  return(
    <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log(`You submitted ${userText}`)}}>
      <label>
        Input your equation here:
        <input type='text' name='equation' onChange={(e) => updateUserText(e.target.value)}/>
      </label>
      <input type='submit' name='submit' />
    </form>
    <ConfirmationField userText={userText}/>
    </div>
  );
};

export default SearchField;