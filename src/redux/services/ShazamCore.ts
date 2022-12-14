import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { REACT_X_RAPIDAPI_KEY } = process.env;
console.log(REACT_X_RAPIDAPI_KEY)

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', `46dc162c15mshdab909459396508p146f92jsn0dfe3a12bef1`)

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'})
    })
});

export const {
    useGetTopChartsQuery
} = shazamCoreApi;

