import {k} from '../kaplayCtx';

/**
 * Creates a hero entity with the specified sprite and position.
 *
 * @param {string} sprite - The name of the sprite to use for the hero.
 * @param {Object} pos - The initial position of the hero.
 * @returns {Object} The created hero entity.
 */
export function makeHero(sprite, pos) {
  const hero = k.add([
    k.sprite(sprite, { anim: "run" }),
    k.scale(4),
    k.area(),
    k.anchor("center"),
    k.pos(pos),
    k.body({ jumpForce: 1700 }),
    {
      hasPowerUp : false, // Indicates if the hero has a power-up
      powerUp : null, // Stores the current power-up
      ringCollectUI: null, // UI element for displaying collected rings

      setControls() {
        k.onButtonPress("jump", () => {
          if (this.isGrounded()) {
            this.play("jump");
            this.jump();
            k.play("jump", { volume: 0.5 });
          }
        });
      },
      setEvents() {
        this.onGround(() => {
          this.play("run");
        });
      },
    },
  ]);

  hero.ringCollectUI = hero.add([
    k.text("", { font: "mania", size: 24 }),
    k.color(255, 255, 0),
    k.anchor("center"),
    k.pos(30, -10),
  ]);

  return hero;
}
