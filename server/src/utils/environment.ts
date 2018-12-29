import { Metric } from '@common';

export type Environment =
    'Development'   |
    'Production';

export type OpenWeatherConfig = {
    apiKey: string,
    baseUrl: string,
    defaultMetric: Metric
}

export type ApolloServerConfig = {
    port: string
}

export type EnvConfig = {
    openWeather: OpenWeatherConfig,
    apolloServer: ApolloServerConfig,
    environment: Environment
}

enum Keys { 
    'OW_API_KEY' = 'OW_API_KEY',
    'OW_BASE_URL' = 'OW_BASE_URL',
    'OW_DEFAULT_METRIC' = 'OW_DEFAULT_METRIC',
    'AS_PORT' = 'AS_PORT'
};

type SetUp = {
    [K in keyof EnvConfig]: (() => EnvConfig[K]);
};

const setUp: SetUp = {
    openWeather : () => ({
        apiKey: process.env[Keys.OW_API_KEY] as string,
        baseUrl: process.env[Keys.OW_BASE_URL] as string,
        defaultMetric: process.env[Keys.OW_DEFAULT_METRIC] as Metric
    }),
   
    apolloServer: () => ({
        port: process.env[Keys.AS_PORT] as string,
    }),
   
    environment: () => process.env.NODE_ENV as Environment   
};

export const readEnvironment = (): Readonly<EnvConfig> => {
    require('dotenv').config();

    const missingKeys = Object.keys(Keys).filter((item) => {
        return process.env[item] === null ||
            process.env[item] === undefined ||
            process.env[item] === '';
    });

    if(missingKeys.length > 0) {
        throw new Error(`Missing environment keys: ${missingKeys.join(',')}`);
    }

    const result = Object.keys(setUp).reduce((acc, curr) => {
        const key = curr as keyof typeof setUp;
        acc[key] = setUp[key]();

        return acc;

    }, {} as EnvConfig);
    
    return Object.freeze(result);
}