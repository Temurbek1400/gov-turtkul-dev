import Loader from "components/common/loader/loader";
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes/config";
import ThemeProvider from "utils/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNews,
  setActiveFilter,
} from "store/reducer-and-action/news/newsSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { fulfilled, pending } = useSelector(
    (state) => state,
    ({ fulfilled, pending }) => ({
      fulfilled,
      pending,
    })
  );

  useEffect(() => {
    if ((!fulfilled, !pending)) {
      dispatch(fetchNews);
    }
  }, []);

  return (
    <ThemeProvider>
      <Suspense fallback={<Loader expanded />}>
        <Router>
          <Routes />
        </Router>
        <Toaster containerStyle={{ zIndex: "100000" }} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
