import { IResolvers, IResolverObject } from 'apollo-server';
import { Context, Metric } from '@common';

export type Resolvers = IResolvers<{}, Context>;

// Resolvers define the technique for fetching the types in the schema.
export const resolvers: Resolvers = {
  Query: {
    currentWeatherById: async (_: {},
      args: { id: string, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .currentWeatherById(args.id, args.units);
    },

    currentWeatherByName: async (_: {},
      args: { cityName: string, countryCode: string, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .currentWeatherByName(args.cityName, args.countryCode, args.units);
    },

    currentWeatherByCoordinates:  async (_: {},
      args: { lat: number, lon: number, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .currentWeatherByCoordinates(args.lat, args.lon, args.units);
    },

    currentWeatherByZipCode: async(_:{},
      args: { zipCode: string, countryCode: string, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .currentWeatherByZipCode(args.zipCode, args.countryCode, args.units);
    },

    currentWeatherByIdGroup: async(_:{},
      args: { ids: string[], units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .currentWeatherByIdGroup(args.ids, args.units);
    },

    fiveDayWeatherById: async(_:{},
      args: { id: string, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .fiveDayWeatherById(args.id, args.units);
    },

    fiveDayWeatherByName: async (_: {},
      args: { cityName: string, countryCode: string, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .fiveDayWeatherByName(args.cityName, args.countryCode, args.units);
    },

    fiveDayWeatherByCoordinates:  async (_: {},
      args: { lat: number, lon: number, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .fiveDayWeatherByCoordinates(args.lat, args.lon, args.units);
    },

    fiveDayWeatherByZipCode: async(_:{},
      args: { zipCode: string, countryCode: string, units?: Metric }, context) => {
      return context.dataSources.weatherAPI
            .fiveDayWeatherByZipCode(args.zipCode, args.countryCode, args.units);
    },

    // Paid accounts only

    // sixteenDayWeatherById: async(_:{},
    //   args: { id: string, units?: Metric }, context) => {
    //   return context.dataSources.weatherAPI
    //         .sixteenDayWeatherById(args.id, args.units);
    // },

    // sixteenDayWeatherByName: async (_: {},
    //   args: { cityName: string, countryCode: string, units?: Metric }, context) => {
    //   return context.dataSources.weatherAPI
    //         .sixteenDayWeatherByName(args.cityName, args.countryCode, args.units);
    // },

    // sixteenDayWeatherByCoordinates:  async (_: {},
    //   args: { lat: number, lon: number, units?: Metric }, context) => {
    //   return context.dataSources.weatherAPI
    //         .sixteenDayWeatherByCoordinates(args.lat, args.lon, args.units);
    // },

    // sixteenDayWeatherByZipCode: async(_:{},
    //   args: { zipCode: string, countryCode: string, units?: Metric }, context) => {
    //   return context.dataSources.weatherAPI
    //         .sixteenDayWeatherByZipCode(args.zipCode, args.countryCode, args.units);
    // }

  } as IResolverObject<{}, Context>,
};