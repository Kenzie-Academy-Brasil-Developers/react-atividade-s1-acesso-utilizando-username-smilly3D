import "./App.css";
import { useState } from "react";

import "./style/style.css";
import WelcomePage from "./components/WelcomePage";
import GetUserComponent from "./components/GetUserComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="Box">
          <span className="elements">
            {isLoggedIn ? (
              <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <GetUserComponent
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
