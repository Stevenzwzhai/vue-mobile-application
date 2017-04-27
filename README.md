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
