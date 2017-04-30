# typescript-d3-playground

A basic playground for working with d3 (v4) in typescript. It allows you to quickly test your d3 code.

## Installation

Assuming you have node installed, you can just run
```console
npm i
```
to install all dependencies.

## Usage

To start a simple web server with hot reload, enter
```console
npm start
```
Next, visit [http://localhost:8080](http://localhost:8080) to view the outcome (I've added a horizontal bar chart for testing).

Note that the hot reload only applies to the typescript files. Any changes made to `index.html` or one of the css style files requires a manual reload in the browser.
Pull request to get hot reloading for these files are welcomed!

In `src/app.ts`, the function `createChart` is called when the document is loaded. Here you should add your d3 test code.

