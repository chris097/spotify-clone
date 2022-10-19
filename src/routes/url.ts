type Private = {
    AUTH_LOGIN?: string
    AUTH_OTP?: string
    AUTH_SIGNUP?: string
    AUTH_REGISTER?: string
}

type Public = {
    AUTH_NOT_FOUND?: string
    PUBLIC_DASHBOARD?: string
    PUBLIC_PARTY?: string
    PUBLIC_CREATE_PARTY?: string
};

export const PRIVATE_ROUTE:Private = {
    AUTH_LOGIN: '/spotify/login',
    AUTH_OTP: '/admin/validate-otp',
    AUTH_REGISTER: '/spotify/register',
};

export const PUBLIC_ROUTE: Public = {
    AUTH_NOT_FOUND: '*',
    PUBLIC_DASHBOARD: '/admin/dashboard',
    PUBLIC_PARTY: '/admin/party',
    PUBLIC_CREATE_PARTY: '/admin/create-party'
};