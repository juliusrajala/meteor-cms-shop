BlogServer.Data.Post = new orion.collection("Posts", {
  singularName: 'post',
  pluralName: 'posts',
  title: 'Posts',
  link: {
    title: 'Posts'
  },

  tabular: {
    columns: [
      { data: "title", title: "Title"},
      orion.attributeColumn('summernote', 'body', 'Content', {orderable: true}),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
      orion.attributeColumn('createdAt', 'createdAt', 'createdAt', {orderable: true})
    ]
  }
});

BlogServer.Schemas.Post = new SimpleSchema({
  title: {
    type: String
  },
  body: orion.attribute('summernote', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
});

BlogServer.Data.Post.attachSchema(BlogServer.Schemas.Post);