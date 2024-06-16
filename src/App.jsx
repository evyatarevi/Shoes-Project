import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ProductsContextProvider } from "./context/ProductsContext";

import "./App.css";

function App() {
  return (
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  );
}

export default App;
