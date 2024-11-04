import {k, heroes} from './kaplayCtx'
import mainMenu from "./scenes/mainMenu";
import game from "./scenes/game";
import gameover from './scenes/gameover';
import disclaimer from './scenes/disclaimer';

//* Loading Assets *//

/* Level */
k.loadSprite("chemical-bg", "graphics/levels/chemical-bg.png");
k.loadSprite("platforms", "graphics/levels/platforms.png");

/* Characters */
k.loadSprite("sonic", "graphics/heroes/sonic.png", {
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: { from: 0, to: 7, loop: true, speed: 30 },
        jump: { from: 8, to: 15, loop: true, speed: 100 }
    }
});
k.loadSprite("knuckles", "graphics/heroes/knuckles.png", {
    sliceX: 22,
    anims: {
        run: { from: 0, to: 7, loop: true, speed: 30 },
        jump: { from: 8, to: 21, loop: true, speed: 100 }
    }
});
k.loadSprite("tails", "graphics/heroes/tails.png", {
    sliceX: 14,
    anims: {
        run: { from: 0, to: 7, loop: true, speed: 30 },
        jump: { from: 8, to: 13, loop: true, speed: 100 }
    }
});
k.loadSprite("mighty", "graphics/heroes/mighty.png", {
    sliceX: 24,
    anims: {
        run: { from: 0, to: 7, loop: true, speed: 30 },
        jump: { from: 8, to: 23, loop: true, speed: 100 }
    }
});
k.loadSprite("ray", "graphics/heroes/ray.png", {
    sliceX: 24,
    anims: {
        run: { from: 0, to: 7, loop: true, speed: 30 },
        jump: { from: 8, to: 23, loop: true, speed: 100 }
    }
});
k.loadSprite("super-sonic", "graphics/heroes/super-sonic.png", {
    sliceX: 20,
    anims: {
        run: {from: 0, to: 3, loop: true, speed: 30},
        jump: {from: 4, to: 19, loop: true, speed: 100},
    }
})

 /* Collectables */
k.loadSprite("ring", "graphics/objects/ring.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
        spin: { from: 0, to: 15, loop: true, speed: 30 },
    }
});
k.loadSprite("hyper-ring", "graphics/objects/hyper-ring.png", {
    sliceX : 16,
    sliceY: 1,
    anims: {
        spin: { from: 0, to: 15, loop: true, speed: 30 },
    }
});
/* Box Items */
k.loadSprite("item-blueshield", "graphics/objects/item-blueshield.png");
k.loadSprite("item-fireshield", "graphics/objects/item-fireshield.png");
k.loadSprite("item-invincibility", "graphics/objects/item-invincibility.png");
k.loadSprite("item-box-destroyed", "graphics/objects/item-box-destroyed.png");
k.loadSprite("item-box-explosion", "graphics/objects/item-box-explosion.png", {
    sliceX: 14,
    anims: {
        active: {from: 0, to: 13, speed: 30}
    }
});
 /* Powers Up */
 k.loadSprite("blueshield", "graphics/objects/blueshield.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
        active: { from: 0, to: 7, loop: true, speed:30},
    }
 });    
 k.loadSprite("invincibility", "graphics/objects/invincibility.png", {
    sliceX: 20,
    sliceY: 1,
    anims: {
        active: { from: 0, to: 19, loop: true, speed:30},
    }
 });
 k.loadSprite("fireshield", "graphics/objects/fireshield.png", {
    sliceX: 14,
    sliceY: 3,
    anims: {
        active: { from: 0, to: 37, loop: true, speed:30},
    }
 }); 

/* Ennemies */
k.loadSprite("motobug", "graphics/enemies/motobug.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
        run: { from: 0, to: 4, loop: true, speed: 8 },
    },
});

k.loadSprite("jugglesaw", "graphics/enemies/jugglesaw.png", {
    sliceX: 12,
    sliceY:1,
    anims: {
        run: { from: 0, to: 11, loop: true, speed: 8},
    }
});
k.loadFont("mania", "fonts/mania.ttf");
k.loadSound("chemical-ost", "sounds/chemical-ost.mp3");
k.loadSound("destroy", "sounds/Destroy.wav");
k.loadSound("hurt", "sounds/Hurt.wav");
k.loadSound("hyper-ring", "sounds/HyperRing.wav");
k.loadSound("jump", "sounds/Jump.wav");
k.loadSound("ring", "sounds/Ring.wav");

k.scene("disclaimer", disclaimer);

k.scene("main-menu", mainMenu);

k.scene("game", game);

k.scene("gameover", gameover);

k.go("disclaimer");

