import React from "react";
import ComposeInternalLayouts from "../components/HOC/ComposeInternalLayout";
import { PUBLIC_ROUTE } from "./url";

const Dashboard = React.lazy(() => import('../pages/public/Dashboard'));
const Library = React.lazy(() => import('../pages/public/Library'));


export const publicRoutes = [
    {
        path: PUBLIC_ROUTE.AUTH_NOT_FOUND,
        element: ComposeInternalLayouts(Dashboard)
    },
    {
        path: PUBLIC_ROUTE.PUBLIC_DASHBOARD,
        element: ComposeInternalLayouts(Dashboard)
    },
    {
        path: PUBLIC_ROUTE.PUBLIC_PARTY,
        element: ComposeInternalLayouts(Library)
    },
];