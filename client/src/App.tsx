import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegPage from "./pages/RegPage";
import ErrorPage from "./pages/ErrorPage";
import AuthPage from "./pages/AuthPage";
import StatementsPage from "./pages/StatementsPage";
import StatementMakingPage from "./pages/StatementMakingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/statements",
    element: <StatementsPage />,
  },
  {
    path: "/statement-making",
    element: <StatementMakingPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
