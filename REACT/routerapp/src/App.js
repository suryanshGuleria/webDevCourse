import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import MainHeader from "./components/MainHeader.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Labs from "./components/Labs.js";
import Support from "./components/Support.js";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader></MainHeader>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/labs" element={<Labs></Labs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
