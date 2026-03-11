export interface Observer {
  update(temperature: number): void;
}

export class WeatherStation {
  private readonly observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  setTemperature(temperature: number): void {
    this.observers.forEach((observer) => observer.update(temperature));
  }
}

export class TemperatureDisplay implements Observer {
  latestTemperature = 0;

  update(temperature: number): void {
    this.latestTemperature = temperature;
  }
}

export class AlertSystem implements Observer {
  alerts: string[] = [];

  update(temperature: number): void {
    if (temperature > 30) {
      this.alerts.push(`High temperature alert: ${temperature}°C`);
    }
  }
}

const weatherStation = new WeatherStation();
const temperatureDisplay = new TemperatureDisplay();
const alertSystem = new AlertSystem();

weatherStation.addObserver(temperatureDisplay);
weatherStation.addObserver(alertSystem);
weatherStation.setTemperature(35);

export const observerExample = {
  latestTemperature: temperatureDisplay.latestTemperature,
  alerts: alertSystem.alerts
};
