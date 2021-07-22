import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./styles";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/express-backend");
      const body = await response.json();

      if (!response.ok) {
        console.log(body.message);
      }

      setData(body.express);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <p>Victoria Rushton</p>
        <form action="/create-checkout-session" method="POST">
          <button type="submit">Checkout</button>
        </form>
      </header>
    </div>
  );
};

export default App;
