import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../slices/userSlice';

//Types
import {UserWeather} from "../../../types";

const baseUrl = import.meta.env.VITE_BASE_URL;
const openweatherToken = import.meta.env.VITE_OPENWEATHER_TOKEN

export const weatherApi=createApi({
    reducerPath:"weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUserWeather: builder.query<UserWeather, User | undefined >({
          // query: (user) => `/onecall?lat=${user?.lat}&lon=${user?.lon}&appid=3ee700bd71331ae8fc1b34c4ed89d489`,
          queryFn:async(user)=>{
            if(!user)
              throw new Error('User not found'); 
              
            const {lat,lon} = user;
            const response = await fetch(`${baseUrl}/onecall?lat=${lat}&lon=${lon}&appid=${openweatherToken}`);
            // console.log({response});
            if(!response.ok)
              throw new Error('La solicitud al servidor falló');
            
            const data = await response.json();
            return {data};
          }
        }),
      }),
})

export const { useGetUserWeatherQuery } = weatherApi;