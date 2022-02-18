import Vue from 'vue'
import SearchArea from './index.vue'
import PackageFile from '../package.json'
import "element-ui/lib/theme-chalk/index.css";
import Element from "element-ui";

Vue.use(Element);

const VERSION = PackageFile.version

const install = (Vue) => {
  if (install.installed) return
  Vue.component('easyapi-search-area', SearchArea)
}

export default install

export const components = {
  SearchArea,
  VERSION
}
