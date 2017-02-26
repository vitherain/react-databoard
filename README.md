# react databoard

Get the AMD module located at `react-databoard.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactDataboard': 'react-databoard'
  }
});

require(['react', 'ReactDataboard'], function(React, ReactDataboard) {

  React.render(React.createElement(ReactDataboard), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
