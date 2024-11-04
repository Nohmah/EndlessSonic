import {k} from "../kaplayCtx";

/**
 * Displays a disclaimer message and a prompt to start the game.
 */
export default function disclaimer() {
  k.add([
    k.text(
      `
        Sonic is owned by SEGA.
        This is a fangame made by Nohmah using assets from Sonic Mania.
      `,
      { font: "mania", size: 32 }
    ),
  ]);

  k.add([
    k.text("Press Space/Click/Touch to Start The Game", {
      font: "mania",
      size: 64,
    }),
    k.anchor("center"),
    k.pos(k.center()),
  ]);

  k.onButtonPress("jump", () => k.go("main-menu"));
}
