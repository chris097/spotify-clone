import React from "react";
import ComposeInternalLayouts from "../components/HOC/ComposeInternalLayout";
import { PUBLIC_ROUTE } from "./url";
const Dashboard = React.lazy(() => import('../pages/public/Dashboard'));
const Search = React.lazy(() => import('../pages/public/Search'));
const Library = React.lazy(() => import('../pages/public/Library'));


export const publicRoutes = [
    {
        path: PUBLIC_ROUTE.PAGE_NOT_FOUND,
        element: ComposeInternalLayouts(Dashboard)
    },
    {
        path: PUBLIC_ROUTE.SPOTIFY_DASHBOARD_PAGE,
        element: ComposeInternalLayouts(Dashboard)
    },
    {
        path: PUBLIC_ROUTE.SPOTIFY_SEARCH_PAGE,
        element: ComposeInternalLayouts(Search)
    },
    {
        path: PUBLIC_ROUTE.SPOTIFY_LIBRARY_PAGE,
        element: ComposeInternalLayouts(Library)
    },
];