import "./App.css";
import NavBar from "./components/header/NavBar";
import Home from "./components/Routes/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/general" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:categoryId"  element={<ItemListContainer/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
