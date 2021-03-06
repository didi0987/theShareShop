var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


var config = {
  devtool: 'cheap-source-map',
  // entry: {
  //   app: ["./src/index.js"]   //入口js
  // },
  resolve: {
    //root: [__dirname+'/bower_components/'],
    alias: {},
    extensions: ['', '.js', '.jsx' ,'.css', '.scss', '.ejs', '.png', '.jpg']
  },
  // externals: {
  //    'react': 'React',
  //    'react-dom':'ReactDOM',
  //    'react-router':'ReactRouter'
  // },
  module:{
    loaders: [
          {
            test: /muse-ui.src.*?js$/,
            loader: 'babel'
          },
          {
            test: /\.js$/,
            loader: 'babel?presets=es2015',   //npm install -d --save-dev babel-preset-es2015
            exclude: /node_modules/
          },
          {
            test: /\.vue$/,
            loader: 'vue'
          },
          {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader!less-loader")
          },
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader")
          },
          {
              test:/.(png)|(jpg)|(gif)|(svg)$/,
              loader: 'url-loader?limit=10000&name=img/[name].[ext]'   //10k以下图片变成base64
          },
          {   test: /\.(eot|woff|ttf)$/,
              loader: "file-loader" 
          }


      ],
       noParse:[]
    },
    vue: {
      loaders: {
        css: ExtractTextPlugin.extract('vue-style-loader', 'css')
      }
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV':'"production"'
        }
      }),
      new uglifyJsPlugin({
        output:{
          comments: false
        },
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin("css_[contenthash:16].css")
      // new CopyWebpackPlugin([
      //   { from: './src/index.html', to: 'index.html' }
      // ]),
      // new HtmlWebpackPlugin({
      //   title: '分答',
      //   filename: 'src/index.html'
      // })
    ]
}

// var deps = [
//   'bower_components/reactx/react.js',
//   'bower_components/reactx/react-dom.js'
// ];

// deps.forEach(function (dep) {
//   var depPath = path.resolve(__dirname,dep);
//   // config.resolve.alias[dep.split(path.sep)[0]] = depPath;
//   config.module.noParse.push(depPath);
// });
console.log("----------good luck----------")
module.exports = config;
