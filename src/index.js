import Vue from 'vue'
import HeadSearch from './HeadSearch.vue'
import PackageFile from '../package.json'
import "element-ui/lib/theme-chalk/index.css";
import Element from "element-ui";

Vue.use(Element);

const VERSION = PackageFile.version

const install = (Vue) => {
  if (install.installed) return

  Vue.component('easyapi-search-area', HeadSearch)
}

export default install

export const components = {
  HeadSearch,
  VERSION
}