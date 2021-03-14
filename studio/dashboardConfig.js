export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604e3544c49ff7d85f0e3b23',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-624oivhy',
                  apiId: 'b02a2c7a-2364-4bf2-854e-a46636eab265'
                },
                {
                  buildHookId: '604e3544294defecec36b19a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-az8j7x7d',
                  apiId: '50f16391-d2a0-49c4-9531-5f5e66e3dc00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ercekal/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-az8j7x7d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
