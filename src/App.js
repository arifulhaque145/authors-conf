import "./App.css";
import Authors from "./Components/Authors/Authors";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Authors />
        <Cart />
      </main>
    </div>
  );
}

export default App;
