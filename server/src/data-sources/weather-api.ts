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

  async currentWeatherById(id: string, units?: Metric) {
    return this.get(`weather?id=${id}&units=${this.getUnits(units)}`);
  }

  async currentWeatherByName(cityName: string, countryCode: string, units?: Metric) {
    return this.get(`weather?q=${cityName},${countryCode}&units=${this.getUnits(units)}`);
  }

  async currentWeatherByCoordinates(lat: number, lon: number, units?: Metric) {
    return this.get(`weather?lat=${lat}&lon=${lon}&units=${this.getUnits(units)}`);
  }

  async currentWeatherByZipCode(zipCode: string, countryCode: string, units?: Metric) {
    return this.get(`weather?zip=${zipCode},${countryCode}&units=${this.getUnits(units)}`);
  }

  async currentWeatherByIdGroup(ids: string[], units?: Metric) {
    return this.get(`group?id=${ids.join(',')}&units=${this.getUnits(units)}`);
  }

  async fiveDayWeatherById(id: string, units?: Metric) {
    return this.get(`forecast?id=${id}&units=${this.getUnits(units)}`);
  }

  async fiveDayWeatherByName(cityName: string, countryCode: string, units?: Metric) {
    return this.get(`forecast?q=${cityName},${countryCode}&units=${this.getUnits(units)}`);
  }

  async fiveDayWeatherByCoordinates(lat: number, lon: number, units?: Metric) {
    return this.get(`forecast?lat=${lat}&lon=${lon}&units=${this.getUnits(units)}`);
  }

  async fiveDayWeatherByZipCode(zipCode: string, countryCode: string, units?: Metric) {
    return this.get(`forecast?zip=${zipCode},${countryCode}&units=${this.getUnits(units)}`);
  }

  async sixteenDayWeatherById(id: string, units?: Metric) {
    return this.get(`forecast/daily?id=${id}&units=${this.getUnits(units)}`);
  }

  async sixteenDayWeatherByName(cityName: string, countryCode: string, units?: Metric) {
    return this.get(`forecast/daily?q=${cityName},${countryCode}&units=${this.getUnits(units)}`);
  }

  async sixteenDayWeatherByCoordinates(lat: number, lon: number, units?: Metric) {
    return this.get(`forecast/daily?lat=${lat}&lon=${lon}&units=${this.getUnits(units)}`);
  }

  async sixteenDayWeatherByZipCode(zipCode: string, countryCode: string, units?: Metric) {
    return this.get(`forecast/daily?zip=${zipCode},${countryCode}&units=${this.getUnits(units)}`);
  }

  private getUnits(value?: Metric): Metric {
    return value || this.defaultMetric
  }
}