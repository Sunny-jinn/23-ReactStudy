import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/header.css";
import "./assets/css/home.css";
import "./assets/css/navigation.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Out from "./pages/Out";
import DataDetail from "./pages/DataDetail";
import HomeTwo from "./pages/HomeTwo";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeTwo />} />
        <Route path="/:title" element={<Out />} />
        <Route path="/data/:id" element={<DataDetail />} />
      </Routes>
    </div>
  );
}

export default App;
