import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../components/pages/Error";
import Home from "../Home/Home";
import AddCoffee from "../components/pages/AddCoffee";
import About from "../components/pages/About";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import CoffeeDetails from "../components/pages/CoffeeDetails";
import UpadteCoffee from "../components/pages/UpadteCoffee";
import PrivateRouter from "../AuthContext/PrivateRouter";
import AllCoffee from "../components/pages/AllCoffee";
import User from "../components/users/User";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("https://new-coffee-shop-server.vercel.app/newCoffees"),
        Component: Home,
      },

      { path: "/addCoffee", Component: AddCoffee },
      {
        path: "/users",
        loader: () => fetch("https://new-coffee-shop-server.vercel.app/newUsers"),
        element: (
          <PrivateRouter>
            <User></User>
          </PrivateRouter>
        ),
      },
      { path: "/about", Component: About },
      {
        path: "/allCoffee",
        loader: () => fetch("https://new-coffee-shop-server.vercel.app/newCoffees"),
        element: (
          <PrivateRouter>
            <AllCoffee></AllCoffee>
          </PrivateRouter>
        ),
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`https://new-coffee-shop-server.vercel.app/newCoffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/updatedCoffee/:id",
        loader: ({ params }) =>
          fetch(`https://new-coffee-shop-server.vercel.app/newCoffees/${params.id}`),
        Component: UpadteCoffee,
      },

      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
]);
