import { FcServices } from "react-icons/fc";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/Home/AddService/AddService";
import Blog from "../../Pages/Home/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home/Home";
import Login from "../../Pages/Home/Home/Login/Login";
import SignUp from "../../Pages/Home/Home/SignUp/SignUp";
import MyReview from "../../Pages/Home/MyReview/MyReview";
import Services from "../../Pages/Home/Services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);
export default router;