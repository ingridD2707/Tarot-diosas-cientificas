import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import TarotDetail from "../pages/TarotDetail";
import ThrowTarot from "../pages/ThrowTarot";



const RouterTarot = createBrowserRouter([{
path:"/",
element: <Layout/>,
children: [
    {
        index: true,
        element:<Home/>,
    },
   
    {
        path: "/card/:id",
        element: <TarotDetail/>
    },
    {
        path:"/throw",
        element: <ThrowTarot/>
    }

]

}])
export default RouterTarot;