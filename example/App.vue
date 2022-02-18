<template>
  <div>
    <easyapi-search-area :items="test"></easyapi-search-area>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function () {
    return {
      result: [],
      test: [
        {
          key: "printTime",
          label: "测试1",
          pickerType: "daterange",
          show: true,
          type: "datePicker",
        },
        {
          key: "purchaserName",
          label: "测试2",
          show: true,
          type: "input",
        },
        {
          key: "category",
          label: "测试三",
          selectItems: [
            {
              label: "选项一",
              value: "选项一",
            },
            {
              label: "选项二",
              value: "选项二",
            },
          ],
          show: false,
          type: "select",
        },
      ],
    };
  },
  methods: {},
  mounted: function () {
  },
};
</script>

<style>
</style>