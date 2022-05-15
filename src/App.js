import Loader from "components/common/loader/loader";
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes/config";
import ThemeProvider from "utils/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "store/reducer-and-action/news/newsSlice";
import FirstLoading from "components/first-loading";

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
      <Suspense fallback={<FirstLoading expanded />}>
        <Router>
          <Routes />
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
