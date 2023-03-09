<template>
  <div>
    <easyapi-search-area :items="test" @search="search"></easyapi-search-area>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      result: [],
      test: [
        {
          key: 'printTime',
          label: '测试1',
          pickerType: 'daterange',
          show: true,
          type: 'datePicker',
          size: 'large',
        },
        {
          key: 'purchaserName2',
          label: '测试2',
          show: true,
          type: 'input',
        },
        {
          key: 'purchaserName3',
          label: '测试3',
          show: true,
          type: 'input',
        },
        {
          key: 'purchaserName4',
          label: '测试4',
          show: true,
          type: 'input',
        },
        {
          key: 'purchaserName5',
          label: '测试5',
          show: true,
          type: 'input',
        },
        {
          key: 'category',
          label: '测试三',
          selectItems: [
            {
              label: '选项一',
              value: '选项一',
            },
            {
              label: '选项二',
              value: '选项二',
            },
          ],
          show: true,
          type: 'select',
        },
      ],
    }
  },
  methods: {
    search(obj) {
      console.log(obj, '返回参数')
    },
  },
  mounted: function () {},
}
</script>

<style>
</style>