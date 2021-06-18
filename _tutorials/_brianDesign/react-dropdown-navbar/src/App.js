import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
