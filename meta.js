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
      "default": "A Wisedu Mobile App"
    },
    "author": {
      "type": "input",
      "label": "作者"
    },
    "useNativeHeader": {
      "type": "confirm",
      "label": "是否隐藏原生页头"
    }
  }
}
