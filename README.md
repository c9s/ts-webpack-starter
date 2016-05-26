ts-webpack
===========================

It's always time consuming to combine all components together and make things
work well.

This project template helps you create a whole new project with out-of-the-box
features including typescript, webpack, babel settings and so on...

Just clone this repository to your disk, you can start coding from the
`entry.ts` without worring anything about config files.

## Install Tools

    sudo npm install typedoc -g
    sudo npm install typescript -g
    sudo npm install typings -g
    sudo npm install webpack -g
    sudo npm install webpack-dev-server -g


## Build

Install the dependencies

    sudo npm link typescript
    npm install
    typings install

Run webpack to build the files

    webpack

Run webpack-dev-server:

    webpack-dev-server

## Guide

### Rename all files from .js to .ts

Get `fsrename`

    go get -u -x github.com/c9s/fsrename/fsrename

Rename files:

    fsrename -replace .js -with .ts src/

### Modify your webpack target entry name

    vim webpack.config.js

Change 

```js
module.exports = {
    'entry': {
        'myproj': ['./entry'],
    }
}
```

To whatever you want.


### Start Coding

Just start coding from `entry.ts` and `src/...` without worring anything!

### Get Your Type Definition Files

Sample commands:

    typings install dt~d3 --save --global
    typings install dt~jquery --save --global
    typings install dt~mocha --save --global

### Generate typedoc

    typedoc --target es6 --out doc typings/index.d.ts src

### ts-loader + babel-loader is too slow!?

You can simply change the `target` from `es6` to `es5` in `tsconfig.json` and
remove the `babel-loader` from `webpack.config.js`.

### Advanced babelrc Config File

.babelrc

```
{
    "presets": ["es2015", "es2015-native-modules"],
    "plugins": [
        "transform-runtime",
        [
        "transform-es2015-modules-commonjs", {
            "strict": false,
            "loose": true
        }],
        "babel-plugin-transform-object-assign"
    ]
}
```


### FAQ

#### Cannot find module '...'

For example, you encountered this error message:

    Cannot find module 'object-assign'

Simply run:

    npm install object-assign --save
    typings install object-assign --save

Then re-compile, it should work.





## Author

Yo-An Lin (c9s)

