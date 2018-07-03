/**
 * Este es el archivo configuramos los servicios que WebPack va a ejecutar en nuestra aplicación
 */


 /**
  * Declaramos variables del tipo constante que representan los valores que necesitaremos dentro de module.exports
  */
 const path = require('path');
 const webpack = require('webpack');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
 
 /**
  * module.exports se iguala a un objeto en el que vamos a declarar las propiedades y valores que WebPack necesita para ejecutar los servicios que neesitamos
  */
 
 module.exports = {
     entry: {
         app: './js/main.js',
     },
     output: {
         filename: './dist//build/main.bundle.js',
         path: path.resolve(__dirname, 'dist')
     },
     devServer: {
         contentBase: path.join(__dirname, 'dist'),
         port: 9000
       },
     mode: 'development',
     module: {
         rules: [
             {
                test: /\.js$/, 
                use: 'babel-loader', 
                exclude: /node_modules/
             },
 
             {
                 test: /\.css$/,
                 use: [
                   {
                     loader: MiniCssExtractPlugin.loader,
                   },
                   "css-loader"
                 ]
               }
         ]
     },
 
 
     plugins: [
         new HtmlWebpackPlugin({
             title: 'Development',
             template: 'index.html'
         }),
         new MiniCssExtractPlugin({
             filename: "./css/styles.css",
           })
 
     ]
 
 
 }
 
 
 /**
  * Conceptos para revisar de este archivo 
  * 1-Const
  * 2-Require
  * 3-HtmlWebpackPlugin
  * 4-MiniCssExtractPlugin
  */
 