import logo from "./logo.svg";

import "./App.css";
import CardsPokemon from "./components/CardsPokemon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Estamos de repaso del M2</p>
        <CardsPokemon />
      </header>
    </div>
  );
}

export default App;
