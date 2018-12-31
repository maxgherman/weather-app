import { makeExecutableSchema } from 'graphql-tools';
import GraphQLJSON from 'graphql-type-json';
import { resolvers as mainResolvers } from '@resolvers';
import { unixDateType } from './unix-date';
import { definitions as basic } from './basic';
import { definitions as currentWeather } from './current-weather';
import { definitions as fiveDayWeather } from './5-day-weather';
import { definitions as sixteenDayWeather } from './16-day-weather';
import { definitions as queries } from './queries';

export const schema = makeExecutableSchema({
  typeDefs: [
    basic,
    currentWeather,
    fiveDayWeather,
    sixteenDayWeather,
    queries
  ],
  resolvers: [{
      JSON: GraphQLJSON,
      UnixDate: unixDateType
    },
    mainResolvers
  ]
});