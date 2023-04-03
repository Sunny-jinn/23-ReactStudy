import "./App.css";
import "./assets/css/header.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title" element={<Out />} />
      </Routes>
    </div>
  );
}

export default App;
