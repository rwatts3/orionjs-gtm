Meteor.startup(function () {
  
  Template.GTM.helpers({ 
      getGTMId: function(){ 
           return orion.config.get('GTM_CONTAINER_ID');
      },
    //TODO need to refactor this better.
	//   gtmIsDefined: function () {
    //       return !orion.config.get('GTM_CONTAINER_ID') === '';
    //   },
	  getDataLayer: function () {
		  return orion.config.get('GTM_DATALAYER', 'dataLayer');
	  }
  }); 
    
  if(Meteor.isServer){
      if (typeof BrowserPolicy === 'undefined') { return; }
      BrowserPolicy.content.allowScriptOrigin('www.googletagmanager.com');
      BrowserPolicy.content.allowFrameOrigin('www.googletagmanager.com');
      BrowserPolicy.content.allowOriginForAll('tagmanager.google.com');
      BrowserPolicy.content.allowEval();
  }
});

if (Meteor.isClient) {
	//Manually Push Page Views
	Router.configure({
		onRun: function () {
			var dl = orion.config.get('GTM_DATALAYER', 'dataLayer');
			var dataLayer = window[dl];
			dataLayer.push({
				'event': 'VirtualPageView',
				'virtualPageUrl': window.location.pathname,
				'virtualPageTitle': document.title
			});
			this.next();
		}
	});
}

