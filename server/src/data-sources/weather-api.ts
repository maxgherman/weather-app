import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Context, Metric } from '@common';
import { Config } from '@utils/config';

export class WeatherAPI extends RESTDataSource<Context> {
  private apiKey: string;
  private defaultMetric: Metric;
  
  constructor() {
    super();

    const openWeather = Config.value.openWeather;

    this.baseURL = openWeather.baseUrl;
    this.apiKey = openWeather.apiKey;
    this.defaultMetric = openWeather.defaultMetric;
  }

  willSendRequest(request: RequestOptions) {
    request.params.set('APPID', this.apiKey);
  }

  async getCurrentWeatherById(id: string, units?: Metric) {
    return this.get(`weather?id=${id}&units=${this.getUnits(units)}`);
  }

  async getCurrentWeatherByName(cityName: string, countryCode: string, units?: Metric) {
    return this.get(`weather?q=${cityName},${countryCode}&units=${this.getUnits(units)}`);
  }

  async getCurrentWeatherByCoordinates(lat: number, lon: number, units?: Metric) {
    return this.get(`weather?lat=${lat}&lon=${lon}&units=${this.getUnits(units)}`);
  }

  async getCurrentWeatherByIdGroup(ids: string[], units?: Metric) {
    return this.get(`group?id=${ids.join(',')}&units=${this.getUnits(units)}`);
  }

  private getUnits(value?: Metric): Metric {
    return value || this.defaultMetric
  }
}