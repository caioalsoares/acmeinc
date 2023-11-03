import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./globalstyle.ts";
import Products from "./components/Products/index.tsx";
import ProductDetails from "./components/ProductDetail/index.tsx";
import Login from "./components/login/index.tsx";
import Result from "./components/Result/index.tsx";

const router = createBrowserRouter([
  {
    path: "/acmeinc",
    element: (
      <Suspense fallback={<>carregando</>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/acmeinc",
        element: <Products />,
      },
      {
        path: "/acmeinc/produto/:id",
        element: <ProductDetails />,
      },
      {
        path: "/acmeinc/favorites",
        element: <Products type="favorite" />,
      },
      {
        path: "/acmeinc/search/:searchParam",
        element: <Products type="search" />,
      },
      {
        path: "/acmeinc/login",
        element: <Login />,
      },
      {
        path: "/acmeinc/result",
        element: <Result />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>,
);
