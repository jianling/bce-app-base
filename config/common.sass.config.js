
module.exports = {

  file: './src/common/common.scss',

  outFile: './www/lib/lib.css',

  /**
   * sourceMap: If source map should be built or not.
   */
  sourceMap: false,

  /**
   * outputStyle: How node-sass should output the css file.
   */
  outputStyle: 'expanded',

  /**
   * autoprefixer: The config options for autoprefixer.
   * Excluding this config will skip applying autoprefixer.
   * https://www.npmjs.com/package/autoprefixer
   */
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'iOS >= 8',
      'Android >= 4.4',
      'Explorer >= 11',
      'ExplorerMobile >= 11'
    ],
    cascade: false
  },

  /**
   * includePaths: Used by node-sass for additional
   * paths to search for sass imports by just name.
   */
  includePaths: [
    'node_modules/ionic-angular/themes',
    'node_modules/ionic-angular/components',
    'node_modules/ionic-angular/platform',
    'node_modules/ionicons/dist/scss',
    'node_modules/bce-iconfont/scss'
  ]

};
