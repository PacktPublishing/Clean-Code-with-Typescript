export interface Button {
  render(): string;
}

export interface Checkbox {
  render(): string;
}

export class LightButton implements Button {
  render(): string {
    return 'Rendering a light theme button.';
  }
}

export class LightCheckbox implements Checkbox {
  render(): string {
    return 'Rendering a light theme checkbox.';
  }
}

export class DarkButton implements Button {
  render(): string {
    return 'Rendering a dark theme button.';
  }
}

export class DarkCheckbox implements Checkbox {
  render(): string {
    return 'Rendering a dark theme checkbox.';
  }
}

export interface ThemeFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

export class LightThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new LightButton();
  }

  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}

export class DarkThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}

export function renderTheme(factory: ThemeFactory): string[] {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  return [button.render(), checkbox.render()];
}

export const abstractFactoryExample = renderTheme(new DarkThemeFactory());
