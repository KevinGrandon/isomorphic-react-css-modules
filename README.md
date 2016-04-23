# Isomorphic CSS Modules & React

This is an example repo of using isomorphic CSS modules and react. The goal of this project is a proof of concept for shipping down the minimum set of markup and CSS for the first render. This should create the fastest possible user perceived performance of a react application.

## Server support for CSS modules

This is typically the hardest piece to get working, and there's a few different ways that you can do this. One option is to webpack the entire server code, and use the css loader as you would in the client. In this repo we've gone ahead and used the babel-plugin-webpack-loaders module which allows us to use webpack loaders in babel. You can see the definition of this module in .babelrc.

## Outputting initial CSS

Once you have CSS modules parsing correctly on the server, you still need to output the intial CSS content to the page. One way of doing this is by using the ExtractTextPlugin webpack plugin. For example in webpack.node.config.js:

```
  new ExtractTextPlugin('./css/bundle.css')
```

This generates a css file at dist/css/bundle.css.
