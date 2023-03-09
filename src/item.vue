<template>
  <!-- xl:≥1920 lg:>=≥1200 md:>=≥992 sm:>=≥768 xs:<768 -->
  <el-col
    :xl="4"
    :lg="6"
    :md="8"
    :sm="12"
    :xs="24"
    v-if="item.type !== 'buttons' && item.show"
    class="search-item"
  >
    <el-form size="small" @submit.native.prevent @keyup.enter.native="search()">
      <el-form-item :label="item.label" label-width="100px" size="mini">
        <el-input
          v-if="item.type === 'input'"
          style="width: 100%"
          v-model="item.value"
          :placeholder="item.placeholder || '请填写' + item.label"
          clearable
        ></el-input>
        <el-select
          v-if="item.type === 'select'"
          style="width: 100%"
          v-model="item.value"
          :placeholder="item.placeholder || '请选择' + item.label"
          clearable
        >
          <el-option
            v-for="(sitem, sindex) in item.selectItems"
            :key="sindex"
            :value="sitem.value"
            :label="sitem.label"
          />
        </el-select>
        <el-date-picker
          style="width: 100%"
          v-if="item.type === 'datePicker'"
          v-model="item.value"
          :type="item.pickerType"
          :placeholder="item.placeholder || '请选择' + item.label"
          @on-change="timeFormat"
          :editable="false"
          value-format="yyyy-MM-dd"
          clearable
        ></el-date-picker>
      </el-form-item>
    </el-form>
  </el-col>

  <el-col v-else :xl="4" :lg="6" :md="8" :sm="12" :xs="24" class="buttons">
    <el-button @click="search" type="primary" size="small">查询</el-button>
    <el-button @click="reset" type="warning" size="small">重置</el-button>
    <el-button @click="open" size="small" v-if="ifShow"
      >{{ allShow ? '收起' : '展开' }}
      <i class="el-icon-arrow-down" v-if="!allShow" />
      <i class="el-icon-arrow-up" v-else />
    </el-button>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      selectItems: [],
    }
  },
  watch: {
    item: {
      handler(nv) {
        this.$emit('event', nv)
      },
      deep: true,
    },
  },
  props: ['item', 'allShow', 'ifShow'],

  created() {
    if (this.item.items) {
      this.items = this.item.items
    }
  },
  methods: {
    timeFormat(item) {
      this.item.value = item
      this.$emit('event')
    },
    open() {
      this.$emit('open')
    },
    reset() {
      this.$emit('reset')
    },
    search() {
      this.$emit('search')
    },
  },
}
</script>
<style scoped>
</style>
