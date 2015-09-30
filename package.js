Package.describe({
  name: 'rwatts:orionjs-gtm',
  summary: 'Google Tag Manager using Orion config.',
  version: '0.0.1',
  git: 'https://github.com/rwatts3/orionjs-gtm'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
      'meteor-platform', 
      'orionjs:config@1.5.0'
  ]);
  
  api.use([
      'templating'
  ],  'client');
  
  api.addFiles('config.js');

  api.addFiles([
      'gtm.js',
      'gtm.html'
  ], 'client');

});

Package.onTest(function(api) {
});
