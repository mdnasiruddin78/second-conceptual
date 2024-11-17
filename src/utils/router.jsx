import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../components/Mainlayout.jsx/Mainlayout";
import Home from "../components/Home";
import About from "../components/About";
import Alltreatment from "../components/Alltreatements/Alltreatment";
import Profile from "../components/Profile/Profile";
import Myappoinment from "../components/Myappoinment/Myappoinment";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: async ()=> {
              const servicesRes  = await fetch("/service.json");
              const servicesData = await servicesRes.json()

              const feedBackRes = await fetch("/happyclients.json")
              const feedBackData = await feedBackRes.json()

              return {servicesData,feedBackData}
          },
        },
        {
            path: "/about",
            element: <About></About>,
        },
        {
            path: "/alltreatment",
            element: <Alltreatment></Alltreatment>,
            loader: () => fetch("/service.json"),
        },
        {
            path: "/myappoinment",
            element: <Myappoinment></Myappoinment>,
        },
        {
            path: "/profile",
            element: <Profile></Profile>,
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
          loader:async({params})=>{
            const res =await fetch("/service.json")
            const data = await res.json()
            const singleData = data.find(d=>d.id == params.id)
            return singleData
        }
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        }
      ],
    },
  ]);


  export default router;