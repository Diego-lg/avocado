import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Navbar from "./pages/navBar";
import LoginSignUp from "./pages/LoginSignUp";
function App() {
  return (
    <main className="app transition-all ease-in">
      <Navbar />
      <LoginSignUp />
      {/* <Home />
      <Canvas />
      <Customizer /> */}
    </main>
  );
}

export default App;
