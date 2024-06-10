import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "../../router/Router.jsx";
import { MainContextProvider } from "../../components/context/MainContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContextProvider>
    <RouterProvider router={router} />
  </MainContextProvider>
);
