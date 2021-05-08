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
                  buildHookId: '6095f76a2514875d58856cc3',
                  title: 'Sanity Studio',
                  name: 'sanity-geo-9-studio',
                  apiId: '4c957d03-3f78-4670-894b-0b74c71ca557'
                },
                {
                  buildHookId: '6095f76a300c42792556a8a0',
                  title: 'Blog Website',
                  name: 'sanity-geo-9',
                  apiId: '2348f14b-208c-4634-83a4-7724ed3c3b8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mirulnasir/sanity-geo9',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-geo-9.netlify.app', category: 'apps'}
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
