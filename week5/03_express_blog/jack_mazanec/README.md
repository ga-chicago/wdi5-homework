# Gulp Boilerplate

> Simple Express app used to teach Gulp and why it's useful

This gulp boilerplate uses a simple, single-route Express application in order to show what task runners are useful for while also teaching the gulp API.

## Installation and setup

Because this is meant for students we want to keep this as simple as possible. Let's start with system requirements:

- Node.js 5.0+ (nvm usage is preferred)
- Gulp (task runner)
- Bower (front-end package manager)

Before you begin you'll need to install the global dependencies. Run these commands to set yourself up for success:

```
npm install -g gulp-cli bower
```

### Installation

Just run `npm install && bower install` and you'll be good to go. 

Create a `.nvmrc` file with your preferred Node version

## Usage

The code comes working by default so the idea is to recreate the `gulpfile` and tasks either by copying this project verbatim or use parts of this project's `gulpfile.js` within another lesson's `gulpfile.js`.

The project comes with 3 main gulp tasks:

1. `server` - Starts a local server
2. `less` - Compiles LESS files to CSS
3. `jshint` - Runs JSHint on all JavaScript files
4. `watch` - Watches all static assets for changes and runs one of the above tasks based on file type

The default task runs `watch` and `server` consecutively. This will leave you with a web server that automatically transpiles and lints your code. To use the default task simply run `gulp`.
