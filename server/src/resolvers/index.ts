import { IResolvers, IResolverObject } from 'apollo-server';
import { Context, Metric } from '@common';

export type Resolvers = IResolvers<{}, Context>;

// Resolvers define the technique for fetching the types in the schema.
export const resolvers: Resolvers = {
  Query: {
    currentWeatherById: async (_: {},
      args: { id: string, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .getCurrentWeatherById(args.id, args.units);
    },

    currentWeatherByName: async (_: {},
      args: { cityName: string, countryCode: string, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .getCurrentWeatherByName(args.cityName, args.countryCode, args.units);
    },

    currentWeatherByCoordinates:  async (_: {},
      args: { lat: number, lon: number, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .getCurrentWeatherByCoordinates(args.lat, args.lon, args.units);
    },

    currentWeatherByIdGroup: async(_:{},
      args: { ids: string[], units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .getCurrentWeatherByIdGroup(args.ids, args.units);
    }
  } as IResolverObject<{}, Context>,
};