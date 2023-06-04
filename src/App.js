import { useEffect } from "react";
import axios from "axios";

function App() {
  const get = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `https://hieu-shop-backend.onrender.com/auth/login`,
      { email: "admin@gmail.com", password: "hieu1234" },
      config
    );
    console.log(data);
  };

  useEffect(() => {
    get();
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
