import engine from 'engine';
import GameManager from './GameManager';

class Main {
  private static _instance: Main;
  private gameManager: GameManager;

  public static get Instance() {
    return this._instance || (this._instance = new Main());
  }

  constructor() {
    engine.game.onStart = this.onStart.bind(this);
  }

  private onStart() {
    this.gameManager = new GameManager();
    engine.game.customUpdate = this.update.bind(this);
  }

  private update(dt: number) {
    this.gameManager.update(dt);
  }
}

Main.Instance;
