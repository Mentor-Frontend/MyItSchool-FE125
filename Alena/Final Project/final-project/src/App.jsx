import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import Success from "./components/Success/Success"

const product1 = {
  id: 1,
  title: "Масло “Для салата”",
  discroption: "Название говорит само за себя. Это идеальная заправка, которая даже скучной и привычной капусте придаст неповторимый вкус и аромат.",
  ingredients: " оливковое масло холодного отжима, розмарин, тимьян,базилик, орегано, чеснок, смесь из 5 перцев.",
  picture: <img width={48} src={require("./img/salad.png")} alt="salad" />,
  picture_hover: <img width={184} src={require("./img/salad_hover.png")} alt="salad" />,
  color: "#688800",
  color_hover: "linear-gradient(320.69deg, #536614 15.36%, #97C20B 84.86%)",
};

const product2 = {
  id: 2,
  title: "Масло “Итальянское”",
  discroption: "Добавит ноток Италии в любое ваше блюдо. Паста, ризотто, пицца, салаты - его везде можно использовать.",
  ingredients: " оливковое масло холодного отжима, чеснок, вяленые томаты, базилик, орегано, майоран, смесь перцев.",
  picture: <img width={48} src={require("./img/italian.png")} alt="salad" /> ,
  picture_hover: <img width={184} src={require("./img/italian_hover.png")} alt="salad" />,
  color: "#009246",
  color_hover: "linear-gradient(320.42deg, #076534 15.36%, #00DB69 82.23%)",
};

const product3 = {
  id: 3,
  title: "Масло “Для мяса”",
  discroption: "Идеальное решение для легкого и быстрого маринада мяса, можно добавить капельку масла и после приготовления.",
  ingredients: " оливковое масло холодного отжима, чеснок, паприку, кориандр, смесь перцев, розмарин, тимьян, перец чили.",
  picture: <img width={48} src={require("./img/meat.png")} alt="salad" />,
  picture_hover: <img width={184} src={require("./img/meat_hover.png")} alt="salad"/> ,
  color: "#D73A31",
  color_hover: "linear-gradient(321.31deg, #99160E 15.37%, #E84239 81.98%)",
};

const product4 = {
  id: 4,
  title: "Масло “Восточное”",
  discroption: "Oтлично подойдёт для блюд среднеазиатской кухни: шурпа, плов, лагман с этим маслом приобретут традиционные нотки Средней Азии.",
  ingredients: " оливковое масло холодного отжима, перец чили, зира, куркума, чеснок, смесь перцев.",
  picture: <img width={48} src={require("./img/eastern.png")} alt="salad" />,
  picture_hover: <img width={184} src={require("./img/eastern_hover.png")} alt="salad" /> ,
  color: "#E67F10",
  color_hover: "linear-gradient(324.18deg, #BA6400 14.36%, #FF9D34 85.34%)",
};

const products = [product1, product2, product3, product4];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main products={products} />} />
      <Route index path="/cart" element={<Cart products={products} />}/>
      <Route index path="/success" element={<Success />}/>
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
};

export function getCookie(name) {
  let matches = document.cookie.match(
      new RegExp(
          "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
      )
  );
  return matches ? JSON.parse(matches[1]) : undefined;
};

export let age = 10 * 24 * 60 * 60;

