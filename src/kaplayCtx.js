import kaplay from "kaplay";

const k = kaplay(
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
        debug: true,
        //unable at the end
        debugKey: "²",
    }
);

export default k;
