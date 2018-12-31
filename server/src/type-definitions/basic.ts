import { gql } from 'apollo-server';

export const definitions = gql`

  scalar JSON
  scalar UnixDate

  type City {
    id: ID!,
    name: String!,
    country: String!,
    coord: Coordinates!
  }
  
  type Weather {
    id: ID!,
    main: String!,
    description: String!,
    icon: String!
  }

  type Coordinates {
    lon: Float,
    lat: Float
  }

  type Clouds {
    all: Float
  }

  type Wind {
    speed: Float,
    deg: Float
  }

  enum Metric {
    Standard
    metric
    imperial
  }`;