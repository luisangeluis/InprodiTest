import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type UserWeather={
    lat:number,
    lon:number,
    city:string,
    icon:string,
    temperature:number,
    humidity:number,
    windSpeed:number,
}


export const weatherApi=createApi({
    reducerPath:"weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/3.0' }),
    endpoints: (builder) => ({
        getUserWeather: builder.query<UserWeather, string>({
          query: () => "/onecall",
        }),
      }),

})