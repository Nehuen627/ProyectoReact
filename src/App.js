import "./App.css";
import NavBar from "./components/NavBar";
import ItemListCointainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
        <ItemListCointainer greeting="Bienvenido al Kiosco Gamer"/>
      </body>
    </div>
  );
}

export default App;
