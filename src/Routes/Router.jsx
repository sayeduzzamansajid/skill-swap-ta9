import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage404 from "../Pages/ErrorPage404";
import Home from "../Components/Home";
import AllSkills from "../Components/AllSkills";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import PrivateRoute from "../Private/PrivateRoute";
import MyProfile from "../Private/MyProfile";
import SkillDetails from "../Private/SkillDetails";
import ForgotPassword from "../Components/ForgotPassword";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage404></ErrorPage404>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/skills',
                element: <PrivateRoute>
                    <AllSkills />
                </PrivateRoute>
            },
            {
                path: '/login',
                Component: LoginPage
            },
            {
                path: '/signup',
                Component: SignUpPage
            },
            {
                path:'forgot-password',
                Component: ForgotPassword
            },
            {
                path:'/my-profile',
                element: <PrivateRoute>
                    <MyProfile/>
                </PrivateRoute>
            },
            {
                path:'/skills/:id',
                element: <PrivateRoute>
                    <SkillDetails/>
                </PrivateRoute>
            },
        ]
    }
])