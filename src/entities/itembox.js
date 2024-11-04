import {k, itemsList} from '../kaplayCtx';

/**
 * Creates an item box entity with the specified ID and position.
 *
 * @param {string} id - The ID of the item to be placed in the box.
 * @param {Object} pos - The initial position of the item box.
 * @returns {Object} The created item box entity.
 */
export function makeItemBox(id, pos) {
    return k.add([
        k.sprite(itemsList[id]),
        k.area(),
        k.scale(4),
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        "item-box",
        {
            item: itemsList[id].split("-")[1], // Extract and store the item type from the ID
        }
    ]);
}
