module.exports = {
  prompts: {
    "name": {
      "type": "input",
      "required": true,
      "label": "项目名称"
    },
    "packageName": {
      "type": "input",
      "required": true,
      "label": "打包文件的名称"
    },
    "description": {
      "type": "input",
      "required": true,
      "label": "项目描述",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "input",
      "label": "作者"
    },
    "isHybrid": {
      "type": "confirm",
      "label": "是否是 Hybrid 应用"
    },
    "useNativeHeader": {
      "type": "confirm",
      "label": "是否隐藏原生页头"
    }
  },
  filters: {
    "config.xml": "useNativeHeader"
  }
}
