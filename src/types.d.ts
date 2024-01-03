export interface Weather{
  icon:string;
  main:string;
  description:string;
}

export interface DetailWeather{
  min:number;
  max:number;
}

export interface WeatherCharacteristics{
  temp:number;
  humidity:number;
  wind_speed:number
  weather:Weather[];
  dt:number;
}

export type WeatherCharacteristicsDaily={
  temp:DetailWeather;
  humidity:number;
  wind_speed:number
  weather:Weather[];
  dt:number;
}

export interface UserWeather{
  lat:number;
  lon:number;
  timezone:string;
  current:WeatherCharacteristics;
  daily:WeatherCharacteristicsDaily[];
}
