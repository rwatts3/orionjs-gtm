Package.describe({
  name: 'rwatts:orionjs-gtm',
  summary: 'Google Tag Manager using Orion config.',
  version: '0.0.4',
  git: 'https://gitlab.com/rwatts-meteor-packages/orionjs-gtm/'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
      'meteor-platform',
	  'iron:router@1.0.12', 
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
