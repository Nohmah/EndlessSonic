# Endless Sonic 🔵🦔💨

Endless Sonic is an infinite platformer game inspired by Sonic Mania. The player can control Sonic or his friends and must avoid ennemies while collecting rings to make the best score. Some power-up can appears to help the player going further in his run. 

## Project Structure 📋
```
endless_sonic
├───public
│   │   logo.png
│   │
│   ├───fonts
│   │       mania.ttf
│   │
│   ├───graphics
│   │   ├───enemies
│   │   │       jugglesaw.png
│   │   │       motobug.png
│   │   │
│   │   ├───heroes
│   │   │       knuckles.png
│   │   │       mighty.png
│   │   │       ray.png
│   │   │       sonic.png
│   │   │       super-sonic.png
│   │   │       tails.png
│   │   │
│   │   ├───levels
│   │   │       chemical-bg.png
│   │   │       platforms.png
│   │   │
│   │   └───objects
│   │           blueshield.png
│   │           fireshield.png
│   │           hyper-ring.png
│   │           invincibility.png
│   │           item-blueshield.png
│   │           item-box-destroyed.png
│   │           item-box-explosion.png
│   │           item-box.png
│   │           item-fireshield.png
│   │           item-invincibility.png
│   │           ring.png
│   │
│   └───sounds
│           chemical-ost.mp3
│           Destroy.wav
│           Hurt.wav
│           HyperRing.wav
│           Jump.wav
│           Ring.wav
│
└───src
    │   kaplayCtx.js
    │   main.js
    │
    ├───entities
    │       enemy.js
    │       hero.js
    │       itembox.js
    │       object.js
    │
    └───scenes
            disclaimer.js
            game.js
            gameover.js
            mainMenu.js
```

## Prerequisites ❗

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Installation 📥

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/endless-sonic.git
    ```

2. Navigate to the project directory:

    ```sh
    cd endless-sonic
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Running the Project 🚀

To start the project in development mode, use the following command:

```sh
npm run dev
```
## Build the Project 🛠️

To create an optimized production build, use the following command:
```
npm run build
```

The build files will be generated in the dist directory.


## Acknowledgements 🙏
Special thanks to JSLegend for creating the tutorial that inspired this project. Check out his [Github](https://github.com/JSLegendDev/sonic-runner/commits?author=JSLegendDev) for more.

## License ⚖️

This project is licensed under the MIT licence. See the LICENSE file for details.
