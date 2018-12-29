import { readEnvironment, EnvConfig } from './environment';

export type Config = EnvConfig & {
}

let config: Config;

export const Config = {
    
    get value(): Config {
        return config;
    },
    
    read() {
        config = readEnvironment();
    }
}