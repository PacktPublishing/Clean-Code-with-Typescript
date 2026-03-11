export interface WeatherService {
  fetchTemperature(city: string): string;
}

export class WeatherAPI1 {
  getTemp(city: string): string {
    return `WeatherAPI1 temperature for ${city}: 22°C`;
  }
}

export class WeatherAPI2 {
  fetchWeather(city: string): string {
    return `WeatherAPI2 temperature for ${city}: 23°C`;
  }
}

export class WeatherAdapter1 implements WeatherService {
  constructor(private readonly api: WeatherAPI1) {}

  fetchTemperature(city: string): string {
    return this.api.getTemp(city);
  }
}

export class WeatherAdapter2 implements WeatherService {
  constructor(private readonly api: WeatherAPI2) {}

  fetchTemperature(city: string): string {
    return this.api.fetchWeather(city);
  }
}

export const weatherAdapterExample = [
  new WeatherAdapter1(new WeatherAPI1()).fetchTemperature('Amsterdam'),
  new WeatherAdapter2(new WeatherAPI2()).fetchTemperature('Amsterdam')
];
