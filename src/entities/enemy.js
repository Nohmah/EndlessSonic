import {k} from '../kaplayCtx';

/**
 * Creates an enemy entity with the specified sprite, scale, and position.
 *
 * @param {string} sprite - The name of the sprite to use for the enemy.
 * @param {number} scale - The scale factor to apply to the enemy sprite.
 * @param {Object} pos - The initial position of the enemy.
 * @returns {Object} The created enemy entity.
 */
export function makeEnemy(sprite, scale, pos) {
  return k.add([
    k.sprite(sprite, { anim: "run" }),
    k.area({ shape: new k.Rect(k.vec2(-5, 0), 32, 32) }),
    k.scale(scale),
    k.anchor("center"),
    k.pos(pos),
    k.offscreen(),
    "enemy",
    {
      enemyId : sprite
    }
  ]);
}
