import { gql } from 'apollo-server';

export const definitions = gql`
    type Main5Day {
        temp: Float!,
        pressure: Float!,
        humidity: Float!,
        sea_level: Float!,
        grnd_level: Float!
    }

    type FiveDayWeatherItem {
        dt: UnixDate!,
        main: Main5Day!,
        weather: [Weather!],
        clouds: Clouds,
        wind: Wind,
        rain: JSON,
        snow: JSON
    }

    type FiveDayWeather {
        cnt: Int!
        city: City!
        list: [FiveDayWeatherItem!]
    }
`;