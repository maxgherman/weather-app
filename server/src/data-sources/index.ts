import { WeatherAPI } from './weather-api';

export type DataSources = {
    weatherAPI: WeatherAPI
};

export const dataSources:(() => DataSources) = () => ({
   weatherAPI: new WeatherAPI() 
});