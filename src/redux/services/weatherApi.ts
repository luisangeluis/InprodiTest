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

type Params={
    lat:number,
    lon:number,
    appid:string
}


export const weatherApi=createApi({
    reducerPath:"weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5' }),
    endpoints: (builder) => ({
        getUserWeather: builder.query<UserWeather, Params>({
          query: ({lat,lon,appid}) => `/onecall?lat=${lat}&lon=${lon}&appid=${appid}`,
        }),
      }),

})

export const { useGetUserWeatherQuery } = weatherApi;