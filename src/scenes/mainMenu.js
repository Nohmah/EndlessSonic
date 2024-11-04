import {k, heroes} from '../kaplayCtx';
import { makeHero } from "../entities/hero";

export default function mainMenu() {

  //Heroes Index
  let heroesIndex = 0;

  if (!k.getData("best-score")) k.setData("best-score", 0);
  k.onButtonPress("jump", () => k.go("game"));

  const bgPieceWidth = 1920;
  const bgPieces = [
    k.add([k.sprite("chemical-bg"), k.pos(0, 0), k.scale(2), k.opacity(0.8)]),
    k.add([
      k.sprite("chemical-bg"),
      k.pos(1920, 0),
      k.scale(2),
      k.opacity(0.8),
    ]),
  ];

  const platforms = [
    k.add([k.sprite("platforms"), k.pos(0, 450), k.scale(4)]),
    k.add([k.sprite("platforms"), k.pos(384, 450), k.scale(4)]),
  ];

  k.add([
    k.text("ENDLESS SONIC", { font: "mania", size: 96 }),
    k.anchor("center"),
    k.pos(k.center().x, 200),
  ]);

  k.add([
    k.text("Press Space/Click to Play", { font: "mania", size: 32 }),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y - 200),
  ]);

  k.add([
    k.text("Press Right/Left to change character", { font: "mania", size: 28 }),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y - 250),
  ]);

  let hero = makeHero(k.getData("hero") ? k.getData("hero") : 0 , k.vec2(200, 745));

  /* Select character logic */ 
  k.onKeyPress("right", () => {
    hero.destroy();
    if (heroesIndex + 1 > heroes.length -1){
      heroesIndex = 0;
    }
    else{
      heroesIndex += 1;
    }
    hero = makeHero(heroes[heroesIndex], k.vec2(200, 745));
    k.setData("hero", heroes[heroesIndex]);
  });

  k.onKeyPress("left", () => {
    hero.destroy();
    if (heroesIndex - 1 < 0){
      heroesIndex = heroes.length -1;
    } else {
      heroesIndex -= 1;
    }
    hero = makeHero(heroes[heroesIndex], k.vec2(200, 745));
    k.setData("hero", heroes[heroesIndex]);
    //use setData for the sprite to use on the game scene.
  });
  const gameSpeed = 2000;
  k.onUpdate(() => {
    if (bgPieces[1].pos.x < 0) {
      bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
      bgPieces.push(bgPieces.shift());
    }

    bgPieces[0].move(-100, 0);
    bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);

    if (platforms[1].pos.x < 0) {
      platforms[0].moveTo(platforms[1].pos.x + platforms[1].width * 4, 450);
      platforms.push(platforms.shift());
    }

    platforms[0].move(-gameSpeed, 0);
    platforms[1].moveTo(platforms[0].pos.x + platforms[1].width * 4, 450);
  });
}
