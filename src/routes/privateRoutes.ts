import React from "react";
import { PRIVATE_ROUTE } from "./url";

const Login = React.lazy(() => import('../pages/auth/Login'));
const ForgotPassword = React.lazy(() => import('../pages/auth/ForgotPassword'));


export const privateRoutes = [
    {
        path: PRIVATE_ROUTE.AUTH_LOGIN,
        element: Login
    },
    {
        path: PRIVATE_ROUTE.AUTH_REGISTER,
        element: ForgotPassword
    },
];