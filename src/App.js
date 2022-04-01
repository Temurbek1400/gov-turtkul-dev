import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes/config";

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
