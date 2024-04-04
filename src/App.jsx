import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Navbar from "./pages/navBar";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Navbar />
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
