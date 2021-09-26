import "./App.css";
import Authors from "./Components/Authors/Authors";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Authors />
      </main>
    </div>
  );
}

export default App;
