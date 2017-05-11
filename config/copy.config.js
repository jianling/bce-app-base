
// https://www.npmjs.com/package/fs-extra

module.exports = {
  include: [
    {
      src: '{{SRC}}/assets/',
      dest: '{{BUILD}}/assets/'
    },
    {
      src: '{{SRC}}/index.html',
      dest: '{{BUILD}}/index.html'
    },
    {
      src: '{{SRC}}/manifest.json',
      dest: '{{WWW}}/manifest.json'
    },
    {
      src: '{{SRC}}/service-worker.js',
      dest: '{{WWW}}/service-worker.js'
    },
    {
      src: 'node_modules/ionic-angular/polyfills/polyfills.js',
      dest: '{{WWW}}/lib/polyfills.js'
    },
    {
      src: 'node_modules/ionicons/dist/fonts/',
      dest: '{{WWW}}/assets/fonts/'
    },
    {
      src: 'node_modules/bce-iconfont/font/',
      dest: '{{WWW}}/assets/fonts/'
    }
  ]
};
