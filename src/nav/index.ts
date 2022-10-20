import Constant from "../constants";
import HomeIcon from "../public/svg/HomeIcon";

import { PUBLIC_ROUTE } from "../routes/url";


const navs = [
    {
        id: 1,
        name: Constant.HOME,
        link: PUBLIC_ROUTE.SPOTIFY_DASHBOARD_PAGE,
        icon:<() => JSX.Element> HomeIcon,
        active: (id:number) => id,
    },
    {
        id: 2,
        name: Constant.SEARCH,
        link: PUBLIC_ROUTE.SPOTIFY_SEARCH_PAGE,
        icon: HomeIcon,
        active: (id:number) => id,
    },
    {
        id: 3,
        name: Constant.LIBRARY,
        link: PUBLIC_ROUTE.SPOTIFY_LIBRARY_PAGE,
        icon: HomeIcon,
        active: (id:number) => id,
    },
];

export default navs;