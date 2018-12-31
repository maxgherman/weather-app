import { gql } from 'apollo-server';

export const definitions = gql`
    type SixteenDayWeatherItem {
        dt: UnixDate!,
        weather: Weather!,
        temp: SixteenDayWeatherItemTemperature,
        pressure: Float,
        humidity: Float
    }

    type SixteenDayWeatherItemTemperature {
        day: Float,
        min: Float,
        max: Float,
        night: Float,
        eve: Float,
        morn: Float
    }

    type SixteenDayWeather {
        cnt: Int!
        city: City!
        list: [SixteenDayWeatherItem!]
    }    
`;