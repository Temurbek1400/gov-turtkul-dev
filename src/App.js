import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes/config";
import "./App.css";

function App() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <Routes />
      </Router>
    </Suspense>
  );
}

export default App;
