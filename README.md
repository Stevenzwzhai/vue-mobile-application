# vue-mobile-application

> vue-component

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
use vue2.0,vue-router2.0,axios,mint-ui2.0

如果项目报错：DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56 parseQuery() will be replaced with getOptions() in the next major version of loader-utils.这个是node的错误提醒，关掉就好了，在webpack配置文件中设置process.noDeprecation=true即可。可参考https://github.com/vuejs/vue-loader/issues/666
#### 打包问题
最近使用mint-ui打包发现总是会提示mint-ui中的es6语法无法在uglify下编译通过，这里建议在webpack配置babel-loader的时候加上mint-ui，两种情况，如果mint-ui没有带版本号的包_mint-ui@2.2.10之类的，还有一个mint-ui包，你需要把带版本号的包加在babel-loader配置中（其实是mint-ui包依赖的具体版本好，如果没有则直接下载的对应版本），否则就直接加上mint-ui包即可（最好是直接把src和package目录直接加进去即可）。
