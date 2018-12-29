import { gql } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import GraphQLJSON from 'graphql-type-json';
import { resolvers as mainResolvers } from '@resolvers';
import { unixDateType } from './unix-date';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefinitions = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  scalar JSON
  scalar UnixDate

  type Weather {
    id: ID!,
    main: String!,
    description: String!,
    icon: String!
  }

  type Main {
    temp: Float!,
    pressure: Float!,
    humidity: Float!,
  }

  type Coordinates {
    lon: Float,
    lat: Float
  }

  type System {
    country: String!,
    sunrise: UnixDate!,
    sunset: UnixDate! 
  }

  type Clouds {
    all: Float
  }

  type Wind {
    speed: Float,
    deg: Float
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

  enum Metric {
    Standard
    metric
    imperial
  }

  type City {
    name: String!,
    countryCore: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    currentWeatherById(id: String!, units: Metric): CurrentWeather,
    currentWeatherByName(cityName: String!, countryCode: String!, units: Metric): CurrentWeather,
    currentWeatherByCoordinates(lat: Float!, lon: Float!, units: Metric): CurrentWeather,
    currentWeatherByIdGroup(ids: [String!], units: Metric): CurrentWeatherGroup
  }

    # The "Mutation"
`;


export const schema = makeExecutableSchema({
  typeDefs: typeDefinitions,
  resolvers: [{
      JSON: GraphQLJSON,
      UnixDate: unixDateType
    },
    mainResolvers
  ]
});