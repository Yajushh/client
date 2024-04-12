import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carbon from "./pages/Carbon";
import Wildlife from "./pages/Wildlife";
import Communities from "./pages/Communities";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Team from "./pages/Team";

import About from "./pages/About";
import Resources from "./pages/Resources";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/carbon" element={<Carbon />} />
          <Route path="/wildlife" element={<Wildlife />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
