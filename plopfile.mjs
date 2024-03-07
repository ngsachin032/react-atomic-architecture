const abortOnFail = false

export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name'
      }
    ],
    actions: [
      function (data) {
        data.path = data.name
        data.name = data.name.split('/').pop()
        return data
      },
      {
        type: 'add',
        abortOnFail,
        path: 'src/components/{{kebabCase path}}/index.ts',
        templateFile: 'scaffolds/component/index.hbs'
      },
      {
        type: 'add',
        abortOnFail,
        path: 'src/components/{{kebabCase path}}/{{kebabCase name}}.tsx',
        templateFile: 'scaffolds/component/component.hbs'
      },
      {
        type: 'add',
        abortOnFail,
        path: 'src/components/{{kebabCase path}}/types.ts',
        templateFile: 'scaffolds/component/types.hbs'
      },
      {
        type: 'add',
        abortOnFail,
        path: 'src/components/{{kebabCase path}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'scaffolds/component/storybook.hbs'
      }
    ]
  })

  plop.setGenerator('page', {
    description: 'Create a new Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name'
      }
    ],
    actions: [
      function (data) {
        return data
      },
      {
        type: 'add',
        abortOnFail,
        path: 'src/pages/{{kebabCase name}}/index.ts',
        templateFile: 'scaffolds/page/index.hbs'
      },
      {
        type: 'add',
        abortOnFail,
        path: 'src/pages/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'scaffolds/page/page.hbs'
      },
      {
        type: 'append',
        path: 'src/pages/index.ts',
        // pattern: '',
        template: "export * from './{{kebabCase name}}'"
      },
      {
        type: 'append',
        path: 'src/apps/cms-interface/cms-interface.tsx',
        pattern: '{/* Add New Routes Here */}',
        template: "          <Route path='{{kebabCase name}}' element={<{{pascalCase name}}Page />} />"
      },
      {
        type: 'append',
        path: 'src/apps/cms-interface/cms-interface.tsx',
        pattern: '// Add New Page Imports Here',
        template: '  {{pascalCase name}}Page,'
      }
    ]
  })
}
