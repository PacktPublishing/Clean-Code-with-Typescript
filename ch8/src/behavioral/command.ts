export interface Command {
  execute(): string;
}

export class MusicPlayer {
  play(): string {
    return 'Music is playing.';
  }

  stop(): string {
    return 'Music has stopped.';
  }
}

export class PlayMusicCommand implements Command {
  constructor(private readonly musicPlayer: MusicPlayer) {}

  execute(): string {
    return this.musicPlayer.play();
  }
}

export class StopMusicCommand implements Command {
  constructor(private readonly musicPlayer: MusicPlayer) {}

  execute(): string {
    return this.musicPlayer.stop();
  }
}

export class SmartController {
  private command: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): string {
    if (this.command === null) {
      return 'No command configured.';
    }

    return this.command.execute();
  }
}

const musicPlayer = new MusicPlayer();
const smartController = new SmartController();
smartController.setCommand(new PlayMusicCommand(musicPlayer));
const playResult = smartController.pressButton();
smartController.setCommand(new StopMusicCommand(musicPlayer));
const stopResult = smartController.pressButton();

export const commandExample = [playResult, stopResult];
