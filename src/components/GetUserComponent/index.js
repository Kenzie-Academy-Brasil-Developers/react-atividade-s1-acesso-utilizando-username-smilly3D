import { useState } from "react";
import "./style.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = (userInput) => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <>
      <form>
        <input
          placeholder="NOME"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
      </form>
      <button onClick={() => HandleLogin(userInput)}>
        <span>Acessar com o nome</span>
      </button>
    </>
  );
};

export default GetUserComponent;
