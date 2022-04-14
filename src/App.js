import Loader from "components/common/loader";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes/config";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>  
        <Routes />
      </Router>
    </Suspense>
  );
}

export default App;
