# Orionjs Google Tag Manager

Adds Google Tag Manager to Orionjs using the config settings.

```sh
$ meteor add rwatts:orionjs-gtm
```

This package adds the google tagmanager script and noscript tags to the body of every route. This ensures that the required code is always available and always the first item in the body tag.

To handle single page applications or url fragments such as `mydomain.com/#hello` follow the *Single Page Instructions* below to configure your GTM Account.

## Instructions
1. Add your `GTM Container ID` via the admin panel under the `config` tab.
2. Add your tags in google tag manager.

## Single Page Instructions
The purpose of Google Tag Manager is having the ability to plug tag manager into your application and easily integrate your tracking or tags. 

Rather than dealing with `iron-router` logic to track page views the simplest solution for single page applications is to monitor the history state of the url. 

1. Setup your standard PageView tag using the `uaid` for your google analytics account.
2. Instead of firing PageView on `All Pages` we will create a trigger called `pageView`.
3. Set the event type to `History Change` instead of `Page View`. This will always happen even if you navigate to a hash on the same page or change the view of your application.
4. In your PageView tag add a `Fields to Set` property with `Field Name` location and `Value` `{{fullPagePath}}`. I know we haven't created this variable yet.
5. Select New Variable and create a Custom Javascript Function that returns the following. 
```js
function () {
	return window.location.href;
}
```

This will grab the actual location of the current view even though the page doesn't reload.
6. Save and publish your container.

> This package was created by Orion Core Contributor Ryan Watts (rwatts)