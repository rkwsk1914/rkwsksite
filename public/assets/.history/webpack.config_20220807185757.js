const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { ProvidePlugin } = require('webpack')

// const Es3ifyPlugin = require('es3ify-webpack-plugin')

module.exports = (env, argument) => {
  // console.log(env)
  // console.log(argument)
  const MODE = /development|production/.test(argument.mode) ? argument.mode : 'production' // 'production' か 'development' を指定
  const enabledSourceMap = MODE === 'production' // ソースマップの利用有無(productionのときはソースマップを利用しない)
  const browserslist = [
    'IE 11',
    'ios >= 8',
    'edge >= 16',
    'safari >= 9',
    'firefox >= 57',
    'chrome >= 49',
    'android >= 4.2'
  ]
  const postcssConfig = {
    sourceMap: enabledSourceMap, // PostCSS側でもソースマップを有効にする
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')({
          overrideBrowserslist: browserslist,
          grid: true
        })
      ]
    }
  }
  const baberic = {
    presets: [
      ['@babel/preset-env',
      {
        useBuiltIns: "entry",
        corejs: 3,
      }],
      '@babel/preset-react',
      '@babel/typescript'
    ]
  }

  const pageCategory = 'category/work'

  // JavaScriptの出力ファイル（★）をカレントディレクトリとして設定
  //const distStyle = `./../../../${pageCategory}/css/shared/substyle.min.css`
  const distStyle = `./../../../../${pageCategory}/css/shared/substyle.min.css`

  const CONFIG = {
    mode: MODE,
    entry: `./src/${pageCategory}/index.js`,
    output: {
      path: `${__dirname}/${pageCategory}/js/shared`, //  出力ファイルのディレクトリ名（★）
      filename: 'index.min.js' // 出力ファイル名
    },
    module: {
      rules: [
        { // Sassファイルの読み込みとコンパイル
          test: /\.s(a|c)ss$/, // 対象となるファイルの拡張子
          use: [
            // "style-loader", // linkタグに出力する機能
            { // CSSファイルを書き出すオプションを有効にする
              loader: MiniCssExtractPlugin.loader
            },
            { // CSSをバンドルするための機能
              loader: 'css-loader',
              options: {
                url: false, // オプションでCSS内のurl()メソッドの取り込みを禁止する
                sourceMap: enabledSourceMap, // ソースマップの利用有無
                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                importLoaders: 2
              }
            },
            { // PostCSSのための設定
              loader: 'postcss-loader',
              options: postcssConfig
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: enabledSourceMap // ソースマップの利用有無
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            // 'style-loader',
            { // CSSファイルを書き出すオプションを有効にする
              loader: MiniCssExtractPlugin.loader
            },
            // 'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false, // オプションでCSS内のurl()メソッドの取り込みを禁止する
                sourceMap: enabledSourceMap // ソースマップを有効にする
              }
            },
            { // PostCSSのための設定
              loader: 'postcss-loader',
              options: postcssConfig
            }
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        { // 拡張子 .js もしくは .jsx の場合
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader', // Babel を利用する
              options: baberic
            }
          ]
        },
        { // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader', // Babel を利用する
              options: baberic
            },
            'ts-loader' // TypeScript をコンパイルする
          ]
        },
        { // 対象となるファイルの拡張子
          test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/, // 画像をBase64として取り込む
          type: 'asset/inline',
          // type: "asset/resource", // 画像を埋め込まず任意のフォルダに保存する
          parser: {
            dataUrlCondition: {
              maxSize: 100 * 1024 // 100KB以上だったら埋め込まずファイルとして分離する
            }
          }
        }
      ]
    },
    // import 文で .ts ファイルを解決するため
    // これを定義しないと import 文で拡張子を書く必要が生まれる。
    // フロントエンドの開発では拡張子を省略することが多いので、
    // 記載したほうがトラブルに巻き込まれにくい。
    resolve: {
      alias: { // Webpackで利用するときの設定
        // vue$: 'vue/dist/vue.esm.js',
        vue: 'vue/dist/vue.js'
      },
      extensions: ['*', '.ts', '.js', '.tsx', '.jsx', '.vue', '.json'] // 拡張子を配列で指定
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: distStyle
      }),
      new VueLoaderPlugin(), // Vueを読み込めるようにするため
      new ESLintPlugin({
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.vue'],
        fix: true,
        failOnError: true,
        quiet: true
      }),
      new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            output: { comments: MODE !== 'production' },
            compress: { drop_console: MODE === 'production' }
          }
        }),
        new CssMinimizerPlugin()
      ]
    },
    target: ['web', 'es5'] // ES5(IE11等)向けの指定
  }

  return CONFIG
}
