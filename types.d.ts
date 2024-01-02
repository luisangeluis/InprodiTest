export interface Weather{
  icon:string;
  main:string;
  description:string;
}
export interface WeatherCharacteristics{
  temp:number;
  humidity:number;
  wind_speed:number
  weather:Weather[];
}

export interface UserWeather{
  lat:number;
  lon:number;
  timezone:string;
  current:WeatherCharacteristics;
}
