<template>
    <div>
  <div :xxl="6" :xl="item.size !== 'large' ? 8 : 16" :lg="item.size !== 'large' ? 8 : 16"
       :md="item.size !== 'large' ? 12 : 24" :sm="12" :xs="24" v-if="item.type !== 'btns'" class="search-item">
    <div class="item-label">
      {{ item.label }}
    </div>
    <Input v-if="item.type == 'input'" v-model="item.value" :placeholder="item.placeholder || '请填写' + item.label"
           @on-enter="search"/>
    <Select v-if="item.type == 'select'" v-model="item.value" :placeholder="item.placeholder || '请选择' + item.label"
            clearable>
      <Option v-for="(sitem, sindex) in selectItems" :key="sindex + sitem.value" :value="sitem.value">
        {{ sitem.label }}
      </Option>
    </Select>
    <DatePicker v-if="item.type == 'datePicker'" :type="item.pickerType"
                :placeholder="item.placeholder || '请选择' + item.label" :format="item.format" @on-change="timeFormat"
                :editable="false" format="yyyy-MM-dd"></DatePicker>
    </div>
    <div v-else :xxl="6" :xl="8" :lg="8" :md="12" :sm="12" :xs="24" class="btns">
        <Button @click="search" type="info" class="ea-info-btn">查询</Button>
        <Button @click="reset" type="warning">重置</Button>
        <Button @click="open">{{ allShow ? "收起" : "展开" }}
        <Icon type="ios-arrow-down" v-if="!allShow"/>
        <Icon type="ios-arrow-up" v-else/>
        </Button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectItems: [],
      };
    },
    watch: {
      item: {
        handler(nv) {
          if (nv.selectItems) {
            this.selectItems = nv.selectItems
          }
          this.$emit("event");
        },
        deep: true
      }
    },
    props: ["item", "allShow"],
    created() {
      if (this.item.selectItems) {
        this.selectItems = this.item.selectItems;
      }
    },
    methods: {
      timeFormat(item) {
        this.item.value = item;
        this.$emit("event");
      },
      open() {
        this.$emit("open");
      },
      reset() {
        this.$emit("reset");
      },
      search() {
        this.$emit("search");
      }
    }
  };
</script>
<style scoped lang="less">
  .ivu-input {
    height: 30px;
    flex: 1;
  }

  .ivu-select {
    height: 30px;
    flex: 1;
  }

  .ivu-select-selection {
    height: 30px;
  }

  .ivu-btn {
    height: 30px;
  }

  .ivu-date-picker {
    flex: 1;
  }

  .item-label {
    line-height: 30px;
    padding-right: 20px;
    text-align: right;
    min-width: 116px;
  }

  .search-item,
  .btns {
    display: flex;
    margin: 10px 0;
  }

  .btns {
    button {
      margin-left: 10px;
    }
  }
</style>
