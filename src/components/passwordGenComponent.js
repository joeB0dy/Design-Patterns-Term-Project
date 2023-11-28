// implementation of component to display on react.. Sam Jose.
import React, { useState } from 'react';
import { passwordDirector, ConcreteSimple } from "./passwordBuilder"; // import classes



function PasswordGenComponent() {
    
  const [passwordResult, setPasswordResult] = useState("");
 // const [masterPassword, setMasterPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);

  const generatePassword = () => {  

   // initialize instances of classes to later pass into 
    const director = new passwordDirector();    //create new director
    const simpleBuilder = new ConcreteSimple(); //create new builder.
    director.constructPassword(simpleBuilder, passwordLength);   //pass into params length and sets items true.
    const password = simpleBuilder.generatePass();  //develop password

    setPasswordResult(password);        //pass into password result value.
    console.log(password);
  };

  return (
    <div>
      <h1>Password Generator </h1>
        <div>
        <h3>Generated Strong Password: {passwordResult}</h3>
        </div>
      <div>
        <label htmlFor="passwordLength">Password Length:</label>
        <input
          type="number"
          id="passwordLength"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
        />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      
    
      
         </div>
  );
}

export default PasswordGenComponent;
