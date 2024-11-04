import { k } from "../kaplayCtx";

/**
 * Creates an object entity with the specified sprite, animation, and position.
 *
 * @param {string} sprite - The name of the sprite to use for the object.
 * @param {string} anim - The animation to apply to the sprite.
 * @param {Object} pos - The initial position of the object.
 * @returns {Object} The created object entity.
 */
export function makeObject(sprite, anim, pos){
    return k.add([
        k.sprite(sprite, {anim : anim}),
        k.scale(4),
        k.area(),
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        `${sprite}`
    ])
}
