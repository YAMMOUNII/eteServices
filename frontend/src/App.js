import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, WelcomePage, NotFound, Product } from "./pages";
import "./utils/Style/common.scss"
import RouteGuard from "./utils/RouteGuard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route path="product" element={<RouteGuard children={<Layout />} />}>
          <Route index element={<Product />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
