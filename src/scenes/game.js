import { k } from "../kaplayCtx"
import { makeHero } from "../entities/hero";
import { makeEnemy } from "../entities/enemy";
import { makeItemBox } from "../entities/itembox";
import { makeObject } from "../entities/object";


export default function game() {
    k.setGravity(3300);
    const bgPieceWidth = 1920;
    const platformWidth = 1280;
    const citySfx = k.play("chemical-ost", { volume: 0.2, loop: true });
    let gameSpeed = 300;
    let score = 0;
    let scoreMultiplier = 0;

    /**
     * Handles the movement and destruction of an object.
    *
    * @param {Object} obj - The object to handle.
    */
    function handleObject(obj) {
        obj.onUpdate(() => {
            obj.move(-gameSpeed, 0);
        });
        obj.onExitScreen(() => {
            if (obj.pos.x < 0) k.destroy(obj);
        });
    };

    /**
     * Handles the movement and destruction of an enemy.
    *
    * @param {Object} enemy - The enemy to handle.
    */
    function handleEnemy(enemy) {
        enemy.onUpdate(() => {
            if (gameSpeed < 3000) {
                enemy.move(-(gameSpeed + 300), 0);
                return;
            }

            enemy.move(-gameSpeed, 0);
        });
        enemy.onExitScreen(() => {
            if (enemy.pos.x < 0) k.destroy(enemy);
        });
    }


    const bgPieces = [
        k.add([
            k.sprite("chemical-bg"),
            k.pos(0, 0),
            k.scale(2),
            k.opacity(0.8)]),
        k.add([k.sprite("chemical-bg"),
        k.pos(bgPieceWidth * 2, 0),
        k.scale(2),
        k.opacity(0.8)]),
    ];


    const platforms = [
        k.add([
            k.sprite("platforms"),
            k.pos(0, 450),
            k.scale(4)
        ]),
        k.add([
            k.sprite("platforms"),
            k.pos(platformWidth * 4, 450),
            k.scale(4)
        ])
    ];
    
    k.add([
        k.rect(1920, 1080),
        k.opacity(0),
        k.area(),
        k.pos(0, 832),
        k.body({ isStatic: true }),
 
    ])
    k.onUpdate(() => {
        if (hero.isGrounded()) scoreMultiplier = 0;
        if (bgPieces[1].pos.x < 0) {
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
            bgPieces.push(bgPieces.shift());
        }
 
        bgPieces[0].move(-100, 0);
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);
 
        bgPieces[0].moveTo(bgPieces[0].pos.x, -hero.pos.y / 10 - 50);
        bgPieces[1].moveTo(bgPieces[1].pos.x, -hero.pos.y / 10 - 50);
 
 
        if (platforms[1].pos.x < 0) {
            platforms[0].move(bgPieces[1].pos.x + platformWidth * 4, 0);
            platforms.push(platforms.shift());
        }
 
        platforms[0].move(-gameSpeed, 0);
        platforms[1].moveTo(platforms[0].pos.x + platformWidth * 4, 450);
 
    })

    k.loop(1, () => {
        gameSpeed += 50;
      });
 
 
    
    const scoreText = k.add([
        k.text("SCORE : 0", { font: "mania", size: 72 }),
        k.pos(20, 20),
    ])

    /**
     * Spawns the hero and sets up its behavior.
    */
    const hero = makeHero(k.getData("hero"), k.vec2(200, 745));
    hero.setControls();
    hero.setEvents();
    hero.onCollide("enemy", (enemy) => {
        if (!hero.isGrounded() && enemy.enemyId === "motobug") {
            k.play("hyper-ring", { volume: 0.3 });
            k.destroy(enemy);
            hero.play("jump");
            hero.jump();
            scoreMultiplier += 1;
            score += 10 * scoreMultiplier;
            scoreText.text = `SCORE : ${score}`;
            if (scoreMultiplier === 1) hero.ringCollectUI.text = "+10";
            if (scoreMultiplier > 1) hero.ringCollectUI.text = `x${scoreMultiplier}`;
            k.wait(1, () => {
                hero.ringCollectUI.text = "";
            })
            return;
        } else if (hero.hasPowerUp) {
            k.play("destroy");
            k.destroy(enemy);
            if (!(hero.powerUp == "invincibility")) {
                score++;
                scoreText.text = `SCORE : ${score}`;
                hero.ringCollectUI.text = "+1";
                k.wait(1, () => {
                    hero.ringCollectUI.text = "";
                });
                hero.hasPowerUp = false;
                hero.powerUp = null;
            }
        } else {
            k.play("hurt", { volume: 0.3 }),
                k.setData("current-score", score);
            k.go("gameover", citySfx);
        }
    }),
        hero.onCollide("ring", (ring) => {
            k.play("ring", { volume: 0.3 });
            k.destroy(ring);
            score++;
            scoreText.text = `SCORE : ${score}`;
            hero.ringCollectUI.text = "+1";
            k.wait(1, () => {
                hero.ringCollectUI.text = "";
            });
        }),
        hero.onCollide("hyper-ring", (hyperRing) => {
            k.play("ring", { volume: 0.3 });
            k.destroy(hyperRing);
            score += 5;
            scoreText.text = `SCORE : ${score}`;
            hero.ringCollectUI.text = "+5";
            k.wait(1, () => {
                hero.ringCollectUI.text = "";
            })
        }),
        hero.onCollide("item-box", (itemBox) => {
            k.play("ring", { volume: 0.3 });
            itemBox.use(k.sprite("item-box-destroyed"));
            itemBox.pos = k.vec2(itemBox.pos.x, 800);
            spawnPowerUp(itemBox.item, hero.pos);
            hero.hasPowerUp = true;
            hero.powerUp = itemBox.item;
        });


    /**
     * Spawns a Motobug enemy and sets up its behavior.
    */
    const spawnEnemy = () => {
        if (k.chance(0.1))
        {
            const enemy = makeEnemy("jugglesaw", 3, k.vec2(1950, 740));
            handleEnemy(enemy);
        }
        else if (k.chance(0.3)){
            const enemy = makeEnemy("batbrain", 3, k.vec2(1950, 550));
            handleEnemy(enemy);
        }
        else {
            const enemy = makeEnemy("motobug", 4, k.vec2(1950, 773));
            handleEnemy(enemy);
        }

        const waitTime = k.rand(0.5, 4);
        k.wait(waitTime, spawnEnemy);
    };
    spawnEnemy();

    /**
     * Spawns a Jugglesaw enemy and sets up its behavior.
    */
    // const spawnJugglesaw = () => {
    //     const jugglesaw = makeEnemy("jugglesaw", 3, k.vec2(1950, 740));
    //     handleEnemy(jugglesaw);

    //     const waitTime = k.rand(3, 5.5);
    //     k.wait(waitTime, spawnJugglesaw);
    // };
    // k.wait(4, () => {
    //     spawnJugglesaw();
    // });



    /**
     * Spawns a ring object and sets up its behavior.
    */
    const spawnRing = () => {
        const ring = makeObject("ring", "spin", k.vec2(1950, 745));
        handleObject(ring);

        const waitTime = k.rand(0.5, 2);
        k.wait(waitTime, spawnRing);
    };
    spawnRing();

    /**
     * Spawns a Hyper Ring object and sets up its behavior.
    */
    const spawnHyperRing = () => {
        const hyperRing = makeObject("hyper-ring", "spin", k.vec2(1950, 745));
        handleObject(hyperRing);

        const waitTime = k.rand(3, 5);
        k.wait(waitTime, spawnHyperRing);
    };
    k.wait(1, () => {
        spawnHyperRing();
    });

    /**
     * Spawns an Item Box object and sets up its behavior.
    */
    const spawnItemBox = () => {
        const itemBox = makeItemBox(Math.floor(Math.random() * 2), k.vec2(1950, 770));
        handleObject(itemBox);

        const waitTime = k.rand(15, 20);
        k.wait(waitTime, spawnItemBox);
    };
    k.wait(10, () => {
        spawnItemBox();
    });

    /**
     * Spawns a Power-up on hero position and sets up its behavior.
    */
    const spawnPowerUp = (item, pos) => {

        const powerUp = makeObject(item, "active", pos);
        powerUp.onUpdate(() => {
            powerUp.pos = k.vec2(hero.pos.x, hero.pos.y + 20);
            if (!hero.hasPowerUp) k.destroy(powerUp);
        });
        k.wait(10, () => {
            k.destroy(powerUp);
            hero.hasPowerUp = false;
        });
    };
    

}
