import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <h1>About</h1>,
        },
        {
          path: "/activities",
          element: <h1>Activities</h1>,
        },
        {
          path: "/contact",
          element: <h1>Contact</h1>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
