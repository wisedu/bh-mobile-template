module.exports = {
  prompts: {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "label": "Author"
    },
    "private": {
      "type": "boolean",
      "default": true
    }
  }
}