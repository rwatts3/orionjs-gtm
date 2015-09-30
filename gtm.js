Meteor.startup(function () {
  
  Template.GTM.helpers({ 
      getGTMId: function(){ 
           return orion.config.get('GTM_CONTAINER_ID');
      },
      gtmIsDefined: function () {
          return typeof orion.config.get('GTM_CONTAINER_ID') !== 'undefined'|| '';
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

