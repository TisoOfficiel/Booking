import {
  BrowserRouter,Routes,Route,
} from "react-router-dom"
import './App.css';

import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotel/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
