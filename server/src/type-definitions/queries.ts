import { gql } from 'apollo-server';

export const definitions = gql`

# The "Query" type is the root of all GraphQL queries.
  type Query {
    currentWeatherById(id: ID!, units: Metric): CurrentWeather,
    currentWeatherByName(cityName: String!, countryCode: String!, units: Metric): CurrentWeather,
    currentWeatherByCoordinates(lat: Float!, lon: Float!, units: Metric): CurrentWeather,
    currentWeatherByZipCode(zipCode: String!, countryCode: String!, units: Metric): CurrentWeather,
    currentWeatherByIdGroup(ids: [ID!], units: Metric): CurrentWeatherGroup,

    fiveDayWeatherById(id: ID!, units: Metric): FiveDayWeather,
    fiveDayWeatherByName(cityName: String!, countryCode: String!, units: Metric): FiveDayWeather,
    fiveDayWeatherByCoordinates(lat: Float!, lon: Float!, units: Metric): FiveDayWeather,
    fiveDayWeatherByZipCode(zipCode: String!, countryCode: String!, units: Metric): FiveDayWeather

    # Paid accounts only

    # sixteenDayWeatherById(id: ID!, units: Metric): SixteenDayWeather,
    # sixteenDayWeatherByName(cityName: String!, countryCode: String!, units: Metric): SixteenDayWeather,
    # sixteenDayWeatherByCoordinates(lat: Float!, lon: Float!, units: Metric): SixteenDayWeather,
    # sixteenDayWeatherByZipCode(zipCode: String!, countryCode: String!, units: Metric): SixteenDayWeather
  }
`;