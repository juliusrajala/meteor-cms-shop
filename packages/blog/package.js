Package.describe({
  name: 'jijraj:blog',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  api.use('iron:router@1.0.12');

  api.use('orionjs:core@1.7.0');
  api.use('orionjs:relationships@1.7.0');
  api.use('orionjs:summernote@1.7.0');

  api.use('twbs:bootstrap@3.3.6');
  api.use('fortawesome:fontawesome@4.5.0');
  api.use('orionjs:bootstrap@1.6.0');

  api.use('jijraj:core');

  api.addFiles('blog.js');
  api.addFiles('configurations.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jijraj:blog');
  api.addFiles('blog-tests.js');
});
