import engine from 'engine';
import Player from './Player';

export default class GameManager {
  private player: Player;
  private score: number = 0;

  constructor() {
    this.initGame();
  }

  private initGame() {
    this.player = new Player();
    engine.inputSystem.on('touchstart', this.handleTouch.bind(this));
  }

  private handleTouch() {
    this.player.jump();
    this.score++;
    console.log(`Score: ${this.score}`);
  }

  public update(dt: number) {
    this.player.update(dt);
  }
}
