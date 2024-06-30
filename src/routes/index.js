import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ExplorePage from "../pages/ExplorePage";
import DetailPage from "../pages/DetailPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "signup",
                element: <Signup/>
            },
            {
                path: ":explore",
                element: <ExplorePage/>
            },
            {
                path: ":explore/:id",
                element: <DetailPage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            }
        ]
    }
])

export default router;