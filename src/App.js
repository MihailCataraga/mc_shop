import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Promotions from "./pages/Promotions";
import Account from "./pages/Account";
import Compare from "./pages/Compare";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import './style/index.scss'
import Apple from "./pages/Apple";
import Samsung from "./pages/Samsung";
import Gamers from "./pages/Gamers";
import Audio from "./pages/Audio";
import Iphone from "./pages/Iphone";
import Item from "./pages/Item";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/account" element={<Account />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="/apple/iphone" element={<Iphone />} />
          <Route path="/apple/iphone/:item" element={<Item />} />
          <Route path="/samsung" element={<Samsung />} />
          <Route path="/gamers" element={<Gamers />} />
          <Route path="/audio" element={<Audio />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
