import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NgNhp from "./pages/ng-nhp";
import NgK from "./pages/ng-k";
import NgK1 from "./pages/ng-k1";
import NgK2 from "./pages/ng-k2";
import NgNhp1 from "./pages/ng-nhp1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ng-k-1":
        title = "";
        metaDescription = "";
        break;
      case "/ng-k-2":
        title = "";
        metaDescription = "";
        break;
      case "/ng-k-3":
        title = "";
        metaDescription = "";
        break;
      case "/ng-nhp-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<NgNhp />} />
      <Route path="/ng-k-1" element={<NgK />} />
      <Route path="/ng-k-2" element={<NgK1 />} />
      <Route path="/ng-k-3" element={<NgK2 />} />
      <Route path="/ng-nhp-1" element={<NgNhp1 />} />
    </Routes>
  );
}
export default App;
