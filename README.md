[![npm version](https://img.shields.io/npm/v/react-tfractal.svg?style=flat-square)](https://www.npmjs.com/package/react-tfractal) [![Build Status](https://img.shields.io/travis/aush/react-tfractal.svg?style=flat-square)](https://travis-ci.org/aush/react-tfractal) [![Dependency Status](https://img.shields.io/david/aush/react-tfractal.svg?style=flat-square)](https://david-dm.org/aush/react-tfractal) [![devDependency Status](https://img.shields.io/david/dev/aush/react-tfractal.svg?style=flat-square)](https://david-dm.org/aush/react-tfractal#info=devDependencies) [![Coverage Status](https://img.shields.io/coveralls/aush/react-tfractal.svg?style=flat-square)](https://coveralls.io/github/aush/react-tfractal?branch=master) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/aush/react-tfractal/master/LICENSE)

# React T-Fractal
React component for displaying t-fractals
###Install
`npm install --save react-tfractal`

Don't forget to manually install React^0.14 (peer dependency) if you're using npm@3.
###Use
#####ES6
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Tfractal from 'react-tfractal';

const configuration = {
  colorMap: [
    ['#E91E63', '#FFFFFF', '#FFFFFF'],
    ['#FFFFFF', '#FFFFFF', '#E91E63'],
    ['#FFFFFF', '#E91E63', '#FFFFFF'],
  ],
  cellSize: 8,
  layers: 4,
  background: '#FFFFFF',
  opacity: 0.5,
};

ReactDOM.render(
  <Tfractal
    {...configuration}
    style={{ width: 300, height: 200 }}
  />,
  document.getElementById('app')
);
```
#####ES5
```javascript
var Tfractal = require('react-tfractal');
...
```
#####Good old 1998 Script Tag:
The component depends on React ^0.14 (a introduction of stateless components), so if you're using it without a build step, React ^0.14 must be present as a global.
````html
<script src="https://npmcdn.com/react@^0.14/dist/react.min.js"></script>
<script src="https://npmcdn.com/react-dom@^0.14/dist/react-dom.min.js"></script>
<script src="https://npmcdn.com/react-tfractal"></script>
````
###API
Check [tests](/test/tfractal.spec.js).
###Codepen example
http://codepen.io/aush/pen/QyojOb
