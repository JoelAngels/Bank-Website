import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
// react is uni-direction(0ne direction) and angular is multi directional
