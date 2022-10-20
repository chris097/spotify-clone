type Private = {
    AUTH_LOGIN?: string
    AUTH_OTP?: string
    AUTH_SIGNUP?: string
    AUTH_REGISTER?: string
}

type Public = {
    PAGE_NOT_FOUND?: string
    SPOTIFY_HOMEPAGE?: string
    SPOTIFY_DASHBOARD_PAGE?: string
    SPOTIFY_SEARCH_PAGE?: string
    SPOTIFY_LIBRARY_PAGE?: string
};

export const PRIVATE_ROUTE:Private = {
    AUTH_LOGIN: '/spotify/login',
    AUTH_OTP: '/admin/validate-otp',
    AUTH_REGISTER: '/spotify/register',
};

export const PUBLIC_ROUTE: Public = {
    PAGE_NOT_FOUND: '*',
    SPOTIFY_HOMEPAGE: '/spotify/home',
    SPOTIFY_DASHBOARD_PAGE: '/spotify/dashboard',
    SPOTIFY_SEARCH_PAGE: '/spotify/search',
    SPOTIFY_LIBRARY_PAGE: 'spotify/library'
};