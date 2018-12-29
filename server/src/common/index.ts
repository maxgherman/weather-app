import { DataSources } from '@data-sources';

export type Context = {
    dataSources: DataSources
}

export type Metric =
    'Standard'
  | 'metric'
  | 'imperial'

