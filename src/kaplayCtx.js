import kaplay from "kaplay";


export const k = kaplay(
    {
        width: 1920,
        height: 1080,
        //scale the canvas to respect aspect ratio
        letterbox: true,
        background: [0,0,0],
        global: false,
        //translate any touch input to clicks
        touchToMouse: true,
        buttons: {
            jump: {
                keyboard : ["space", "z"],
                mouse: "left",
            }
        },
        //enable for debug mode
        debug: false,
        debugKey: "²",
    }
);

export const heroes = ["sonic", "knuckles", "tails", "mighty", "ray", "super-sonic"];

export const itemsList = [
    // "item-blueshield",
    "item-fireshield",
    "item-invincibility"
];

export default {k, heroes, itemsList};
