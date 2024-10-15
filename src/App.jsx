import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Navbar from "./pages/navBar";
import LoginSignUp from "./pages/LoginSignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Canvas />
                  <Customizer />
                </>
              }
            />
            <Route path="/LoginSignUp" element={<LoginSignUp />} />
          </Routes>{" "}
        </div>{" "}
        {/* <Canvas /> */}
      </Router>
    </main>
  );
}
//     <main className="app transition-all ease-in">
//

//       <LoginSignUp />
//       <Home />
//       <Canvas />
//       <Customizer />
//     </main>
//   );
// }

export default App;
