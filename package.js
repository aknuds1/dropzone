Package.describe({
  summary: 'DropzoneJS.',
  version: '4.0.0',
  git: 'https://github.com/enyo/dropzone',
  name: 'aknudsen:dropzone'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use('coffeescript');
  api.use('fourseven:scss@3.1.1');
  api.addFiles([
      'src/basic.scss',
      'src/dropzone.scss',
      'src/dropzone.coffee',
    ], 'client');
  api.export('Dropzone', 'client');
});
