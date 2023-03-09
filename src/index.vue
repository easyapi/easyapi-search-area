<template>
  <div
    :class="allShow ? 'search-area all-show' : 'search-area'"
    id="searchArea"
  >
    <el-row :gutter="20">
      <Item
        v-for="(item, index) in parameterList"
        :key="index + (item.label || 'a')"
        :item="item"
        v-show="item.show"
        :allShow="allShow"
        :ifShow="ifShow"
        @event="event"
        @open="open"
        @search="search"
        @reset="reset"
        :ref="item.key"
      />
    </el-row>
  </div>
</template>

<script>
import Item from './item.vue'

export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      innerWidth: null,
      allShow: false,
      ifShow: false,
      buttons: {
        type: 'buttons',
      },
      parameterList: [],
      searchWidth: '',
    }
  },
  components: { Item },
  created() {},
  mounted() {
    window.onresize = this.windowResize
    this.searchWidth = document.getElementById('searchArea').offsetWidth
    this.setItems()
  },
  methods: {
    windowResize(e) {
      this.searchWidth = document.getElementById('searchArea').offsetWidth
      this.setItems()
    },

    search() {
      let obj = {}
      this.items.map((item) => {
        if (item.value) {
          obj[item.key] = item.value
        }
      })
      this.$emit('search', obj)
    },

    reset() {
      let items = this.parameterList
      let doms = []
      items.map((item) => {
        if (item.key) {
          let dom = this.$refs[item.key]
          doms.push(dom)
        }
      })
      doms.map((item) => {
        let dom = item[0].$children[0].$children[0]
        if (dom.handleClear) {
          dom.handleClear()
        } else if (dom.reset) {
          dom.reset()
        }
      })
      items.forEach((item) => {
        item.value = null
      })
      this.parameterList = items
    },

    open() {
      this.allShow = !this.allShow
      this.setItems()
    },

    event(row) {
      let obj = {}
      this.items.map((item) => {
        if (item.key === row.key) {
          obj[item.key] = row.value
          item.value = row.value
        }
      })
      this.$emit('event', obj)
    },

    setItems() {
      let arr = []
      if (this.allShow) {
        arr = JSON.parse(JSON.stringify(this.items))
        arr.push({ type: 'buttons', show: true })
        this.parameterList = arr
        return
      }
      if (this.searchWidth >= 1920) {
        this.items.forEach((item, index) => {
          if (index < 5) {
            arr.push(item)
          }
        })
        if (this.items.length > 5) {
          this.ifShow = true
        } else {
          this.ifShow = false
        }
      }
      if (this.searchWidth < 1920 && this.searchWidth >= 1200) {
        this.items.forEach((item, index) => {
          if (index < 3) {
            arr.push(item)
          }
        })
        if (this.items.length > 3) {
          this.ifShow = true
        } else {
          this.ifShow = false
        }
      }
      if (this.searchWidth < 1200 && this.searchWidth >= 992) {
        this.items.forEach((item, index) => {
          if (index < 2) {
            arr.push(item)
          }
        })
        if (this.items.length > 2) {
          this.ifShow = true
        } else {
          this.ifShow = false
        }
      }
      if (this.searchWidth < 992) {
        this.items.forEach((item, index) => {
          if (index < 1) {
            arr.push(item)
          }
        })
        if (this.items.length > 1) {
          this.ifShow = true
        } else {
          this.ifShow = false
        }
      }

      arr.push({ type: 'buttons', show: true })
      this.parameterList = arr
    },
  },
}
</script>

<style scoped>
.search-area {
  background-color: #fff;
  background-clip: border-box;
  box-sizing: border-box;
  padding: 10px 20px;
  animation: all 1s linear;
}
.search-area .search-col {
  margin: 10px 0;
}

.search-area .all-show {
  height: auto;
}

.search-area .form-label {
  line-height: 30px;
  text-align: right;
  padding-right: 8px;
}
</style>
