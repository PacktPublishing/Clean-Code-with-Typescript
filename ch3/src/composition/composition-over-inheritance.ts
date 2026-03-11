export class AnimalForComposition {
  breathe(): void {
    console.log("Breathing");
  }
}

export class DogForComposition extends AnimalForComposition {
  bark(): void {
    console.log("Barking");
  }
}

export class Singer {
  sing(): void {
    console.log("Singer is singing");
  }
}

export class Guitarist {
  playGuitar(): void {
    console.log("Guitarist is playing guitar");
  }
}

export class Drummer {
  playDrums(): void {
    console.log("Drummer is playing drums");
  }
}

export class Band {
  singer: Singer;
  guitarist: Guitarist;
  drummer: Drummer;

  constructor() {
    this.singer = new Singer();
    this.guitarist = new Guitarist();
    this.drummer = new Drummer();
  }

  perform(): void {
    this.singer.sing();
    this.guitarist.playGuitar();
    this.drummer.playDrums();
  }
}
