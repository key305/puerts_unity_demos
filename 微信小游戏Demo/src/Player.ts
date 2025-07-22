 engine from 'engine';

export default class Player {
  private sprite: engine.Sprite;
  private velocityY: number = 0;
  private readonly gravity: number = 9.8;
  private readonly jumpForce: number = 5;

  constructor() {
    this.sprite = new engine.Sprite();
    this.sprite.image = 'assets/player.png';
    this.sprite.width = 50;
    this.sprite.height = 50;
    engine.game.currentScene.addChild(this.sprite);
  }

  public jump() {
    this.velocityY = -this.jumpForce;
  }

  public update(dt: number) {
    this.velocityY += this.gravity * dt;
    this.sprite.y += this.velocityY * 60 * dt;
    
    if (this.sprite.y > 500) {
      this.sprite.y = 500;
      this.velocityY = 0;
    }
  }
}
