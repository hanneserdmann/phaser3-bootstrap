# Phaser 3 Bootstrap
Phaser 3 bootstrap project using:
* [Phaser 3 Game Engine](https://phaser.io)
* Typescript
* Webpack & Webpack Dev Server

Example game scene taken from [Getting Started with Phaser 3](https://phaser.io/tutorials/getting-started-phaser3).

## Setup
You will need an installation of [NodeJS](https://nodejs.org/en/) including NPM. Also install Yarn as an NPM package 
if not already available `npm install -g yarn`. Then download the necessary packages using `yarn install` in the root
directory.

## Available commands

### `yarn run build`
Builds a dev version of the game using webpack into the dist/ folder.

### `yarn run watch`
Using the Webpack-Dev-Server this observed the files in src/, builds a new dev version (like the command before)
and starts a local web server to serve the bundled js file and a simple index.html to mount it.

### `yarn run clean:dist`
Deletes the dist/ folder.

### `yarn run clean:full`
Deletes the dist/ folder and all local NPM packages.