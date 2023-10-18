import { useState } from 'react';

import { checkPassword, validateEmail } from '../utils/helpers';

export default function ContactPage() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and =name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };
 
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="container text-center">
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        value={userName}
        name="userName"
        onChange={handleInputChange}
        type="text"
        placeholder="username"
        className='d-block m-2'
      />
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="email"
        className='d-block m-2'
      />
      <input
        value={password}
        name="message"
        onChange={handleInputChange}
        type="textare"
        placeholder="Message"
        className='d-block w-50 m-2'
      />
      <button type="submit"  className='d-block m-2'>Submit</button>
    </form>
    {errorMessage && (
      <div>
        <p className="error-text text-info">{errorMessage}</p>
      </div>
    )}
  </div>
  );
}
