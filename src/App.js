import Loader from "components/common/loader/loader";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes/config";
import ThemeProvider from "utils/theme";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader expanded />}>
        <Router>
          <Routes />
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
