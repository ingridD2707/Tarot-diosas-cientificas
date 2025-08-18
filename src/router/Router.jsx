import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import TarotCards from "../pages/TarotCards";
import TarotDetail from "../pages/TarotDetail";
import Layout from "../layout/Layout";
import ThrowTarot from "../pages/ThrowTarot";



const routerTarot = createBrowserRouter([{
path:"/",
element: <Layout/>,
children: [
    {
        index: true,
        element:<Home/>,
    },
    {
        path: "Cartas",
        element: <TarotCards/>
    },
    {
        path: "/detalle-cartas/:id",
        element: <TarotDetail/>
    },
    {
        path:"/tirada-cartas/:id",
        element: <ThrowTarot/>
    }

]

}])
export default routerTarot;