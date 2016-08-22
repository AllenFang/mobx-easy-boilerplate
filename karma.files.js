// Browser ES6 Polyfill
// for Array.find()
const context = require.context('./test/spec', true, /\.test\.jsx$|\.test\.js$/);
context.keys().forEach(context);
