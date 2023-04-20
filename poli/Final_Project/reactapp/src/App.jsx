import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products/productsList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductPage from "./components/Products/productPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="fullWrapper">
      <Header />
      <div className="pagesWrapper">
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/*" element={<NotFound />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
