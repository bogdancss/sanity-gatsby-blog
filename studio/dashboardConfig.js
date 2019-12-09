export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5deeb92792734586c7d834b5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tscfapx3',
                  apiId: '94898678-504b-4bc7-96e6-d9981b4cd61d'
                },
                {
                  buildHookId: '5deeb9277045480181678c45',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mkgtw79o',
                  apiId: 'b25c5e6b-74b1-482a-a503-eabbfbff22be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bogdancss/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mkgtw79o.netlify.com', category: 'apps'}
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
