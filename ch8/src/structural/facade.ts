export class Amplifier {
  on(): string {
    return 'Amplifier on.';
  }
}

export class Projector {
  on(): string {
    return 'Projector on.';
  }
}

export class Lights {
  dim(): string {
    return 'Lights dimmed.';
  }
}

export class HomeTheaterFacade {
  constructor(
    private readonly amplifier: Amplifier,
    private readonly projector: Projector,
    private readonly lights: Lights
  ) {}

  watchMovie(): string[] {
    return [this.amplifier.on(), this.projector.on(), this.lights.dim()];
  }
}

export const facadeExample = new HomeTheaterFacade(
  new Amplifier(),
  new Projector(),
  new Lights()
).watchMovie();
