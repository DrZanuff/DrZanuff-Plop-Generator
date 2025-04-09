const path = require('path')

module.exports = function (plop) {
  const templatesRoot = path.resolve(__dirname)

  plop.setGenerator('component', {
    description: 'Gerador de Componentes React',
    prompts: [
      {
        type: 'rawlist',
        name: 'framework',
        message: 'React ou React Native?',
        choices: ['React', 'React Native'],
        filter(val) {
          return val == 'React Native' ? 'native' : 'react'
        },
      },
      {
        type: 'rawlist',
        name: 'language',
        message: 'Typescript ou Javascript?',
        choices: ['Typescript', 'Javascript'],
        filter(val) {
          return val == 'Typescript' ? 'ts' : 'js'
        },
      },
      {
        type: 'rawlist',
        name: 'styles',
        message: 'Estilo: Styled-Components, CSS ou CSS Modules?',
        choices: ['Styled-Components', 'CSS', 'CSS Modules'],
        filter(val) {
          if (val === 'Styled-Components') return 'styled'
          if (val === 'CSS') return 'css'
          return 'cssModule'
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'Nome do Componente',
      },
    ],
    actions: function (data) {
      const actions = []

      actions.push({
        type: 'add',
        path: `./src/components/{{name}}/index.{{language}}x`,
        templateFile: path.join(
          templatesRoot,
          '{{framework}}/component-index-template.hbs'
        ),
      })

      if (data.styles === 'styled') {
        actions.push({
          type: 'add',
          path: `./src/components/{{name}}/{{name}}.{{language}}x`,
          templateFile: path.join(
            templatesRoot,
            '{{framework}}/component-name-template-{{language}}.hbs'
          ),
        })
        actions.push({
          type: 'add',
          path: `./src/components/{{name}}/{{name}}.styles.{{language}}x`,
          templateFile: path.join(
            templatesRoot,
            '{{framework}}/component-styles-template.hbs'
          ),
        })
      } else if (data.styles === 'cssModule') {
        actions.push({
          type: 'add',
          path: `./src/components/{{name}}/{{name}}.{{language}}x`,
          templateFile: path.join(
            templatesRoot,
            'react/component-name-template-{{language}}-cssmodule.hbs'
          ),
        })
        actions.push({
          type: 'add',
          path: `./src/components/{{name}}/{{name}}-styles.module.css`,
          templateFile: path.join(
            templatesRoot,
            'react/component-styles-template-cssmodule.hbs'
          ),
        })
      } else {
        actions.push({
          type: 'add',
          path: `./src/components/{{name}}/{{name}}.{{language}}x`,
          templateFile: path.join(
            templatesRoot,
            '{{framework}}/component-name-template-{{language}}-css.hbs'
          ),
        })
        actions.push({
          type: 'add',
          path: `./src/components/{{name}}/{{name}}-styles.css`,
          templateFile: path.join(
            templatesRoot,
            '{{framework}}/component-styles-template-css.hbs'
          ),
        })
      }

      if (data.language === 'ts') {
        actions.push({
          type: 'add',
          path: `./src/components/{{name}}/{{name}}.types.{{language}}x`,
          templateFile: path.join(
            templatesRoot,
            '{{framework}}/component-types-template.hbs'
          ),
        })
      }

      return actions
    },
  })
}
