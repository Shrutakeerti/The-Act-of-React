import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import "./css/App.css";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
