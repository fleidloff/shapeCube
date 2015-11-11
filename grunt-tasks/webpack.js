module.exports = {
  dist: {
    entry: "./src/ts.js",
    output: {
        path: "dist/",
        filename: "ts.js",
    },
    module: {
        loaders: [
            {
                loader: "babel?presets[]=es2015"
            }
        ]
    }
  }
};
