# Endless Sonic 🔵🦔💨

Endless Sonic is an infinite platformer game inspired by Sonic. The player controls Sonic and must avoid ennemies while collecting rings to make the best score.

## Project Structure
```
endles_sonic
├───public
│   │   vite.svg
│   │
│   ├───fonts
│   │       mania.ttf
│   │
│   ├───graphics
│   │       chemical-bg.png
│   │       motobug.png
│   │       platforms.png
│   │       ring.png
│   │       sonic.png
│   │
│   └───sounds
│           chemical-ost.mp3
│           city.mp3
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
    │       motobug.js
    │       ring.js
    │       sonic.js
    │
    └───scenes
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

## Author 👥

[Nohmah](https://github.com/Nohmah)

## License ⚖️

This project is licensed under the MIT licence. See the LICENSE file for details.
