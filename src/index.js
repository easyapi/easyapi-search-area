import Vue from 'vue'
import HeadSearch from './HeadSearch.vue'
import PackageFile from '../package.json'

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