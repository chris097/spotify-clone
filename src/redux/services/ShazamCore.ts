import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// try {
//   const response = await fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '46dc162c15mshdab909459396508p146f92jsn0dfe3a12bef1',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   });

//   if (response.ok) {
//     const result = await response.json();
//     console.log(result);
//   }
// } catch (err) {
//   console.error(err);
// }


export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '46dc162c15mshdab909459396508p146f92jsn0dfe3a12bef1')

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

