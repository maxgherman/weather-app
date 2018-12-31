import { gql } from 'apollo-server';

export const definitions = gql`

type Main {
    temp: Float!,
    pressure: Float!,
    humidity: Float!,
}

type System {
    country: String!,
    sunrise: UnixDate!,
    sunset: UnixDate! 
}

type CurrentWeather {
    id: ID!,
    name: String!,
    coord: Coordinates!,
    dt: UnixDate!,
    weather: [Weather!],
    main: Main!,
    visibility: Float!,
    clouds: Clouds,
    wind: Wind,
    rain: JSON,
    snow: JSON,
    sys: System!
  }

  type CurrentWeatherGroup {
    cnt: Int!,
    list: [CurrentWeather!]
  }
`;